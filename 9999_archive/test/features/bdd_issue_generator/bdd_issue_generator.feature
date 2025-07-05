Feature: Automate GitHub Issues for BDD Workflow
  As a Declarative UXer
  I want to automate the creation of GitHub issues from feature files and step definitions
  So that I can streamline task management and track progress effectively

  Scenario: End-to-end workflow for feature files
    Given a directory containing feature files
    When the utility processes the feature files
    Then it creates GitHub issues for all steps
    And it links the issues to their corresponding feature files

  Scenario: End-to-end workflow for step definition files
    Given a directory containing step definition files
    When the utility processes the step definition files
    Then it creates GitHub issues for all step functions
    And it links the issues to their corresponding step definition files

  Scenario: Monitor updates to feature or step definition files
    Given a feature file or step definition file is updated
    When the utility detects new or modified steps
    Then it creates GitHub issues for the new or modified steps
    And it updates the links to their corresponding files