Feature: Chat Log Processing
  As a non-technical domain SME
  I want to process chat logs into individual prompt-response pairs
  So that I can log them in the `prompts/` directory for traceability.

  Background:
    When I process the chat log

  Scenario: Process a valid chat log
    Given I have a test chat log named valid_chat_log.txt in the `chat_logs_test_assets` directory
    When I process the chat log
    Then each prompt-response pair should be saved as a Markdown file in the `prompt_logs` directory
    And each file should have a unique ID

  # Scenario: Handle empty chat logs
  #   Given I have a test chat log from empty_chat_log.txt
  #   When I process the chat log
  #   Then no files should be created in the `prompts/` directory
  #   And a warning should be logged

  # Scenario: Handle malformed chat logs
  #   Given I have a test chat log from malformed_chat_log.txt
  #   When I process the chat log
  #   Then the script should skip invalid entries
  #   And valid prompt-response pairs should still be saved in the `prompts/` directory

  Scenario: Process a chat log into prompt-response pairs
    Given I have a chat log saved as chat_log.txt
    Then each prompt-response pair should be saved as a Markdown file in the `prompts/` directory
    And each file should have a unique ID

  # Scenario: Automate chat log processing
  #   Given I have a new chat log
  #   Then the script should generate unique IDs for each prompt-response pair
  #   And save them as Markdown files in the `prompts/` directory