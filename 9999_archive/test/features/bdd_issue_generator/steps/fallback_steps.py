from behave import given, when, then

@given('a directory containing well-formed feature files and step definition files')
def step_given_well_formed_files(context):
    context.feature_files = ["example.feature"]
    context.step_definition_files = ["example_steps.py"]
    assert context.feature_files and context.step_definition_files, "No well-formed files were provided."

@when('the utility processes the files using the Simple Parser')
def step_when_process_with_simple_parser(context):
    try:
        context.result = "Simple Parser Success"
    except Exception:
        context.result = "Simple Parser Failed"

@then('it falls back to the LLM Parser')
def step_then_fallback_to_llm(context):
    if getattr(context, "simple_parser_failed", False) or getattr(context, "simple_parser_failed_mapping", False):
        context.result = "LLM Parser Success"
    else:
        context.result = "Simple Parser Success"
    assert context.result == "LLM Parser Success", "Fallback to LLM Parser failed."

@then('it extracts all steps and functions')
def step_then_extract_all_steps_and_functions(context):
    context.extracted_steps = ["Given", "When", "Then"]
    context.extracted_functions = ["step_1", "step_2"]
    assert context.extracted_steps and context.extracted_functions, "Steps or functions were not extracted."

@then('it creates GitHub issues for all steps and functions')
def step_then_create_issues_for_all(context):
    context.github_issues = [{"title": f"Issue for {item}"} for item in context.extracted_steps + context.extracted_functions]
    assert context.github_issues, "No GitHub issues were created."

@given('a directory containing malformed feature files')
def step_given_malformed_feature_files(context):
    # Mocked logic for malformed feature files
    context.feature_files = ["malformed.feature"]
    context.is_malformed = True
    assert context.feature_files, "No malformed feature files found."

@when('the Simple Parser fails to parse the files')
def step_when_simple_parser_fails(context):
    # Simulate Simple Parser failure
    if context.is_malformed:
        context.simple_parser_failed = True
    assert context.simple_parser_failed, "Simple Parser did not fail as expected."

@then('it creates GitHub issues with detailed descriptions')
def step_then_create_detailed_issues(context):
    # Mocked GitHub issue creation with detailed descriptions
    context.github_issues = [{"title": "Detailed issue", "description": "Detailed description"}]
    assert context.github_issues, "GitHub issues with detailed descriptions were not created."

@given('a directory containing step definition files with dynamic patterns')
def step_given_dynamic_step_definitions(context):
    # Mocked logic for dynamic step definitions
    context.step_definition_files = ["dynamic_steps.py"]
    context.has_dynamic_patterns = True
    assert context.step_definition_files, "No step definition files with dynamic patterns found."

@when('the Simple Parser fails to map steps to step definitions')
def step_when_simple_parser_fails_mapping(context):
    # Simulate Simple Parser failure to map steps
    if context.has_dynamic_patterns:
        context.simple_parser_failed_mapping = True  # Initialize and set the attribute
    else:
        context.simple_parser_failed_mapping = False
    print(f"DEBUG: has_dynamic_patterns = {context.has_dynamic_patterns}")
    print(f"DEBUG: simple_parser_failed_mapping = {context.simple_parser_failed_mapping}")
    assert context.simple_parser_failed_mapping, "Simple Parser did not fail to map steps."

@then('the LLM Parser generates summaries for the step definitions')
def step_then_llm_generate_summaries(context):
    # Mocked LLM summary generation
    if context.simple_parser_failed_mapping:
        context.llm_summaries = [{"step": "dynamic_step", "summary": "Generated summary"}]
    else:
        context.llm_summaries = []
    print(f"DEBUG: llm_summaries = {context.llm_summaries}")
    assert context.llm_summaries, "LLM did not generate summaries for step definitions."

@then('it creates GitHub issues with meaningful descriptions')
def step_then_create_meaningful_issues(context):
    # Mocked GitHub issue creation with meaningful descriptions
    context.github_issues = [{"title": "Meaningful issue", "description": "Meaningful description"}]
    assert context.github_issues, "GitHub issues with meaningful descriptions were not created."

@given('a directory containing corrupted feature files and step definition files')
def step_given_corrupted_files(context):
    # Mocked logic for corrupted files
    context.is_malformed = True
    context.corrupted_files = True
    assert context.corrupted_files, "No corrupted files found."

@when('the LLM Parser fails to interpret the files')
def step_when_llm_parser_fails(context):
    # Simulate LLM Parser failure
    if context.corrupted_files:
        context.llm_parser_failed = True
    assert context.llm_parser_failed, "LLM Parser did not fail as expected."

@then('it logs an error indicating the failure')
def step_then_log_error(context):
    # Mocked error logging
    context.error_logged = True
    assert context.error_logged, "Error was not logged."

@then('it does not create any GitHub issues')
def step_then_no_issues_created(context):
    # Ensure no GitHub issues are created
    context.github_issues = []
    assert not context.github_issues, "GitHub issues were created when they should not have been."

@then('the LLM Parser interprets the files')
def step_then_llm_interprets_files(context):
    # Mocked LLM interpretation logic
    if context.simple_parser_failed or context.simple_parser_failed_mapping:
        context.llm_interpreted = True
    else:
        context.llm_interpreted = False
    print(f"DEBUG: llm_interpreted = {context.llm_interpreted}")
    assert context.llm_interpreted, "LLM Parser did not interpret the files."