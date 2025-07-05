# DUX v9.4 Prompt Template — Guardrails for Consistent Workflow

**MAX LENGTH**: 75 lines per prompt sequence  
**STRUCTURE**: Fixed pattern, no deviations allowed

---

## 🎯 **Prompt [NUMBER][LETTER]: [DESCRIPTIVE NAME]** 
*Time Allocated: [X] minutes*

### **👤 RESEARCHER ACTION: [CLEAR ACTION VERB]**

**Upload Instructions**
1. Select all [N] files together in your file browser and upload to NotebookLM
2. Ensure they appear in this priority order in NotebookLM's source list:
   - `filename1.ext` — [purpose/context]
   - `filename2.ext` — [purpose/context]  
   - `filename3.ext` — [purpose/context]
3. Then run each LLM prompt below, one at a time, until you reach the **👤 RESEARCHER DECISION GATE**

---

### **🤖 LLM PROMPT 1: [SHORT DESCRIPTIVE NAME]**
```
[Simple, copyable prompt - max 3 lines]
```
**👤 RESEARCHER**: Review LLM output → If satisfied, proceed to next prompt

---

### **🤖 LLM PROMPT 2: [SHORT DESCRIPTIVE NAME]**
```
[Simple, copyable prompt - max 3 lines or bullet points]
```
**👤 RESEARCHER**: Review LLM output → If satisfied, proceed to next prompt

---

### **🤖 LLM PROMPT 3: [SHORT DESCRIPTIVE NAME]**
```
[Simple, copyable prompt - max 5 bullet points if needed]
```
**👤 RESEARCHER**: Review [output type] → If satisfied, proceed to next prompt

---

### **🤖 LLM PROMPT 4: [SHORT DESCRIPTIVE NAME]**
```
[Simple, copyable prompt - focused on decision/assessment]
```
**👤 RESEARCHER**: Review [output type] → Make decision below

---

### **👤 RESEARCHER DECISION GATE: [PROMPT SEQUENCE] Complete?**
**Review all [N] LLM outputs above, then choose:**

✅ **"PUSH IT"** → Proceed to Prompt [NEXT] ([NEXT SEQUENCE NAME])  
⏸️ **"REVIEW"** → Examine outputs in detail, request clarifications, then return here

**Decision rationale**: [Brief explanation of what was accomplished]

---

## 📋 **TEMPLATE GUARDRAILS**

### ✅ **REQUIRED ELEMENTS** (Must include all)
- **👤 RESEARCHER ACTION** section with clear upload instructions
- **3-step upload pattern** (select files → verify order → run prompts)
- **🤖 LLM PROMPT** blocks with copyable code fences
- **👤 RESEARCHER** review instructions after each prompt
- **👤 RESEARCHER DECISION GATE** with binary choice
- **Decision rationale** explaining what was accomplished

### ❌ **FORBIDDEN ELEMENTS** (Never include)
- Abstract explanations or theory
- Complex multi-stage embedded prompts
- Tables instead of numbered lists
- References to UI elements that don't exist ("Click Continue")
- Ambiguous upload instructions
- Missing decision gates
- Prompts longer than 5 bullet points

### 📏 **SIZE CONSTRAINTS**
- **Total prompt sequence length**: Maximum 75 lines
- **LLM prompts**: Maximum 5 bullet points each
- **Upload instructions**: Exactly 3 numbered items
- **File lists**: Maximum 5 files per prompt sequence

### 🎯 **LANGUAGE REQUIREMENTS**
- **Action verbs**: Upload, Review, Extract, Analyze, Rate, Compare
- **Decision language**: "PUSH IT" vs "REVIEW" (exactly these terms)
- **Role markers**: 👤 RESEARCHER vs 🤖 LLM (consistent icons)
- **Transition phrases**: "If satisfied, proceed to next prompt"

### 🔄 **WORKFLOW PATTERN**
```
Upload files → Run prompt 1 → Review → Run prompt 2 → Review → 
Run prompt 3 → Review → Run prompt 4 → Review → Decision Gate
```
