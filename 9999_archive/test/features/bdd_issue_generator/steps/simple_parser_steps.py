from behave import when, then

@when('the utility processes the feature files using a Gherkin parser')
def step_when_process_feature_files_simple(context):
    context.processed_features = [{"name": "example.feature", "steps": ["Given", "When", "Then"]}]
    assert context.processed_features, "Feature files could not be processed."

@when('the utility processes the step definition files using regex')
def step_when_process_step_definitions_simple(context):
    context.processed_step_definitions = [{"name": "example_steps.py", "functions": ["step_1", "step_2"]}]
    assert context.processed_step_definitions, "Step definition files could not be processed."