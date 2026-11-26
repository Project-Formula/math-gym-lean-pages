# index | Math Gym 定理证明文档
从运行第一道 Lean 题开始，了解模型成绩如何产生，或为题库贡献一个可验收的定理。
## start | 选择下一步
!cards quickstart scoring contribute
## continue | 继续运行评测
- 准备好一个模型后，按[两档题包](tiers)运行整档 20 题。只想核对环境时，先执行 [doctor 检查](resources#check)。
- 更换接口或模型前，阅读[模型配置](model)与[适配器](adapters)。每种配置单独保留运行记录。
## explore | 浏览题库与结果
[题目目录](catalogue)介绍如何找到正式题面、Lean 模板和来源。[评分与结果](scoring)说明排行榜和 CSV 的读法。[引用指南](citation)提供本项目的 BibTeX。
## sources | 项目仓库
本手册可公开阅读。带有 GitHub 标记的题包、评测源码和环境包位于项目仓库，打开时需要相应的仓库访问权限。
# overview | 项目概览
Math Gym 用 Lean 4 检查模型能否在固定环境中完成一个数学定理的证明。
## tasks | 40 道题与两档难度
Tier 1 基础档和 Tier 2 挑战档各有 20 题。Tier 1 在优化、组合数学、概率论和理论计算机科学各有 5 题；Tier 2 包含 16 道优化、3 道组合数学和 1 道概率论题。
## attempt | 一次作答包含什么
模型读取公开定义与目标声明，在受限工具环境中检查候选证明，最后提交完整的 `Task.lean`。每道题从独立会话开始；提交后由独立的判题环境校验。
## read | 从哪里开始
[浏览 40 道题](home:#tasks)可以按题名、领域和难度查找目标。[阅读评测协议](protocol)可以核对每题的工具、时限与用量上限。
# quickstart | 快速开始
用基础档的一道 Freedman 鞅尾界题走通环境检查、模型作答和独立判分。
## setup | 准备运行环境
使用 Python 3.11 或更高版本和正在运行的 Docker。取得项目仓库与 [v2 环境包](release)，解压环境包。以下命令在仓库根目录、同一终端运行；把 BUNDLE 改成实际路径。首次使用先完成[资源准备](resources)中的缓存步骤。
!code bundle
## model | 配置一个模型
复制[模型配置模板](repo:problems/theorem-proving/evaluation/model.example.json)，填写模型标识、接口根地址与版本说明。在终端中设置模板指定的密钥环境变量。运行前执行 doctor，确认工具链、缓存和镜像就绪。
!code config
!code doctor
## run | 运行一道题
选择一个未使用的运行目录。以下命令会调用你配置的模型接口。
!code one
## inspect | 读取结果
查看运行目录里的 `run.json`。有提交时执行独立验收，再汇总运行记录。一道题的结果只能说明这次单题尝试。整档运行见[运行 Tier 1 或 Tier 2](tiers)。
!code grade
# tiers | 运行 Tier 1 或 Tier 2
两档使用相同的单题预算和证明验收规则，运行入口对应各自的冻结题包。
## tier1 | Tier 1 · 基础
完成[快速开始](quickstart)的安装、模型配置和 doctor 检查。使用基础档 v2 环境并省略单题过滤器，运行全部 20 题。结束后在同一终端执行[判分与汇总命令](quickstart#inspect)。
!code tier1
## tier2 | Tier 2 · 挑战
从仓库根目录使用定理评测入口，在干净的运行环境查看 next 队列；完整挑战档应有 20 题。已有有效作答的题目版本会从后续队列跳过。确认选题后，在新目录准备题包并运行检查。
!code next-prepare
## launch | 运行挑战档
使用新的运行名称。驱动保存提交，验收已提交的证明，并写出汇总文件。可用重复的 `--task` 参数选择队列中的具体题目。
!code next-run
# catalogue | 题目目录
在题库中可按数学领域和难度缩小范围，也可直接搜索题名或关键词。
## browse | 查找一个定理
打开[交互题库](home:#tasks)，选择 Tier 1 或 Tier 2，再选择领域。列表适合查找，卡片同时显示数学目标的简述。点击题名查看目标声明名，复制题目链接可分享同一道题。
## files | 阅读题包
`PROBLEM.md` 定义数学任务，`Foundation.lean` 提供允许使用的基础，`Task.lean` 包含待完成的声明。完整参数、假设和结论以冻结的 Lean 类型为准。
## tier1 | Tier 1 基础档题目
!catalogue Tier 1
## tier2 | Tier 2 挑战档题目
!catalogue Tier 2
## download | 导出题目清单
在首页[评测资源](home:#resources)下载 JSON 目录，取得每题的标识、难度、领域与目标。使用题目标识将本地 run 或 judge 收据与目录对应起来。
# model | 模型与运行配置
每种模型、接口和推理设置应有独立的配置与运行名称，以便复核。
## fields | 填写配置文件
从示例复制本地 JSON。`base_url` 填 API 根路径；`model` 填实际请求的标识，`model_revision` 记录快照或注明别名未锁定。`api_key_env` 指定从哪个环境变量读取密钥。
!code config
## requests | 请求与用量
运行前固定推理设置和单次输出上限。保留请求与返回的模型名和真实 usage。总输出计数包含供应商报告的推理 token；缺失用量按基础设施问题记录。
## outputs | 查找运行文件
运行目录包含 `run.json`、分题记录与原始提交。成功提交保存于 `submissions/<领域>/<题目>/Task.lean`。分享结果时使用汇总表；模型私有状态和密钥留在本地。
# resources | 准备资源与缓存
使用同一份发行环境、Docker 镜像和依赖缓存，才能对齐题目的形式声明与评测环境。
## bundle | 导入发行包
解压 [v2 环境包](release)。目录包括 `bundle.json`、`images.tar.gz`、`release/` 和 `client/`。对照 bundle 清单核对镜像归档的 SHA256，再执行导入。
!code bundle
## cache | 准备或绑定固定依赖
首次运行 bootstrap，从固定版本准备 Lean 和 Mathlib。已有相同版本的缓存时，使用 bind-cache 绑定 Linux 工具链与依赖目录。选用适合本机的一种方法。
!code bootstrap
!code bind
## check | 检查环境
在评测计时开始前运行 doctor。若工具链版本、镜像或依赖绑定有误，先按[故障排查](troubleshooting)处理。
!code doctor
# host | 主机要求
正式计时使用原生 Linux amd64 环境，依赖安装与共享预热在作答计时之前完成。
## tools | 宿主工具
准备 Docker、Python ≥ 3.11、Git、curl 和支持 zstd 的归档工具。使用以下命令确认 Python 与 Docker 服务可用。
!code host
## limits | 容器规格
单个评测容器固定为 linux/amd64、2 CPU、8 GiB 内存、最多 256 个 PID。题目运行时关闭容器网络，根文件系统与依赖卷只读。宿主还需要为系统和 Docker 本身预留资源。
## timing | 记录实际平台
在 ARM 主机上仿真 amd64 可用于兼容性检查。记录宿主、虚拟机及执行架构，比较正式耗时时使用相同的运行条件。
# protocol | 模型工具与评测协议
每题一次独立尝试。模型只接收公开材料，使用统一的工具与预算。
## tools | 四个工具
- `read_file` 读取公开文件，`search_mathlib` 检索固定依赖里的数学库。
- `check_lean` 检查候选代码并返回诊断，`submit_proof` 提交最终的 Lean 文件。
## budgets | 单题预算
最长 7200 秒，最多 128 次模型响应、512 次工具调用、524288 个输出 token。每次响应最多 65536 个输出 token；最后阶段的预留计入总预算。
## feedback | 提交与判分
作答期间的 Lean 检查计入时间。最终提交在独立 judge 中检查。对运行配置、预算与提交原件保留记录，以便区分数学结果和环境中断。
# adapters | 模型接口适配器
兼容 Chat Completions 的接口可直接使用内置驱动；其他接口可接入成员提供的适配器。
## contract | 输入与输出
适配器从 stdin 读取一份规范请求，从 stdout 写回单份规范 JSON 响应。保留系统消息、用户消息、工具定义和工具反馈。命令配置使用参数数组，见[适配器示例](repo:problems/theorem-proving/evaluation/adapter.example.json)。
## state | 保留供应商状态
将需要下一轮回传的原生推理或签名字段保存在私有 provider_state。使用真实返回的模型名和 token 用量；适配器源码哈希会随运行记录保存。
## check | 接入前核对
用[成员模板](repo:problems/theorem-proving/evaluation/member-adapter.example.py)核对输入和返回形状。模板中的 complete 需要实现实际接口。确认一次普通响应和一次工具调用都能往返，再安排正式运行。
# scoring | 评分与结果
每道题只有一个完整主结论。通过独立验收得 100 分。
## task | 单题结果
验收通过记 100 分；被判题器拒绝或正常完成但没有提交记 0 分。基础设施故障、尚未运行或待验收的题目保留未定分状态。
## tier | 读懂一个难度的成绩
每档有 20 题。例如通过 3 题，总分为 300/2000，通过率为 15%。阶段记录会同时列出已评分题数和通过题数，最终通过率留待定分。团队提供的整档汇总在来源栏标为团队汇总。
## csv | 对照 CSV
`accepted` 是通过题数，`scored` 是已有的定分记录数，`total` 是该档题数。`pass_rate` 使用公布的分母，`status` 和 `source` 表示记录状态与来源。可从 [Tier 1](home:#tier-1) 和 [Tier 2](home:#tier-2) 单独下载成绩。
# judge | 独立判题与隔离检查
公开环境与判题环境分别装载作答材料和冻结验收声明。
## boundary | 模型能看到什么
public 容器提供公开定义、模板与 Mathlib 工具。judge 容器持有固定目标并检查最终提交。维护者完整参考证明独立存放。
## proof | 怎样验收证明
检查目标类型、Lean 内核证明和传递公理依赖。占位证明、私自增加公理或改变目标类型均不能通过。可在允许的环境中提交不同于参考解的证明。
## controls | 检查运行边界
维护者使用有效证明、占位符和声明变化等对照检查环境。自检收据用于环境核验。模型成绩来自对应模型的实际提交与 judge 记录。
# references | 参考答案与核验范围
题包的参考证据与模型作答记录分别维护。
## artifacts | 参考材料
按单题保存冻结声明、来源版本以及适用的参考解收据。逐题核对状态：已复现完整证明、已核验声明和已完成模型测验分别说明不同的事实。
## coverage | 两档题包
Tier 2 的 4 道题有参考验收记录，16 道研究优化题沿用已有声明核验状态。每个模型提交仍使用相应题包的独立验收入口。
## access | 使用收据
先匹配题目版本、工具链、依赖锁与验收记录，再判断现有收据是否可复用。公开题面和模型工具环境只提供解题所需材料。
# citation | 引用本评测
引用 Math Gym 的定理证明项目时，可引用网站并注明使用的难度档和成绩日期。
## bibtex | BibTeX
!code bib
## snapshot | 引用具体结果
报告中写明模型标识、Tier、通过数和题数，记录数据日期。可在[首页引用区](home:#citation)下载 .bib 文件，在对应榜单下载同次结果的 CSV。
# maintenance | 构建、自检与分发
维护者为改变了题包、协议、镜像或控制器的环境建立新的版本记录。
## build | 构建冻结环境
在项目根目录运行维护者流程。prepare 接收锁定的依赖与 Linux Lean 工具链；build 生成镜像，doctor 核对环境。构建参数和发布方式见[仓库评测说明](repo:problems/theorem-proving/evaluation/README.md)。
## controls | 两类对照
在新环境中用 selftest 批量检查维护者参考证明，再运行公开环境对照，核对文件可见性和候选隔离。发布前保存环境标识、两份镜像 ID 和自检收据。
## export | 交付环境
导出包包含镜像归档、bundle 清单、release 和客户端。Lean 与 Mathlib 缓存由成员在本机固定与复用。独立传递归档 SHA256，以便接收者验证。
# troubleshooting | 故障排查
先确定故障发生在环境准备、模型作答还是独立验收阶段。
## setup | doctor 或依赖检查失败
核对 BUNDLE 的绝对路径、Docker 服务、linux/amd64 镜像和缓存绑定。使用与发行包一致的工具链与依赖锁，再运行 doctor。
## interrupted | 接口中断或额度耗尽
保留已经落盘的 run、响应计数和提交哈希。有效作答保留原分数；对基础设施中断的任务记录终止原因，由维护者决定是否登记补测。
## grading | 已有提交，评分未完成
检查运行目录中的 `submissions/`，用同版 release 对原始提交运行 grade，再用 collect 汇总。如果只是判题基础设施出错，使用原提交恢复验收。查看[判分示例](quickstart#inspect)。
# contribute | 贡献题目或修订
欢迎提供值得研究的数学结果、可追溯的来源，以及能独立核验的形式化材料。
## select | 提议题目
先说明数学结论、出处、作者、固定版本和独立价值。优先范围是理论计算机科学、概率论、组合数学与优化。候选提案可以列出尚缺的证明或依赖。
## package | 准备提交
按领域和项目组织材料，分开公开题面、基础定义与维护者参考证据。通用正式题需要完整 Lean 参考证明；专项赛道按仓库协议核对其证据要求。列出实际依赖闭包与来源归属。
## review | 提交复核
采用[贡献模板](repo:problems/theorem-proving/maintenance/corpus-template/README.md)记录数学合同、许可及实际完成的核验。记录参考复现、题包验收和模型试跑各自的状态。网站内容问题也可提交到[展示仓库](issues)。
# licenses | 许可、来源与分发
复用题目、源码或证明材料前，应核对对应文件的许可证、作者归属与固定来源。
## project | 项目与单题记录
主仓库根目录提供 [LICENSE](repo:LICENSE) 和 [NOTICE](repo:NOTICE)。具体题包另有 LICENSE 与 NOTICE。可从题目详情中的「来源说明」进入对应记录。
## upstream | 第三方材料
复用或改编时，保留原作者、固定提交或论文版本、许可、必要声明和修改说明。不同来源可能使用不同条款，按实际文件记录核对。
## distribution | 发行内容
公开评测环境的分发范围见 v2 清单。独立工具链、依赖缓存、维护者证明、原始服务商响应与个人凭据不属于该环境包。
# dependencies | Lean 环境与依赖锁
定理的类型检查依赖具体的 Lean、Mathlib 和包版本。
## versions | 固定版本
Lean 工具链为 4.33.1，Mathlib 固定到 `0df444a360eaa60ab8c11dca51a86af692955474`。环境锁还记录配套包版本、镜像 ID 与控制器哈希。
## repeat | 复用环境
同一发行版可复用已准备好的依赖缓存。绑定前对照 release 的依赖锁和工具链，运行时以只读方式挂载。正式比较应使用相同题包版本与环境标识。
## provenance | 核对依赖来源
在[环境锁](repo:problems/theorem-proving/evaluation/environment.lock.json)中查看依赖版本。题目级别的来源、署名与分发信息由该题包的 NOTICE 和 LICENSE 提供。
