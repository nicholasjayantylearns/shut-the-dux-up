Feature: Drop step definitions as issues
  As a contributor
  I want Duckie to auto-create GitHub issues for each step
  So that contributors can pick up small pieces of work

  Scenario: User runs "duckie drop"
    Given a Feature file exists
    When I run the command
    Then GitHub issues are created for each step definition
    And they are labeled with "step", "UXR", and effort estimates