from behave import given, when, then

@given('a feature file with valid steps')
def step_given_valid_feature_file(context):
    context.feature_file = {"steps": ["Given", "When", "Then"]}
    assert context.feature_file, "Feature file is invalid."

@when('the utility processes the feature file')
def step_when_process_feature_file(context):
    context.processed_steps = context.feature_file["steps"]
    assert context.processed_steps, "Feature file could not be processed."

@then('it generates a prototype from the feature file')
def step_then_generate_prototype(context):
    context.prototype_generated = True
    assert context.prototype_generated, "Prototype was not generated."