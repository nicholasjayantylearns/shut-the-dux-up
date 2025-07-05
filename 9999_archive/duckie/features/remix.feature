Feature: Remix a scenario
  As a UX lead
  I want to regenerate or rewrite a scenario or step
  So that I can experiment with different phrasings and behaviors

  Scenario: User runs "duckie remix"
    Given a Feature file exists
    When I choose a line to remix
    Then Duckie uses an LLM to suggest alternate versions