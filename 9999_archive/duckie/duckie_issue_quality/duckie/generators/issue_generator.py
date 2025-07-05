# duckie/generators/issue_generator.py

from duckie.validators.quality_gate import run_duckie_quality_check

def generate_duckie_issue(step_metadata: dict) -> dict:
    """Generates a Duckie issue and runs it through the quality gate."""
    issue = {
        "title": step_metadata["title"],
        "description": step_metadata["description"],
        "is_small": step_metadata.get("est_hours", 0) <= 3,
        "is_behavioral": step_metadata.get("is_behavioral", True),
        "is_outcome_tied": step_metadata.get("has_outcome_link", True),
        "is_testable": step_metadata.get("has_preview_path", True),
        "feeds_decision": step_metadata.get("feeds_decision", True)
    }

    passed, failures = run_duckie_quality_check(issue)

    if not passed:
        issue["quality_flag"] = "⚠️ Needs Review"
        issue["quality_issues"] = failures
    else:
        issue["quality_flag"] = "✅ Passes Quality Gate"

    return issue
