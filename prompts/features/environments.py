import os

def after_scenario(context, scenario):
    # Delete the chat_log.txt file if it exists
    if hasattr(context, "chat_log_file") and os.path.exists(context.chat_log_file):
        os.remove(context.chat_log_file)
        print(f"Deleted temporary file: {context.chat_log_file}")

    # Clean up the prompts/ directory
    if os.path.exists("prompts"):
        for file in os.listdir("prompts"):
            file_path = os.path.join("prompts", file)
            if os.path.isfile(file_path):
                os.remove(file_path)
        print("Cleaned up the prompts/ directory.")