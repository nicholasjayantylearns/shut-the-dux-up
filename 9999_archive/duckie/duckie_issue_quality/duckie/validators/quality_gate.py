# duckie/validators/quality_gate.py

def run_duckie_quality_check(issue: dict) -> tuple[bool, list[str]]:
    """Evaluate a generated issue against Duckie’s 5 quality criteria.
    Returns (True, []) if the issue passes, or (False, [failed_criteria]) otherwise.
    """
    failures = []

    if not issue.get("is_small"):
        failures.append("📦 Not small enough to ship in 1 sprint")

    if not issue.get("is_behavioral"):
        failures.append("🧪 Not behavior-driven")

    if not issue.get("is_outcome_tied"):
        failures.append("🎯 Not tied to a user or product outcome")

    if not issue.get("is_testable"):
        failures.append("📈 Not testable in a tech preview")

    if not issue.get("feeds_decision"):
        failures.append("🔁 Doesn’t help inform stop/evolve decisions")

    return (len(failures) == 0), failures
