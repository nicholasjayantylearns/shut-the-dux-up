import os
from behave import given, when, then
from datetime import datetime

PROMPT_DIR = os.path.join("prompts", "prompt_logs")

# -------------------------------
# GIVEN Steps
# -------------------------------

# # Creates a new chat log file with hardcoded content for testing automation scenarios.
# @given('I have a new chat log')
# def step_given_new_chat_log(context):
#     context.chat_log_file = "chat_log.txt"
#     os.makedirs(PROMPT_DIR, exist_ok=True)
#     with open(context.chat_log_file, "w") as f:
#         f.write("""
#         Prompt: How do I implement a fallback mechanism for the Simple Parser to the LLM Parser?
#         Response: Implement a try-except block to handle Simple Parser failures and fall back to the LLM Parser.
#         """)

# Loads a pre-defined test chat log from the `chat_logs_test_assets` directory.
# Used in scenarios like "Process a valid chat log" or "Handle empty/malformed chat logs."

@given('I have a test chat log named {test_asset} in the `chat_logs_test_assets` directory')
def step_given_test_chat_log(context, test_asset):
    test_asset_path = os.path.join("prompts", "chat_logs_test_assets", test_asset)
    assert os.path.exists(test_asset_path), f"Test asset {test_asset} does not exist at {test_asset_path}."
    context.chat_log_file = test_asset_path
    print(f"DEBUG (GIVEN): context.chat_log_file is set to {context.chat_log_file}")

# Used in scenarios like "Process a chat log into prompt-response pairs."
@given('I have a chat log saved as {filename}')
def step_given_chat_log_saved_as(context, filename):
    context.chat_log_file = filename
    os.makedirs(PROMPT_DIR, exist_ok=True)
    with open(context.chat_log_file, "w") as f:
        f.write("""
        Prompt: How do I implement a fallback mechanism for the Simple Parser to the LLM Parser?
        Response: Implement a try-except block to handle Simple Parser failures and fall back to the LLM Parser.

        Prompt: Should `duckie_parser_steps.py` be in the `duckie_parser` folder?
        Response: If it contains Behave step definitions, keep it in the `steps` directory. Otherwise, move it to the `duckie_parser` folder.
        """)
    print(f"DEBUG (GIVEN): context.chat_log_file is set to {context.chat_log_file}")

# # Creates an empty chat log file for testing scenarios like "Handle empty chat logs."
# @given('I have an empty chat log saved as {file_name}')
# def step_given_empty_chat_log(context, file_name):
#     context.chat_log_file = file_name
#     os.makedirs(PROMPT_DIR, exist_ok=True)
#     with open(context.chat_log_file, "w") as f:
#         f.write("")  # Create an empty file
#     print(f"DEBUG (GIVEN): Created an empty chat log at {context.chat_log_file}")

# # Creates a malformed chat log file for testing scenarios like "Handle malformed chat logs."
# @given('I have a malformed chat log saved as {file_name}')
# def step_given_malformed_chat_log(context, file_name):
#     context.chat_log_file = file_name
#     os.makedirs(PROMPT_DIR, exist_ok=True)
#     with open(context.chat_log_file, "w") as f:
#         f.write("""
#         Prompt: This is a valid prompt.
#         Response: This is a valid response.

#         Invalid Entry Without Prompt or Response

#         Prompt: Another valid prompt.
#         Response: Another valid response.
#         """)
#     print(f"DEBUG (GIVEN): Created a malformed chat log at {context.chat_log_file}")

# -------------------------------
# WHEN Steps
# -------------------------------

# Processes the chat log file specified in `context.chat_log_file`.
@when('I process the chat log')
def step_when_process_chat_log(context):
    print(f"DEBUG (WHEN): Processing chat log file: {context.chat_log_file}")
    context.processed_files = []
    os.makedirs(PROMPT_DIR, exist_ok=True)
    with open(context.chat_log_file, "r") as f:
        chat_log = f.read().strip()
    # Rest of the processing logic...

