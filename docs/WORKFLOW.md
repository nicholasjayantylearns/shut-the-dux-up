# Usability Testing Workflow - Complete Process

This document outlines the complete workflow for extracting DUX objects from source materials and assembling them into actionable insights stories using NotebookLM and the DUX Object Model v9.4.

## Overview

The workflow transforms raw research materials into business decision support through:
1. **Object Extraction**: Extract and force rank DUX objects from source materials
2. **Golden Path Validation**: Ensure objects encode clear path from insight to value
3. **Insights Story Assembly**: Create actionable business decision narratives
4. **Implementation Planning**: Generate gap-driven Issues for execution

## Phase 1: Source Material Preparation

### Input Materials Needed
- **User Research**: JTBD interviews, usability studies, survey data
- **Analytics Data**: Usage patterns, performance metrics, support tickets
- **Business Documentation**: Strategy docs, competitive analysis, cost data
- **Technical Context**: System capabilities, constraints, existing infrastructure

### Preparation Checklist
- [ ] Research protocols include ODI methodology for opportunity scoring
- [ ] Analytics data covers user behavior at scale (100+ users minimum)
- [ ] Business impact is quantified with specific metrics
- [ ] Technical constraints and capabilities are documented

## Phase 2: Object Extraction (NotebookLM)

Execute object extraction prompts in sequence:

### 2.1 Extract Problems
**Prompt**: `extract_problems_prompt.md`
- Focus on strategic JTBD problems only
- Ensure ODI opportunity score calculation
- Extract 3-7 problems maximum
- Force rank by business impact × user impact

### 2.2 Extract Behaviors  
**Prompt**: `extract_behaviors_prompt.md`
- Extract atomic, testable behaviors only
- Maintain Task/Action distinction 
- Extract 5-12 behaviors total
- Force rank by user value × implementation feasibility

### 2.3 Extract Results
**Prompt**: `extract_results_prompt.md`
- Focus on behavior change measurement
- Ensure business value quantification
- Extract 2-5 results maximum
- Force rank by business value × user impact × feasibility

### 2.4 Extract Journeys
**Prompt**: `extract_journeys_prompt.md`
- Distinguish user_flow vs phase_journey types
- Include orchestration content (map/protocol)
- Extract 2-6 journeys total
- Force rank by user value × orchestration importance

### 2.5 Extract Issues
**Prompt**: `extract_issues_prompt.md`
- Identify gaps between current state and target objects
- Mix gap_analysis and external_ticket types
- Extract 3-8 issues total
- Force rank by gap impact × implementation feasibility

## Phase 3: Force Ranking & Prioritization

### 3.1 Apply Comprehensive Ranking
**Prompt**: `rank_objects_prompt.md`
- Use weighted scoring methodology consistently
- Create prioritized indexes for each object type
- Identify cross-object relationship clusters
- Generate business decision support matrix

### 3.2 Validation Checkpoints
- [ ] Scoring methodology applied consistently
- [ ] Cross-object relationships validate logically
- [ ] Business decision relevance clear for all rankings
- [ ] Implementation priorities realistic and actionable

## Phase 4: Golden Path Validation

### 4.1 Validate Complete Golden Path
**Prompt**: `golden_path_validation_prompt.md`
- Validate research insight fidelity
- Check object relationship coherence
- Assess digital observation feasibility
- Verify business value traceability
- Evaluate implementation viability

### 4.2 Strengthen Weak Areas
- Address identified gaps immediately
- Strengthen weak validation points
- Mitigate risks to golden path success
- Enhance business decision support quality

## Phase 5: Insights Story Assembly

### 5.1 Create Business Decision Stories
**Template**: `insights_story_template.md`
- Use highest force-ranked objects from each category
- Focus on specific business decisions
- Link objects through golden path framework
- Include quantified impact and implementation plans

### 5.2 Story Components
Each insights story must include:
- **The Need**: Specific business decision to inform
- **The Solution**: Recommendation with force-ranked objects
- **The Why**: Core objects with golden path validation
- **The How**: Impact plan and gap-driven action plan

