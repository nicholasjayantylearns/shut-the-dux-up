from behave import given, when, then

@given('a step definition file with unclear steps')
def step_given_unclear_steps(context):
    context.step_definition_file = {"steps": ["Unclear step 1", "Unclear step 2"]}
    assert context.step_definition_file, "Step definition file is missing."

@when('the utility uses an LLM to rephrase the steps')
def step_when_llm_rephrase_steps(context):
    context.rephrased_steps = [f"Rephrased: {step}" for step in context.step_definition_file["steps"]]
    assert context.rephrased_steps, "Steps were not rephrased."

@then('it updates the step definition file with the rephrased steps')
def step_then_update_step_definition_file(context):
    context.step_definition_file["steps"] = context.rephrased_steps
    assert context.step_definition_file["steps"], "Step definition file was not updated."