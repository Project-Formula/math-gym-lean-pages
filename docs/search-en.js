const searchEntries = [
 {
  "page": "Math Gym documentation",
  "title": "Choose a starting point",
  "alias": "Math Gym 定理证明文档",
  "text": "Run an evaluation Take one Tier 1 task, the Freedman martingale tail bound, from environment checks through submission and independent grading. Quickstart → Understand the scores Each task has one main theorem. A submission that passes independent verification earns 100 points. Scoring and results → Contribute a task Propose a mathematically useful result with a traceable source and independently checkable formal materials. Contribute a theorem →",
  "href": "index.html#start"
 },
 {
  "page": "Math Gym documentation",
  "title": "Continue an evaluation",
  "alias": "Math Gym 定理证明文档",
  "text": "Once one model is configured, run a tier to evaluate a complete set of 20 tasks. To check an installation first, use doctor . Before changing the endpoint or model, read model configuration and provider adapters . Keep a separate run record for each configuration.",
  "href": "index.html#continue"
 },
 {
  "page": "Math Gym documentation",
  "title": "Explore tasks and results",
  "alias": "Math Gym 定理证明文档",
  "text": "The task catalogue explains how to find a statement, its Lean template and its source. Scoring and results describes the leaderboard and its CSV columns. Use the citation guide to reference the benchmark.",
  "href": "index.html#explore"
 },
 {
  "page": "Math Gym documentation",
  "title": "Project repository",
  "alias": "Math Gym 定理证明文档",
  "text": "This handbook is publicly readable. GitHub links to task packages, source documentation and the environment release require access to the project repository.",
  "href": "index.html#sources"
 },
 {
  "page": "Project overview",
  "title": "Forty tasks in two tiers",
  "alias": "项目概览",
  "text": "Tier 1 and Tier 2 each contain 20 theorems. Tier 1 has five tasks each in optimization, combinatorics, probability and theoretical computer science. Tier 2 contains 16 optimization, three combinatorics and one probability task.",
  "href": "overview.html#tasks"
 },
 {
  "page": "Project overview",
  "title": "What an attempt contains",
  "alias": "项目概览",
  "text": "The model reads the public definitions and target, checks candidate proofs with the provided tools and submits a complete Task.lean. Each task starts a fresh model session. A separate judge verifies the submission.",
  "href": "overview.html#attempt"
 },
 {
  "page": "Project overview",
  "title": "Explore the benchmark",
  "alias": "项目概览",
  "text": "Use the task explorer to search by name, subject or tier. Read the evaluation protocol for the available tools and time and token limits.",
  "href": "overview.html#read"
 },
 {
  "page": "Quickstart",
  "title": "Prepare the environment",
  "alias": "快速开始",
  "text": "Use Python 3.11 or later and a running Docker engine. Obtain the project repository and the v2 environment release . Unpack the bundle. Run the commands from the repository root in the same shell, replacing the path with the unpacked directory. On a new machine, follow resource preparation to prepare the cache. Shell Copy BUNDLE=/absolute/path/to/lean-core20-evaluation-2h-v2 docker load -i \"$BUNDLE/images.tar.gz\"",
  "href": "quickstart.html#setup"
 },
 {
  "page": "Quickstart",
  "title": "Configure one model",
  "alias": "快速开始",
  "text": "Copy the model template . Supply the actual model ID, API root and revision. Set the named API key environment variable in your shell. Run doctor to check the images, toolchain and cache. Shell Copy mkdir -p .runtime cp -n problems/theorem-proving/evaluation/model.example.json .runtime/my-model.json Shell Copy python3 -m scripts.lean_core_eval doctor --release \"$BUNDLE/release\" --output .runtime/tier1-doctor",
  "href": "quickstart.html#model"
 },
 {
  "page": "Quickstart",
  "title": "Run one task",
  "alias": "快速开始",
  "text": "Choose a fresh output directory. This command calls the configured model provider. Shell Copy RUN=.runtime/core20-runs/freedman-first python3 -m scripts.lean_core_eval run --release \"$BUNDLE/release\" \\ --model .runtime/my-model.json --output \"$RUN\" \\ --task probability/freedman-martingale-tail",
  "href": "quickstart.html#run"
 },
 {
  "page": "Quickstart",
  "title": "Inspect the result",
  "alias": "快速开始",
  "text": "Inspect run.json in the run directory. Grade the original submission when one exists, then collect the records. One task supplies a single-task result. To evaluate all 20, see run a tier . Shell Copy python3 -m scripts.lean_core_eval grade --release \"$BUNDLE/release\" \\ --submissions \"$RUN/submissions\" --output \"$RUN/grading\" python3 -m scripts.lean_core_eval collect --release \"$BUNDLE/release\" \\ --run \"$RUN\" --output \"$RUN/summary.json\"",
  "href": "quickstart.html#inspect"
 },
 {
  "page": "Run Tier 1 or Tier 2",
  "title": "Tier 1 · Foundation",
  "alias": "运行 Tier 1 或 Tier 2",
  "text": "Complete the installation, model configuration and doctor checks in Quickstart . Use the v2 core release and omit the single-task filter to run all 20. When the run finishes, execute the grade and collect commands in the same shell. Shell Copy RUN=.runtime/core20-runs/tier1-model python3 -m scripts.lean_core_eval run --release \"$BUNDLE/release\" \\ --model .runtime/my-model.json --output \"$RUN\"",
  "href": "tiers.html#tier1"
 },
 {
  "page": "Run Tier 1 or Tier 2",
  "title": "Tier 2 · Challenge",
  "alias": "运行 Tier 1 或 Tier 2",
  "text": "From the repository root, inspect the next queue in a clean workspace. The full challenge tier contains 20 tasks. Existing valid attempts for the same task version are skipped in later queues. Check the selection, prepare a fresh directory and run doctor. Shell Copy python3 -m scripts.theorem_eval plan ROUND=.runtime/theorem-proving/tier2 python3 -m scripts.theorem_eval prepare --base \"$BUNDLE/release\" --output \"$ROUND\" python3 -m scripts.theorem_eval doctor --release \"$ROUND\" --output .runtime/tier2-doctor",
  "href": "tiers.html#tier2"
 },
 {
  "page": "Run Tier 1 or Tier 2",
  "title": "Launch the challenge tier",
  "alias": "运行 Tier 1 或 Tier 2",
  "text": "Use a new run name. The driver saves submissions, grades submitted proofs and writes a summary. Repeat the task option to select individual tasks from the queue. Shell Copy python3 -m scripts.theorem_eval run --release \"$ROUND\" \\ --model .runtime/my-model.json --name tier2-model",
  "href": "tiers.html#launch"
 },
 {
  "page": "Tier 1",
  "title": "Berge’s augmenting path criterion for maximum matchings",
  "alias": "combinatorics/augmenting-path-maximum-matching Berge 最大匹配的增广链刻画",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/augmenting-path-maximum-matching/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Chowla’s sumset bound under a unit-difference condition",
  "alias": "combinatorics/chowla-residue-sumsets Chowla 单位差和集增长（受限版本）",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/chowla-residue-sumsets/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Extremal graphs with bounded clique and matching numbers",
  "alias": "combinatorics/clique-bounded-matching-extremal 团数与匹配数双约束的极值图",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/clique-bounded-matching-extremal/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "The Erdős–Heilbronn bound for restricted pair sums",
  "alias": "combinatorics/erdos-heilbronn-restricted-sums Erdős–Heilbronn 二重受限和集界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/erdos-heilbronn-restricted-sums/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Extremal uniform families with bounded matching number",
  "alias": "combinatorics/uniform-family-bounded-matching 均匀集合族的匹配极值与唯一性",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/uniform-family-bounded-matching/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Accelerated convergence for smooth convex objectives",
  "alias": "optimization/accelerated-smooth-gradient Nesterov 光滑凸优化加速收敛",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/accelerated-smooth-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Kall–Mayer saddle points and primal–dual optimality",
  "alias": "optimization/kall-mayer-kkt Kall–Mayer 拉格朗日鞍点与原对偶最优性",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/kall-mayer-kkt/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Lower bounds and PSD certificates for one quadratic constraint",
  "alias": "optimization/quadratic-constraint-duality 单二次约束的下界与 PSD 对偶证书",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/quadratic-constraint-duality/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Stochastic accelerated gradients with a conditional oracle",
  "alias": "optimization/stochastic-accelerated-gradient 随机加速梯度的显式条件 oracle 版本",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/stochastic-accelerated-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Logarithmic regret for strongly convex online gradients",
  "alias": "optimization/strongly-convex-online-gradient 强凸在线梯度的对数遗憾界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/strongly-convex-online-gradient/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "The Brownian exponential martingale",
  "alias": "probability/brownian-exponential-martingale Brownian 指数过程的鞅性质",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/brownian-exponential-martingale/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Existence and uniqueness of a continuous-path Markov kernel",
  "alias": "probability/continuous-markov-process 连续路径 Markov 核的存在唯一性",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/continuous-markov-process/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Doob’s strong Lᵖ maximal inequality",
  "alias": "probability/doob-lp-maximal Doob 强型 Lᵖ 极大不等式",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/doob-lp-maximal/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Freedman’s martingale tail bound",
  "alias": "probability/freedman-martingale-tail Freedman 鞅尾界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/freedman-martingale-tail/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Kolmogorov’s three-series theorem",
  "alias": "probability/kolmogorov-three-series Kolmogorov 三列定理",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/kolmogorov-three-series/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "An explicit competitive ratio for online set cover",
  "alias": "theoretical-computer-science/online-set-cover 在线集合覆盖的显式整数竞争比",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/online-set-cover/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Optimal-order PAC sample complexity under measurability assumptions",
  "alias": "theoretical-computer-science/optimal-pac-sample-complexity 带显式可测性条件的最优阶 PAC 样本复杂度",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/optimal-pac-sample-complexity/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Expected edge removal in one parallel MIS round",
  "alias": "theoretical-computer-science/parallel-independent-set 保守并列规则下 MIS 单轮期望消边界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/parallel-independent-set/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "Iteration count and optimality for shortest augmenting paths",
  "alias": "theoretical-computer-science/shortest-augmenting-path 最短增广路的次数界与停机最优性",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/shortest-augmenting-path/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 1",
  "title": "An instance-family barrier for online stochastic matching",
  "alias": "theoretical-computer-science/stochastic-matching-barrier 在线随机匹配的一般实例族障碍",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/theoretical-computer-science/stochastic-matching-barrier/tasks/public/PROBLEM.md"
 },
 {
  "page": "Task catalogue",
  "title": "Tier 1 tasks",
  "alias": "题目目录",
  "text": "Berge’s augmenting path criterion for maximum matchings Chowla’s sumset bound under a unit-difference condition Extremal graphs with bounded clique and matching numbers The Erdős–Heilbronn bound for restricted pair sums Extremal uniform families with bounded matching number Accelerated convergence for smooth convex objectives Kall–Mayer saddle points and primal–dual optimality Lower bounds and PSD certificates for one quadratic constraint Stochastic accelerated gradients with a conditional oracle Logarithmic regret for strongly convex online gradients The Brownian exponential martingale Existence and uniqueness of a continuous-path Markov kernel Doob’s strong Lᵖ maximal inequality Freedman’s martingale tail bound Kolmogorov’s three-series theorem An explicit competitive ratio for online set cover Optimal-order PAC sample complexity under measurability assumptions Expected edge removal in one parallel MIS round Iteration count and optimality for shortest augmenting paths An instance-family barrier for online stochastic matching",
  "href": "catalogue.html#tier1"
 },
 {
  "page": "Tier 2",
  "title": "Constant-factor integral rounding of fractional covers",
  "alias": "combinatorics/expectation-threshold-equivalence 分数覆盖的常数倍整数舍入",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/expectation-threshold-equivalence/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Stochastic domination after independent thinning",
  "alias": "combinatorics/spread-thinning-domination 独立稀释后的随机支配",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/spread-thinning-domination/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Talagrand’s discrete convexity conclusion",
  "alias": "combinatorics/talagrand-discrete-convexity Talagrand 离散凸性主结论",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/combinatorics/talagrand-discrete-convexity/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Low-degree Fourier weight of Boolean linear threshold functions",
  "alias": "probability/ltf-low-degree-fourier-weight Boolean 线性阈值函数的低阶 Fourier 权重",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/probability/ltf-low-degree-fourier-weight/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Periodic limits and a strict support gap for an ordered Bellman recurrence",
  "alias": "optimization/asymmetric-phase-barrier 有序 Bellman 递推的周期极限与严格支撑间隙",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/asymmetric-phase-barrier/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "One-sided derivatives of a dyadic interpolant at 3/2",
  "alias": "optimization/certified-dyadic-corner 二进插值在 3/2 处的单侧导数",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/certified-dyadic-corner/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Conditional last-iterate bounds with a random comparator",
  "alias": "optimization/conditional-restart 随机比较点下的条件末次迭代界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/conditional-restart/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Reciprocal-square summability from a marginal bound",
  "alias": "optimization/dyadic-energy 从单个边际约束推出倒数平方可和",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/dyadic-energy/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "The time-uniform last-iterate frontier for stochastic gradient descent",
  "alias": "optimization/exact-frontier 随机梯度下降末次迭代的时间一致收敛边界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/exact-frontier/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Exact periodicity and limit points for a symmetric recurrence",
  "alias": "optimization/exact-symmetric-phase 对称递推的精确周期律与全部聚点",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/exact-symmetric-phase/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Dyadic step-size bounds from a single Gaussian trajectory",
  "alias": "optimization/gaussian-epoch-ceiling 单条高斯轨道对二进区间步长总和的限制",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/gaussian-epoch-ceiling/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Equality cases for a four-point rearrangement",
  "alias": "optimization/kernel-rearrangement 四点重排的完整等号判据",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/kernel-rearrangement/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Classification of optimal ordered composition trees",
  "alias": "optimization/optimal-tree-classification 判定所有最优有序合成树",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/optimal-tree-classification/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Scaling limits from discrete compositions to ordered partitions",
  "alias": "optimization/partition-scaling-limit 从离散最优合成到连续有序分割",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/partition-scaling-limit/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Optimal error scale for decoding Cantor prefixes",
  "alias": "optimization/sgd-cantor-decoder Cantor 前缀解码的最优误差量级",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-cantor-decoder/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Time-uniform contraction bounds and a matching Gaussian lower bound",
  "alias": "optimization/sgd-contractive-uniform 收缩随机逼近的全时域界与同阶高斯下界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-contractive-uniform/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "Fixed-time exponential moments and tails for strongly convex SGD",
  "alias": "optimization/sgd-extremal-logmgf 强凸 SGD 在固定时刻的指数矩与尾界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-extremal-logmgf/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "A time-uniform lower bound with Gaussian gradient observations",
  "alias": "optimization/sgd-gaussian-lower 高斯梯度观测下的全时域优化下界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-gaussian-lower/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "A time-uniform boundary for strongly convex SGD",
  "alias": "optimization/sgd-uniform-boundary 强凸随机梯度下降的全时域界",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/sgd-uniform-boundary/tasks/public/PROBLEM.md"
 },
 {
  "page": "Tier 2",
  "title": "An asymptotically smaller attainable overhead profile",
  "alias": "optimization/smaller-profile 任意可达的开销函数都有渐近更小的可达函数",
  "text": "Read the problem statement in the project repository.",
  "href": "https://github.com/Project-Formula/math-gym-lean/blob/main/problems/theorem-proving/optimization/smaller-profile/tasks/public/PROBLEM.md"
 },
 {
  "page": "Task catalogue",
  "title": "Tier 2 tasks",
  "alias": "题目目录",
  "text": "Constant-factor integral rounding of fractional covers Stochastic domination after independent thinning Talagrand’s discrete convexity conclusion Low-degree Fourier weight of Boolean linear threshold functions Periodic limits and a strict support gap for an ordered Bellman recurrence One-sided derivatives of a dyadic interpolant at 3/2 Conditional last-iterate bounds with a random comparator Reciprocal-square summability from a marginal bound The time-uniform last-iterate frontier for stochastic gradient descent Exact periodicity and limit points for a symmetric recurrence Dyadic step-size bounds from a single Gaussian trajectory Equality cases for a four-point rearrangement Classification of optimal ordered composition trees Scaling limits from discrete compositions to ordered partitions Optimal error scale for decoding Cantor prefixes Time-uniform contraction bounds and a matching Gaussian lower bound Fixed-time exponential moments and tails for strongly convex SGD A time-uniform lower bound with Gaussian gradient observations A time-uniform boundary for strongly convex SGD An asymptotically smaller attainable overhead profile",
  "href": "catalogue.html#tier2"
 },
 {
  "page": "Task catalogue",
  "title": "Find a theorem",
  "alias": "题目目录",
  "text": "Open the task explorer , select a tier and choose a subject. The list is compact. Cards also show the mathematical objective. Open a title to inspect its Lean target and copy a link to the task.",
  "href": "catalogue.html#browse"
 },
 {
  "page": "Task catalogue",
  "title": "Read the task package",
  "alias": "题目目录",
  "text": "PROBLEM.md describes the mathematical question. Foundation.lean supplies the allowed definitions. Task.lean contains the declaration to prove. The frozen Lean type specifies the exact parameters, assumptions and conclusion.",
  "href": "catalogue.html#files"
 },
 {
  "page": "Task catalogue",
  "title": "Export the catalogue",
  "alias": "题目目录",
  "text": "Download the JSON catalogue in resources for task identifiers, tiers, subjects and targets. Use the task ID to match a run or judge receipt to its catalogue entry.",
  "href": "catalogue.html#download"
 },
 {
  "page": "Model and run configuration",
  "title": "Fill in the configuration",
  "alias": "模型与运行配置",
  "text": "Copy the example JSON. Set base_url to the API root, model to the requested model ID and model_revision to the provider snapshot or an explicit description of an unresolved alias. The api_key_env field names the environment variable holding the key. Shell Copy mkdir -p .runtime cp -n problems/theorem-proving/evaluation/model.example.json .runtime/my-model.json",
  "href": "model.html#fields"
 },
 {
  "page": "Model and run configuration",
  "title": "Requests and usage",
  "alias": "模型与运行配置",
  "text": "Fix the reasoning settings and per-response output limit before the run. Record the requested and returned model names and the provider's actual usage. Output accounting includes reported reasoning tokens. Missing usage is an infrastructure issue.",
  "href": "model.html#requests"
 },
 {
  "page": "Model and run configuration",
  "title": "Locate the run files",
  "alias": "模型与运行配置",
  "text": "The run directory holds run.json, task records and the original submissions. A submitted proof is saved under submissions/<domain>/<task>/Task.lean. Use aggregate results for sharing and keep provider state and credentials local.",
  "href": "model.html#outputs"
 },
 {
  "page": "Prepare resources",
  "title": "Import the release",
  "alias": "准备资源与缓存",
  "text": "Unpack the v2 bundle . It includes bundle.json, images.tar.gz, release/ and client/. Compare the image archive's SHA256 with the bundle manifest before importing it. Shell Copy BUNDLE=/absolute/path/to/lean-core20-evaluation-2h-v2 docker load -i \"$BUNDLE/images.tar.gz\"",
  "href": "resources.html#bundle"
 },
 {
  "page": "Prepare resources",
  "title": "Prepare or bind the fixed cache",
  "alias": "准备资源与缓存",
  "text": "Use bootstrap on a fresh machine to prepare the pinned Lean toolchain and Mathlib dependencies. If the same versions are already available, use bind-cache with the Linux toolchain and dependency directories. Choose one of the following approaches. Shell Copy python3 -m scripts.lean_core_eval bootstrap --release \"$BUNDLE/release\" \\ --output .runtime/core20-eval-cache Shell Copy python3 -m scripts.lean_core_eval bind-cache --release \"$BUNDLE/release\" \\ --dependencies /absolute/path/to/shared/.lake/packages \\ --toolchain /absolute/path/to/lean-4.33.1-linux",
  "href": "resources.html#cache"
 },
 {
  "page": "Prepare resources",
  "title": "Check readiness",
  "alias": "准备资源与缓存",
  "text": "Run doctor before starting the model clock. If the release, image or cache binding does not match, consult troubleshooting . Shell Copy python3 -m scripts.lean_core_eval doctor --release \"$BUNDLE/release\" --output .runtime/tier1-doctor",
  "href": "resources.html#check"
 },
 {
  "page": "Host requirements",
  "title": "Host tools",
  "alias": "主机要求",
  "text": "Prepare Docker, Python 3.11 or later, Git, curl and archive tools with zstd support. Check Python and the Docker service before starting. Shell Copy python3 --version docker version",
  "href": "host.html#tools"
 },
 {
  "page": "Host requirements",
  "title": "Container resources",
  "alias": "主机要求",
  "text": "A task container uses linux/amd64, two CPUs, 8 GiB of memory and up to 256 PIDs. Container networking is disabled. The root filesystem and dependency volumes are read-only. Allow additional host resources for the operating system and Docker.",
  "href": "host.html#limits"
 },
 {
  "page": "Host requirements",
  "title": "Record the platform",
  "alias": "主机要求",
  "text": "An amd64 container emulated on ARM can check compatibility. Record the host, VM and execution architectures so that timing comparisons use the same execution conditions.",
  "href": "host.html#timing"
 },
 {
  "page": "Tools and evaluation protocol",
  "title": "Four public tools",
  "alias": "模型工具与评测协议",
  "text": "read_file reads public files. search_mathlib searches the pinned mathematical library. check_lean returns diagnostics on a candidate proof. submit_proof submits the final Lean file.",
  "href": "protocol.html#tools"
 },
 {
  "page": "Tools and evaluation protocol",
  "title": "Per-task limits",
  "alias": "模型工具与评测协议",
  "text": "The limits are 7,200 seconds, 128 model responses, 512 tool calls and 524,288 total output tokens. A single response can use up to 65,536 output tokens. The final-answer reserve is part of the total allowance.",
  "href": "protocol.html#budgets"
 },
 {
  "page": "Tools and evaluation protocol",
  "title": "Feedback and submission",
  "alias": "模型工具与评测协议",
  "text": "Lean checks made during an attempt count against its clock. The independent judge checks the final submission separately. Keep the frozen configuration, budget and original submission alongside the run record.",
  "href": "protocol.html#feedback"
 },
 {
  "page": "Provider adapters",
  "title": "Request and response",
  "alias": "模型接口适配器",
  "text": "The adapter reads one canonical request from stdin and writes one canonical JSON response to stdout. Preserve system and user messages, tool definitions and tool feedback. Specify the command as an argument array. See the configuration example .",
  "href": "adapters.html#contract"
 },
 {
  "page": "Provider adapters",
  "title": "Preserve provider state",
  "alias": "模型接口适配器",
  "text": "Keep native reasoning or signature fields needed for the next turn in private provider_state. Return the actual model ID and token usage. The run record includes the adapter source hash.",
  "href": "adapters.html#state"
 },
 {
  "page": "Provider adapters",
  "title": "Check the integration",
  "alias": "模型接口适配器",
  "text": "The member template shows the request and response shapes. Implement complete for the chosen provider. Check a normal response and a tool call round trip before the evaluation.",
  "href": "adapters.html#check"
 },
 {
  "page": "Scoring and results",
  "title": "Single-task outcomes",
  "alias": "评分与结果",
  "text": "An accepted proof earns 100. A rejected submission or a normally completed attempt with no submission earns zero. Infrastructure errors, pending judgments and unrun tasks remain unscored.",
  "href": "scoring.html#task"
 },
 {
  "page": "Scoring and results",
  "title": "Read a tier result",
  "alias": "评分与结果",
  "text": "A tier has 20 tasks. For example, three accepted proofs give 300/2000 points and a 15% pass rate. Interim records show the number graded and accepted, with the final rate pending. Team-reported aggregates are identified in the source column.",
  "href": "scoring.html#tier"
 },
 {
  "page": "Scoring and results",
  "title": "Interpret the CSV",
  "alias": "评分与结果",
  "text": "model includes the version. When the version comes from the provider's description of an API alias, version_note identifies the model string returned during evaluation. Accepted counts the successful tasks, scored counts the recorded judgments and total is the tier size. The pass_rate uses the published denominator. Status and source identify incomplete, completed or team-reported records. Download either the Tier 1 or Tier 2 table.",
  "href": "scoring.html#csv"
 },
 {
  "page": "Independent judging and isolation",
  "title": "What the model sees",
  "alias": "独立判题与隔离检查",
  "text": "The public container exposes the definitions, template and Mathlib tools. The judge holds the frozen target and checks the final submission. Complete reference proofs remain with the maintainers.",
  "href": "judge.html#boundary"
 },
 {
  "page": "Independent judging and isolation",
  "title": "What the judge accepts",
  "alias": "独立判题与隔离检查",
  "text": "The judge checks the target type, the kernel proof and transitive axiom dependencies. Placeholders, added axioms and a changed target type fail these checks. Alternative proofs within the permitted environment can pass.",
  "href": "judge.html#proof"
 },
 {
  "page": "Independent judging and isolation",
  "title": "Check the boundary",
  "alias": "独立判题与隔离检查",
  "text": "Maintainers run controls for valid proofs, placeholders and changed declarations. These receipts document environment checks. Model scores come from the model's submitted files and their judge records.",
  "href": "judge.html#controls"
 },
 {
  "page": "Reference answers",
  "title": "Reference materials",
  "alias": "参考答案与核验范围",
  "text": "Each task records its frozen target, source revision and applicable reference receipts. Reproducing a full proof, checking a statement and running a model are distinct stages.",
  "href": "references.html#artifacts"
 },
 {
  "page": "Reference answers",
  "title": "Coverage in the tiers",
  "alias": "参考答案与核验范围",
  "text": "Four Tier 2 tasks have reference acceptance receipts. The other 16 research optimization tasks retain their recorded statement-verification status. Each model submission still goes through its task's independent judge.",
  "href": "references.html#coverage"
 },
 {
  "page": "Reference answers",
  "title": "Reuse a receipt",
  "alias": "参考答案与核验范围",
  "text": "Match the task version, toolchain, dependency lock and verification record before reusing a receipt. The solver environment exposes only the materials intended for solving the task.",
  "href": "references.html#access"
 },
 {
  "page": "Cite Math Gym",
  "title": "BibTeX",
  "alias": "引用本评测",
  "text": "BibTeX Copy @misc{projectformula2026mathgym, author = {{Project Formula}}, title = {Math Gym: Theorem Proving}, year = {2026}, url = {https://project-formula.github.io/math-gym-lean-pages/} }",
  "href": "citation.html#bibtex"
 },
 {
  "page": "Cite Math Gym",
  "title": "Cite a particular result",
  "alias": "引用本评测",
  "text": "Record the model identifier, tier, accepted count, task count and date. Download a .bib file from the citation section and the corresponding results CSV from the leaderboard.",
  "href": "citation.html#snapshot"
 },
 {
  "page": "Build, check and distribute",
  "title": "Build the frozen environment",
  "alias": "构建、自检与分发",
  "text": "Work from the repository root. Prepare takes the pinned dependencies and Linux Lean toolchain; build creates the images; doctor checks readiness. The repository guide documents the arguments and release procedure.",
  "href": "maintenance.html#build"
 },
 {
  "page": "Build, check and distribute",
  "title": "Run the controls",
  "alias": "构建、自检与分发",
  "text": "Use selftest to check the maintainer reference proofs in the new environment. Run the public-environment controls for file visibility and candidate isolation. Record both image IDs, the environment identifier and the control receipts.",
  "href": "maintenance.html#controls"
 },
 {
  "page": "Build, check and distribute",
  "title": "Distribute the bundle",
  "alias": "构建、自检与分发",
  "text": "Export the image archive, bundle manifest, release and client. Members prepare and reuse the Lean and Mathlib cache locally. Supply the archive checksum so recipients can validate the delivery.",
  "href": "maintenance.html#export"
 },
 {
  "page": "Troubleshooting",
  "title": "Doctor or cache check fails",
  "alias": "故障排查",
  "text": "Check the absolute bundle path, Docker service, linux/amd64 images and cache binding. Match the release toolchain and dependency lock, then run doctor again.",
  "href": "troubleshooting.html#setup"
 },
 {
  "page": "Troubleshooting",
  "title": "Provider interruption or quota limit",
  "alias": "故障排查",
  "text": "Preserve the existing run, response counts and submission hashes. Keep valid task scores. Record the reason for each infrastructure interruption so maintainers can decide whether to register a recovery attempt.",
  "href": "troubleshooting.html#interrupted"
 },
 {
  "page": "Troubleshooting",
  "title": "Submission exists, grade pending",
  "alias": "故障排查",
  "text": "Locate the original file in submissions/. Run grade with the same release and collect the result. If the judge infrastructure failed, regrade the same submission. See the grading commands .",
  "href": "troubleshooting.html#grading"
 },
 {
  "page": "Contribute a theorem",
  "title": "Propose a task",
  "alias": "贡献题目或修订",
  "text": "Identify the conclusion, source, authors, pinned version and mathematical value. Priority areas include theoretical computer science, probability, combinatorics and optimization. A candidate proposal can list remaining proof or dependency gaps.",
  "href": "contribute.html#select"
 },
 {
  "page": "Contribute a theorem",
  "title": "Prepare a contribution",
  "alias": "贡献题目或修订",
  "text": "Organize materials by subject and project. Separate the public statement and foundations from maintainer evidence. General formal tasks require complete Lean reference proofs; designated special tracks follow their own evidence requirements. Document the actual dependency closure and attribution.",
  "href": "contribute.html#package"
 },
 {
  "page": "Contribute a theorem",
  "title": "Request review",
  "alias": "贡献题目或修订",
  "text": "Use the contribution template to record the contract, license and checks performed. Record reference reproduction, task acceptance and model trials separately. Report website corrections in the website repository .",
  "href": "contribute.html#review"
 },
 {
  "page": "Licenses and distribution",
  "title": "Project and task records",
  "alias": "许可、来源与分发",
  "text": "The project repository contains the root LICENSE and NOTICE . Individual task packages also have LICENSE and NOTICE files. Each task detail in the explorer links to its source notice.",
  "href": "licenses.html#project"
 },
 {
  "page": "Licenses and distribution",
  "title": "Third-party materials",
  "alias": "许可、来源与分发",
  "text": "Preserve the original authors, pinned commit or paper version, license, required notices and a description of changes. Check the terms that apply to each file and upstream source.",
  "href": "licenses.html#upstream"
 },
 {
  "page": "Licenses and distribution",
  "title": "Release contents",
  "alias": "许可、来源与分发",
  "text": "The v2 bundle manifest inventories the distributed evaluation materials. External toolchains, dependency caches, maintainer proofs, raw provider responses and personal credentials are outside that bundle.",
  "href": "licenses.html#distribution"
 },
 {
  "page": "Lean and dependency locks",
  "title": "Pinned versions",
  "alias": "Lean 环境与依赖锁",
  "text": "The Lean toolchain is 4.33.1. Mathlib is pinned to 0df444a360eaa60ab8c11dca51a86af692955474 . The environment lock also records package revisions, image IDs and controller hashes.",
  "href": "dependencies.html#versions"
 },
 {
  "page": "Lean and dependency locks",
  "title": "Reuse the environment",
  "alias": "Lean 环境与依赖锁",
  "text": "Reuse a prepared dependency cache for the same release. Check the dependency lock and toolchain before binding the cache, then mount it read-only during execution. Compare formal runs with matching task versions and environment IDs.",
  "href": "dependencies.html#repeat"
 },
 {
  "page": "Lean and dependency locks",
  "title": "Trace the dependencies",
  "alias": "Lean 环境与依赖锁",
  "text": "Consult the environment lock for dependency versions. Task-level source, attribution and distribution records are in each package's NOTICE and LICENSE.",
  "href": "dependencies.html#provenance"
 }
];
