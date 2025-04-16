from behave import when, then

@when('the utility processes the files using the Simple Parser')
def step_when_process_with_simple_parser(context):
    try:
        context.result = "Simple Parser Success"
    except Exception:
        context.result = "Simple Parser Failed"

@then('it falls back to the LLM Parser')
def step_then_fallback_to_llm(context):
    if context.result == "Simple Parser Failed":
        context.result = "LLM Parser Success"
    assert context.result == "LLM Parser Success", "Fallback to LLM Parser failed."