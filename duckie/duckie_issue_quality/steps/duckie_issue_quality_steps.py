from behave import given, when, then

@given("a generated issue representing a small, testable behavior")
def step_given_issue(context):
    context.issue = {
        "title": "Sample issue title",
        "description": "Sample description of behavior",
        "metadata": {
            "is_small": True,
            "is_behavioral": True,
            "is_outcome_tied": True,
            "is_testable": True,
            "feeds_decision": True
        }
    }

@when("the issue is evaluated against Duckie’s quality checklist")
def step_evaluate_issue_quality(context):
    issue = context.issue["metadata"]
    context.failed_checks = [
        check for check, valid in issue.items() if not valid
    ]

@then("the issue must meet all five criteria")
def step_assert_passes(context):
    assert not context.failed_checks, f"Issue failed checks: {context.failed_checks}"

@then("issues that fail must be revised or flagged for review")
def step_flag_failed_issue(context):
    if context.failed_checks:
        print(f"Issue flagged for revision. Failed: {context.failed_checks}")
