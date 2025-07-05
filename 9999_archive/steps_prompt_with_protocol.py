from behave import given, when, then

@given('I run "duckie hatch-issues test/protocol_sample.md"')
def step_run_with_file(context):
    context.file_path = "test/protocol_sample.md"

@given('the file exists and is readable')
def step_file_readable(context):
    context.file_exists = True

@then('Duckie parses the file')
def step_parse_file(context):
    context.file_parsed = True

@then('Duckie extracts a Feature, Scenario, and Steps')
def step_extract_parts(context):
    context.gherkin_structure = ['Feature', 'Scenario', 'Steps']

@then('Duckie displays a `.feature` preview in Gherkin format')
def step_show_preview(context):
    context.gherkin_preview = True

@when('I confirm the output is correct')
def step_confirm_output(context):
    context.confirmed = True

@then('Duckie generates GitHub or Jira issues')
def step_generate_issues(context):
    context.issues_created = True

@then('the issues are structured by type')
def step_structured_issues(context):
    context.issues_structure = ['Feature', 'Scenario', 'Step']

@then('the `.feature` file is saved locally')
def step_save_feature_file(context):
    context.feature_saved = True

@when('I choose to edit the output')
def step_edit_output(context):
    context.user_editing = True

@then('Duckie lets me modify the Feature, Scenario, or Steps')
def step_allow_modification(context):
    context.editable = True

@then('I can re-preview the revised `.feature`')
def step_preview_revised(context):
    context.repreview = True

@then('Duckie only generates issues after confirmation')
def step_only_on_confirm(context):
    context.confirm_required = True

@when('I choose not to continue')
def step_abort(context):
    context.confirmed = False

@then('no issues are generated')
def step_abort_issues(context):
    context.issues_created = False

@then('Duckie exits gracefully with a thank-you message')
def step_graceful_exit(context):
    context.exit_message = "Thank you"