# Duckie Issue Quality

This behavior module enforces Duckie’s issue quality standard.

## Purpose
Every issue generated by Duckie must pass 5 criteria before being included in a sprint.

## Quality Criteria
1. 📦 Small enough to ship in one sprint
2. 🧪 Behavior-driven
3. 🎯 Tied to a desired outcome
4. 📈 Testable in a tech preview
5. 🔁 Feeds stop/evolve decision-making

## Dependencies

This module depends on the following:

1. **Behave**: For running BDD tests. Ensure it is installed via `pip install behave`.
2. **Python 3.11**: The module is tested with Python 3.11.
3. **Duckie Validators and Generators**: Located in `duckie/validators/quality_gate.py` and `duckie/generators/issue_generator.py`.
4. **GitHub Actions Workflow**: A CI workflow is defined in `.github/workflows/validate-issues.yml` to automate quality checks.

Ensure these dependencies are installed and configured before running the tests.

## Usage
Run `behave` on this feature file to validate issue quality enforcement logic.

```bash
$ behave features/duckie_issue_quality.feature
```

## Integration with Duckie System

The Duckie Issue Quality module integrates seamlessly with the Duckie system to ensure that all generated issues meet high-quality standards before being shared with teams. Here’s how it fits into the overall workflow:

1. **Issue Generation**:
   - Issues are generated using the `issue_generator.py` script located in `duckie/generators/`.
   - These issues are structured to represent small, testable behaviors tied to outcomes.

2. **Quality Validation**:
   - The `quality_gate.py` script in `duckie/validators/` evaluates each issue against Duckie’s five quality criteria.
   - This validation ensures that only high-quality issues are passed to the next stage.

3. **Behavior-Driven Development (BDD)**:
   - The `features/duckie_issue_quality.feature` file defines the quality validation scenarios in Gherkin syntax.
   - Step definitions in `steps/duckie_issue_quality_steps.py` implement these scenarios using the Behave framework.

4. **Continuous Integration**:
   - A GitHub Actions workflow (`.github/workflows/validate-issues.yml`) automates the validation process during code pushes and pull requests.

5. **Usage in Duckie Commands**:
   - The quality validation logic is invoked as part of Duckie’s CLI commands, ensuring that all issues adhere to the quality standards before being published or included in sprints.
