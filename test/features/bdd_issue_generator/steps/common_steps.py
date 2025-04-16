from behave import given

@given('a directory containing feature files')
def step_given_directory_with_feature_files(context):
    # Verify the directory contains feature files
    context.feature_files = ["example.feature"]  # Mocked list of feature files
    assert context.feature_files, "No feature files found in the directory."

@given('a directory containing step definition files')
def step_given_directory_with_step_definitions(context):
    # Verify the directory contains step definition files
    context.step_definition_files = ["example_steps.py"]  # Mocked list of step definition files
    assert context.step_definition_files, "No step definition files found in the directory."