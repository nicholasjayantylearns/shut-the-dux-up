Feature: Automate GitHub Issues for BDD Workflow
  As a Declarative UXer
  I want to automate the creation of GitHub issues from feature files and step definitions
  So that I can streamline task management and track progress effectively

  Scenario: Parse feature files to extract steps
    Given a directory containing feature files
    When the utility processes the feature files
    Then it extracts all Given/When/Then steps
    And it identifies the scenarios and their steps

  Scenario: Parse step definition files to extract functions
    Given a directory containing step definition files
    When the utility processes the step definition files
    Then it extracts all step functions
    And it maps them to their corresponding steps in feature files

  Scenario: Create GitHub issues for missing step implementations
    Given a feature file contains steps without corresponding step definitions
    When the utility detects missing step implementations
    Then it creates a GitHub issue for each missing step
    And the issue is labeled with "type:missing-step" and "effort:1-point"

  Scenario: Create GitHub issues for step definition functions
    Given a step definition file contains step functions
    When the utility processes the step definition file
    Then it creates a GitHub issue for each step function
    And the issue is labeled with "type:function" and "effort:1-point"

  Scenario: Link issues to their corresponding files
    Given GitHub issues are created for steps and functions
    When the utility processes the issues
    Then it links each issue to its corresponding feature or step definition file
    And it marks the step definition file as an "Epic"

  Scenario: Watch for updates to feature or step definition files
    Given a feature file or step definition file is updated
    When the utility detects new or modified steps
    Then it creates GitHub issues for the new or modified steps
    And it updates the links to their corresponding files