## Phase 6: Implementation Planning

### 6.1 Generate Actionable Issues
Transform gap analysis into implementation roadmap:
- Prioritize by force ranking scores
- Create specific acceptance criteria  
- Assign owners and timelines
- Link to BDD validation framework

### 6.2 Digital Observation Setup
Plan for scale validation:
- Define observable signals for each behavior
- Set up measurement infrastructure
- Establish success thresholds
- Create monitoring and reporting cadence

## Quality Gates

### Gate 1: Object Extraction Quality
- [ ] All objects follow DUX v9.4 specifications
- [ ] Force ranking methodology applied consistently
- [ ] Evidence backing is substantial and specific
- [ ] Golden path components are identifiable

### Gate 2: Relationship Coherence
- [ ] Problems link logically to Results through Behaviors
- [ ] Journeys orchestrate Behaviors into coherent experiences
- [ ] Issues address real gaps in implementation
- [ ] Cross-object relationships support business value delivery

### Gate 3: Business Decision Support
- [ ] Insights stories inform specific business decisions
- [ ] Recommendations are actionable with clear next steps
- [ ] ROI projections are conservative and measurable
- [ ] Risk assessment addresses potential failure modes

### Gate 4: Implementation Viability
- [ ] Resource requirements are realistic
- [ ] Technical approach builds on proven patterns
- [ ] Timeline accounts for organizational change management
- [ ] Success metrics enable digital observation at scale

## Success Metrics

### Research Insight Translation
- **Fidelity Score**: How well research insights translate to Problem objects
- **Evidence Quality**: Strength of supporting research and data
- **JTBD Compliance**: Adherence to proper job statement format

### Golden Path Strength  
- **Object Coherence**: Logical flow from Problem through Result
- **Digital Observation**: Feasibility of scale behavior measurement
- **Business Traceability**: Clear path from insight to quantified value

### Business Decision Impact
- **Decision Clarity**: How clearly stories inform go/no-go decisions
- **ROI Confidence**: Reliability of business value projections
- **Implementation Readiness**: Quality of gap-driven action plans

## Common Pitfalls & Mitigations

### Pitfall 1: Extracting Too Many Objects
**Problem**: Overwhelming complexity reduces decision clarity
**Mitigation**: Strict limits (3-7 Problems, 5-12 Behaviors, 2-5 Results)

### Pitfall 2: Weak Force Ranking
**Problem**: All objects seem equally important
**Mitigation**: Use weighted scoring with transparent calculations

### Pitfall 3: Missing Golden Path Validation
**Problem**: Objects don't connect into coherent value delivery
**Mitigation**: Validate relationship coherence before story assembly

### Pitfall 4: Unrealistic Implementation Plans
**Problem**: Timelines or resource requirements not achievable
**Mitigation**: Conservative estimation with buffer and risk mitigation

### Pitfall 5: Weak Digital Observation Plan
**Problem**: Cannot validate behavior change at scale
**Mitigation**: Focus on enterprise-compliant signals available through existing infrastructure

## Next Steps After Completion

1. **Present Insights Stories** to business decision makers
2. **Execute Implementation Plan** starting with highest-priority Issues
3. **Set Up Monitoring** for digital observation at scale
4. **Track Business Value** delivery against projections
5. **Iterate and Improve** based on actual outcomes and learning

## Templates & Resources

- All extraction prompts in `/usability_testing/` folder
- Force ranking methodology in `rank_objects_prompt.md`
- Golden path validation in `golden_path_validation_prompt.md`
- Complete story template in `insights_story_template.md`
- DUX Object Model v9.4 specification in root directory

## Support & Troubleshooting

For questions or issues with the workflow:
1. Refer to DUX Object Model v9.4 specification
2. Check quality gates for missed validation steps
3. Review example outputs in prompt files
4. Validate golden path coherence before proceeding
