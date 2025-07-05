Feature: Enable outcome-driven delivery via Duckie
  As a Product Manager or UX Designer
  I want to transform user scenarios into testable, sprint-ready behaviors
  So that my team can validate value and eliminate weak bets within one sprint

  Scenario: Create a feature file from a user scenario
    Given I have written a user scenario describing a desired outcome
    When I run "duckie teach-me-how-to-duckie"
    Then a Gherkin-formatted feature file should be created
    And the scenario should be structured into Given/When/Then steps

  Scenario: Generate GitHub issues from a feature file
    Given I have a valid feature file with steps
    When I run "duckie drop"
    Then GitHub issues should be created for each undefined step

  Scenario: Submit a PR to the integration testing repo
    Given I have feature and step definition files
    When I run "duckie push"
    Then a pull request should be created to the integration testing repository
    And the feature file should be included in the PR
