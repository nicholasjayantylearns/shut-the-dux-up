# 🧪 Duckie Demo Usability Protocol: RAG + TrustyAI Model Evaluation

## 🎯 Purpose
This protocol is designed to support a demo of Duckie's ability to extract declarative UX structures from real-world usability scenarios. It simulates a workflow where a data scientist sets up a local model, connects it to a RAG database, and evaluates its output using TrustyAI.

---

## 🧠 User Scenario
A data scientist working in a regulated environment wants to evaluate an open-source LLM against a RAG-enhanced knowledge base of internal enterprise documents.

---

## ✅ Task Goal
Download a local LLM model, connect it to an internal RAG database, and evaluate its inference performance using TrustyAI.

---

## 🪜 Task Steps
1. Download a specific open-source model (e.g. `mistral-7b-instruct`)
2. Connect it to a local RAG system (e.g. Neo4j with enterprise docs)
3. Run 20 inference queries
4. Observe TrustyAI output
5. Identify any flagged low-confidence responses

---

## 🎯 Task Success Criteria
- The model is downloaded and initialized successfully
- RAG database connects and completes embedding phase
- TrustyAI outputs confidence scores for 20 test queries
- The user understands whether the model is production-ready

---

## 🧰 Predefined Environment

```yaml
Environment:
  OS: macOS 13+ or Ubuntu 22.04+
  Python: 3.10+
  GPU: CUDA or MPS compatible
  Installed packages:
    - transformers
    - langchain
    - neo4j
    - sentence-transformers
    - trustyai
  Neo4j:
    Host: bolt://localhost:7687
    Preloaded: Yes (embedded enterprise documents)
  LLM:
    Name: mistral-7b-instruct
    Format: GGUF (quantized)
  TrustyAI:
    Access: trustyai-cli available
```

---

## 🧪 What We're Trying to Learn
- Can users complete the RAG + TrustyAI loop without needing support?
- Where do they pause, hesitate, or get confused?
- Can they interpret TrustyAI output meaningfully and confidently?
- Do they trust the result enough to say, "Yes, we could ship with this"?