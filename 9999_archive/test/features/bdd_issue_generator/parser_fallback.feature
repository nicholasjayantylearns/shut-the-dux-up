Feature: Fallback to LLM Parser when Simple Parser fails
  As a Declarative UXer
  I want the utility to fall back to the LLM Parser when the Simple Parser fails
  So that I can process feature files and step definitions reliably

  Scenario: Successfully parse files using the Simple Parser
    Given a directory containing well-formed feature files and step definition files
    When the utility processes the files using the Simple Parser
    Then it extracts all steps and functions
    And it creates GitHub issues for all steps and functions

  Scenario: Fall back to LLM Parser for malformed feature files
    Given a directory containing malformed feature files
    When the utility processes the files using the Simple Parser
    And the Simple Parser fails to parse the files
    Then it falls back to the LLM Parser
    And the LLM Parser interprets the files
    And it creates GitHub issues with detailed descriptions

  Scenario: Fall back to LLM Parser for ambiguous step definitions
    Given a directory containing step definition files with dynamic patterns
    When the Simple Parser fails to map steps to step definitions
    Then it falls back to the LLM Parser
    And the LLM Parser generates summaries for the step definitions
    And it creates GitHub issues with meaningful descriptions

  Scenario: Log errors when both parsers fail
    Given a directory containing corrupted feature files and step definition files
    When the utility processes the files using the Simple Parser
    And the Simple Parser fails to parse the files
    And the LLM Parser fails to interpret the files
    Then it logs an error indicating the failure
    And it does not create any GitHub issues