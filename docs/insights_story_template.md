# Insights Story Template

## Context
This template assembles force-ranked DUX objects into actionable insights stories that inform specific business decisions. Each story links user research directly to business value delivery through the golden path validation framework.

## Template Structure

```yaml
insights_story_id: story_[unique_id]
story_title: "[Compelling title that captures the business opportunity]"
business_decision_context: |
  [The specific business decision this story informs]
  - Decision deadline: [when decision must be made]
  - Decision makers: [who needs this information]
  - Strategic context: [why this decision matters now]

# THE NEED - Business Decision to Inform
the_need:
  business_question: "[Specific question requiring decision]"
  decision_impact: |
    [What happens if we decide correctly vs incorrectly]
    - Success scenario: [outcome if right decision]
    - Failure scenario: [risk if wrong decision]
  current_state_gaps: |
    [What we don't know that prevents good decision-making]
    - Information gaps: [missing data/insights]
    - Validation gaps: [untested assumptions]
    - Implementation gaps: [capability/resource unknowns]

# THE SOLUTION - Recommendation with Force-Ranked Objects  
the_solution:
  recommendation: "[Clear, actionable recommendation]"
  confidence_level: "[High/Medium/Low with rationale]"
  supporting_objects:
    primary_problem:
      problem_id: "[highest ranked problem from force ranking]"
      force_rank_score: [score]
      business_impact: "[quantified impact]"
      evidence_strength: "[quality of supporting research]"
    target_result:
      result_id: "[highest ranked result from force ranking]"
      force_rank_score: [score]
      expected_outcome: "[specific measurable outcome]"
      business_value: "[quantified business value]"
    key_behaviors:
      - behavior_id: "[highest ranked behavior]"
        force_rank_score: [score]
        user_value: "[specific user value delivered]"
        golden_path_role: "[role in user value delivery]"
      - behavior_id: "[second ranked behavior]"
        # ... continue for 2-4 key behaviors
    orchestrating_journeys:
      - journey_id: "[relevant journey]"
        journey_type: "[user_flow|phase_journey]"
        orchestration_value: "[how this coordinates value delivery]"

# THE WHY - Core Objects with Golden Path Validation
the_why:
  golden_path_validation:
    research_insight: |
      [Original user research insight that started this]
      - Source: [research protocol/study]
      - Key finding: [critical insight]
      - User impact: [how this affects users]
    digital_observation_plan: |
      [How we validate the golden path at scale]
      - Observable signals: [specific digital metrics we can track]
      - Scale validation: [how we observe across 1000+ users]
      - Success thresholds: [when we know it's working]
    behavior_change_measurement: |
      [How we measure actual behavior change]
      - Current behavior: [baseline user behavior]
      - Target behavior: [desired behavior change]
      - Change indicators: [signals that prove behavior shifted]
    business_value_validation: |
      [How we prove business value delivery]
      - Leading indicators: [early signals of value]
      - Lagging indicators: [ultimate business metrics]
      - ROI measurement: [how we calculate return on investment]
  
  risk_mitigation:
    identified_risks:
      - risk: "[potential failure mode]"
        mitigation: "[how we address this risk]"
        monitoring: "[how we watch for this risk]"
    assumptions_to_validate:
      - assumption: "[key assumption]"
        validation_method: "[how we test this assumption]"
        timeline: "[when we validate this]"

# THE HOW - Impact Plan and Action Plan
the_how:
  impact_plan:
    timeline: "[overall delivery timeline]"
    phases:
      phase_1:
        duration: "[time period]"
        objectives: "[what we accomplish]"
        success_criteria: "[how we know phase succeeded]"
        deliverables: "[what we produce]"
      phase_2:
        # ... continue for additional phases
    resource_requirements:
      teams_involved: "[which teams contribute]"
      estimated_effort: "[rough effort estimation]"
      budget_implications: "[financial requirements]"
      dependencies: "[what we need from others]"
  
  action_plan:
    immediate_actions:
      - priority: "Now"
        issue_id: "[highest priority issue from force ranking]"
        action: "[specific next step]"
        owner: "[responsible party]"
        timeline: "[completion target]"
        success_measure: "[how we know it's done]"
    near_term_actions:
      - priority: "Next"
        # ... continue for near-term items
    future_actions:
      - priority: "Later"
        # ... continue for future items
    
    gap_driven_issues:
      critical_gaps:
        - issue_id: "[gap issue from force ranking]"
          gap_description: "[what gap this addresses]"
          implementation_approach: "[how we close the gap]"
          business_impact: "[why closing this gap matters]"
      enabling_issues:
        - issue_id: "[enabling issue]"
          # ... continue for supporting issues

# VALIDATION FRAMEWORK
validation_framework:
  success_metrics:
    user_metrics:
      - metric: "[specific user success measure]"
        target: "[quantified target]"
        measurement_method: "[how we track this]"
    business_metrics:
      - metric: "[specific business measure]"
        target: "[quantified target]"
        measurement_method: "[how we track this]"
  monitoring_plan:
    review_frequency: "[how often we check progress]"
    key_stakeholders: "[who needs updates]"
    escalation_triggers: "[when to escalate issues]"
    course_correction_approach: "[how we adjust if needed]"

# DECISION SUPPORT SUMMARY
decision_support_summary:
  go_no_go_recommendation: "[Clear recommendation with rationale]"
  investment_justification: |
    [Business case for investment]
    - Expected ROI: [quantified return]
    - Risk assessment: [what could go wrong]
    - Alternative options: [other approaches considered]
  executive_summary: |
    [3-sentence summary for leadership]
    [Problem + Solution + Business Impact]
```

