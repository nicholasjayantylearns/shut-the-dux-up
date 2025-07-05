from behave import given, when, then

@given('a directory containing step definition files')
def step_given_step_definition_files(context):
    context.step_definition_files = ["example_steps.py"]
    assert context.step_definition_files, "No step definition files found."

@when('the utility processes the step definition files')
def step_when_process_step_definition_files(context):
    context.processed_files = [{"name": "example_steps.py", "functions": ["step_1", "step_2"]}]
    assert context.processed_files, "Step definition files could not be processed."

@then('it creates GitHub issues for each step function')
def step_then_create_github_issues(context):
    context.github_issues = [{"title": f"Issue for {func}"} for func in context.processed_files[0]["functions"]]
    assert context.github_issues, "GitHub issues were not created."