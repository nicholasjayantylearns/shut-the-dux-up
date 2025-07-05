Feature: Uploading and prompting from a usability protocol to generate structured UX issues

  Background:
    Given Duckie is installed and available via the CLI
    And I have a valid GitHub or Jira account configured
    And I have a protocol file at "test/protocol_sample.md"
    And the file includes:
      | Field            | Present |
      | User Scenario    | true    |
      | Task Goal        | true    |
      | Task Steps       | true    |
      | Success Criteria | true    |

  Scenario: User provides a valid protocol file path
    Given I run "duckie hatch-issues test/protocol_sample.md"
    And the file exists and is readable
    Then Duckie parses the file
    And Duckie extracts a Feature, Scenario, and Steps
    And Duckie displays a `.feature` preview in Gherkin format

  Scenario: User confirms Gherkin output
    Given Duckie displays the Gherkin preview
    When I confirm the output is correct
    Then Duckie generates GitHub or Jira issues
    And the issues are structured by type
    And the `.feature` file is saved locally

  Scenario: User edits Gherkin output before confirmation
    Given Duckie displays the Gherkin preview
    When I choose to edit the output
    Then Duckie lets me modify the Feature, Scenario, or Steps
    And I can re-preview the revised `.feature`
    And Duckie only generates issues after confirmation

  Scenario: User declines to proceed
    Given Duckie displays the Gherkin preview
    When I choose not to continue
    Then no issues are generated
    And Duckie exits gracefully with a thank-you message