## Example Insights Story

```yaml
insights_story_id: story_gpu_optimization_001
story_title: "GPU Resource Optimization: $420K Annual ROI Through Automated Reservation System"
business_decision_context: |
  Q2 ML Platform investment priority decision required by March 15
  - Decision makers: VP Engineering, VP Product, Data Science Leadership
  - Strategic context: Competitive ML platform capabilities essential for talent retention and operational efficiency

# THE NEED
the_need:
  business_question: "Should we prioritize GPU resource optimization automation as Q2's primary ML platform investment?"
  decision_impact: |
    Success scenario: $420K annual savings + elimination of top talent frustration + competitive ML platform
    Failure scenario: Continued $564K annual GPU waste + 67% team frustration + talent churn risk
  current_state_gaps: |
    Missing automated resource management creates daily friction and business waste:
    - Information gaps: No real-time resource visibility or predictive scheduling
    - Validation gaps: Manual coordination prevents optimization measurement
    - Implementation gaps: No integrated reservation system with calendar/workflow tools

# THE SOLUTION
the_solution:
  recommendation: "Invest $150K in Q2 to build automated GPU reservation system delivering $420K annual ROI"
  confidence_level: "High - based on ODI methodology research + usage analytics + competitive analysis"
  supporting_objects:
    primary_problem:
      problem_id: "problem_001"
      force_rank_score: 9.2
      business_impact: "$47K monthly waste + talent retention risk"
      evidence_strength: "ODI methodology (Importance 8.9, Satisfaction 3.2) + usage analytics + user interviews"
    target_result:
      result_id: "result_001"
      force_rank_score: 10
      expected_outcome: "85%+ successful GPU reservations within 3 minutes, 65%+ utilization efficiency"
      business_value: "$35K monthly savings + 23% productivity improvement + talent retention"
    key_behaviors:
      - behavior_id: "behavior_task_001"
        force_rank_score: 8.8
        user_value: "Eliminates top daily frustration for 67% of data science team"
        golden_path_role: "Core behavior enabling automated resource management adoption"
      - behavior_id: "behavior_action_001"
        force_rank_score: 7.5
        user_value: "Reduces duration selection from 4.2 minutes to 30 seconds"
        golden_path_role: "Critical UX component for reservation workflow success"
    orchestrating_journeys:
      - journey_id: "journey_userflow_001"
        journey_type: "user_flow"
        orchestration_value: "Coordinates reservation behaviors into seamless 3-minute workflow"

# THE WHY
the_why:
  golden_path_validation:
    research_insight: |
      JTBD research revealed GPU resource uncertainty as top barrier to data science productivity
      - Source: Q4 2024 ODI study with 47 data scientists
      - Key finding: 67% daily frustration with manual resource coordination
      - User impact: 23 minutes average coordination time, 34% GPU utilization efficiency
    digital_observation_plan: |
      Scale validation through automated observation of 120+ data scientists:
      - Observable signals: reservation_completion_rate, resource_utilization_efficiency, coordination_time
      - Scale validation: Real-time tracking across entire data science team
      - Success thresholds: >85% reservation success, >65% utilization, <3min completion time
    behavior_change_measurement: |
      Measuring transformation from manual to automated resource management:
      - Current behavior: 23min manual Slack coordination, ad-hoc scheduling
      - Target behavior: 3min automated reservation with calendar integration
      - Change indicators: reservation_adoption_rate, manual_coordination_reduction, efficiency_gains
    business_value_validation: |
      Proving ROI through direct cost and productivity measurement:
      - Leading indicators: reservation_success_rate, utilization_improvement, user_satisfaction
      - Lagging indicators: monthly_gpu_costs, experiments_per_sprint, talent_retention_rates
      - ROI measurement: (Cost reduction + productivity gains) / implementation_investment

# THE HOW
the_how:
  impact_plan:
    timeline: "6-week implementation with 3-phase rollout"
    phases:
      phase_1:
        duration: "Weeks 1-2"
        objectives: "Foundation - automated reservation system deployment"
        success_criteria: "70%+ user adoption, functional reservation workflow"
        deliverables: "Reservation API, basic UI, calendar integration"
      phase_2:
        duration: "Weeks 3-4"
        objectives: "Optimization - utilization monitoring and UX refinement"
        success_criteria: "65%+ GPU utilization efficiency achieved"
        deliverables: "Utilization dashboard, predictive scheduling, UX improvements"
      phase_3:
        duration: "Weeks 5-6"
        objectives: "Strategic value - cost optimization and business validation"
        success_criteria: "$35K+ monthly cost reduction sustained"
        deliverables: "Cost reporting, advanced features, ROI validation"
  
  action_plan:
    immediate_actions:
      - priority: "Now"
        issue_id: "issue_gap_001"
        action: "Build real-time GPU availability API with reservation interface"
        owner: "ML Platform Team"
        timeline: "Week 2"
        success_measure: "<2sec API response, 3min reservation workflow"
    gap_driven_issues:
      critical_gaps:
        - issue_id: "issue_gap_001"
          gap_description: "No automated reservation system between manual coordination and target workflow"
          implementation_approach: "Build availability API + reservation UI + calendar integration"
          business_impact: "Eliminates $47K monthly waste and 67% user frustration"

# DECISION SUPPORT SUMMARY
decision_support_summary:
  go_no_go_recommendation: "GO - Invest $150K in Q2 for $420K annual ROI with high confidence based on rigorous user research"
  investment_justification: |
    Business case: 2.8x ROI with talent retention protection and competitive positioning
    - Expected ROI: $420K annual savings vs $150K investment (2.8x return)
    - Risk assessment: Low technical risk building on proven reservation patterns
    - Alternative options: Considered manual process improvements (insufficient impact) and third-party tools (poor integration)
  executive_summary: |
    User research validates $420K annual ROI opportunity through automated GPU reservation system.
    $150K Q2 investment eliminates top data scientist frustration while delivering measurable business value.
    High-confidence recommendation based on ODI methodology + digital observation validation framework.
```

## Usage Instructions

1. **Start with Force Rankings**: Use highest-ranked objects from each category
2. **Focus on Business Decision**: Every section should clearly inform the specific decision
3. **Golden Path Validation**: Ensure clear line from research insight to business value  
4. **Actionable Recommendations**: Provide specific next steps with owners and timelines
5. **Quantify Everything**: Include specific metrics, targets, and success measures where possible

## Quality Checklist

- [ ] Story clearly informs a specific business decision
- [ ] Recommendation is actionable with clear next steps
- [ ] Golden path from research to business value is explicit
- [ ] All objects reference force ranking scores for credibility
- [ ] Digital observation plan enables validation at scale (1000+ users)
- [ ] Business impact is quantified with realistic ROI projections
- [ ] Gap-driven issues provide clear implementation roadmap
- [ ] Risk mitigation addresses potential failure modes