# Simulates running the chat log processing script for automation scenarios.
@when('I run the chat log processing script')
def step_when_run_chat_log_processing_script(context):
    context.processed_files = []
    with open(context.chat_log_file, "r") as f:
        chat_log = f.read().strip()

    prompt_response_pairs = chat_log.split("\n\n")
    for i, pair in enumerate(prompt_response_pairs, start=1):
        if "Prompt:" in pair and "Response:" in pair:
            prompt_id = f"P{i:03}"
            log_file = os.path.join(PROMPT_DIR, f"{prompt_id}.md")
            with open(log_file, "w") as log:
                log.write(f"# Prompt: {prompt_id}\n")
                log.write(f"**Date:** {datetime.now().strftime('%Y-%m-%d')}\n\n")
                log.write(pair.strip())
            context.processed_files.append(log_file)

# -------------------------------
# THEN Steps
# -------------------------------

# Verifies that valid prompt-response pairs are saved in the `prompt_logs/` directory.
@then('valid prompt-response pairs should still be saved in the `prompt_logs/` directory')
def step_then_valid_pairs_saved(context):
    """
    Verifies that valid prompt-response pairs are saved in the `prompt_logs/` directory.
    Ensures that at least one valid file exists and that all files in the processed list are present.
    """
    valid_files = [file for file in context.processed_files if os.path.exists(file)]
    if len(valid_files) == 0:
        raise AssertionError("No valid prompt-response pairs were saved. Ensure the chat log is not empty or malformed.")
    for file in valid_files:
        assert os.path.exists(file), f"File {file} does not exist."

# Verifies that unique IDs are generated for each prompt-response pair.
@then('the script should generate unique IDs for each prompt-response pair')
def step_then_generate_unique_ids(context):
    ids = [os.path.basename(file).split(".")[0] for file in context.processed_files]
    assert len(ids) == len(set(ids)), "Duplicate IDs found in the generated files."

# Verifies that Markdown files are saved in the `prompt_logs/` directory.
@then('save them as Markdown files in the `prompt_logs/` directory')
def step_then_save_markdown_files(context):
    for file in context.processed_files:
        assert os.path.exists(file), f"File {file} does not exist."
        
# Verifies that each prompt-response pair is saved as a Markdown file in the `prompt_longs/` directory.
@then('each prompt-response pair should be saved as a Markdown file in the `prompt_logs/` directory')
def step_then_files_saved_in_prompts(context):
    assert len(context.processed_files) > 0, "No files were created in the prompt_logs directory."
    for file in context.processed_files:
        assert os.path.exists(file), f"File {file} does not exist in prompt_logs."

# Verifies that each file has a unique ID.
@then('each file should have a unique ID')
def step_then_files_have_unique_ids(context):
    ids = [os.path.basename(file).split(".")[0] for file in context.processed_files]
    assert len(ids) == len(set(ids)), "Duplicate IDs found in the generated files."

# Verifies that no files are created for an empty chat log.
@then('no files should be created in the `prompt_logs/` directory')
def step_then_no_files_created(context):
    files_in_prompts = os.listdir(PROMPT_DIR)
    assert len(files_in_prompts) == 0, f"Files were created in the prompts directory for an empty chat log: {files_in_prompts}"

# Verifies that a warning is logged for an empty chat log.
@then('a warning should be logged')
def step_then_warning_logged(context):
    assert context.warning_logged, "Warning was not logged for an empty chat log."

# Verifies that invalid entries are skipped during processing.
@then('the script should skip invalid entries')
def step_then_skip_invalid_entries(context):
    valid_files = [file for file in context.processed_files if os.path.exists(file)]
    assert len(valid_files) > 0, "No valid files were created."
    assert len(valid_files) < len(context.processed_files), "Invalid entries were not skipped."

