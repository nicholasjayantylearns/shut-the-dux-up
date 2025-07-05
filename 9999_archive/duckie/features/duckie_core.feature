Feature: Teach me how to Duckie
  As a UX practitioner
  I want to be guided through writing a Gherkin Feature
  So that I can generate testable, declarative UX without learning syntax

  Scenario: User runs "duckie teach-me-how-to-duckie"
    Given I have Duckie installed
    When I run the command
    Then I am prompted for outcome, user, and behavior
    And a Feature file is created with that information