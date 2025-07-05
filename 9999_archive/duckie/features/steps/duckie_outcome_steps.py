from behave import *
import subprocess
import os

@given('I have written a user scenario describing a desired outcome')
def step_impl(context):
    # For now, let's assume the user has a file named user_scenario.txt
    # In a real implementation, you'd read the file and validate its content
    context.user_scenario_file = "user_scenario.txt"
    assert os.path.exists(context.user_scenario_file), f"File {context.user_scenario_file} not found"

@when('I run "duckie teach-me-how-to-duckie"')
def step_impl(context):
    # Execute the duckie command (replace with your actual command)
    try:
        result = subprocess.run(["python", "duckie.py", "teach-me-how-to-duckie", context.user_scenario_file],
                                capture_output=True, text=True, check=True)
        context.feature_file_output = result.stdout
        context.return_code = result.returncode
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        context.feature_file_output = e.output
        context.return_code = e.returncode
        assert False, f"Command failed with error: {e}" # Fail the test

@then('a Gherkin-formatted feature file should be created')
def step_impl(context):
    assert context.return_code == 0, f"Expected return code 0, but got {context.return_code}"
    assert "Feature:" in context.feature_file_output, "No Feature found in output"
    assert "Scenario:" in context.feature_file_output, "No Scenario found in output"

@then('the scenario should be structured into Given/When/Then steps')
def step_impl(context):
    assert "Given" in context.feature_file_output, "No Given found in output"
    assert "When" in context.feature_file_output, "No When found in output"
    assert "Then" in context.feature_file_output, "No Then found in output"

@given('I have a valid feature file with steps')
def step_impl(context):
    # For now, assume a file named valid_feature.feature exists
    context.feature_file = "valid_feature.feature"
    assert os.path.exists(context.feature_file), f"File {context.feature_file} not found"

@when('I run "duckie drop"')
def step_impl(context):
    try:
        result = subprocess.run(["python", "duckie.py", "drop", context.feature_file],
                                capture_output=True, text=True, check=True)
        context.drop_output = result.stdout
        context.return_code = result.returncode
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        context.drop_output = e.output
        context.return_code = e.returncode
        assert False, f"Command failed with error: {e}"

@then('GitHub issues should be created for each undefined step')
def step_impl(context):
    # This is a placeholder.  You'll need to mock the GitHub API
    # and verify that the correct calls were made.
    assert "Successfully created issues" in context.drop_output, "Issues were not created"

@given('I have feature and step definition files')
def step_impl(context):
    context.feature_file = "valid_feature.feature"
    context.step_def_file = "steps/duckie_outcome.py" # Relative path
    assert os.path.exists(context.feature_file), f"File {context.feature_file} not found"
    assert os.path.exists(context.step_def_file), f"File {context.step_def_file} not found"

@when('I run "duckie push"')
def step_impl(context):
    try:
        result = subprocess.run(["python", "duckie.py", "push", context.feature_file, context.step_def_file],
                                capture_output=True, text=True, check=True)
        context.push_output = result.stdout
        context.return_code = result.returncode
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        context.push_output = e.output
        context.return_code = e.returncode
        assert False, f"Command failed with error: {e}"

@then('a pull request should be created to the integration testing repository')
def step_impl(context):
    # Again, you'll need to mock the Git/GitHub API for a real test
    assert "Pull request created" in context.push_output, "Pull request was not created"

@then('the feature file should be included in the PR')
def step_impl(context):
    # Check the output to see if the feature file was mentioned
    assert context.feature_file in context.push_output, "Feature file not included in PR"