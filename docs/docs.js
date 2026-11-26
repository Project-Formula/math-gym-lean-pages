"use strict";

const en = document.documentElement.lang === "en";
const word = (zh, english) => en ? english : zh;
const select = css => document.querySelector(css);
const all = css => [...document.querySelectorAll(css)];
function remember(key, value) {
  try { localStorage.setItem("mg-docs-"+key, value); } catch {}
}
function recall(key) {
  try { return localStorage.getItem("mg-docs-"+key); } catch { return null; }
}

const theme = select(".theme");
function syncTheme() {
  const dark = document.documentElement.dataset.theme === "dark";
  theme.textContent = dark ? "☾" : "☀";
  theme.setAttribute("aria-pressed", String(dark));
  theme.title = dark ? word("切换到浅色","Switch to light theme") : word("切换到深色","Switch to dark theme");
}
theme.onclick = () => {
  const value = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = value;
  remember("theme",value);
  syncTheme();
};
syncTheme();

const sidebar = select(".sidebar");
const menu = select(".menu");
const scrim = select(".scrim");
function toggleMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menu.setAttribute("aria-expanded", String(open));
  scrim.hidden = !open;
  select(".workspace").inert = open;
  select(".topbar").inert = open;
  if (open) sidebar.querySelector('[aria-current="page"]').focus();
  else menu.focus({preventScroll:true});
}
menu.onclick = () => toggleMenu(true);
scrim.onclick = () => toggleMenu(false);
const closeDrawer = document.createElement("button");
closeDrawer.className = "drawer-close";
closeDrawer.textContent = word("关闭 ×","Close ×");
sidebar.prepend(closeDrawer);
closeDrawer.onclick = () => toggleMenu(false);
const narrow = matchMedia("(max-width:760px)");
narrow.addEventListener("change", () => {
  if (!narrow.matches && !scrim.hidden) toggleMenu(false);
});

for (const [index,group] of all(".sidebar details").entries()) {
  const key = "group-"+index;
  if (group.querySelector("[aria-current]")) group.open = true;
  else if (recall(key) !== null) group.open = recall(key) === "true";
  group.ontoggle = () => remember(key,String(group.open));
}
const current = sidebar.querySelector("[aria-current]");
if (current.getBoundingClientRect().bottom > sidebar.clientHeight) {
  sidebar.scrollTop += current.getBoundingClientRect().top-sidebar.clientHeight/2;
}
const translated = select(".language");
translated.href += location.hash;
window.addEventListener("hashchange", () => { translated.hash = location.hash; });

const outline = all(".outline nav a");
const headings = outline.map(a => document.getElementById(a.hash.slice(1)));
function updateOutline() {
  const top = select(".topbar").getBoundingClientRect().bottom+27;
  let active = 0;
  for (const [i,heading] of headings.entries()) {
    if (heading.getBoundingClientRect().top <= top) active = i;
  }
  if (document.documentElement.scrollHeight > innerHeight && scrollY+innerHeight >= document.documentElement.scrollHeight-2) active = headings.length-1;
  for (const [i,link] of outline.entries()) {
    if (i === active) link.setAttribute("aria-current","location");
    else link.removeAttribute("aria-current");
  }
}
window.addEventListener("scroll",updateOutline,{passive:true});
window.addEventListener("resize",updateOutline);
window.addEventListener("load",updateOutline);
updateOutline();

for (const button of all("[data-copy]")) {
  let timer;
  button.onclick = async () => {
    const text = button.closest(".codebox").querySelector("code").textContent;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = word("已复制 ✓","Copied ✓");
      clearTimeout(timer);
      timer = setTimeout(() => {button.textContent = word("复制","Copy");},1500);
    } catch { window.prompt(word("复制以下内容","Copy this text"),text); }
  };
}

