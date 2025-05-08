Feature: Validate all generated issues with Duckie’s own quality standard

  As Duckie,
  I want to run each generated issue through the Duckie Issue Quality feature,
  So that only issues meeting all five criteria are passed to the team

  Scenario Outline: Quality-check each generated issue
    Given a generated issue from step "<step_name>"
    When I evaluate the issue against Duckie’s quality checklist
    Then the issue should <pass_or_fail> the quality gate

    Examples:
      | step_name                          | pass_or_fail |
      | Query active cluster workspaces    | pass         |
      | Add alert for pod lifecycle event  | fail         |
      | Pause idle pods                    | pass         |
      | Refactor controller                | fail         |
