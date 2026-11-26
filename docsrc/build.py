"""Build the public, bilingual Math Gym handbook with Python 3 (standard library only)."""
import hashlib
import html
import json
import re
from urllib.parse import quote
from pathlib import Path

SOURCE = Path(__file__).resolve().parent
OUT = SOURCE.parent / "docs"
REPO = "https://github.com/Project-Formula/math-gym-lean"
TP = "problems/theorem-proving/"
EVAL = TP + "evaluation/"
GROUPS = [
    ("从这里开始", "Start here", ["index", "overview", "quickstart", "tiers", "catalogue"]),
    ("配置与运行", "Configure and run", ["model", "resources", "host", "protocol", "adapters"]),
    ("理解评测", "Understand evaluation", ["scoring", "judge", "references", "citation"]),
    ("部署与维护", "Deploy and maintain", ["maintenance", "troubleshooting"]),
    ("参与贡献", "Contribute", ["contribute", "licenses"]),
    ("依赖与环境", "Dependency details", ["dependencies"]),
]
ORDER = [slug for _, _, slugs in GROUPS for slug in slugs]
SOURCES = {
    "overview": TP+"README.md", "catalogue": EVAL+"batches/README.md",
    "model": EVAL+"model.example.json", "adapters": EVAL+"member-adapter.example.py",
    "host": EVAL+"protocol.json", "protocol": EVAL+"protocol.json",
    "judge": TP+"maintenance/core-taskpacks.md", "references": TP+"README.md",
    "citation": "README.md", "contribute": "CONTRIBUTING.md",
    "licenses": "NOTICE", "dependencies": EVAL+"environment.lock.json",
}
COMMANDS = {
    "bundle": 'BUNDLE=/absolute/path/to/lean-core20-evaluation-2h-v2\ndocker load -i "$BUNDLE/images.tar.gz"',
    "config": 'mkdir -p .runtime\ncp -n problems/theorem-proving/evaluation/model.example.json .runtime/my-model.json',
    "doctor": 'python3 -m scripts.lean_core_eval doctor --release "$BUNDLE/release" --output .runtime/tier1-doctor',
    "one": 'RUN=.runtime/core20-runs/freedman-first\npython3 -m scripts.lean_core_eval run --release "$BUNDLE/release" \\\n  --model .runtime/my-model.json --output "$RUN" \\\n  --task probability/freedman-martingale-tail',
    "grade": 'python3 -m scripts.lean_core_eval grade --release "$BUNDLE/release" \\\n  --submissions "$RUN/submissions" --output "$RUN/grading"\npython3 -m scripts.lean_core_eval collect --release "$BUNDLE/release" \\\n  --run "$RUN" --output "$RUN/summary.json"',
    "tier1": 'RUN=.runtime/core20-runs/tier1-model\npython3 -m scripts.lean_core_eval run --release "$BUNDLE/release" \\\n  --model .runtime/my-model.json --output "$RUN"',
    "next-prepare": 'python3 -m scripts.theorem_eval plan\nROUND=.runtime/theorem-proving/tier2\npython3 -m scripts.theorem_eval prepare --base "$BUNDLE/release" --output "$ROUND"\npython3 -m scripts.theorem_eval doctor --release "$ROUND" --output .runtime/tier2-doctor',
    "next-run": 'python3 -m scripts.theorem_eval run --release "$ROUND" \\\n  --model .runtime/my-model.json --name tier2-model',
    "bootstrap": 'python3 -m scripts.lean_core_eval bootstrap --release "$BUNDLE/release" \\\n  --output .runtime/core20-eval-cache',
    "bind": 'python3 -m scripts.lean_core_eval bind-cache --release "$BUNDLE/release" \\\n  --dependencies /absolute/path/to/shared/.lake/packages \\\n  --toolchain /absolute/path/to/lean-4.33.1-linux',
    "host": "python3 --version\ndocker version",
    "bib": "@misc{projectformula2026mathgym,\n  author = {{Project Formula}},\n  title  = {Math Gym: Theorem Proving},\n  year   = {2026},\n  url    = {https://project-formula.github.io/math-gym-lean-pages/}\n}",
}
esc = html.escape


def load(lang):
    pages = {}
    for line in (SOURCE / f"{lang}.md").read_text().splitlines():
        if line.startswith("# "):
            slug, title = line[2:].split(" | ", 1)
            if slug in pages:
                raise ValueError(f"Duplicate page {slug}")
            page = pages[slug] = {"title":title, "intro":"", "sections":[]}
        elif line.startswith("## "):
            anchor, heading = line[3:].split(" | ", 1)
            page["sections"].append({"id":anchor, "heading":heading, "lines":[]})
        elif line and page["sections"]:
            page["sections"][-1]["lines"].append(line)
        elif line:
            page["intro"] = line
    assert set(pages) == set(ORDER)
    return pages