const dialog = select(".search-dialog");
const input = select("#search-input");
const results = select(".search-results");
const count = select(".search-count");
const opener = select(".search-open");
const normalize = text => text.normalize("NFKC").toLowerCase();
let entries = null;
let loading = null;
function loadIndex() {
  if (loading) return loading;
  const resource = document.createElement("script");
  resource.src = select("script[data-search-index]").dataset.searchIndex;
  loading = new Promise((resolve,reject)=>{
    resource.onload = () => {
      entries = searchEntries.map(item=>({
        item, title:normalize(item.title), page:normalize(item.page+" "+item.alias), text:normalize(item.text)
      }));
      resolve();
    };
    resource.onerror = () => {loading=null;resource.remove();reject(new Error("Search index unavailable"));};
  });
  document.head.append(resource);
  return loading;
}
let highlighted = -1;
function highlight(index, scroll=false) {
  const links = [...results.children];
  highlighted = links.length ? (index+links.length)%links.length : -1;
  links.forEach((link,i)=>link.classList.toggle("active",i===highlighted));
  if (scroll && highlighted>=0) links[highlighted].scrollIntoView({block:"nearest"});
}
function renderSearch() {
  if (!entries) return;
  const query = normalize(input.value.trim());
  const terms = query.split(/\s+/).filter(Boolean);
  let matches;
  if (terms.length) {
    matches = entries.map(entry => {
      const scores = terms.map(t => (entry.title.includes(t)?8:0)+(entry.page.includes(t)?4:0)+(entry.text.includes(t)?1:0));
      return {item:entry.item, score:scores.every(Boolean) ? scores.reduce((a,b)=>a+b,0) : 0};
    }).filter(hit=>hit.score).sort((a,b)=>b.score-a.score).map(hit=>hit.item);
  } else {
    matches = ["quickstart","tiers","scoring","contribute"].map(slug=>searchEntries.find(item=>item.href.startsWith(slug+".html#")));
  }
  results.replaceChildren();
  count.textContent = !terms.length ? word("常用章节","Suggested sections") : matches.length ? word("匹配章节 · ","Matching sections · ")+matches.length : word("没有匹配的章节。试试更短的关键词。","No matching sections. Try a shorter query.");
  for (const item of matches) {
    const link = document.createElement("a");
    link.href = item.href;
    const title = document.createElement("strong");
    title.textContent = item.page+" › "+item.title;
    const excerpt = document.createElement("span");
    const found = terms.length ? normalize(item.text).indexOf(terms[0]) : 0;
    const start = Math.max(0,found-30);
    excerpt.textContent = (start?"…":"")+item.text.slice(start,start+105)+(item.text.length>start+105?"…":"");
    link.append(title,excerpt);
    link.onclick = () => dialog.close();
    results.append(link);
  }
  results.scrollTop = 0;
  highlight(0);
}
function openSearch() {
  if (!scrim.hidden) toggleMenu(false);
  if (!dialog.open) dialog.showModal();
  input.value = "";input.focus();
  if (entries) {renderSearch();return;}
  count.textContent = word("正在加载搜索索引…","Loading the search index…");
  loadIndex().then(renderSearch).catch(()=>{
    count.textContent = word("搜索索引加载失败，请重新打开搜索重试。","The search index could not load. Reopen search to retry.");
  });
}
opener.onclick = openSearch;
dialog.addEventListener("click",event=>{
  const r=dialog.getBoundingClientRect();
  if(event.target===dialog && (event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)) dialog.close();
});
input.oninput = renderSearch;
input.onkeydown = event => {
  if (event.isComposing) return;
  if (event.key==="ArrowDown" || event.key==="ArrowUp") {
    event.preventDefault();highlight(highlighted+(event.key==="ArrowDown"?1:-1),true);
  } else if (event.key==="Enter" && highlighted>=0) {
    event.preventDefault();results.children[highlighted].click();
  }
};
document.addEventListener("keydown", event=>{
  if (dialog.open && event.key==="Escape" && !event.isComposing) {
    event.preventDefault();dialog.close();return;
  }
  if ((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k") {
    event.preventDefault();
    if(dialog.open) dialog.close();else openSearch();
  } else if(!scrim.hidden && event.key==="Escape") {
    toggleMenu(false);
  } else if(!scrim.hidden && event.key==="Tab") {
    const controls = [...sidebar.querySelectorAll("button,a,summary")].filter(el=>el.getClientRects().length && el.checkVisibility());
    const first=controls[0],last=controls[controls.length-1];
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
});
if (!/Mac|iPhone|iPad/.test(navigator.platform)) select(".search-open kbd").textContent="Ctrl K";

for (const control of all("[data-interactive]")) control.disabled = false;
