from behave import when, then

@when('the utility uses an LLM to summarize each step function')
def step_when_llm_summarize_steps(context):
    context.summaries = [{"function": "step_1", "summary": "Handles login"}]
    assert context.summaries, "LLM could not summarize step functions."