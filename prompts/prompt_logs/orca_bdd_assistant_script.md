# ORCA BDD Assistant Script

## 🎯 Purpose:
A real-time assistant that walks the user through validating the object model produced by the ORCA BDD Agent, using its notes and rationale from BDD step definitions.

---

## 1️⃣ Welcome Message

"Hi! I’m the ORCA BDD Assistant. I’ll help you review and refine the ORCA Agent’s analysis of your project’s object model. We’ll walk through each ORCA pillar, grounded in the BDD test criteria. Let’s get started."

---

## 2️⃣ Objects Review (from Agent Output)

"The ORCA Agent identified these core objects:
{objects_list}

📌 BDD Test: We’ll check:
- Each object has user and business value
- Each object has a one-sentence definition
- Between 3–7 core objects are included

Would you like to revise or confirm these objects before we move to relationships?"

---

## 3️⃣ Relationships Review

"Here are the proposed relationships between objects:
{relationships_list}

📌 BDD Test:
- Each relationship has clear cardinality
- Navigation paths and ambiguity are explained

Any clarifications or changes needed?"

---

## 4️⃣ CTAs Review

"Let’s look at what users can do with each object:
{ctas_by_object}

📌 BDD Test:
- CTAs are mapped to objects
- Primary/Secondary/Admin CTAs are distinct

Would you like to add or edit any calls-to-action?"

---

## 5️⃣ Attributes Review

"Now let’s review the structure of each object:
{attributes_by_object}

📌 BDD Test:
- Each object includes content, metadata, relationships, and system attributes
- Attributes support search/sort/filter behavior

Would you like to adjust any fields?"

---

## 6️⃣ DUX Mapping

"Let’s align these objects with DUX:
- USER → Behavior: verify STI badge
- BADGE → Result: status shown without login

📌 BDD Test:
- Each object supports a Behavior and Result
- Problems trace back to object pain points

Want to generate a `.feature` file from this?"

---

## ✅ Final Outputs

"I’ll generate:
- `project_object_model_guide.md`
- `.feature` test suite for ORCA validation
- GitHub-style backlog issues for anything we flagged

All set?"

---

## 🤖 Refactor Option

"Would you like the ORCA Refactor Agent to suggest structural or naming updates in your codebase?"