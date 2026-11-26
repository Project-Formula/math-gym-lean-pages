const searchEntries = [
 {
  "page": "Math Gym 定理证明文档",
  "title": "选择下一步",
  "alias": "Math Gym documentation",
  "text": "运行评测 用基础档的一道 Freedman 鞅尾界题走通环境检查、模型作答和独立判分。 快速开始 → 理解分数 每道题只有一个完整主结论。通过独立验收得 100 分。 评分与结果 → 贡献题目 欢迎提供值得研究的数学结果、可追溯的来源，以及能独立核验的形式化材料。 贡献题目或修订 →",
  "href": "index.html#start"
 },
 {
  "page": "Math Gym 定理证明文档",
  "title": "继续运行评测",
  "alias": "Math Gym documentation",
  "text": "准备好一个模型后，按 两档题包 运行整档 20 题。只想核对环境时，先执行 doctor 检查 。 更换接口或模型前，阅读 模型配置 与 适配器 。每种配置单独保留运行记录。",
  "href": "index.html#continue"
 },
 {
  "page": "Math Gym 定理证明文档",
  "title": "浏览题库与结果",
  "alias": "Math Gym documentation",
  "text": "题目目录 介绍如何找到正式题面、Lean 模板和来源。 评分与结果 说明排行榜和 CSV 的读法。 引用指南 提供本项目的 BibTeX。",
  "href": "index.html#explore"
 },
 {
  "page": "Math Gym 定理证明文档",
  "title": "项目仓库",
  "alias": "Math Gym documentation",
  "text": "本手册可公开阅读。带有 GitHub 标记的题包、评测源码和环境包位于项目仓库，打开时需要相应的仓库访问权限。",
  "href": "index.html#sources"
 },
 {
  "page": "项目概览",
  "title": "40 道题与两档难度",
  "alias": "Project overview",
  "text": "Tier 1 基础档和 Tier 2 挑战档各有 20 题。Tier 1 在优化、组合数学、概率论和理论计算机科学各有 5 题；Tier 2 包含 16 道优化、3 道组合数学和 1 道概率论题。",
  "href": "overview.html#tasks"
 },
 {
  "page": "项目概览",
  "title": "一次作答包含什么",
  "alias": "Project overview",
  "text": "模型读取公开定义与目标声明，在受限工具环境中检查候选证明，最后提交完整的 Task.lean 。每道题从独立会话开始；提交后由独立的判题环境校验。",
  "href": "overview.html#attempt"
 },
 {
  "page": "项目概览",
  "title": "从哪里开始",
  "alias": "Project overview",
  "text": "浏览 40 道题 可以按题名、领域和难度查找目标。 阅读评测协议 可以核对每题的工具、时限与用量上限。",
  "href": "overview.html#read"
 },
 {
  "page": "快速开始",
  "title": "准备运行环境",
  "alias": "Quickstart",
  "text": "使用 Python 3.11 或更高版本和正在运行的 Docker。取得项目仓库与 v2 环境包 ，解压环境包。以下命令在仓库根目录、同一终端运行；把 BUNDLE 改成实际路径。首次使用先完成 资源准备 中的缓存步骤。 Shell 复制 BUNDLE=/absolute/path/to/lean-core20-evaluation-2h-v2 docker load -i \"$BUNDLE/images.tar.gz\"",
  "href": "quickstart.html#setup"
 },
 {
  "page": "快速开始",
  "title": "配置一个模型",
  "alias": "Quickstart",
  "text": "复制 模型配置模板 ，填写模型标识、接口根地址与版本说明。在终端中设置模板指定的密钥环境变量。运行前执行 doctor，确认工具链、缓存和镜像就绪。 Shell 复制 mkdir -p .runtime cp -n problems/theorem-proving/evaluation/model.example.json .runtime/my-model.json Shell 复制 python3 -m scripts.lean_core_eval doctor --release \"$BUNDLE/release\" --output .runtime/tier1-doctor",
  "href": "quickstart.html#model"
 },
 {
  "page": "快速开始",
  "title": "运行一道题",
  "alias": "Quickstart",
  "text": "选择一个未使用的运行目录。以下命令会调用你配置的模型接口。 Shell 复制 RUN=.runtime/core20-runs/freedman-first python3 -m scripts.lean_core_eval run --release \"$BUNDLE/release\" \\ --model .runtime/my-model.json --output \"$RUN\" \\ --task probability/freedman-martingale-tail",
  "href": "quickstart.html#run"
 },
 {
  "page": "快速开始",
  "title": "读取结果",
  "alias": "Quickstart",
  "text": "查看运行目录里的 run.json 。有提交时执行独立验收，再汇总运行记录。一道题的结果只能说明这次单题尝试。整档运行见 运行 Tier 1 或 Tier 2 。 Shell 复制 python3 -m scripts.lean_core_eval grade --release \"$BUNDLE/release\" \\ --submissions \"$RUN/submissions\" --output \"$RUN/grading\" python3 -m scripts.lean_core_eval collect --release \"$BUNDLE/release\" \\ --run \"$RUN\" --output \"$RUN/summary.json\"",
  "href": "quickstart.html#inspect"
 },
 {
  "page": "运行 Tier 1 或 Tier 2",
  "title": "Tier 1 · 基础",
  "alias": "Run Tier 1 or Tier 2",
  "text": "完成 快速开始 的安装、模型配置和 doctor 检查。使用基础档 v2 环境并省略单题过滤器，运行全部 20 题。结束后在同一终端执行 判分与汇总命令 。 Shell 复制 RUN=.runtime/core20-runs/tier1-model python3 -m scripts.lean_core_eval run --release \"$BUNDLE/release\" \\ --model .runtime/my-model.json --output \"$RUN\"",
  "href": "tiers.html#tier1"
 },
 {
  "page": "运行 Tier 1 或 Tier 2",
  "title": "Tier 2 · 挑战",
  "alias": "Run Tier 1 or Tier 2",
  "text": "从仓库根目录使用定理评测入口，在干净的运行环境查看 next 队列；完整挑战档应有 20 题。已有有效作答的题目版本会从后续队列跳过。确认选题后，在新目录准备题包并运行检查。 Shell 复制 python3 -m scripts.theorem_eval plan ROUND=.runtime/theorem-proving/tier2 python3 -m scripts.theorem_eval prepare --base \"$BUNDLE/release\" --output \"$ROUND\" python3 -m scripts.theorem_eval doctor --release \"$ROUND\" --output .runtime/tier2-doctor",
  "href": "tiers.html#tier2"
 },
 {
  "page": "运行 Tier 1 或 Tier 2",
  "title": "运行挑战档",
  "alias": "Run Tier 1 or Tier 2",
  "text": "使用新的运行名称。驱动保存提交，验收已提交的证明，并写出汇总文件。可用重复的 --task 参数选择队列中的具体题目。 Shell 复制 python3 -m scripts.theorem_eval run --release \"$ROUND\" \\ --model .runtime/my-model.json --name tier2-model",
  "href": "tiers.html#launch"
 },
 {
  "page": "Tier 1",
  "title": "Berge 最大匹配的增广链刻画",
  "alias": "combinatorics/augmenting-path-maximum-matching Berge’s augmenting path criterion for maximum matchings",
  "text": "在有限简单图中，用增广交替链是否存在刻画一个匹配是否具有最大边数。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/augmenting-path-maximum-matching/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Chowla 单位差和集增长（受限版本）",
  "alias": "combinatorics/chowla-residue-sumsets Chowla’s sumset bound under a unit-difference condition",
  "text": "在模整数的加法群中，利用集合内部的单位差条件给出两集合之和的基数下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/chowla-residue-sumsets/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "团数与匹配数双约束的极值图",
  "alias": "combinatorics/clique-bounded-matching-extremal Extremal graphs with bounded clique and matching numbers",
  "text": "同时限制图的团数与匹配数，求给定顶点数时可能达到的最大边数。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/clique-bounded-matching-extremal/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Erdős–Heilbronn 二重受限和集界",
  "alias": "combinatorics/erdos-heilbronn-restricted-sums The Erdős–Heilbronn bound for restricted pair sums",
  "text": "在素数阶循环群中，只允许集合中的两个不同元素相加，证明所得和集的大小下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/erdos-heilbronn-restricted-sums/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "均匀集合族的匹配极值与唯一性",
  "alias": "combinatorics/uniform-family-bounded-matching Extremal uniform families with bounded matching number",
  "text": "限制均匀集合族中两两不交成员的数目，确定充分大基集上的极值及等号情形。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/uniform-family-bounded-matching/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Nesterov 光滑凸优化加速收敛",
  "alias": "optimization/accelerated-smooth-gradient Accelerated convergence for smooth convex objectives",
  "text": "证明在指定的 Nesterov 递推下，光滑凸函数的目标差距具有显式的二次衰减界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/accelerated-smooth-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Kall–Mayer 拉格朗日鞍点与原对偶最优性",
  "alias": "optimization/kall-mayer-kkt Kall–Mayer saddle points and primal–dual optimality",
  "text": "从拉格朗日鞍点推出原问题与对偶问题的最优性，以及两者最优值相等。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/kall-mayer-kkt/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "单二次约束的下界与 PSD 对偶证书",
  "alias": "optimization/quadratic-constraint-duality Lower bounds and PSD certificates for one quadratic constraint",
  "text": "对严格可行的单约束二次优化问题，用半正定矩阵证书刻画可行集上的目标下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/quadratic-constraint-duality/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "随机加速梯度的显式条件 oracle 版本",
  "alias": "optimization/stochastic-accelerated-gradient Stochastic accelerated gradients with a conditional oracle",
  "text": "分析带条件无偏、有限方差随机梯度的加速迭代，分别给出非凸与凸情形的期望性能界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/stochastic-accelerated-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "强凸在线梯度的对数遗憾界",
  "alias": "optimization/strongly-convex-online-gradient Logarithmic regret for strongly convex online gradients",
  "text": "对强凸损失上的投影在线梯度算法，证明随时间对数增长的遗憾界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/strongly-convex-online-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Brownian 指数过程的鞅性质",
  "alias": "probability/brownian-exponential-martingale The Brownian exponential martingale",
  "text": "对带漂移的实 Brownian 过程，证明经指数补偿得到的过程可积且满足鞅性质。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/brownian-exponential-martingale/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "连续路径 Markov 核的存在唯一性",
  "alias": "probability/continuous-markov-process Existence and uniqueness of a continuous-path Markov kernel",
  "text": "给定满足 Feller 条件和矩估计的转移核半群，在连续路径空间上证明相应概率核的存在唯一性。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/continuous-markov-process/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Doob 强型 Lᵖ 极大不等式",
  "alias": "probability/doob-lp-maximal Doob’s strong Lᵖ maximal inequality",
  "text": "对非负离散次鞅，利用终值的 Lᵖ 范数控制其有限时间运行最大值的 Lᵖ 范数。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/doob-lp-maximal/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Freedman 鞅尾界",
  "alias": "probability/freedman-martingale-tail Freedman’s martingale tail bound",
  "text": "在增量有上界、条件漂移非正时，用累积条件方差给出部分和越界概率的指数界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/freedman-martingale-tail/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Kolmogorov 三列定理",
  "alias": "probability/kolmogorov-three-series Kolmogorov’s three-series theorem",
  "text": "用尾概率、截断均值和截断方差三个级数刻画独立随机变量级数的几乎处处收敛。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/kolmogorov-three-series/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "在线集合覆盖的显式整数竞争比",
  "alias": "theoretical-computer-science/online-set-cover An explicit competitive ratio for online set cover",
  "text": "分析指定的无权在线集合覆盖算法，证明其覆盖性质并给出相对于最优解的整数竞争界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/online-set-cover/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "带显式可测性条件的最优阶 PAC 样本复杂度",
  "alias": "theoretical-computer-science/optimal-pac-sample-complexity Optimal-order PAC sample complexity under measurability assumptions",
  "text": "在明确的可测性条件下，证明可实现 PAC 学习的 VC 维样本复杂度上界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/optimal-pac-sample-complexity/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "保守并列规则下 MIS 单轮期望消边界",
  "alias": "theoretical-computer-science/parallel-independent-set Expected edge removal in one parallel MIS round",
  "text": "对两种随机独立集选择规则，估计并行算法一轮中移除边数的期望下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/parallel-independent-set/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "最短增广路的次数界与停机最优性",
  "alias": "theoretical-computer-science/shortest-augmenting-path Iteration count and optimality for shortest augmenting paths",
  "text": "对有限网络中的最短增广路算法，证明增广次数的上界和停机时流的最优性。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/shortest-augmenting-path/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "在线随机匹配的一般实例族障碍",
  "alias": "theoretical-computer-science/stochastic-matching-barrier An instance-family barrier for online stochastic matching",
  "text": "从六环及其不交并构成的实例族出发，证明在线随机匹配算法的性能障碍。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/stochastic-matching-barrier/tasks/public/PROBLEM.md"
 },
 {
  "page": "题目目录",
  "title": "Tier 1 基础档题目",
  "alias": "Task catalogue",
  "text": "Berge 最大匹配的增广链刻画 Chowla 单位差和集增长（受限版本） 团数与匹配数双约束的极值图 Erdős–Heilbronn 二重受限和集界 均匀集合族的匹配极值与唯一性 Nesterov 光滑凸优化加速收敛 Kall–Mayer 拉格朗日鞍点与原对偶最优性 单二次约束的下界与 PSD 对偶证书 随机加速梯度的显式条件 oracle 版本 强凸在线梯度的对数遗憾界 Brownian 指数过程的鞅性质 连续路径 Markov 核的存在唯一性 Doob 强型 Lᵖ 极大不等式 Freedman 鞅尾界 Kolmogorov 三列定理 在线集合覆盖的显式整数竞争比 带显式可测性条件的最优阶 PAC 样本复杂度 保守并列规则下 MIS 单轮期望消边界 最短增广路的次数界与停机最优性 在线随机匹配的一般实例族障碍",
  "href": "catalogue.html#tier1"
 },
 {
  "page": "Tier 2",
  "title": "分数覆盖的常数倍整数舍入",
  "alias": "combinatorics/expectation-threshold-equivalence Constant-factor integral rounding of fractional covers",
  "text": "将有限集合族的分数覆盖舍入为整数覆盖，并控制舍入后覆盖的加权成本。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/expectation-threshold-equivalence/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "独立稀释后的随机支配",
  "alias": "combinatorics/spread-thinning-domination Stochastic domination after independent thinning",
  "text": "比较独立稀释后的随机集合与乘积测度，证明在指定参数下对递增事件成立的随机支配。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/spread-thinning-domination/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Talagrand 离散凸性主结论",
  "alias": "combinatorics/talagrand-discrete-convexity Talagrand’s discrete convexity conclusion",
  "text": "在有限布尔立方体上，从集合的乘积测度下界推出相关离散凸性构造的小集覆盖性质。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/talagrand-discrete-convexity/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Boolean 线性阈值函数的低阶 Fourier 权重",
  "alias": "probability/ltf-low-degree-fourier-weight Low-degree Fourier weight of Boolean linear threshold functions",
  "text": "对任意布尔线性阈值函数，证明常数项与一次 Fourier 系数的平方和至少为 (7423/10000)²。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/ltf-low-degree-fourier-weight/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "有序 Bellman 递推的周期极限与严格支撑间隙",
  "alias": "optimization/asymmetric-phase-barrier Periodic limits and a strict support gap for an ordered Bellman recurrence",
  "text": "确定有序 Bellman 递推的周期极限函数，证明严格支撑间隙并刻画子列极限集。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/asymmetric-phase-barrier/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "二进插值在 3/2 处的单侧导数",
  "alias": "optimization/certified-dyadic-corner One-sided derivatives of a dyadic interpolant at 3/2",
  "text": "构造满足二进插值条件的连续函数，并用 3/2 处不同的单侧导数证明其不可微。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/certified-dyadic-corner/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "随机比较点下的条件末次迭代界",
  "alias": "optimization/conditional-restart Conditional last-iterate bounds with a random comparator",
  "text": "允许比较点依赖起始时刻的已知信息，给出随机梯度迭代末次目标值的条件高概率界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/conditional-restart/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "从单个边际约束推出倒数平方可和",
  "alias": "optimization/dyadic-energy Reciprocal-square summability from a marginal bound",
  "text": "从非负步长序列在二进时刻满足的边际约束，推出给定控制序列的倒数平方可和。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/dyadic-energy/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "随机梯度下降末次迭代的时间一致收敛边界",
  "alias": "optimization/exact-frontier The time-uniform last-iterate frontier for stochastic gradient descent",
  "text": "刻画随机梯度下降的末次迭代何时可以在所有时刻同时满足给定的高概率收敛界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/exact-frontier/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "对称递推的精确周期律与全部聚点",
  "alias": "optimization/exact-symmetric-phase Exact periodicity and limit points for a symmetric recurrence",
  "text": "建立对称递推的精确周期表示，确定相应归一化序列的全部子列极限。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/exact-symmetric-phase/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "单条高斯轨道对二进区间步长总和的限制",
  "alias": "optimization/gaussian-epoch-ceiling Dyadic step-size bounds from a single Gaussian trajectory",
  "text": "利用一条带高斯噪声的轨道给出的目标值约束，限制各二进区间内的步长总和。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/gaussian-epoch-ceiling/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "四点重排的完整等号判据",
  "alias": "optimization/kernel-rearrangement Equality cases for a four-point rearrangement",
  "text": "比较四个非负有序数的三种核合成方式，并刻画相邻两项取等号的全部情形。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/kernel-rearrangement/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "判定所有最优有序合成树",
  "alias": "optimization/optimal-tree-classification Classification of optimal ordered composition trees",
  "text": "固定叶子数，通过每个内节点左右子树的叶子数刻画所有达到最大根值的有序满二叉树。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/optimal-tree-classification/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "从离散最优合成到连续有序分割",
  "alias": "optimization/partition-scaling-limit Scaling limits from discrete compositions to ordered partitions",
  "text": "证明连续有序分割的值函数是最小非负超解，并将它确定为离散最优合成值的缩放极限。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/partition-scaling-limit/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Cantor 前缀解码的最优误差量级",
  "alias": "optimization/sgd-cantor-decoder Optimal error scale for decoding Cantor prefixes",
  "text": "为 Cantor 编码的比特前缀构造可测解码器，证明可容忍误差的量级并给出匹配下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-cantor-decoder/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "收缩随机逼近的全时域界与同阶高斯下界",
  "alias": "optimization/sgd-contractive-uniform Time-uniform contraction bounds and a matching Gaussian lower bound",
  "text": "对收缩映射的随机逼近过程证明全时域误差界，并在一维高斯噪声下给出同阶下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-contractive-uniform/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "强凸 SGD 在固定时刻的指数矩与尾界",
  "alias": "optimization/sgd-extremal-logmgf Fixed-time exponential moments and tails for strongly convex SGD",
  "text": "在强凸随机梯度下降中，控制固定时刻目标误差的指数矩，进而给出尾概率界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-extremal-logmgf/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "高斯梯度观测下的全时域优化下界",
  "alias": "optimization/sgd-gaussian-lower A time-uniform lower bound with Gaussian gradient observations",
  "text": "在未知二次目标中心的高斯梯度观测模型中，证明对所有时刻有效的优化误差下界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-gaussian-lower/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "强凸随机梯度下降的全时域界",
  "alias": "optimization/sgd-uniform-boundary A time-uniform boundary for strongly convex SGD",
  "text": "对强凸随机梯度下降的目标误差，给出在全部迭代时刻同时成立的高概率上界。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-uniform-boundary/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "任意可达的开销函数都有渐近更小的可达函数",
  "alias": "optimization/smaller-profile An asymptotically smaller attainable overhead profile",
  "text": "从一个满足二进可和条件的开销函数出发，构造在全体正整数上渐近更小的可达函数。",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/smaller-profile/tasks/public/PROBLEM.md"
 },
 {
  "page": "题目目录",
  "title": "Tier 2 挑战档题目",
  "alias": "Task catalogue",
  "text": "分数覆盖的常数倍整数舍入 独立稀释后的随机支配 Talagrand 离散凸性主结论 Boolean 线性阈值函数的低阶 Fourier 权重 有序 Bellman 递推的周期极限与严格支撑间隙 二进插值在 3/2 处的单侧导数 随机比较点下的条件末次迭代界 从单个边际约束推出倒数平方可和 随机梯度下降末次迭代的时间一致收敛边界 对称递推的精确周期律与全部聚点 单条高斯轨道对二进区间步长总和的限制 四点重排的完整等号判据 判定所有最优有序合成树 从离散最优合成到连续有序分割 Cantor 前缀解码的最优误差量级 收缩随机逼近的全时域界与同阶高斯下界 强凸 SGD 在固定时刻的指数矩与尾界 高斯梯度观测下的全时域优化下界 强凸随机梯度下降的全时域界 任意可达的开销函数都有渐近更小的可达函数",
  "href": "catalogue.html#tier2"
 },
 {
  "page": "题目目录",
  "title": "查找一个定理",
  "alias": "Task catalogue",
  "text": "打开 交互题库 ，选择 Tier 1 或 Tier 2，再选择领域。列表适合查找，卡片同时显示数学目标的简述。点击题名查看目标声明名，复制题目链接可分享同一道题。",
  "href": "catalogue.html#browse"
 },
 {
  "page": "题目目录",
  "title": "阅读题包",
  "alias": "Task catalogue",
  "text": "PROBLEM.md 定义数学任务， Foundation.lean 提供允许使用的基础， Task.lean 包含待完成的声明。完整参数、假设和结论以冻结的 Lean 类型为准。",
  "href": "catalogue.html#files"
 },
 {
  "page": "题目目录",
  "title": "导出题目清单",
  "alias": "Task catalogue",
  "text": "在首页 评测资源 下载 JSON 目录，取得每题的标识、难度、领域与目标。使用题目标识将本地 run 或 judge 收据与目录对应起来。",
  "href": "catalogue.html#download"
 },
 {
  "page": "模型与运行配置",
  "title": "填写配置文件",
  "alias": "Model and run configuration",
  "text": "从示例复制本地 JSON。 base_url 填 API 根路径； model 填实际请求的标识， model_revision 记录快照或注明别名未锁定。 api_key_env 指定从哪个环境变量读取密钥。 Shell 复制 mkdir -p .runtime cp -n problems/theorem-proving/evaluation/model.example.json .runtime/my-model.json",
  "href": "model.html#fields"
 },
 {
  "page": "模型与运行配置",
  "title": "请求与用量",
  "alias": "Model and run configuration",
  "text": "运行前固定推理设置和单次输出上限。保留请求与返回的模型名和真实 usage。总输出计数包含供应商报告的推理 token；缺失用量按基础设施问题记录。",
  "href": "model.html#requests"
 },
 {
  "page": "模型与运行配置",
  "title": "查找运行文件",
  "alias": "Model and run configuration",
  "text": "运行目录包含 run.json 、分题记录与原始提交。成功提交保存于 submissions/<领域>/<题目>/Task.lean 。分享结果时使用汇总表；模型私有状态和密钥留在本地。",
  "href": "model.html#outputs"
 },
 {
  "page": "准备资源与缓存",
  "title": "导入发行包",
  "alias": "Prepare resources",
  "text": "解压 v2 环境包 。目录包括 bundle.json 、 images.tar.gz 、 release/ 和 client/ 。对照 bundle 清单核对镜像归档的 SHA256，再执行导入。 Shell 复制 BUNDLE=/absolute/path/to/lean-core20-evaluation-2h-v2 docker load -i \"$BUNDLE/images.tar.gz\"",
  "href": "resources.html#bundle"
 },
 {
  "page": "准备资源与缓存",
  "title": "准备或绑定固定依赖",
  "alias": "Prepare resources",
  "text": "首次运行 bootstrap，从固定版本准备 Lean 和 Mathlib。已有相同版本的缓存时，使用 bind-cache 绑定 Linux 工具链与依赖目录。选用适合本机的一种方法。 Shell 复制 python3 -m scripts.lean_core_eval bootstrap --release \"$BUNDLE/release\" \\ --output .runtime/core20-eval-cache Shell 复制 python3 -m scripts.lean_core_eval bind-cache --release \"$BUNDLE/release\" \\ --dependencies /absolute/path/to/shared/.lake/packages \\ --toolchain /absolute/path/to/lean-4.33.1-linux",
  "href": "resources.html#cache"
 },
 {
  "page": "准备资源与缓存",
  "title": "检查环境",
  "alias": "Prepare resources",
  "text": "在评测计时开始前运行 doctor。若工具链版本、镜像或依赖绑定有误，先按 故障排查 处理。 Shell 复制 python3 -m scripts.lean_core_eval doctor --release \"$BUNDLE/release\" --output .runtime/tier1-doctor",
  "href": "resources.html#check"
 },
 {
  "page": "主机要求",
  "title": "宿主工具",
  "alias": "Host requirements",
  "text": "准备 Docker、Python ≥ 3.11、Git、curl 和支持 zstd 的归档工具。使用以下命令确认 Python 与 Docker 服务可用。 Shell 复制 python3 --version docker version",
  "href": "host.html#tools"
 },
 {
  "page": "主机要求",
  "title": "容器规格",
  "alias": "Host requirements",
  "text": "单个评测容器固定为 linux/amd64、2 CPU、8 GiB 内存、最多 256 个 PID。题目运行时关闭容器网络，根文件系统与依赖卷只读。宿主还需要为系统和 Docker 本身预留资源。",
  "href": "host.html#limits"
 },
 {
  "page": "主机要求",
  "title": "记录实际平台",
  "alias": "Host requirements",
  "text": "在 ARM 主机上仿真 amd64 可用于兼容性检查。记录宿主、虚拟机及执行架构，比较正式耗时时使用相同的运行条件。",
  "href": "host.html#timing"
 },
 {
  "page": "模型工具与评测协议",
  "title": "四个工具",
  "alias": "Tools and evaluation protocol",
  "text": "read_file 读取公开文件， search_mathlib 检索固定依赖里的数学库。 check_lean 检查候选代码并返回诊断， submit_proof 提交最终的 Lean 文件。",
  "href": "protocol.html#tools"
 },
 {
  "page": "模型工具与评测协议",
  "title": "单题预算",
  "alias": "Tools and evaluation protocol",
  "text": "最长 7200 秒，最多 128 次模型响应、512 次工具调用、524288 个输出 token。每次响应最多 65536 个输出 token；最后阶段的预留计入总预算。",
  "href": "protocol.html#budgets"
 },
 {
  "page": "模型工具与评测协议",
  "title": "提交与判分",
  "alias": "Tools and evaluation protocol",
  "text": "作答期间的 Lean 检查计入时间。最终提交在独立 judge 中检查。对运行配置、预算与提交原件保留记录，以便区分数学结果和环境中断。",
  "href": "protocol.html#feedback"
 },
 {
  "page": "模型接口适配器",
  "title": "输入与输出",
  "alias": "Provider adapters",
  "text": "适配器从 stdin 读取一份规范请求，从 stdout 写回单份规范 JSON 响应。保留系统消息、用户消息、工具定义和工具反馈。命令配置使用参数数组，见 适配器示例 。",
  "href": "adapters.html#contract"
 },
 {
  "page": "模型接口适配器",
  "title": "保留供应商状态",
  "alias": "Provider adapters",
  "text": "将需要下一轮回传的原生推理或签名字段保存在私有 provider_state。使用真实返回的模型名和 token 用量；适配器源码哈希会随运行记录保存。",
  "href": "adapters.html#state"
 },
 {
  "page": "模型接口适配器",
  "title": "接入前核对",
  "alias": "Provider adapters",
  "text": "用 成员模板 核对输入和返回形状。模板中的 complete 需要实现实际接口。确认一次普通响应和一次工具调用都能往返，再安排正式运行。",
  "href": "adapters.html#check"
 },
 {
  "page": "评分与结果",
  "title": "单题结果",
  "alias": "Scoring and results",
  "text": "验收通过记 100 分；被判题器拒绝或正常完成但没有提交记 0 分。基础设施故障、尚未运行或待验收的题目保留未定分状态。",
  "href": "scoring.html#task"
 },
 {
  "page": "评分与结果",
  "title": "读懂一个难度的成绩",
  "alias": "Scoring and results",
  "text": "每档有 20 题。例如通过 3 题，总分为 300/2000，通过率为 15%。阶段记录会同时列出已评分题数和通过题数，最终通过率留待定分。团队提供的整档汇总在来源栏标为团队汇总。",
  "href": "scoring.html#tier"
 },
 {
  "page": "评分与结果",
  "title": "对照 CSV",
  "alias": "Scoring and results",
  "text": "accepted 是通过题数， scored 是已有的定分记录数， total 是该档题数。 pass_rate 使用公布的分母， status 和 source 表示记录状态与来源。可从 Tier 1 和 Tier 2 单独下载成绩。",
  "href": "scoring.html#csv"
 },
 {
  "page": "独立判题与隔离检查",
  "title": "模型能看到什么",
  "alias": "Independent judging and isolation",
  "text": "public 容器提供公开定义、模板与 Mathlib 工具。judge 容器持有固定目标并检查最终提交。维护者完整参考证明独立存放。",
  "href": "judge.html#boundary"
 },
 {
  "page": "独立判题与隔离检查",
  "title": "怎样验收证明",
  "alias": "Independent judging and isolation",
  "text": "检查目标类型、Lean 内核证明和传递公理依赖。占位证明、私自增加公理或改变目标类型均不能通过。可在允许的环境中提交不同于参考解的证明。",
  "href": "judge.html#proof"
 },
 {
  "page": "独立判题与隔离检查",
  "title": "检查运行边界",
  "alias": "Independent judging and isolation",
  "text": "维护者使用有效证明、占位符和声明变化等对照检查环境。自检收据用于环境核验。模型成绩来自对应模型的实际提交与 judge 记录。",
  "href": "judge.html#controls"
 },
 {
  "page": "参考答案与核验范围",
  "title": "参考材料",
  "alias": "Reference answers",
  "text": "按单题保存冻结声明、来源版本以及适用的参考解收据。逐题核对状态：已复现完整证明、已核验声明和已完成模型测验分别说明不同的事实。",
  "href": "references.html#artifacts"
 },
 {
  "page": "参考答案与核验范围",
  "title": "两档题包",
  "alias": "Reference answers",
  "text": "Tier 2 的 4 道题有参考验收记录，16 道研究优化题沿用已有声明核验状态。每个模型提交仍使用相应题包的独立验收入口。",
  "href": "references.html#coverage"
 },
 {
  "page": "参考答案与核验范围",
  "title": "使用收据",
  "alias": "Reference answers",
  "text": "先匹配题目版本、工具链、依赖锁与验收记录，再判断现有收据是否可复用。公开题面和模型工具环境只提供解题所需材料。",
  "href": "references.html#access"
 },
 {
  "page": "引用本评测",
  "title": "BibTeX",
  "alias": "Cite Math Gym",
  "text": "BibTeX 复制 @misc{projectformula2026mathgym, author = {{Project Formula}}, title = {Math Gym: Theorem Proving}, year = {2026}, url = {https://project-formula.github.io/math-gym-lean-pages/} }",
  "href": "citation.html#bibtex"
 },
 {
  "page": "引用本评测",
  "title": "引用具体结果",
  "alias": "Cite Math Gym",
  "text": "报告中写明模型标识、Tier、通过数和题数，记录数据日期。可在 首页引用区 下载 .bib 文件，在对应榜单下载同次结果的 CSV。",
  "href": "citation.html#snapshot"
 },
 {
  "page": "构建、自检与分发",
  "title": "构建冻结环境",
  "alias": "Build, check and distribute",
  "text": "在项目根目录运行维护者流程。prepare 接收锁定的依赖与 Linux Lean 工具链；build 生成镜像，doctor 核对环境。构建参数和发布方式见 仓库评测说明 。",
  "href": "maintenance.html#build"
 },
 {
  "page": "构建、自检与分发",
  "title": "两类对照",
  "alias": "Build, check and distribute",
  "text": "在新环境中用 selftest 批量检查维护者参考证明，再运行公开环境对照，核对文件可见性和候选隔离。发布前保存环境标识、两份镜像 ID 和自检收据。",
  "href": "maintenance.html#controls"
 },
 {
  "page": "构建、自检与分发",
  "title": "交付环境",
  "alias": "Build, check and distribute",
  "text": "导出包包含镜像归档、bundle 清单、release 和客户端。Lean 与 Mathlib 缓存由成员在本机固定与复用。独立传递归档 SHA256，以便接收者验证。",
  "href": "maintenance.html#export"
 },
 {
  "page": "故障排查",
  "title": "doctor 或依赖检查失败",
  "alias": "Troubleshooting",
  "text": "核对 BUNDLE 的绝对路径、Docker 服务、linux/amd64 镜像和缓存绑定。使用与发行包一致的工具链与依赖锁，再运行 doctor。",
  "href": "troubleshooting.html#setup"
 },
 {
  "page": "故障排查",
  "title": "接口中断或额度耗尽",
  "alias": "Troubleshooting",
  "text": "保留已经落盘的 run、响应计数和提交哈希。有效作答保留原分数；对基础设施中断的任务记录终止原因，由维护者决定是否登记补测。",
  "href": "troubleshooting.html#interrupted"
 },
 {
  "page": "故障排查",
  "title": "已有提交，评分未完成",
  "alias": "Troubleshooting",
  "text": "检查运行目录中的 submissions/ ，用同版 release 对原始提交运行 grade，再用 collect 汇总。如果只是判题基础设施出错，使用原提交恢复验收。查看 判分示例 。",
  "href": "troubleshooting.html#grading"
 },
 {
  "page": "贡献题目或修订",
  "title": "提议题目",
  "alias": "Contribute a theorem",
  "text": "先说明数学结论、出处、作者、固定版本和独立价值。优先范围是理论计算机科学、概率论、组合数学与优化。候选提案可以列出尚缺的证明或依赖。",
  "href": "contribute.html#select"
 },
 {
  "page": "贡献题目或修订",
  "title": "准备提交",
  "alias": "Contribute a theorem",
  "text": "按领域和项目组织材料，分开公开题面、基础定义与维护者参考证据。通用正式题需要完整 Lean 参考证明；专项赛道按仓库协议核对其证据要求。列出实际依赖闭包与来源归属。",
  "href": "contribute.html#package"
 },
 {
  "page": "贡献题目或修订",
  "title": "提交复核",
  "alias": "Contribute a theorem",
  "text": "采用 贡献模板 记录数学合同、许可及实际完成的核验。记录参考复现、题包验收和模型试跑各自的状态。网站内容问题也可提交到 展示仓库 。",
  "href": "contribute.html#review"
 },
 {
  "page": "许可、来源与分发",
  "title": "项目与单题记录",
  "alias": "Licenses and distribution",
  "text": "主仓库根目录提供 LICENSE 和 NOTICE 。具体题包另有 LICENSE 与 NOTICE。可从题目详情中的「来源说明」进入对应记录。",
  "href": "licenses.html#project"
 },
 {
  "page": "许可、来源与分发",
  "title": "第三方材料",
  "alias": "Licenses and distribution",
  "text": "复用或改编时，保留原作者、固定提交或论文版本、许可、必要声明和修改说明。不同来源可能使用不同条款，按实际文件记录核对。",
  "href": "licenses.html#upstream"
 },
 {
  "page": "许可、来源与分发",
  "title": "发行内容",
  "alias": "Licenses and distribution",
  "text": "公开评测环境的分发范围见 v2 清单。独立工具链、依赖缓存、维护者证明、原始服务商响应与个人凭据不属于该环境包。",
  "href": "licenses.html#distribution"
 },
 {
  "page": "Lean 环境与依赖锁",
  "title": "固定版本",
  "alias": "Lean and dependency locks",
  "text": "Lean 工具链为 4.33.1，Mathlib 固定到 0df444a360eaa60ab8c11dca51a86af692955474 。环境锁还记录配套包版本、镜像 ID 与控制器哈希。",
  "href": "dependencies.html#versions"
 },
 {
  "page": "Lean 环境与依赖锁",
  "title": "复用环境",
  "alias": "Lean and dependency locks",
  "text": "同一发行版可复用已准备好的依赖缓存。绑定前对照 release 的依赖锁和工具链，运行时以只读方式挂载。正式比较应使用相同题包版本与环境标识。",
  "href": "dependencies.html#repeat"
 },
 {
  "page": "Lean 环境与依赖锁",
  "title": "核对依赖来源",
  "alias": "Lean and dependency locks",
  "text": "在 环境锁 中查看依赖版本。题目级别的来源、署名与分发信息由该题包的 NOTICE 和 LICENSE 提供。",
  "href": "dependencies.html#provenance"
 }
];
