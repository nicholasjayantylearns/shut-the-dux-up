# 🐣 Duckie

> _Teach me how to Duckie. Everybody DUX-y._

**Duckie** started as a duxworx utility designed to automate the creation of GitHub issues from feature files and step definitions. It supports two approaches for parsing and processing files: **Simple Parsing** and **LLM-Enabled Parsing**.

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

## 🧠 Vision

> As a designer, I want to describe the user experience without my hands leaving the keyboard.  
> I want to write it like a movie — and have the rest follow.

##Where we are heading
Duckie is the command-line cockpit for Declarative UX — where designers write like screenwriters and ship like engineers. Duckie generates structured UX artifacts that trigger pipelines, tests, and issues as you declare behavior.  

You define the outcome. Duckie choreographs the rest. 

---

## 🔁 Workflow Summary

```bash
duckie teach-me-how-to-duckie
# Write a behavior-driven scenario

duckie drop
# Step defs become labeled issues

duckie check
# Closed steps trigger behave test issue

duckie test
# Your UX... now executable
``

## 🚀 Core Commands

| Command | Description |
|--------|-------------|
| `duckie teach-me-how-to-duckie` | Guides you through creating a Feature + Scenario |
| `duckie drop` | Creates GitHub issues from your step definitions |
| `duckie check` | Monitors step progress, triggers test issue on completion |
| `duckie remix` | Uses an LLM to rephrase or improve a step or scenario |## 🛠️ Coming Soon

- Plugin system for `remix` agents
- Custom output formats (Cucumber, JSON, Markdown)
- `duckie vault` for private feature generation
- Contributor dance mode 🕺🦆
