Feature: Prompting a user to declare a UX scenario when no protocol is provided
  As a UX contributor using Duckie
  I want to be prompted to describe a UX scenario
  So that I can generate structured issues even without uploading a file

  Scenario: Starting Duckie with no file
    Given I run "duckie hatch-issues"
    And I do not provide a file path
    Then Duckie prompts me to choose a starting method
    And Duckie displays:
      | Option | Description                                   |
      | 1      | Upload a usability protocol                   |
      | 2      | Write one from scratch                        |
      | 3      | Paste a Gherkin `.feature` file               |

  Scenario: Writing a protocol from scratch
    Given I select "2" to write a protocol from scratch
    Then Duckie prompts me to describe:
      | Field            | Prompt Text                                       |
      | User Scenario    | "🧠 What is the user scenario you're testing?"     |
      | Task Goal        | "🎯 What is the goal or task the user is completing?" |
      | Task Steps       | "📋 List the steps the user would take"           |
      | Success Criteria | "✅ What does success look like?"                 |
      | Constraints      | "🔐 Any assumptions or constraints?"              |

  Scenario: Previewing protocol before issue generation
    Given I complete the prompts
    When Duckie summarizes the inferred protocol
    Then Duckie offers:
      | Option | Action                              |
      | 1      | Convert to `.feature` file           |
      | 2      | Generate GitHub or Jira issues       |
      | 3      | Edit the protocol                    |
    And Duckie does not generate issues without confirmation

  Scenario: Selecting an issue system
    Given I confirm issue generation
    Then Duckie prompts me to select a platform:
      | Option | Platform |
      | 1      | GitHub   |
      | 2      | Jira     |
    And Duckie uses the appropriate output formatter