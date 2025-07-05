Feature: Automate GitHub Issues for BDD Workflow (LLM-Enabled Parsing)
  As a Declarative UXer
  I want to automate the creation of GitHub issues using LLM-enabled parsing
  So that I can generate meaningful descriptions and group related tasks intelligently

  Scenario: Summarize step definitions for issue descriptions
    Given a step definition file contains step functions
    When the utility uses an LLM to summarize each step function
    Then it generates a description for each GitHub issue

  Scenario: Group related steps into tasks
    Given a set of extracted steps
    When the utility uses an LLM to analyze the relationships between steps
    Then it groups related steps into tasks or epics

  Scenario: Prioritize GitHub issues
    Given a list of GitHub issues
    When the utility uses an LLM to assign priorities based on step complexity
    Then each issue is labeled with a priority

  Scenario: Handle edge cases in feature files or step definitions
    Given a malformed feature file or step definition file
    When the utility uses an LLM to interpret the file
    Then it logs a warning and attempts to extract meaningful data