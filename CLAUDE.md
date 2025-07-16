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

### Governance Workflow Commands
```bash
# Run full validation pipeline with HITL queue management
python scripts/validation/validate_dux_objects.py

# Generate JSON schemas from canonical markdown
python scripts/generate_schemas_from_markdown.py

# Run docling parser for Problem objects
python scripts/docling/parse_problem_object.py

# Process specific validation stages
python scripts/validation/stage1_structure_validation.py  # Schema validation
python scripts/validation/stage2_consistency_validation.py # Content checks
python scripts/validation/stage3a_problem_basic_docling.py # Docling integration

# Auto-propagate approved schema changes
python scripts/propagate_schema_changes.py
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
- **Problems**: User needs, pain points, constraints with decomposed job_statement structure
- **Behaviors**: Atomic, testable user actions with signals
- **Results**: Measurable outcomes and impacts
- **Flows**: Sequential user journey patterns
- **UserOutcomes**: Business/user value definitions
- **Provenance**: Evidence attribution and source tracking

### Markdown-First Schema Governance
**CRITICAL**: DUX uses a **markdown-first** approach where human-readable schema definitions are the canonical source of truth:

- **Canonical Source**: `/DUX Object Model (Core)/src/dux_v9.6_split_schema/*.md` (markdown files)
- **Generated Artifacts**: `/src/dux_v9.6_split_schema/*.json` (auto-generated JSON schemas)
- **Philosophy**: Schemas evolve with research - markdown enables rapid iteration while maintaining validation

### Problem Object Schema Updates (Critical)
The Problem object now uses a **decomposed job_statement** structure:
```json
{
  "job_statement": {
    "user_scenario": {"value": "string", "source": "evidence|synthetic"},
    "user_enablement": {"value": "string", "source": "evidence|synthetic"},
    "user_outcome": {"value": "string", "source": "evidence|synthetic"}
  }
}
```
This replaces the previous string-based job_statement field.

### Schema Change Propagation
When canonical markdown schemas change, they automatically propagate to:
- JSON schema files (validation pipeline)
- Prompt templates (97_prompt_library)
- Documentation examples
- Test data samples
- HITL review examples

**This eliminates manual schema synchronization across 100+ files.**

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

## Multi-Stage Governance Workflow

### Natural Language-Centric Development Philosophy
DUX is a natural language-centric project. We generate from markdown (.md) canonical definitions, then validate the resulting JSON schemas. This ensures human readability and AI collaboration remain primary, with schemas serving as validation contracts.

### Current Development Workflow (HITL - Team of Two)
The HITL (Human-In-The-Loop) workflow represents our current development process for evolving the object model with a small team. This will scale to a production pipeline later.

### Four-Stage Validation Pipeline

#### Markdown Validation Stages (1-2)
These stages work exclusively with markdown files, validating structure and content before any JSON generation:

1. **Stage 1: Structure & Template Validation** (`stage1_structure_validation.py`)
   - **Input**: Markdown files only
   - Validates markdown follows DUX object template format
   - Checks required sections are present
   - Verifies Schema Attributes table exists
   - Ensures Canonical Example JSON block exists

2. **Stage 2: Consistency Validation** (`stage2_consistency_validation.py`)
   - **Input**: Markdown files only
   - Validates content consistency and completeness
   - Checks field descriptions match types
   - Verifies examples align with schema

#### Processing & JSON Validation Stages (3-4)

3. **Stage 3: Docling Processing & Schema Generation** (`stage3a_problem_basic_docling.py`)
   - **Input**: Validated markdown
   - **Output**: JSON schema
   - Uses docling to parse markdown structure
   - Extracts schema from tables
   - Generates JSON schema from validated structure
   - Validates the generated JSON schema structure

4. **Stage 4: Object Instance Validation** (`validate_dux_objects.py`)
   - **Input**: Docling-processed objects (JSON)
   - **Output**: Validated object instances
   - Creates bespoke objects based on each object type definition
   - Validates against DUX v9.6 JSON schemas
   - No monolithic structures - each object type has its own validation
   - Moves valid objects to promotion_candidates/
   - Moves invalid objects to hitl_failed/ with error logs

### HITL Development Queue Structure
```
watch_folders/
├── hitl_review/              # New objects for validation (entry point)
├── hitl_review_queue/        # Queued objects by type
│   ├── problem_objects/      # Problem-specific queue
│   ├── behavior_objects/     # Behavior-specific queue
│   ├── result_objects/       # Result-specific queue
│   └── other_objects/        # Other object types
├── hitl_promotion_candidates/ # Objects that passed validation
├── hitl_approved_for_production/ # Final approved canonical objects
├── hitl_failed/              # Objects that failed schema validation
├── hitl_rejected/            # Objects that failed naming convention
└── hitl_workshop/            # Working area for object development
```

### Object Naming Convention (STRICT)
Files MUST follow this pattern to enter the validation pipeline:
```
{object_type}_*_*_object_model_definition.md
```
Examples:
- ✅ `problem_cost_optimization_v1_object_model_definition.md`
- ✅ `behavior_resource_monitoring_v2_object_model_definition.md`
- ❌ `platform_engineer_001.md` (wrong pattern)
- ❌ `problem_object_odi_update.md` (missing suffix)

### Single Object Governance Rule
**ONE canonical definition per object type** in the system:
- Only one Problem object model definition
- Only one Behavior object model definition
- etc.

If a new version is submitted while one exists in promotion_candidates or approved_for_production, it must be rejected with clear messaging.

### System Boundary Enforcement
**Object Model Core** only handles:
- Object schema definitions
- Template validation
- Canonical examples

**Research Platform** handles:
- Object instances (e.g., specific platform engineer problems)
- Data extraction
- Relationship population

### Development Workflow Steps
1. Place new object markdown in `hitl_review/`
2. Run through 4-stage validation pipeline
3. Review failures in `hitl_failed/` with error logs
4. Iterate on object definitions based on validation feedback
5. Successfully validated objects move to `promotion_candidates/`
6. System auto-pulls next object from type-specific queue

### Pipeline Separation (from Infrastructure Insights)
- **Object Model Governance**: Validates schema structure only ("lego piece interfaces")
- **Extraction Pipeline** (magents.py): Creates instances with relationships ("lego building")  
- **Synthesis Pipeline**: Analyzes patterns and generates insights

## Triple Backlog System

The project maintains three critical documentation streams for continuous improvement and architectural clarity:

### 1. INFRASTRUCTURE_INSIGHTS_BACKLOG.md
- **Purpose**: Capture repeatable patterns, prompt evolution, infrastructure-as-code improvements
- **Audience**: System maintainers, method architects
- **Trigger**: Repeat behavior, scalable method changes
- **Location**: `/dux-object-model-core/INFRASTRUCTURE_INSIGHTS_BACKLOG.md`

### 2. COACHING_BACKLOG.md
- **Purpose**: Capture teaching moments, craft improvement, redline guidance
- **Audience**: Individual researchers
- **Trigger**: User shows skill growth opportunity
- **Location**: `/dux-object-model-core/COACHING_BACKLOG.md`

### 3. Architecture Documentation (docs/architecture/)
- **Purpose**: Capture system boundaries, separation of concerns, architectural decisions
- **Audience**: Development teams, future maintainers
- **Trigger**: System boundary clarifications, scope decisions, architectural patterns
- **Key Documents**:
  - `dux-system-boundaries.md` - Core vs Platform responsibilities
  - Additional ADRs (Architecture Decision Records) as needed

### Backlog Entry Format
```markdown
### [Insight Title]
**Type**: Coaching | Encoding | Architecture
**Timestamp**: YYYY-MM-DDTHH:MM:SSZ
**Session**: [session-name]
**Context**: [Triggering moment or observation]
**Description**: [Detailed explanation with examples]

**Next Step**: [Follow-up action or implementation direction]
```

### Triple Backlog Workflow
1. **During Development**: Capture insights in appropriate backlog
2. **Pattern Recognition**: When patterns emerge across backlogs, elevate to architecture docs
3. **CLAUDE.md Updates**: Significant changes should immediately update this file
4. **Cross-Reference**: Link between backlogs when insights relate

### CLAUDE.md Maintenance
This file (CLAUDE.md) should be kept current as the project evolves. When significant workflow changes, architecture updates, or process improvements are discovered during development, update this file immediately to ensure AI assistants have accurate context for future sessions. This file serves as the "current state" reference that complements the triple backlog system.

### HITL Development Pipeline Reference
For comprehensive documentation of the Human-in-the-Loop development pipeline, including detailed queue management, validation scripts, and workflow procedures, see:
- **`HITL_DEVELOPMENT_PIPELINE.md`** - Complete 4-stage validation pipeline documentation
- **Core Philosophy**: Markdown-as-source-code with automated schema governance
- **Queue Management**: One object per folder logic with auto-pull functionality
- **Validation Scripts**: Discrete scripts for each validation stage

### DoclingDocument Processing Breakthrough (2025-07-08)
**CRITICAL FIX**: The original `scripts/docling/parse_problem_object.py` was broken - it created DoclingDocument objects but ignored the structured data, falling back to manual regex parsing.

**Breakthrough Discovery**: DoclingDocument stores tables as `table.data.grid` containing TableCell objects, NOT as pages/elements. Fixed parser successfully:
- Extracts Schema Attributes table using structured `table.data.grid` access
- Generates exploded attribute objects (14 from Problem object)
- Validates markdown-as-source-code philosophy works with proper DoclingDocument processing

**Status**: 
- ✅ **HITL Activity 1 Complete** - Workshop parser proven in `watch_folders/hitl_workshop/fixed_docling_parser.py`
- 🔄 **Activity 2 Pending** - Canonical workflow and directory structure decisions (see `HITL_ACTIVITY_2_PLAN.md`)
- 📋 **P0.3 Audit Complete** - 5+ scattered prompt locations documented in Activity 2 plan
- 🚀 **Feature Branch Ready** - `fix/docling-document-processing` pushed to remote

#### P0.3 Prompt Consolidation Audit Results
**DISCOVERED: 5+ scattered prompt locations requiring consolidation**

**📁 Location 1**: `docs/97_prompt_library/` (3 files) - User handling solution in progress
**📁 Location 2**: `scripts/prompts_from_markdown/` (8 files) - Most complete set including agent variants
**📁 Location 3**: `src/prompt_templates/` (7 files) - Current target referenced by `prompt_generator.py`
**📁 Location 4**: `src/generators/scripts/prompts_from_markdown/` (6 files) - Partial set with v9.5 schema primer
**📁 Location 5**: Embedded in Generator Scripts (3 Python files) - Significant prompt logic in Python code
**📁 Location 6**: `test_data/.../extracted_objects_promptNote/` (2 files) - Test data, not active prompts

**Consolidation Strategy**: Create unified `src/prompts/` directory with subdirectories for templates, generators, and schema-aware prompts. Integrate with exploded object workflow.

#### Activity 2 Roadmap: Canonical Workflow & Directory Structure

**Prerequisites (P0.2-P0.4 Foundation Work)**:
- **P0.2**: Move schemas from `docs/99_archive/schema_backup_20250707/` to `src/dux_v9.6_split_schema/`
- **P0.3**: Consolidate 5+ scattered prompt locations into unified `src/prompts/` structure  
- **P0.4**: Establish single entry point for schema generation pipeline

**Key Decisions Needed**:
1. **Canonical Directory Structure**: Where exploded attribute objects live permanently
2. **Stage 3a/4 Integration**: Replace broken parser with workshop version using `table.data.grid`
3. **System Propagation**: How approved exploded objects update JSON schemas and prompts

**Workflow Options**:
- **Option A**: Pre-Approval Explosion - `markdown → explosion → promotion_candidates/ → approval → canonical/`
- **Option B**: Post-Approval Explosion - `markdown → promotion_candidates/ → approval → explosion → canonical/`
- **Option C**: Dual Structure - `markdown → both → promotion_candidates/ → approval → canonical/`

**Integration Points**: Workshop parser proven working at `watch_folders/hitl_workshop/fixed_docling_parser.py` ready to replace broken `scripts/docling/parse_problem_object.py`

## Extraction Pipeline Architecture (2025-01-08)

### Frame-Aware Extraction via Core API
The Research Platform now uses a Frame-aware extraction pipeline that eliminates manual prompt maintenance:

1. **Pipeline Location**: `dux-research-platform/src/magnets_frame_api.py`
2. **Core API Integration**: POST Frame context to receive Frame-aware prompts
3. **No Manual Prompts**: Core API generates contextual prompts based on Frame

### Extraction Workflow
```bash
# Run Frame-aware extraction
python src/magnets_frame_api.py \
  --frame_path test_data/frame_gpu_resource_optimization.md \
  --source_transcript_path test_data/joel_gpu_interview.md \
  --session_id joel_gpu_001 \
  --core_api_url http://localhost:8504 \
  --ollama_model_name llama2 \
  --ollama_base_url http://localhost:11434 \
  --output_dir output/
```

### Core API Contract
```
POST /api/objects/{object_type}/generate
Body: {
  "frame_type": "resource_optimization",
  "session_metadata": {...},
  "extraction_context": {...}
}
Response: {
  "docling_document": {
    "prompt_canvas": {
      "extraction_prompt": "Frame-aware prompt..."
    }
  }
}
```

## Human-Centered BDD Approach

### Personas for BDD Specs
- **Maya**: UX Researcher extracting insights
- **Priya**: Research Manager viewing insights for decisions
- **Alex**: Platform Engineer using insights to build solutions
- **Nick**: Research Platform Engineer running extractions

### BDD Feature Files
Located in `dux-research-platform/features/`:
- `researcher_extracts_insights.feature` - Maya's extraction workflow
- `research_manager_views_insights.feature` - Priya's decision workflow
- `platform_team_uses_insights.feature` - Alex's solution building
- `research_platform_extraction_api.feature` - FastAPI endpoints
- `ui_insight_display.feature` - UI component behaviors

## API Endpoints

### FastAPI Service (Port 8504)
```javascript
const API_BASE = 'http://localhost:8504';

// Insights
GET /api/insights?frame=resource_optimization
GET /api/insight-chains/{insight_id}

// Raw Objects
GET /api/objects/problems
GET /api/objects/behaviors
GET /api/objects/results
GET /api/objects?session_id=joel_gpu_001

// Evidence
GET /api/evidence/{data_id}
```

## Claude CLI Tools

### Sprint Mode
```bash
# Run Claude in Development Manager mode
./claude-sprint.sh
```

### Development Mode
```bash
# Standard development assistance
./claude-dev.sh
```

## Handoff Documentation
When transitioning between work sessions:
- **Day Squad**: See `HANDOFF_DAY_SQUAD_YYYYMMDD.md`
- **UI Team**: See `HANDOFF_UI_TEAM_YYYYMMDD.md`
- **Coaching Log**: See `dux-research-platform/COACHING_BACKLOG.md`

## Integration Points

- **Duckie CLI** generates objects consumed by **Object Model Core**
- **Research Platform** stores and queries objects in **Neo4j**
- **Core API** provides Frame-aware prompts to **Research Platform**
- **Validation Pipeline** ensures quality across all modules
- **Frontend** provides visual interface to research data
- **GitHub Integration** for issue tracking and PR automation

## Component Governance System (ADR-001)

### DUX Component Architecture
DUX objects "hire" UI components for specific jobs, following a markdown-first governance approach:

**Component Types:**
- **Table Row Components**: For comparison/prioritization (5 key attributes)
- **Grid Card Components**: For discovery/browsing workflows
- **Detail Page Components**: For deep analysis (doubles as downloadable slides using 9 consulting slide templates)

**API Contracts + Content Negotiation:**
```javascript
// API contracts generated from canonical object definitions
const PROBLEM_CONTRACTS = {
  "table-row": {
    "required_fields": ["job_statement", "opportunity_score", "created_by", "end_user", "updated_at"],
    "typography_rules": {
      "opportunity_score": "bold=evidence, italic=synthetic, —=none"
    }
  },
  "detail-page": {
    "required_fields": ["all_fields"],
    "slide_template": "problem_deep_dive_slide",
    "downloadable": true
  }
}

// Content negotiation implementation
GET /api/objects/problems
Accept: application/vnd.dux.table-row+json    // Returns table row format
Accept: application/vnd.dux.grid-card+json    // Returns card format
Accept: application/vnd.dux.detail-page+json  // Returns slide format
```

**Component Definitions Location:** `/src/dux_component_definitions/`

## Frame-Based Extraction Pipeline (ADR-002)

### Character Agent Architecture
The extraction pipeline uses character-driven agents with think-aloud protocols:

**Agent Types:**
- **Archivist**: Creates Data objects from transcript chunks
- **Advocate (Erin Brockovich)**: Extracts Problem objects with JTBD format
- **Columbo**: Identifies observable Behavior objects with signals
- **Beane (Billy Beane)**: Defines measurable Result objects with success criteria

**Think-Aloud Protocol:**
```
ADVOCATE (V.O)
[Character reasoning in screenplay format]
[Analysis of why this is a problem]
[END SCENE]
{
  "problems": [extracted_objects]
}
```

### Frame-Aware Prompt Generation
- **Core API** generates Frame-specific prompts via `/api/objects/{type}/generate`
- **Output Format**: DoclingDocument with embedded JSON prompt canvas
- **Structure**: Markdown with embedded JSON schemas, examples, and Frame-aware agent instructions
- **Orchestration Agent** manages pipeline triggers and agent coordination
- **Canonical Source**: All prompts generated from canonical object definitions

**API Response Format (Docling Markdown + Embedded JSON):**
```markdown
# Problem Object Definition

## Schema Attributes
[Structured table with field definitions]

## Canonical Example
```json
{
  "object_type": "Problem",
  "job_statement": {
    "user_scenario": "When managing GPU resources",
    "user_enablement": "I want visibility", 
    "user_outcome": "so I can optimize"
  }
}
```

## Frame-Aware Agent Instructions
[Character prompt with Frame context and embedded JSON examples]
```

This enables structured parsing by extraction agents, schema validation from embedded JSON, and Frame-specific examples in consumable format.

### Revised Evidence Architecture
1. **NO SESSION OBJECT, NO Provenance Object** - Data holds its own 'Session Attribute'
2. **Data × DUX Core Object = Frame Junction Object** (unique attribute: Protocol Attribute - discussion guide, usability protocol, etc.)
3. **Data × Frame = Evidence Junction Object** (many-to-many)
4. **Evidence × Frame = Insight Junction Object** (many-to-many)
5. **Universal Evidence Attribute** - Every CORE OBJECT & JUNCTION OBJECT has evidence attribute containing: IDs, pull quote/teaser, reference context (which attribute it supports), timestamp, attribution/citation

**Junction vs One-to-Many:**
- **Junction Objects** (many-to-many): Frame, Evidence, Insight
- **One-to-Many** (like Session): Data's session attribute

## Context Window Management Strategy (ADR-003)

### LLM Context Degradation Detection
Think-aloud logs provide diagnostic capability to detect:
- Agent repeating earlier work
- Forgetting previously extracted objects
- Circular reasoning patterns
- Quality degradation over session length
- Generic reasoning replacing specific evidence attribution

### HITL as Context Boundaries
The Human-in-the-Loop pipeline serves dual purpose:
1. **Quality validation** of extracted objects
2. **Natural breakpoints** for context window management

### Automatic Session Chunking
When context degradation detected through think-aloud analysis, automatically chunk sessions at HITL stage boundaries to prevent rework spiral where LLM keeps revising same content.

## Three-Tier HITL Architecture (ADR-004)

### 1. Object Model Governance HITL (dux-object-model-core)
- **Purpose**: Schema evolution and canonical definitions
- **Metaphor**: "Lego piece interfaces" - how objects should be structured
- **Queue**: `watch_folders/hitl_*` directories with 4-stage validation

### 2. Research Content HITL (dux-research-platform)
- **Purpose**: Instance validation and quality control
- **Metaphor**: "Lego building" - validating actual research instances
- **Process**: Frame-driven extraction with character agents

### 3. Implementation Testing HITL (duckie)
- **Purpose**: BDD scenarios and GitHub integration
- **Metaphor**: "Lego instructions" - testing implementation scenarios
- **Output**: Behave tests and GitHub issues

This separation prevents validation chaos and creates clear ownership boundaries.

## Project Management

### Linear Workspace Structure
**Development Team:**
- **Infrastructure Project**: Context window detection, HITL pipeline formalization, agent diagnostics
- **Regular Development**: Prompt validation, bug fixes, feature requests

**Research Platform Team:**
- **Extraction Pipeline**: P0-P3 prioritized tasks from schema consumption to advanced analytics

### Backlog Management
1. **INFRASTRUCTURE_INSIGHTS_BACKLOG.md** - System patterns, architectural insights
2. **RESEARCH_PLATFORM_EXTRACTION_BACKLOG.md** - Extraction pipeline tasks (P0-P3)
3. **COACHING_BACKLOG.md** - Teaching moments and experience insights

### BDD Testing Framework
Comprehensive Gherkin features for:
- Frame-based extraction workflows (`researcher_frame_extraction.feature`)
- QE prompt debugging (`qe_debug_prompt_failure.feature`)
- Agent coordination (`archivist_with_frames.feature`)
- Evidence flow management (`frame_to_evidence_flow.feature`)

### Architecture Decision Records
Key architectural decisions documented in `/docs/architecture/`:
- **ADR-001**: Component Governance System
- **ADR-002**: Frame-Based Extraction Pipeline
- **ADR-003**: Context Window Management Strategy
- **ADR-004**: Three-Tier HITL Architecture