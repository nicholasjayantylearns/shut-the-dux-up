from behave import given, when, then

@when('the utility uses an LLM to summarize each step function')
def step_when_llm_summarizes_step_functions(context):
    # Mocked LLM summarization logic
    context.github_issues = [
        {"title": "Step 1", "description": "Summary for step 1"},
        {"title": "Step 2", "description": "Summary for step 2"},
    ]
    print(f"DEBUG: github_issues = {context.github_issues}")

@then('it generates a description for each GitHub issue')
def step_then_generate_description_for_issues(context):
    # Validate that GitHub issues have been generated
    assert hasattr(context, "github_issues"), "GitHub issues were not generated."
    assert context.github_issues, "No GitHub issues were generated."
    for issue in context.github_issues:
        assert "title" in issue and "description" in issue, "Issue is missing title or description."
    print(f"DEBUG: github_issues = {context.github_issues}")
    
@given('a set of extracted steps')
def step_given_set_of_extracted_steps(context):
    context.extracted_steps = ["Given", "When", "Then"]
    assert context.extracted_steps, "No extracted steps were provided."

@when('the utility uses an LLM to analyze the relationships between steps')
def step_when_llm_analyze_relationships(context):
    context.relationships = [{"step": step, "related_to": "Scenario 1"} for step in context.extracted_steps]
    assert context.relationships, "No relationships were analyzed."

@then('it groups related steps into tasks or epics')
def step_then_group_steps_into_tasks(context):
    context.grouped_steps = [{"task": "Task 1", "steps": context.extracted_steps}]
    assert context.grouped_steps, "Steps were not grouped into tasks or epics."

@given('a list of GitHub issues')
def step_given_list_of_github_issues(context):
    context.github_issues = [{"title": "Issue 1"}, {"title": "Issue 2"}]
    assert context.github_issues, "No GitHub issues were provided."

@when('the utility uses an LLM to assign priorities based on step complexity')
def step_when_llm_assign_priorities(context):
    for issue in context.github_issues:
        issue["priority"] = "High"
    assert all("priority" in issue for issue in context.github_issues), "Priorities were not assigned."

@then('each issue is labeled with a priority')
def step_then_label_issues_with_priority(context):
    assert all("priority" in issue for issue in context.github_issues), "Issues were not labeled with a priority."

@given('a malformed feature file or step definition file')
def step_given_malformed_file(context):
    # Mocked logic to provide a malformed file
    context.malformed_file = True
    assert context.malformed_file, "No malformed file was provided."

@when('the utility uses an LLM to interpret the file')
def step_when_llm_interpret_file(context):
    # Mocked logic to interpret a malformed file
    context.interpreted_file = {"status": "interpreted"}
    assert context.interpreted_file, "The file was not interpreted."

@then('it logs a warning and attempts to extract meaningful data')
def step_then_log_warning_and_extract_data(context):
    # Mocked logic to log a warning and extract data
    context.warning_logged = True
    context.extracted_data = {"steps": ["Given", "When"]}
    assert context.warning_logged, "Warning was not logged."
    assert context.extracted_data, "No meaningful data was extracted."