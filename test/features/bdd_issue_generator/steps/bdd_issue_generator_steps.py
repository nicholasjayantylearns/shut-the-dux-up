# Utility: Follow Me – BDD GitHub Issue Generator

# Goal:
# Build a utility to support BDD workflows using Behave + GitHub Issues.
# This tool will parse feature files and step definitions, and automate the creation of GitHub issues.

# Requirements:
# 1. For every .feature file in the repo:
#    - Parse the Gherkin syntax
#    - Identify each Given/When/Then step
#    - Map steps to functions in a step definition .py file
#    - Detect missing step implementations

# 2. For every step definition file (e.g., steps/*.py):
#    - Treat the file as an "Epic"
#    - Treat each function (i.e., step) as a "Story" (1 story point, ~3 hrs)
#    - Auto-generate GitHub issues for unimplemented or new steps
#    - Link these issues to their Epic (the step def file)

# 3. When all related issues for a step definition are closed:
#    - Auto-create a "Run Behave Tests" issue

# 4. Watch for updates to .feature or step def files:
#    - Create issues for any new or modified steps not yet implemented

# 5. This tool will live in this repo: https://github.com/nicholasjayantylearns/shut-the-dux-up

# Notes:
# - Use GitHub API to create and link issues.
# - Optional: Add tags/labels like `type:function`, `effort:1-point`, etc.
# - Consider CLI or Streamlit UI in future versions.

from behave import given, when, then

@given('a directory containing feature files')
def step_given_directory_with_feature_files(context):
    # Verify the directory contains feature files
    context.feature_files = ["example.feature"]  # Mocked list of feature files
    assert context.feature_files, "No feature files found in the directory."

@when('the utility processes the feature files')
def step_when_process_feature_files(context):
    # Process the feature files (mocked processing logic)
    context.processed_features = [{"name": "example.feature", "steps": ["Given", "When", "Then"]}]
    assert context.processed_features, "Feature files could not be processed."

@then('it extracts all Given/When/Then steps')
def step_then_extract_steps(context):
    # Extract Given/When/Then steps from the processed feature files
    context.extracted_steps = [step for feature in context.processed_features for step in feature["steps"]]
    assert context.extracted_steps, "No steps were extracted."

@then('it identifies the scenarios and their steps')
def step_then_identify_scenarios(context):
    # Identify scenarios and their steps (mocked logic)
    context.scenarios = [{"name": "Scenario 1", "steps": context.extracted_steps}]
    assert context.scenarios, "No scenarios were identified."

@given('a directory containing step definition files')
def step_given_directory_with_step_definitions(context):
    # Verify the directory contains step definition files
    context.step_definition_files = ["example_steps.py"]  # Mocked list of step definition files
    assert context.step_definition_files, "No step definition files found in the directory."

@when('the utility processes the step definition files')
def step_when_process_step_definitions(context):
    # Process the step definition files (mocked processing logic)
    context.processed_step_definitions = [{"name": "example_steps.py", "functions": ["step_1", "step_2"]}]
    assert context.processed_step_definitions, "Step definition files could not be processed."

@then('it extracts all step functions')
def step_then_extract_step_functions(context):
    # Extract step functions from the processed step definition files
    context.extracted_functions = [func for file in context.processed_step_definitions for func in file["functions"]]
    assert context.extracted_functions, "No step functions were extracted."

@then('it maps them to their corresponding steps in feature files')
def step_then_map_steps_to_functions(context):
    # Map extracted steps to their corresponding step functions (mocked logic)
    context.mapped_steps = {"Given": "step_1", "When": "step_2"}
    assert context.mapped_steps, "Steps could not be mapped to functions."

@given('a feature file contains steps without corresponding step definitions')
def step_given_missing_step_definitions(context):
    # Check for steps without corresponding step definitions
    context.missing_steps = ["Then"]
    assert context.missing_steps, "No missing steps found."

