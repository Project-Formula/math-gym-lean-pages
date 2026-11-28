# index | Math Gym documentation
Run your first Lean proof task, follow a score back to its evaluation, or contribute a theorem to the benchmark.
## start | Choose a starting point
!cards quickstart scoring contribute
## continue | Continue an evaluation
- Once one model is configured, [run a tier](tiers) to evaluate a complete set of 20 tasks. To check an installation first, use [doctor](resources#check).
- Before changing the endpoint or model, read [model configuration](model) and [provider adapters](adapters). Keep a separate run record for each configuration.
## explore | Explore tasks and results
The [task catalogue](catalogue) explains how to find a statement, its Lean template and its source. [Scoring and results](scoring) describes the leaderboard and its CSV columns. Use the [citation guide](citation) to reference the benchmark.
## sources | Project repository
This handbook is publicly readable. GitHub links to task packages, source documentation and the environment release require access to the project repository.
# overview | Project overview
Math Gym evaluates whether a model can complete a mathematical proof in a fixed Lean 4 environment.
## tasks | Forty tasks in two tiers
Tier 1 and Tier 2 each contain 20 theorems. Tier 1 has five tasks each in optimization, combinatorics, probability and theoretical computer science. Tier 2 contains 16 optimization, three combinatorics and one probability task.
## attempt | What an attempt contains
The model reads the public definitions and target, checks candidate proofs with the provided tools and submits a complete Task.lean. Each task starts a fresh model session. A separate judge verifies the submission.
## read | Explore the benchmark
Use the [task explorer](home:#tasks) to search by name, subject or tier. Read the [evaluation protocol](protocol) for the available tools and time and token limits.
# quickstart | Quickstart
Take one Tier 1 task, the Freedman martingale tail bound, from environment checks through submission and independent grading.
## setup | Prepare the environment
Use Python 3.11 or later and a running Docker engine. Obtain the project repository and the [v2 environment release](release). Unpack the bundle. Run the commands from the repository root in the same shell, replacing the path with the unpacked directory. On a new machine, follow [resource preparation](resources) to prepare the cache.
!code bundle
## model | Configure one model
Copy the [model template](repo:problems/theorem-proving/evaluation/model.example.json). Supply the actual model ID, API root and revision. Set the named API key environment variable in your shell. Run doctor to check the images, toolchain and cache.
!code config
!code doctor
## run | Run one task
Choose a fresh output directory. This command calls the configured model provider.
!code one
## inspect | Inspect the result
Inspect run.json in the run directory. Grade the original submission when one exists, then collect the records. One task supplies a single-task result. To evaluate all 20, see [run a tier](tiers).
!code grade
# tiers | Run Tier 1 or Tier 2
Both tiers share the per-task budget and proof checks. Each has its own frozen task selection.
## tier1 | Tier 1 · Foundation
Complete the installation, model configuration and doctor checks in [Quickstart](quickstart). Use the v2 core release and omit the single-task filter to run all 20. When the run finishes, execute the [grade and collect commands](quickstart#inspect) in the same shell.
!code tier1
## tier2 | Tier 2 · Challenge
From the repository root, inspect the next queue in a clean workspace. The full challenge tier contains 20 tasks. Existing valid attempts for the same task version are skipped in later queues. Check the selection, prepare a fresh directory and run doctor.
!code next-prepare
## launch | Launch the challenge tier
Use a new run name. The driver saves submissions, grades submitted proofs and writes a summary. Repeat the task option to select individual tasks from the queue.
!code next-run
# catalogue | Task catalogue
Select a task title to read its problem statement on GitHub. Sign in with an account that has access to the private project repository.
## tier1 | Tier 1 tasks
!catalogue Tier 1
## tier2 | Tier 2 tasks
!catalogue Tier 2
## browse | Find a theorem
Open the [task explorer](home:#tasks), select a tier and choose a subject. The list is compact. Cards also show the mathematical objective. Open a title to inspect its Lean target and copy a link to the task.
## files | Read the task package
PROBLEM.md describes the mathematical question. Foundation.lean supplies the allowed definitions. Task.lean contains the declaration to prove. The frozen Lean type specifies the exact parameters, assumptions and conclusion.
## download | Export the catalogue
Download the JSON catalogue in [resources](home:#resources) for task identifiers, tiers, subjects and targets. Use the task ID to match a run or judge receipt to its catalogue entry.
# model | Model and run configuration
Give each model, endpoint and reasoning configuration a distinct configuration file and run name.
## fields | Fill in the configuration
Copy the example JSON. Set base_url to the API root, model to the requested model ID and model_revision to the provider snapshot or an explicit description of an unresolved alias. The api_key_env field names the environment variable holding the key.
!code config
## requests | Requests and usage
Fix the reasoning settings and per-response output limit before the run. Record the requested and returned model names and the provider's actual usage. Output accounting includes reported reasoning tokens. Missing usage is an infrastructure issue.
## outputs | Locate the run files
The run directory holds run.json, task records and the original submissions. A submitted proof is saved under submissions/<domain>/<task>/Task.lean. Use aggregate results for sharing and keep provider state and credentials local.
# resources | Prepare resources
The release bundle, images and dependency cache must match the task statements and evaluation environment.
## bundle | Import the release
Unpack the [v2 bundle](release). It includes bundle.json, images.tar.gz, release/ and client/. Compare the image archive's SHA256 with the bundle manifest before importing it.
!code bundle
## cache | Prepare or bind the fixed cache
Use bootstrap on a fresh machine to prepare the pinned Lean toolchain and Mathlib dependencies. If the same versions are already available, use bind-cache with the Linux toolchain and dependency directories. Choose one of the following approaches.
!code bootstrap
!code bind
## check | Check readiness
Run doctor before starting the model clock. If the release, image or cache binding does not match, consult [troubleshooting](troubleshooting).
!code doctor
# host | Host requirements
Use a native Linux amd64 host for timed evaluations. Install dependencies and warm the shared environment before the task clock starts.
## tools | Host tools
Prepare Docker, Python 3.11 or later, Git, curl and archive tools with zstd support. Check Python and the Docker service before starting.
!code host
## limits | Container resources
A task container uses linux/amd64, two CPUs, 8 GiB of memory and up to 256 PIDs. Container networking is disabled. The root filesystem and dependency volumes are read-only. Allow additional host resources for the operating system and Docker.
## timing | Record the platform
An amd64 container emulated on ARM can check compatibility. Record the host, VM and execution architectures so that timing comparisons use the same execution conditions.
# protocol | Tools and evaluation protocol
Each task gets an independent attempt with public materials, a common set of tools and a fixed budget.
## tools | Four public tools
- `read_file` reads public files. `search_mathlib` searches the pinned mathematical library.
- `check_lean` returns diagnostics on a candidate proof. `submit_proof` submits the final Lean file.
## budgets | Per-task limits
The limits are 7,200 seconds, 128 model responses, 512 tool calls and 524,288 total output tokens. A single response can use up to 65,536 output tokens. The final-answer reserve is part of the total allowance.
## feedback | Feedback and submission
Lean checks made during an attempt count against its clock. The independent judge checks the final submission separately. Keep the frozen configuration, budget and original submission alongside the run record.
# adapters | Provider adapters
Chat Completions compatible endpoints can use the built-in driver. Other providers can use a member-supplied adapter.
## contract | Request and response
The adapter reads one canonical request from stdin and writes one canonical JSON response to stdout. Preserve system and user messages, tool definitions and tool feedback. Specify the command as an argument array. See the [configuration example](repo:problems/theorem-proving/evaluation/adapter.example.json).
## state | Preserve provider state
Keep native reasoning or signature fields needed for the next turn in private provider_state. Return the actual model ID and token usage. The run record includes the adapter source hash.
## check | Check the integration
The [member template](repo:problems/theorem-proving/evaluation/member-adapter.example.py) shows the request and response shapes. Implement complete for the chosen provider. Check a normal response and a tool call round trip before the evaluation.
# scoring | Scoring and results
Each task has one main theorem. A submission that passes independent verification earns 100 points.
## task | Single-task outcomes
An accepted proof earns 100. A rejected submission or a normally completed attempt with no submission earns zero. Infrastructure errors, pending judgments and unrun tasks remain unscored.
## tier | Read a tier result
A tier has 20 tasks. For example, three accepted proofs give 300/2000 points and a 15% pass rate. Interim records show the number graded and accepted, with the final rate pending. Team-reported aggregates are identified in the source column.
## csv | Interpret the CSV
`model` includes the version. When the version comes from the provider's description of an API alias, `version_note` identifies the model string returned during evaluation. Accepted counts the successful tasks, scored counts the recorded judgments and total is the tier size. The pass_rate uses the published denominator. Status and source identify incomplete, completed or team-reported records. Download either the [Tier 1](home:#tier-1) or [Tier 2](home:#tier-2) table.
# judge | Independent judging and isolation
The public worker and the judge load different materials for solving and verifying a task.
## boundary | What the model sees
The public container exposes the definitions, template and Mathlib tools. The judge holds the frozen target and checks the final submission. Complete reference proofs remain with the maintainers.
## proof | What the judge accepts
The judge checks the target type, the kernel proof and transitive axiom dependencies. Placeholders, added axioms and a changed target type fail these checks. Alternative proofs within the permitted environment can pass.
## controls | Check the boundary
Maintainers run controls for valid proofs, placeholders and changed declarations. These receipts document environment checks. Model scores come from the model's submitted files and their judge records.
# references | Reference answers
Task reference evidence and model evaluation records are maintained separately.
## artifacts | Reference materials
Each task records its frozen target, source revision and applicable reference receipts. Reproducing a full proof, checking a statement and running a model are distinct stages.
## coverage | Coverage in the tiers
Four Tier 2 tasks have reference acceptance receipts. The other 16 research optimization tasks retain their recorded statement-verification status. Each model submission still goes through its task's independent judge.
## access | Reuse a receipt
Match the task version, toolchain, dependency lock and verification record before reusing a receipt. The solver environment exposes only the materials intended for solving the task.
# citation | Cite Math Gym
When citing this theorem proving benchmark, identify the website, tier and date of the results used.
## bibtex | BibTeX
!code bib
## snapshot | Cite a particular result
Record the model identifier, tier, accepted count, task count and date. Download a .bib file from the [citation section](home:#citation) and the corresponding results CSV from the leaderboard.
# maintenance | Build, check and distribute
A change to the task package, protocol, images or controller requires a new environment record.
## build | Build the frozen environment
Work from the repository root. Prepare takes the pinned dependencies and Linux Lean toolchain; build creates the images; doctor checks readiness. The [repository guide](repo:problems/theorem-proving/evaluation/README.md) documents the arguments and release procedure.
## controls | Run the controls
Use selftest to check the maintainer reference proofs in the new environment. Run the public-environment controls for file visibility and candidate isolation. Record both image IDs, the environment identifier and the control receipts.
## export | Distribute the bundle
Export the image archive, bundle manifest, release and client. Members prepare and reuse the Lean and Mathlib cache locally. Supply the archive checksum so recipients can validate the delivery.
# troubleshooting | Troubleshooting
First locate the failure in preparation, model execution or independent grading.
## setup | Doctor or cache check fails
Check the absolute bundle path, Docker service, linux/amd64 images and cache binding. Match the release toolchain and dependency lock, then run doctor again.
## interrupted | Provider interruption or quota limit
Preserve the existing run, response counts and submission hashes. Keep valid task scores. Record the reason for each infrastructure interruption so maintainers can decide whether to register a recovery attempt.
## grading | Submission exists, grade pending
Locate the original file in submissions/. Run grade with the same release and collect the result. If the judge infrastructure failed, regrade the same submission. See the [grading commands](quickstart#inspect).
# contribute | Contribute a theorem
Propose a mathematically useful result with a traceable source and independently checkable formal materials.
## select | Propose a task
Identify the conclusion, source, authors, pinned version and mathematical value. Priority areas include theoretical computer science, probability, combinatorics and optimization. A candidate proposal can list remaining proof or dependency gaps.
## package | Prepare a contribution
Organize materials by subject and project. Separate the public statement and foundations from maintainer evidence. General formal tasks require complete Lean reference proofs; designated special tracks follow their own evidence requirements. Document the actual dependency closure and attribution.
## review | Request review
Use the [contribution template](repo:problems/theorem-proving/maintenance/corpus-template/README.md) to record the contract, license and checks performed. Record reference reproduction, task acceptance and model trials separately. Report website corrections in the [website repository](issues).
# licenses | Licenses and distribution
Before reusing tasks, sources or proofs, check the applicable licenses, authorship and pinned source records.
## project | Project and task records
The project repository contains the root [LICENSE](repo:LICENSE) and [NOTICE](repo:NOTICE). Individual task packages also have LICENSE and NOTICE files. Each task detail in the explorer links to its source notice.
## upstream | Third-party materials
Preserve the original authors, pinned commit or paper version, license, required notices and a description of changes. Check the terms that apply to each file and upstream source.
## distribution | Release contents
The v2 bundle manifest inventories the distributed evaluation materials. External toolchains, dependency caches, maintainer proofs, raw provider responses and personal credentials are outside that bundle.
# dependencies | Lean and dependency locks
Lean type checking depends on specific versions of Lean, Mathlib and its supporting packages.
## versions | Pinned versions
The Lean toolchain is 4.33.1. Mathlib is pinned to `0df444a360eaa60ab8c11dca51a86af692955474`. The environment lock also records package revisions, image IDs and controller hashes.
## repeat | Reuse the environment
Reuse a prepared dependency cache for the same release. Check the dependency lock and toolchain before binding the cache, then mount it read-only during execution. Compare formal runs with matching task versions and environment IDs.
## provenance | Trace the dependencies
Consult the [environment lock](repo:problems/theorem-proving/evaluation/environment.lock.json) for dependency versions. Task-level source, attribution and distribution records are in each package's NOTICE and LICENSE.
