from behave import given, when, then

@given('a directory containing feature files')
def step_given_directory_with_feature_files(context):
    context.feature_files = ["example.feature"]
    assert context.feature_files, "No feature files found in the directory."

@given('a directory containing step definition files')
def step_given_directory_with_step_definitions(context):
    context.step_definition_files = ["example_steps.py"]
    assert context.step_definition_files, "No step definition files found in the directory."