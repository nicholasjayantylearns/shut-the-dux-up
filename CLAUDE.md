# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Framework

**Declarative UX (DUX)** is an AI-powered framework that transforms UX research into executable, testable code. The system decomposes all software artifacts into three molecular components: **Problems**, **Behaviors**, and **Results**.

## Architecture Overview

The framework consists of four main modules:

### 1. dux-object-model-core
- **Schema Foundation**: JSON schemas for DUX objects (v9.6 current, migrating from v9.5)
- **Object Types**: Problem, Behavior, Result, Flow, UserOutcome, Provenance, Insight, Data, Evidence/Provenance/Insight Junctions, Frame, Report, Report Gallery, Session, Study
- **Validation Pipeline**: Multi-layer validation with schema, quality, and integrity checks
- **BDD Framework**: Behave-based testing using Gherkin syntax

### 2. dux-research-platform
- **Neo4j Knowledge Graph**: Stores and queries DUX objects
- **Multi-Service Architecture**: Bot (8501), Loader (8502), PDF Bot (8503), API (8504), CSV Bot (8506)
- **LLM Integration**: Supports Ollama, OpenAI, Claude, and other models
- **RAG Pipeline**: Vector embeddings with semantic search

### 3. duckie
- **CLI Orchestrator**: Converts user scenarios into BDD tests and GitHub issues
- **Core Commands**: `teach-me-how-to-duckie`, `drop`, `check`, `push`, `remix`
- **Dual Parsing**: Simple parsing and LLM-enabled parsing modes

### 4. dux-white-label-ui
- **Frontend Interface**: Next.js/React UI connecting to API at port 8504
- **Integration**: Connects to research platform backend

## Common Development Commands

### Docker Stack (Primary Development Method)
```bash
# Start full stack
docker compose up

# Start specific services
docker compose up bot          # Research chat interface (port 8501)
docker compose up loader       # Data ingestion (port 8502)
docker compose up api          # API service (port 8504)
docker compose up white-label-ui # Frontend (port 3000)

# View logs
docker compose logs -f [service_name]
```

### Python/BDD Testing
```bash
# Run BDD tests (any module with features/ directory)
behave features/

# Run specific feature
behave features/duckie_core.feature

# Run object model validation
python scripts/validation/validate_dux_objects.py

# Run Duckie issue quality check
cd duckie/duckie_issue_quality && ./test.sh
```

### Duckie CLI Commands
```bash
# Interactive scenario creation
duckie teach-me-how-to-duckie

# Generate step definitions and GitHub issues
duckie drop

# Monitor implementation progress
duckie check

# Create integration test PR
duckie push

# LLM-powered scenario refinement
duckie remix
```

### Frontend Development
```bash
# In dux-research-platform/genai-stack/front-end/
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Key Dependencies

### Python Requirements
- **dux-object-model-core**: `behave`, `jsonschema`
- **dux-research-platform**: `neo4j`, `streamlit`, `fastapi`, `langchain-*`, `torch`
- **duckie**: `behave`, `parse`

### Frontend Stack
- **Svelte** with Vite build system
- **TailwindCSS** for styling
- **Lucide Icons** for UI elements

## Schema Architecture (v9.6)

The framework uses a sophisticated object model where every software artifact decomposes into:
- **Problems**: User needs, pain points, constraints
- **Behaviors**: Atomic, testable user actions with signals
- **Results**: Measurable outcomes and impacts
- **Flows**: Sequential user journey patterns
- **UserOutcomes**: Business/user value definitions
- **Provenance**: Evidence attribution and source tracking

## Development Workflow

### Typical Development Flow
1. **Research Input**: User scenarios, protocols, qualitative data
2. **AI Processing**: LLM parsing and structuring via Duckie CLI
3. **Object Generation**: Structured DUX objects with validation
4. **Storage**: Neo4j knowledge graph with vector embeddings
5. **Testing**: BDD scenarios with Behave framework
6. **Output**: Testable code, GitHub issues, validated prototypes

### Testing Strategy
- **Schema Validation**: JSON Schema compliance
- **Data Quality**: Content and structure validation
- **Integrity Checks**: Cross-object relationship validation
- **BDD Testing**: Gherkin scenarios with Python step definitions

## Environment Configuration

### Required Environment Variables
```bash
# Neo4j Database
NEO4J_URI=bolt://localhost:7687
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=password

# LLM Configuration
OLLAMA_BASE_URL=http://host.docker.internal:11434
LLM=llama2
EMBEDDING_MODEL=sentence_transformer

# Frontend
NEXT_PUBLIC_USE_LIVE_DATA=true
NEXT_PUBLIC_API_BASE_URL=http://api:8504
```

### Docker Profile Usage
- **linux**: Standard CPU-only services
- **linux-gpu**: GPU-enabled LLM services with NVIDIA support

## Core Development Principles

### Declarative Approach
- Define **what** users need to accomplish
- System determines **how** to generate and test it
- AI-assisted generation of test scenarios
- Infrastructure-as-code for UX research

### Evidence-Based Validation
- Structured evidence units with direct attribution
- Quality scoring and completeness metrics
- Cross-object evidence validation
- Research completeness tracking

### Natural Language Centricity
- Plain language for global collaboration
- Conversational documentation approach
- Cultural adaptation through storytelling
- Time zone resilient communication

## File Structure Notes

- `features/` directories contain Gherkin BDD tests
- `steps/` directories contain Python step definitions
- `src/dux_v9.6_split_schema/` contains current object schemas
- `watch_folders/` contain human-in-the-loop validation workflows
- `test_data/` contains synthetic and real data samples for testing

## Integration Points

- **Duckie CLI** generates objects consumed by **Object Model Core**
- **Research Platform** stores and queries objects in **Neo4j**
- **Validation Pipeline** ensures quality across all modules
- **Frontend** provides visual interface to research data
- **GitHub Integration** for issue tracking and PR automation