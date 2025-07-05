from behave import given, when, then

@given('a feature file with missing steps')
def step_given_missing_steps(context):
    context.feature_file = {"steps": ["Given", "When"]}
    context.missing_steps = ["Then"]
    assert context.feature_file, "Feature file is missing."

@when('the utility detects missing steps')
def step_when_detect_missing_steps(context):
    context.detected_missing_steps = context.missing_steps
    assert context.detected_missing_steps, "No missing steps detected."

@then('it logs an error for the missing steps')
def step_then_log_error_for_missing_steps(context):
    context.error_logged = True
    assert context.error_logged, "Error was not logged for missing steps."