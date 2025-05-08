Feature: Enforce Duckie issue quality before output

  As a Duckie system generating sprintable issues,
  I want to validate each issue against behavioral quality criteria,
  So that only high-quality, outcome-oriented issues are shared with teams

  Scenario: Validate output issue before publishing
    Given a generated issue representing a small, testable behavior
    When the issue is evaluated against Duckie’s quality checklist
    Then the issue must meet all five criteria
    And issues that fail must be revised or flagged for review