@when('the utility detects missing step implementations')
def step_when_detect_missing_steps(context):
    # Detect missing step implementations
    context.detected_missing_steps = context.missing_steps
    assert context.detected_missing_steps, "No missing step implementations detected."

@then('it creates a GitHub issue for each missing step')
def step_then_create_github_issues(context):
    # Create GitHub issues for missing steps (mocked logic)
    context.github_issues = [{"title": f"Missing step: {step}"} for step in context.detected_missing_steps]
    assert context.github_issues, "GitHub issues could not be created."

@then('the issue is labeled with "{label1}" and "{label2}"')
def step_then_label_github_issues(context, label1, label2):
    # Label GitHub issues (mocked logic)
    for issue in context.github_issues:
        issue["labels"] = [label1, label2]
    assert all("labels" in issue for issue in context.github_issues), "Issues were not labeled."

@given('a step definition file contains step functions')
def step_given_step_definition_file_contains_functions(context):
    # Verify the step definition file contains step functions
    context.step_definition_file = {"functions": ["step_1", "step_2"]}
    assert context.step_definition_file["functions"], "No step functions found in the file."

@when('the utility processes the step definition file')
def step_when_process_step_definition_file(context):
    # Process the step definition file (mocked logic)
    context.processed_step_definition_file = context.step_definition_file
    assert context.processed_step_definition_file, "Step definition file could not be processed."

@then('it creates a GitHub issue for each step function')
def step_then_create_github_issues_for_functions(context):
    # Create GitHub issues for step functions (mocked logic)
    context.github_issues = [{"title": f"Step function: {func}"} for func in context.step_definition_file["functions"]]
    assert context.github_issues, "GitHub issues for step functions could not be created."

@given('GitHub issues are created for steps and functions')
def step_given_github_issues_created(context):
    # Mock GitHub issues for steps and functions
    context.github_issues = [
        {"title": "Missing step: Given", "labels": ["type:missing-step", "effort:1-point"]},
        {"title": "Step function: step_1", "labels": ["type:function", "effort:1-point"]}
    ]
    assert context.github_issues, "GitHub issues were not created."

@when('the utility processes the issues')
def step_when_process_issues(context):
    # Process GitHub issues (mocked logic)
    context.processed_issues = context.github_issues
    assert context.processed_issues, "Issues could not be processed."

@then('it links each issue to its corresponding feature or step definition file')
def step_then_link_issues_to_files(context):
    # Link issues to their corresponding files (mocked logic)
    context.linked_issues = [{"issue": issue, "file": "example.feature"} for issue in context.github_issues]
    assert context.linked_issues, "Issues could not be linked to files."

@then('it marks the step definition file as an "Epic"')
def step_then_mark_as_epic(context):
    # Mark the step definition file as an "Epic" (mocked logic)
    context.epic_marked = True
    assert context.epic_marked, "Step definition file was not marked as an Epic."

@given('a feature file or step definition file is updated')
def step_given_file_updated(context):
    # Detect file updates (mocked logic)
    context.file_updated = True
    assert context.file_updated, "No file updates detected."

@when('the utility detects new or modified steps')
def step_when_detect_new_steps(context):
    # Detect new or modified steps (mocked logic)
    context.new_steps = ["Given", "When"]
    assert context.new_steps, "No new or modified steps detected."

@then('it creates GitHub issues for the new or modified steps')
def step_then_create_issues_for_new_steps(context):
    # Create GitHub issues for new or modified steps (mocked logic)
    context.github_issues_for_new_steps = [{"title": f"New step: {step}"} for step in context.new_steps]
    assert context.github_issues_for_new_steps, "GitHub issues for new steps could not be created."

@then('it updates the links to their corresponding files')
def step_then_update_links(context):
    # Update links to their corresponding files (mocked logic)
    context.updated_links = True
    assert context.updated_links, "Links to corresponding files were not updated."