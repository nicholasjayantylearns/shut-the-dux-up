Feature: Cry me a river
  As a UX researcher
  I want to convert user complaints into opportunity areas
  So that I can turn pain into product direction

  Scenario: User runs "duckie cry-me-a-river"
    Given I paste in raw quotes or pain points
    When I confirm the main themes
    Then Duckie outputs a list of potential UX scenarios