def write_handbook(lang, pages, other):
    en = lang == "en"
    def tr(zh, english): return english if en else zh
    assets = "../" if en else ""
    script_version = hashlib.sha256((OUT/"docs.js").read_bytes()).hexdigest()[:10]
    home = "../../index.html" if en else "../index.html"
    dest = OUT / ("en" if en else "")
    dest.mkdir(parents=True, exist_ok=True)
    search = []
    homepage = (SOURCE.parent / "index.html").read_text()
    dataset = re.search(r'<script type="application/json" id="dataset">(.*?)</script>', homepage, re.S)
    topics = json.loads(dataset[1])["topics"]
    translations = json.loads((SOURCE/"task-titles-en.json").read_text())
    def catalogue(tier):
        items = []
        for task in topics[tier]:
            english = translations[task["id"].split("/")[-1]]
            name = tr(task["title"],english)
            href = home+"?task="+quote(task["id"],safe="")+"#tasks"
            items.append(f'<li><a href="{href}">{esc(name)}</a></li>')
            search.append({"page":tier,"title":name,"alias":task["id"]+" "+tr(english,task["title"]),
                           "text":tr(task["summary"],"Open the task and read its Lean target in the explorer."),
                           "href":href})
        return '<ul class="catalogue-list">'+"".join(items)+"</ul>"

    def url(key):
        if key.startswith("repo:"):
            return REPO+"/blob/main/"+key[5:]
        if key.startswith("home:"):
            return home+key[5:]
        if key == "release":
            return REPO+"/releases/tag/lean-core20-evaluation-2h-v2"
        if key == "issues":
            return "https://github.com/Project-Formula/math-gym-lean-pages/issues"
        slug, sep, anchor = key.partition("#")
        if slug not in pages or (sep and anchor not in {s["id"] for s in pages[slug]["sections"]}):
            raise ValueError("Unknown handbook link: "+key)
        return slug+".html"+sep+anchor

    def inline(line):
        line = esc(line)
        line = re.sub(r'\[([^\]]+)\]\(([^)]+)\)',lambda m:f'<a href="{url(m[2])}">{m[1]}</a>',line)
        return re.sub(r'`([^`]+)`',r'<code>\1</code>',line)

    def card(slug, index):
        item = pages[slug]
        label = tr(["运行评测","理解分数","贡献题目"][index],["Run an evaluation","Understand the scores","Contribute a task"][index])
        return f'<a class="start-card" href="{url(slug)}"><strong>{label}</strong><span>{esc(item["intro"])}</span><b>{esc(item["title"])} →</b></a>'

    def section_body(lines):
        out = []
        in_list = False
        for line in lines:
            if line.startswith("- "):
                if not in_list: out.append("<ul>")
                in_list = True
                out.append("<li>"+inline(line[2:])+"</li>")
                continue
            if in_list: out.append("</ul>")
            in_list = False
            if line.startswith("!code "):
                text = COMMANDS[line[6:]]
                language = "BibTeX" if line[6:] == "bib" else "Shell"
                out.append(f'<div class="codebox"><div><span>{language}</span><button type="button" disabled data-interactive data-copy>{tr("复制","Copy")}</button></div><pre><code>{esc(text)}</code></pre></div>')
            elif line.startswith("!catalogue "):
                out.append(catalogue(line.removeprefix("!catalogue ")))
            elif line.startswith("!cards "):
                out.append('<div class="cards">'+"".join(card(s,i) for i,s in enumerate(line[7:].split()))+"</div>")
            else:
                out.append("<p>"+inline(line)+"</p>")
        if in_list: out.append("</ul>")
        return "\n".join(out)

    for i, slug in enumerate(ORDER):
        page = pages[slug]
        sections = page["sections"]
        assert [s["id"] for s in sections] == [s["id"] for s in other[slug]["sections"]]
        nav = []
        for index, (zh_label, en_label, members) in enumerate(GROUPS):
            opened = " open" if index<3 or slug in members else ""
            group = tr(zh_label,en_label)
            if slug in members: current_group=group
            nav.append(f'<details{opened}><summary>{group}</summary><div>')
            for member in members:
                current = ' aria-current="page"' if member==slug else ""
                name = tr("文档导览","Documentation guide") if member=="index" else pages[member]["title"]
                nav.append(f'<a{current} href="{url(member)}">{esc(name)}</a>')
            nav.append("</div></details>")
        def pager(n, label):
            if not 0<=n<len(ORDER): return ""
            target = ORDER[n]
            return f'<a href="{url(target)}"><small>{label}</small><span>{esc(pages[target]["title"])}</span></a>'
        body = []
        toc = []
        for s in sections:
            heading = esc(s["heading"])
            anchor = s["id"]
            content = section_body(s["lines"])
            body.append(f'<section aria-labelledby="{anchor}"><h2 id="{anchor}">{heading} <a class="permalink" href="#{anchor}" aria-label="{tr("链接到","Link to")} {heading}">#</a></h2>{content}</section>')
            toc.append(f'<a href="#{anchor}">{heading}</a>')
            plain = " ".join(html.unescape(re.sub(r"<[^>]+>"," ",content)).split())
            search.append({"page":page["title"],"title":s["heading"],"alias":other[slug]["title"],"text":plain,"href":url(slug)+"#"+anchor})
        source = url("repo:"+SOURCES.get(slug,EVAL+"README.md"))
        language_url = ("../" if en else "en/")+slug+".html"
        doc = f'''<!doctype html><html lang="{tr('zh-CN','en')}" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(page['title'])} · Math Gym Docs</title><meta name="description" content="{esc(page['intro'])}">
<script>try{{document.documentElement.dataset.theme=localStorage.getItem('mg-docs-theme')==='light'?'light':'dark'}}catch{{}}</script>
<link rel="stylesheet" href="{assets}docs.css"><script defer src="{assets}docs.js?v={script_version}" data-search-index="{assets}search-{lang}.js"></script></head><body>
<a class="skip" href="#article">{tr('跳到正文','Skip to content')}</a>
<aside class="sidebar" id="sidebar"><a class="brand" href="index.html">Math Gym <span>Docs</span></a><nav aria-label="{tr('文档目录','Documentation menu')}">{''.join(nav)}</nav></aside>
<button class="scrim" type="button" aria-label="{tr('关闭菜单','Close menu')}" hidden></button>
<header class="topbar"><button class="menu" type="button" disabled data-interactive aria-expanded="false" aria-controls="sidebar">{tr('☰ 目录','☰ Menu')}</button><a class="home" href="{home}">← {tr('项目首页','Project home')}</a>
<button class="search-open" type="button" disabled data-interactive aria-haspopup="dialog"><span aria-hidden="true">⌕</span> {tr('搜索文档','Search docs')} <kbd>⌘ K</kbd></button>
<div class="top-links"><a class="docs-home" href="index.html">{tr('文档','Documentation')}</a><a class="get-started" href="quickstart.html">{tr('快速开始','Get started')}</a><button class="theme" type="button" disabled data-interactive aria-label="{tr('切换明暗主题','Toggle color theme')}">◐</button><a href="{REPO}" class="git">GitHub ↗</a><a class="language" href="{language_url}" hreflang="{tr('en','zh-CN')}">{tr('EN','中文')}</a></div></header>
<div class="workspace"><main id="article" tabindex="-1"><div class="eyebrow">{esc(current_group)}</div><h1>{esc(page['title'])}</h1><p class="lead">{esc(page['intro'])}</p>
<details class="mobile-toc"><summary>{tr('本页目录','On this page')}</summary>{''.join(toc)}</details>
{''.join(body)}
<footer><a href="{source}">{tr('在 GitHub 查看项目资料','View project source on GitHub')} ↗</a><span>{tr(' · 需仓库访问权限',' · Repository access required')}</span>
<nav class="pager" aria-label="{tr('相邻文档','Adjacent pages')}">{pager(i-1,tr('← 上一篇','← Previous'))}{pager(i+1,tr('下一篇 →','Next →'))}</nav></footer></main>
<aside class="outline"><b>{tr('本页目录','On this page')}</b><nav aria-label="{tr('本页章节','Page sections')}">{''.join(toc)}</nav><a class="back-top" href="#article">↑ {tr('回到顶部','Back to top')}</a></aside></div>
<dialog class="search-dialog" aria-labelledby="search-label"><form method="dialog"><label id="search-label" for="search-input">{tr('搜索文档','Search documentation')}</label><button aria-label="{tr('关闭搜索','Close search')}">Esc</button></form><input id="search-input" type="search" autocomplete="off" placeholder="{tr('输入主题、命令或关键词…','Search topics, commands or keywords…')}"><div class="search-count" role="status"></div><div class="search-results"></div><small>↑ ↓　{tr('选择','Select')}　↵　{tr('打开','Open')}</small></dialog>
</body></html>'''
        (dest/(slug+".html")).write_text(doc+"\n")
    (OUT/f"search-{lang}.js").write_text("const searchEntries = "+json.dumps(search,ensure_ascii=False,indent=1)+";\n")


if __name__ == "__main__":
    zh, en = load("zh"), load("en")
    write_handbook("zh",zh,en)
    write_handbook("en",en,zh)
