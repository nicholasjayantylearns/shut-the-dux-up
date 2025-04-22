# Declarative UX

### 🦆 Haters Gonna Quack
Declarative UX is built to leap over the objections.

When others say UX is too slow, not credible, or hard to test—we don’t argue. We execute.
From research to validated prototype in under three weeks.
Let the DUX quack. We ship at the speed of modern software.

**Declarative UX** is an open-source framework for generating, testing, and delivering user experiences using declarative specifications, AI collaboration, and behavior-driven development (BDD).

> _From protocol to prototype, Declarative UX transforms UX design into an executable, testable, and scalable system._

## 🚀 What Is It?
Declarative UX replaces traditional, imperative UX workflows with a declarative model:
- You define **what** the user must accomplish
- The system (LLM + BDD + automation) determines **how** to generate and test it

Declarative UX is:
- **AI-assisted**: Use LLMs to generate Feature files and Step Definitions from UX research protocols
- **BDD-driven**: Create testable experiences using Gherkin syntax and Behave
- **Prototype-first**: Generate usable prototypes automatically from behavioral specs
- **Infrastructure-ready**: Integrates into engineering workflows (CI/CD, version control, test automation)

## 🧠 Core Philosophy
Declarative UX is a declaration of independence from product engineering’s backlog. It empowers UX to define what needs to be tested, validated, and proven—without relying on engineering to interpret, groom, or implement exploratory concepts. UX work becomes executable, testable, and outcome-aligned, enabling faster cycles and clearer decision-making.

UX should be:
- **Declarative** – Defined by outcomes, not pixel-pushed deliverables
- **Executable** – Testable through code, not just in concept decks
- **System-integrated** – A first-class input into engineering, sales, and support decision-making

## 🧩 Strategic Outcome (Josh Seiden Framework)
- **Who:** UX Designers  
- **Has to do what:** Use Declarative UX to turn research into working, usability-tested code  
- **By how much:** Within a **3-week sprint** from research to validation  
- **So that:** Senior product managers can confidently drop or advance product directions before roadmap and engineering investment

## 🔍 Use Cases
- Reduce UX’s dependency on product engineering to test new ideas at scale—with speed and statistical rigor
- Prevent wasted engineering time spent grooming ill-defined UX tickets or triaging unclear RFEs
- Refocus engineering effort on well-validated features, not exploratory UX-driven R&D
- Empower PMs to drop or advance ideas in under 3 weeks based on real usability evidence

## 💡 Why It Matters to Engineering & Product
Declarative UX helps teams:
- Test R&D concepts quickly, without overloading engineering teams with design ambiguity
- Avoid wasted engineering cycles assessing feasibility or grooming early-stage UX concepts
- Provide PMs with rapid usability-tested outputs that reduce uncertainty and accelerate roadmap clarity

---

## Duckie - Utility Project

**Follow Me** is a utility project designed to automate the creation of GitHub issues from feature files and step definitions. It supports two approaches for parsing and processing files: **Simple Parsing** and **LLM-Enabled Parsing**.

### Key Features:
- Parse feature files written in Gherkin syntax to extract steps and scenarios.
- Parse step definition files to extract function names and patterns.
- Automatically create GitHub issues for missing step implementations and step definition functions.
- Use an LLM to enhance parsing, generate meaningful issue descriptions, and group related tasks intelligently.
- Monitor updates to feature files or step definitions and create issues for new or modified steps.

---

### Key Differences Between Simple Parsing and LLM-Enabled Parsing

| **Aspect**                | **Simple Parsing**                                                                 | **LLM-Enabled Parsing**                                                                 |
|---------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| **Feature File Parsing**  | Uses Gherkin parsers to extract structured data (e.g., steps, scenarios).           | Uses an LLM to interpret ambiguous or malformed feature files.                         |
| **Step Definition Parsing** | Uses regex or AST parsing to extract function names and patterns.                  | Uses an LLM to summarize the purpose of each step definition.                          |
| **Issue Descriptions**    | Relies on predefined templates for issue descriptions.                              | Uses an LLM to generate detailed, human-readable descriptions for issues.              |
| **Grouping Steps**        | Groups steps based on predefined rules (e.g., steps in the same scenario).          | Uses an LLM to infer relationships between steps and group them into meaningful tasks.  |
| **Error Handling**        | Logs errors for malformed files and skips processing.                               | Uses an LLM to attempt recovery and extract meaningful data from malformed files.       |

---

## 🧪 Example Project

Want to see Declarative UX in action?

Check out [CHunkee](https://github.com/nicholasjayantylearns/chunkee) — a sample project that applies Declarative UX principles to chunking structured qualitative data and generating graph-ready design models. It's a live demonstration of using LLMs + BDD to go from research protocols to testable, code-ready UX components.

## 🔧 Example Workflow
1. Write a UX research protocol or usability scenario
2. Use LLM (e.g., via CLI or API) to convert the scenario into Gherkin syntax
3. Behave executes the scenario using generated Step Definitions
4. Prototype and stubbed API interactions are generated
5. A/B test results drive automated PRs to engineering based on usability benchmarks

## 📦 Components (Planned Modules)
- `dux-cli`: Command-line tool for turning protocols into Gherkin specs
- `dux-agent`: LLM interface for transforming UX inputs
- `dux-prototype`: Auto-generates front-end prototypes from feature specs
- `dux-testkit`: Usability test automation with analytics integrations
- `dux-integrate`: GitOps-style deployment tools for integrating tested UX into engineering

## 🤝 Contributing
We’re in early development. Contributions welcome!
- Use Discussions to propose features
- File Issues to report bugs or share use cases
- Submit PRs to help us build the future of executable UX

## 📜 License
GNU General Public License (GPL)

## ✨ Shout-out
Inspired by the elegant split between imperative and declarative logic in engineering—and brought to life through AI + open source. Special thanks to Marty Jackson (@mjhacks), who once said so kindly: *"The software is the table."* Also inspired by Robert Fabricant’s article in Fast Company, [The Big Design Freak-Out](https://www.fastcompany.com/91027996/the-big-design-freak-out-a-generation-of-design-leaders-grapple-with-their-future).

I'm listening.

---
Let’s build a future where **UX isn’t just designed—it’s declared, executed, and scaled.**
