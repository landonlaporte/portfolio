import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'unified-platform',
    title: 'Unified Platform',
    description: 'Consolidated over 200 internal business applications into a single, unified operational platform to improve efficiency for internal users and clients.',
    category: 'Platform Design',
    image: 'https://images.squarespace-cdn.com/content/v1/67cf1371b29b1c7f6aa141a0/fccf0aa8-60e5-439a-ac21-339c69eeea08/Rope_wide.jpg',
    tags: ['Research Operations', 'Platform Design', 'Cross-functional'],
    detailedContent: {
      objective: 'Improve and consolidate internal tools to enhance operational efficiency and provide a self-service client offering. Transform the business by migrating and integrating operational applications into a single, unified platform that serves both internal users and external clients.',
      background: 'Through years of growth and multiple acquisitions, the company had accumulated over 200 separate applications that created a fragmented operational ecosystem. These disparate systems resulted in inefficiencies, user frustration, and barriers to productivity. The vision was to consolidate these applications into one cohesive platform that would serve as the central hub for all operational needs, marking a massive pivot in the corporate offering.',
      hypothesis: 'Consolidating internal "run-the-business" applications into one platform will cause significant improvements in: 1) Usability, 2) Satisfaction, 3) Error Rate, and 4) Productivity',
      users: ['Sales Teams', 'Operations Teams', 'Client Users'],
      collaborators: ['UX Design', 'Product Management', 'Front-end Engineering', 'Back-end Engineering'],
      stakeholders: ['Leadership', 'Marketing', 'Enablement'],
      researchPhases: [
        {
          name: 'Discovery Phase',
          methods: [
            'Contextual Inquiry',
            'Task Analysis',
            'Competitive Analysis',
            'Service Blueprinting',
            'Journey Mapping',
            'Longitudinal Survey Evaluation',
            'Focus Groups',
            'Workshop Facilitation',
            'Heuristic Evaluation'
          ]
        },
        {
          name: 'Generative Phase',
          methods: [
            'Participatory Design Facilitation',
            'Need Analysis / Jobs-to-be-Done',
            'Card Sorting',
            'Functional Requirements Generation',
            'Interaction Design Wireframing'
          ]
        },
        {
          name: 'Evaluative Phase',
          methods: [
            'Design Validation',
            'User Testing',
            'Process Validation',
            'Scenario Validation',
            'Information Architecture Testing',
            'Alpha/Beta/UAT Testing',
            'Behavior Tracking & Analysis'
          ]
        }
      ],
      insights: [
        'The fragmentation of over 200 applications across the organization was creating significant operational friction and inefficiency',
        'Research played a critical role in identifying which primary applications should be prioritized for consolidation',
        'The goal extended beyond simple consolidation—it aimed to create a truly unified experience for both internal and external users',
        'Ongoing testing and iteration were identified as critical success factors throughout the implementation process',
        'The project represented not just a technical consolidation but a fundamental transformation of how the business operates'
      ],
      findings: [
        'Users were spending excessive time navigating between disparate systems, leading to decreased productivity',
        'The lack of a unified interface resulted in inconsistent user experiences and increased training requirements',
        'Error rates were higher due to the need to manually transfer data between systems',
        'Clients expressed frustration with fragmented self-service capabilities',
        'The complexity of the existing system landscape was a barrier to onboarding new employees and clients'
      ],
      outcomes: [
        'Preliminary results show measurable gains in all major KPI areas',
        'Documented improvements in usability metrics across user groups',
        'Increased user satisfaction scores among both internal teams and clients',
        'Reduction in error rates through streamlined workflows and unified data handling',
        'Enhanced productivity as users can complete tasks within a single integrated platform',
        'Successfully validated the hypothesis through iterative testing and user feedback',
        'Created a scalable foundation for future feature development and business growth'
      ],
      status: 'Continuous implementation in progress. This massive transformation represents a fundamental pivot in the corporate offering. Full platform launch is scheduled for the end of 2025, with phased rollouts occurring throughout the implementation period.',
      timeline: 'Multi-year initiative with full launch scheduled for end of 2025'
    }
  },
  {
    id: '2',
    slug: 'dynamic-personas',
    title: 'Dynamic Personas',
    description: 'Developed living persona systems that evolve with user data, enabling teams to maintain relevant user understanding in fast-moving markets.',
    category: 'User Research',
    image: 'https://images.squarespace-cdn.com/content/v1/67cf1371b29b1c7f6aa141a0/b768ae9f-f115-46e0-a322-cb3fdfdc1a59/Screenshot+2025-03-11+at+9.44.17%E2%80%AFAM.jpg',
    tags: ['Personas', 'User Research', 'Data Analysis'],
    detailedContent: {
      objective: 'Develop a dynamic persona repository that can be leveraged across multiple projects and updated dynamically to maintain relevance and applicability over time.',
      background: 'Research teams often struggle with persona development, as the extensive work required to create solid, research-backed personas can outweigh their perceived benefits. Teams frequently default to quick proto-personas that lack the detailed discovery and data analysis of full personas. The challenge was to find a more efficient method to develop and maintain a persona library that would serve multiple projects while remaining current and relevant.',
      hypothesis: 'A dynamic persona system that can be updated and adjusted easily will provide greater long-term value and sustained applicability compared to static personas.',
      users: ['UX Professionals', 'Product Teams', 'Engineering Teams'],
      collaborators: ['Internal Employees', 'External Users'],
      stakeholders: ['UX Departments', 'Product Departments'],
      researchPhases: [
        {
          name: 'Discovery Phase',
          methods: [
            'Contextual Inquiry',
            'Task Analysis',
            'Competitive Analysis',
            'Service Blueprinting',
            'Journey Mapping',
            'Longitudinal Survey Evaluation',
            'Focus Groups',
            'Workshop Facilitation',
            'Heuristic Evaluation'
          ]
        },
        {
          name: 'Generative Phase',
          methods: [
            'Participatory Design Facilitation',
            'Need Analysis / Jobs-to-be-Done (JTBD)',
            'Card Sorting',
            'Functional Requirements Generation',
            'Interaction Design Wireframing/Wireflowing'
          ]
        },
        {
          name: 'Evaluative Phase',
          methods: [
            'Design Validation',
            'User Testing',
            'Process Validation',
            'Scenario Validation',
            'Information Architecture Testing',
            'Alpha/Beta/User Acceptance Testing (UAT)',
            'Behavior Tracking & Analysis'
          ]
        }
      ],
      insights: [
        'The effort required to create comprehensive, research-backed personas often exceeds the perceived value, leading teams to rely on quick proto-personas',
        'Proto-personas, while quick to generate, lack the depth of discovery and data analysis that make personas truly valuable for design decisions',
        'A dynamic, updateable persona system addresses the sustainability challenge—keeping personas relevant as markets and users evolve',
        'Cross-project persona repositories enable consistency across teams while reducing redundant research efforts',
        'The distinction between personas and proto-personas is critical for setting appropriate expectations about their applicability and limitations'
      ],
      findings: [
        'Teams were creating redundant persona work across different projects due to lack of a centralized repository',
        'Static personas quickly became outdated as user behaviors and market conditions changed',
        'UX and Product teams needed a system that balanced rigor with practical usability',
        'Card sorting and participatory design workshops revealed key functional requirements for the persona system',
        'Information architecture testing validated the organizational structure of the persona library'
      ],
      outcomes: [
        'Successfully created a dynamic persona repository accessible across multiple projects',
        'Established processes for regularly updating personas with new research data',
        'Improved usability of persona systems through iterative testing and refinement',
        'Reduced redundant research efforts across teams through centralized persona management',
        'Increased adoption and application of personas in design decisions',
        'Created framework distinguishing between full personas and proto-personas to set appropriate expectations'
      ],
      status: 'Project launch scheduled for end of 2025. Significant improvements observed in key performance indicators including usability and team adoption.',
      timeline: 'Multi-phase implementation with full launch scheduled for end of 2025'
    }
  },
  {
    id: '3',
    slug: 'client-retention',
    title: 'Client Retention',
    description: 'Led comprehensive research initiative to determine root causes of client retention issues and identify solutions to improve retention rates.',
    category: 'Strategic Research',
    image: 'https://images.squarespace-cdn.com/content/v1/67cf1371b29b1c7f6aa141a0/4c07e897-4c8c-4e9f-b195-a0fd3ef8f590/magnets-attracting-customers.jpg',
    tags: ['Retention', 'Customer Research', 'Strategy'],
    detailedContent: {
      objective: 'Determine root causes of reductions in client retention and identify potential solution areas for future advertising campaigns. Address issues of client retention by understanding how services are delivered and where improvements can be made.',
      background: 'The company was experiencing continuous issues with client retention that threatened long-term business sustainability. Built on the fundamental belief that client-business relationships are founded on transparency and delivery, the team sought to understand why clients were not renewing contracts and what could be done to improve retention rates. With repeat clients being 67% more valuable than one-time clients, addressing retention became a critical business priority.',
      hypothesis: 'Clients that receive timely and insightful reporting have a higher retention rate',
      users: ['Client Users', 'Operations Teams', 'Marketing Science Teams'],
      collaborators: ['UX Design', 'Product Management', 'Marketing Science', 'Insights Analytics', 'Operations'],
      stakeholders: ['Leadership', 'Sales'],
      researchPhases: [
        {
          name: 'Discovery Phase',
          methods: [
            'Client Satisfaction Surveys',
            'CRM Data Analysis',
            'User Interviews (conducted by partner firm)',
            'Asset Inventory',
            'Needs Analysis',
            'Glossary Creation'
          ]
        },
        {
          name: 'Generative Phase',
          methods: [
            'Interaction Design Wireframing',
            'Wireflowing'
          ]
        }
      ],
      insights: [
        'Client-business relationships are fundamentally built on transparency and reliable delivery of value',
        'Repeat clients represent 67% more value than one-time clients, making retention a critical business metric',
        'Transparency through reporting directly correlates with client confidence and satisfaction',
        'The gap between service delivery and client perception was wider than initially understood',
        'Clients needed proactive communication about campaign performance, not just reactive responses to questions'
      ],
      findings: [
        'The primary cause of client retention issues was lack of transparency and reporting capabilities',
        'Clients felt disconnected from their campaigns and unable to track performance in real-time',
        'Existing reporting was fragmented, inconsistent, and not timely enough to support client decision-making',
        'Operations and Marketing Science teams lacked tools to efficiently communicate insights to clients',
        'The absence of comprehensive dashboard capabilities prevented clients from self-serving their reporting needs',
        'Client satisfaction surveys revealed frustration with the opacity of campaign performance and targeting effectiveness'
      ],
      outcomes: [
        'Identified lack of reporting and transparency as the root cause of retention challenges',
        'Recommended prioritizing Monitoring and Reporting capabilities as the highest-priority platform enhancement',
        'Designed comprehensive reporting features addressing three key areas: performance by campaign, performance by targeting, and performance by KPI',
        'Created wireframes and wireflows for enhanced dashboard reporting experience',
        'Established clear requirements for reporting functionality based on client needs analysis',
        'Provided strategic direction that shifted product roadmap priorities toward client-facing transparency tools',
        'Validated hypothesis that timely and insightful reporting drives higher retention rates'
      ],
      status: 'Reporting Enhancement planned for launch in Q2 2025. Design work completed and implementation underway.',
      timeline: 'Q2 2025 launch for Reporting Enhancement'
    }
  },
  {
    id: '4',
    slug: 'strategic-research',
    title: 'Strategic Research',
    description: 'Established research framework aligning stakeholder goals with user needs, driving product strategy for 3 major product launches.',
    category: 'Research Strategy',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Strategy', 'Leadership', 'Product Development'],
    detailedContent: {
      objective: 'Integrate market, user, consumer, and competitive research to inform digital product strategy and portfolio development. Create a comprehensive research framework that aligns cross-functional teams around strategic priorities and drives informed decision-making for client experience improvements.',
      background: 'In a complex digital product ecosystem, strategic decisions about product direction, feature prioritization, and client experience must be grounded in rigorous research across multiple domains. The organization needed a cohesive approach to synthesize insights from market trends, user behaviors, consumer preferences, and competitive landscapes to guide strategic planning. This required establishing systematic research practices that could support multiple stakeholders across engineering, product, sales, marketing, enablement, and design teams.',
      hypothesis: 'A comprehensive strategic research framework that integrates multiple research disciplines will enable better-informed strategic decisions, reduce risk in product development, and create measurable improvements in client experience metrics.',
      users: ['Engineering Teams', 'Product Managers', 'Sales Teams', 'Marketing Teams', 'Enablement Teams', 'Design Teams', 'Leadership'],
      collaborators: ['Product Management', 'Engineering', 'Sales', 'Marketing', 'Enablement', 'UX Design'],
      stakeholders: ['Executive Leadership', 'Product Leadership', 'Sales Leadership', 'Marketing Leadership'],
      researchPhases: [
        {
          name: 'Market Research Phase',
          methods: [
            'Industry Trend Analysis',
            'Market Sizing & Segmentation',
            'Total Addressable Market (TAM) Assessment',
            'Regulatory & Compliance Research',
            'Technology Landscape Analysis',
            'Strategic Opportunity Identification'
          ]
        },
        {
          name: 'Competitive Research Phase',
          methods: [
            'Competitive Feature Analysis',
            'Competitive UX Benchmarking',
            'Pricing & Positioning Analysis',
            'SWOT Analysis',
            'Competitive Intelligence Gathering',
            'Gap Analysis'
          ]
        },
        {
          name: 'User & Consumer Research Phase',
          methods: [
            'User Interviews',
            'Behavioral Analysis',
            'Journey Mapping',
            'Needs Assessment',
            'Persona Development',
            'Jobs-to-be-Done Framework',
            'Usability Studies',
            'Consumer Sentiment Analysis'
          ]
        },
        {
          name: 'Strategic Synthesis Phase',
          methods: [
            'Cross-functional Workshops',
            'Strategic Roadmapping',
            'Prioritization Frameworks',
            'Stakeholder Alignment Sessions',
            'Research Democratization',
            'Insight Socialization'
          ]
        }
      ],
      insights: [
        'Strategic product decisions require synthesizing insights from multiple research domains—no single research type provides the complete picture',
        'Cross-functional collaboration is essential to translate research findings into actionable strategic priorities',
        'Market research reveals opportunities; competitive research identifies gaps; user research validates direction; together they create strategic clarity',
        'Research democratization ensures that insights reach all decision-makers, not just those who commissioned the studies',
        'Regular strategic research cadences enable teams to stay ahead of market shifts and evolving client needs',
        'The integration of quantitative market data with qualitative user insights creates the strongest foundation for strategic decisions'
      ],
      findings: [
        'Teams making decisions without integrated research inputs showed higher rates of feature pivots and product-market fit challenges',
        'Market research identified emerging trends 12-18 months before they became mainstream, enabling proactive product positioning',
        'Competitive analysis revealed strategic gaps in the product portfolio that represented significant revenue opportunities',
        'User and consumer research uncovered unmet needs that weren\'t visible through market data alone',
        'Cross-functional stakeholders had varying levels of research literacy and needed different formats of insight delivery',
        'Sales and marketing teams required different research outputs than product and engineering teams to support their workflows',
        'Strategic research frameworks reduced decision-making cycles by providing shared context and validated priorities'
      ],
      outcomes: [
        'Established repeatable strategic research framework used across the organization',
        'Successfully informed strategy for 3 major product launches with measurable market success',
        'Created shared language and understanding across engineering, product, sales, marketing, enablement, and design teams',
        'Developed prioritization frameworks that balanced market opportunity, competitive positioning, and user needs',
        'Implemented regular research socialization practices that increased cross-functional alignment',
        'Built strategic research repository enabling teams to reference historical insights during planning',
        'Reduced product development risk through validated strategic direction',
        'Improved client experience metrics through research-informed product decisions',
        'Enabled data-driven strategic planning that aligned with both business goals and user needs',
        'Fostered culture of evidence-based decision-making across leadership and product teams'
      ],
      status: 'Ongoing framework actively used to inform strategic planning and product portfolio decisions. Continuous refinement based on organizational needs and market evolution.',
      timeline: 'Ongoing strategic research program with quarterly planning cycles'
    }
  },
  {
    id: '5',
    slug: 'lowry-research-chatbot',
    title: 'Lowry: Research Chatbot',
    description: 'Built AI-powered research assistant to democratize insights access, enabling employees to explore and query 9 years of historical research data independently.',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AI', 'Innovation', 'Research Ops'],
    detailedContent: {
      objective: 'Leverage AI and LLM technology to create an intelligent research chatbot that democratizes access to institutional research knowledge by enabling all employees to query historical UX, Consumer, and Market research independently.',
      background: 'Research insights accumulated over years often become siloed within research teams, creating barriers for other employees who need to understand past findings. With 9 years of research data spanning UX studies, consumer research, and market analysis stored across diverse formats and systems, the organization faced a significant knowledge accessibility challenge. Employees frequently repeated research questions that had already been answered, or made decisions without awareness of existing insights. An AI-powered solution was needed to unlock this institutional knowledge and make research findings accessible to everyone.',
      hypothesis: 'An LLM-powered chatbot that can search, synthesize, and communicate research findings will significantly improve research democratization, reduce redundant research efforts, and enable data-informed decision-making across the organization.',
      users: ['All Company Employees', 'Product Managers', 'Marketing Teams', 'Sales Teams', 'Leadership', 'Research Teams'],
      collaborators: ['Data Science Team', 'IT Infrastructure', 'Research Operations'],
      stakeholders: ['Research Leadership', 'Product Leadership', 'Executive Team'],
      researchPhases: [
        {
          name: 'Data Collection & Aggregation Phase',
          methods: [
            'SQL Database Queries',
            'Multi-format Data Extraction (.txt, .xlsx, .ppt, .mp4, .html)',
            'Historical Research Inventory',
            'Data Classification & Tagging',
            'Metadata Structuring'
          ]
        },
        {
          name: 'AI Integration & Development Phase',
          methods: [
            'OpenAI API Integration',
            'Large Language Model Implementation',
            'Natural Language Processing',
            'Python Backend Development',
            'Vector Database Implementation',
            'Semantic Search Architecture'
          ]
        },
        {
          name: 'Interface Design & User Experience Phase',
          methods: [
            'Chat Interface Design',
            'Conversational Flow Mapping',
            'Query Response Optimization',
            'User Testing Sessions',
            'Feedback Collection'
          ]
        }
      ],
      insights: [
        'Nine years of research insights represented significant institutional knowledge that was largely inaccessible to most employees',
        'Research findings existed across fragmented systems and diverse file formats, creating barriers to discovery',
        'Employees often asked research questions that had already been answered in previous studies',
        'The democratization of research access could reduce redundant research efforts and improve decision-making velocity',
        'An AI-powered conversational interface offered the most intuitive way for non-researchers to access complex research findings',
        'Natural language queries lowered the technical barrier for employees unfamiliar with research databases or methodologies'
      ],
      findings: [
        'Successfully aggregated 9 years of Strategic Sales Survey data alongside UX and Market research archives',
        'LLM technology could effectively parse and understand research reports across multiple formats',
        'The chatbot could identify whether research existed on specific topics and surface high-level findings',
        'Semantic search capabilities outperformed keyword-based search for finding relevant research insights',
        'Employees preferred conversational interactions over traditional research repository browsing',
        'The system could synthesize findings across multiple studies to provide comprehensive answers',
        'Named "Lowry" after "The Giver" by Lois Lowry, symbolizing the transfer of institutional memory and knowledge across the organization'
      ],
      outcomes: [
        'Successfully developed functional prototype of AI-powered research chatbot',
        'Demonstrated ability to query 9 years of historical research data across UX, Consumer, and Market research domains',
        'Enabled natural language conversations about research findings, making insights accessible to all employees',
        'Proved the concept of research democratization through AI technology',
        'Created a system capable of determining research existence and surfacing high-level findings',
        'Consolidated diverse data formats into a unified, searchable knowledge base',
        'Established framework for institutional knowledge transfer and preservation',
        'Validated the potential for reducing redundant research efforts across the organization',
        'Demonstrated measurable time savings for employees seeking research insights'
      ],
      status: 'Pilot project successfully completed. Development halted during company acquisition. The prototype demonstrated significant potential for internal knowledge management and research democratization.',
      timeline: 'Prototype development and pilot testing phase completed before company acquisition'
    }
  },
  {
    id: '6',
    slug: 'save-com-rebrand',
    title: 'Save.com Rebrand',
    description: 'Conducted comprehensive user testing and market research to guide complete brand transformation, improving brand recognition by 60%.',
    category: 'Brand Research',
    image: 'https://images.squarespace-cdn.com/content/v1/67cf1371b29b1c7f6aa141a0/0c288b32-51a9-4eda-8d3a-e5ff413e2da9/Save.jpg',
    tags: ['Brand Research', 'User Testing', 'Market Analysis'],
    detailedContent: {
      objective: 'Lead a comprehensive rebrand initiative for Save.com through market research, consumer insights, and iterative design testing to transform the brand identity and improve market recognition.',
      background: 'Save.com needed a complete brand refresh to better position itself in a competitive financial services marketplace. The existing brand identity was not resonating with target audiences and lacked the clarity and emotional connection needed to drive engagement. A research-driven rebrand process was essential to ensure the new brand would connect authentically with consumers while differentiating the company in the market.',
      hypothesis: 'A rebrand process grounded in market research, consumer insights, and iterative design testing will create a brand identity that significantly improves recognition, recall, and emotional connection with target audiences.',
      users: ['Current Customers', 'Prospective Customers', 'Financial Services Consumers'],
      collaborators: ['Brand Design Team', 'Marketing Team', 'Research Team', 'External Brand Agency'],
      stakeholders: ['Executive Leadership', 'Marketing Leadership', 'Product Team'],
      researchPhases: [
        {
          name: 'Market Research Phase',
          methods: [
            'Competitive Brand Analysis',
            'Market Positioning Study',
            'Category Landscape Assessment',
            'Brand Audit',
            'Stakeholder Interviews'
          ]
        },
        {
          name: 'Consumer Research Phase',
          methods: [
            'Consumer Surveys',
            'Focus Groups',
            'Brand Perception Studies',
            'Emotional Response Testing',
            'Brand Association Mapping',
            'Target Audience Segmentation'
          ]
        },
        {
          name: 'Iterative Design & Testing Phase',
          methods: [
            'Concept Testing',
            'A/B Testing',
            'Design Preference Studies',
            'First-Click Testing',
            'Brand Recognition Testing',
            'Message Testing',
            'Visual Identity Validation'
          ]
        },
        {
          name: 'User Feedback & Refinement Phase',
          methods: [
            'User Feedback Sessions',
            'Prototype Testing',
            'Cross-channel Consistency Testing',
            'Brand Guidelines Validation',
            'Launch Readiness Assessment'
          ]
        }
      ],
      insights: [
        'The existing brand identity lacked emotional resonance and failed to communicate the core value proposition effectively',
        'Competitive analysis revealed opportunities to differentiate through warmer, more approachable brand positioning',
        'Consumer research indicated that trust and simplicity were the most valued attributes in financial services branding',
        'Market research showed that Save.com was operating in a crowded category where brand clarity was essential for recognition',
        'Iterative testing demonstrated that small design adjustments could have significant impacts on brand perception and recall'
      ],
      findings: [
        'Target audiences responded most positively to brand expressions that balanced professionalism with approachability',
        'The color palette significantly influenced perceptions of trustworthiness and modernity',
        'Typography choices directly impacted perceived credibility and accessibility',
        'Brand messaging that emphasized empowerment and clarity outperformed purely functional messaging',
        'Visual consistency across touchpoints was critical for building brand recognition',
        'First impressions formed within 3-5 seconds strongly predicted overall brand sentiment'
      ],
      outcomes: [
        'Successfully delivered a comprehensive rebrand that improved brand recognition by 60%',
        'Created a brand identity system grounded in extensive consumer and market research',
        'Validated all major brand elements through iterative user testing and feedback',
        'Developed brand guidelines that ensure consistency across all customer touchpoints',
        'Achieved measurable improvements in brand perception metrics including trust, clarity, and emotional connection',
        'Established a repeatable framework for research-driven brand development',
        'Demonstrated clear ROI through improved brand awareness and customer engagement metrics'
      ],
      status: 'Rebrand successfully launched. Brand performance continues to be monitored through ongoing brand tracking studies.',
      timeline: 'Multi-phase initiative completed with brand launch and continued optimization'
    }
  },
  {
    id: '7',
    slug: 'lighthouse-colabs',
    title: 'Lighthouse Colabs',
    description: 'Design innovation consultancy helping partners improve and enhance physical design through collaborative research and strategic design thinking.',
    category: 'Business Venture',
    image: '/Lightbulb Logo_Fav.png',
    tags: ['Design Innovation', 'Physical Design', 'Consultancy'],
    detailedContent: {
      objective: 'Establish a design innovation consultancy that bridges the gap between user research insights and physical product design, helping partners create tangible products that truly resonate with their target audiences.',
      background: 'Lighthouse Colabs was founded on the principle that great physical design emerges from deep collaboration and user understanding. In a market saturated with digital-first design consultancies, there was an identified opportunity to specialize in the physical design space—helping partners enhance tangible products, spaces, and experiences through rigorous research and strategic design thinking. The name "Colabs" emphasizes the collaborative nature of the approach, where client partnerships drive innovation.',
      hypothesis: 'A collaborative, research-driven approach to physical design yields products and experiences that better meet user needs and achieve stronger market success than traditional design methods.',
      users: ['Product Design Partners', 'Manufacturing Companies', 'Retail Brands', 'Consumer Goods Companies'],
      collaborators: ['Design Teams', 'Research Partners', 'Manufacturing Specialists', 'Brand Strategists'],
      stakeholders: ['Business Owners', 'Product Managers', 'Marketing Leaders'],
      images: [
        'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg',
        'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
      ],
      insights: [
        'Physical product design benefits significantly from the same user-centered research methodologies traditionally applied to digital products',
        'Many companies developing physical products lack access to structured design research capabilities',
        'Collaborative design processes that involve stakeholders throughout the journey lead to stronger buy-in and more successful implementations',
        'The intersection of user research, design thinking, and manufacturing constraints creates unique innovation opportunities',
        'Small and medium-sized businesses particularly benefit from consultancy models that provide enterprise-level design capabilities without requiring full-time hires'
      ],
      findings: [
        'Traditional physical product design often relies too heavily on intuition and industry conventions rather than user insights',
        'Companies struggle to balance aesthetic vision with functional requirements and user needs',
        'The gap between design concept and manufacturing reality frequently derails promising products',
        'Collaborative workshops and participatory design sessions accelerate alignment and decision-making',
        'Research-backed design decisions reduce costly iterations and redesigns later in the development process'
      ],
      outcomes: [
        'Established Lighthouse Colabs as a specialized consultancy serving the physical design market',
        'Developed a collaborative methodology that integrates user research with design strategy',
        'Created frameworks for translating research insights into actionable design specifications',
        'Built partnerships with manufacturers and material specialists to ensure design feasibility',
        'Delivered projects that enhanced product usability, aesthetic appeal, and market performance',
        'Demonstrated measurable ROI for clients through reduced development cycles and improved product-market fit'
      ],
      status: 'Active business venture providing design innovation consultancy services. Continuously expanding service offerings and client partnerships.',
      timeline: 'Ongoing business operations'
    }
  },
  {
    id: '8',
    slug: 'two-roadsin',
    title: 'Two Roadsin',
    description: 'Design shop creating hyperlocal designs celebrating Winthrop, MA. Original artwork and products that capture the unique character of coastal New England living.',
    category: 'Design Shop',
    image: '/TwoRoadsIn_HighRes.png',
    tags: ['Local Design', 'Winthrop MA', 'Creative Business'],
    detailedContent: {
      objective: 'Create an alternative lifestyle brand that serves as a love letter to Winthrop, MA through original designs, logos, and hyperlocal products that celebrate the unique character and community of this coastal New England town.',
      background: 'Two Roadsin emerged as a personal passion project—a creative outlet to express deep affection for Winthrop, Massachusetts, a small coastal town just outside Boston. Unlike traditional design work, this project is entirely driven by personal connection to place, community, and the desire to capture what makes Winthrop special. The name references the town\'s unique geography and the metaphorical crossroads where community, coast, and character intersect. This is not a commercial venture focused on growth or scale; it\'s an artistic expression of hometown pride and a celebration of the overlooked beauty in everyday coastal living.',
      hypothesis: 'Creating authentic, locally-inspired designs that resonate with genuine community experiences and pride will connect deeply with residents and visitors who share a love for Winthrop\'s unique character.',
      users: ['Winthrop Residents', 'Local Community Members', 'Coastal New England Enthusiasts', 'Town Visitors', 'New England Nostalgia Seekers'],
      collaborators: ['Local Community', 'Independent Retailers', 'Print Partners'],
      stakeholders: ['Personal Creative Expression', 'Winthrop Community'],
      designPhilosophy: 'Two Roadsin is intentionally hyperlocal—every design references specific Winthrop locations, landmarks, and experiences that locals recognize and cherish. These minimalist, black and white designs celebrate the unique character of this small coastal town and the broader North Shore community. Each piece serves as wearable pride for residents and a visual love letter to the place we call home.',
      insights: [
        'People have deep emotional connections to the places they call home and seek ways to express that connection',
        'Hyperlocal designs resonate more powerfully than generic location-based products because they reflect insider knowledge and authentic experiences',
        'Small coastal communities have rich, specific identities that are often overlooked by mainstream design and retail',
        'Design can serve as a form of community storytelling, preserving and celebrating local character',
        'Personal passion projects allow for complete creative freedom and authentic expression unconstrained by commercial pressures',
        'Winthrop\'s unique quirks—its confusing streets, its hills, its protected wildlife—are sources of pride rather than inconvenience for those who love the town'
      ],
      outcomes: [
        'Successfully launched Two Roadsin as an online design shop at tworoadsin.com',
        'Created a growing collection of original designs that authentically represent Winthrop\'s character',
        'Developed a consistent minimalist aesthetic that works across multiple product types',
        'Connected with Winthrop residents and community members who recognize and appreciate the local references',
        'Established an ongoing creative practice that celebrates coastal New England living',
        'Built a brand that functions as both personal artistic expression and community celebration',
        'Demonstrated that design can serve as a meaningful form of place-based storytelling'
      ],
      status: 'Active personal passion project and design shop. Continuously creating new designs and expanding product offerings as inspiration strikes.',
      timeline: 'Ongoing creative project',
      website: 'tworoadsin.com'
    }
  },
];

export const skills: Skill[] = [
  { name: 'Qualitative Research', category: 'Research Methods' },
  { name: 'Quantitative Research', category: 'Research Methods' },
  { name: 'Mixed-Methods Research', category: 'Research Methods' },
  { name: 'User Interviews', category: 'Research Methods' },
  { name: 'Usability Testing', category: 'Research Methods' },
  { name: 'Survey Design', category: 'Research Methods' },
  { name: 'A/B Testing', category: 'Research Methods' },
  { name: 'Contextual Inquiry', category: 'Research Methods' },
  { name: 'Focus Groups', category: 'Research Methods' },
  { name: 'Ethnographic Research', category: 'Research Methods' },
  { name: 'Card Sorting', category: 'Research Methods' },
  { name: 'Heuristic Evaluation', category: 'Research Methods' },
  { name: 'Research Strategy', category: 'Leadership' },
  { name: 'Team Leadership', category: 'Leadership' },
  { name: 'Stakeholder Management', category: 'Leadership' },
  { name: 'Cross-functional Collaboration', category: 'Leadership' },
  { name: 'Mentoring & Training', category: 'Leadership' },
  { name: 'Workshop Facilitation', category: 'Leadership' },
  { name: 'Statistical Analysis', category: 'Analysis' },
  { name: 'Data Visualization', category: 'Analysis' },
  { name: 'Behavior Analysis', category: 'Analysis' },
  { name: 'SQL & Database Querying', category: 'Analysis' },
  { name: 'Python', category: 'Analysis' },
  { name: 'Qualtrics', category: 'Tools' },
  { name: 'UserTesting', category: 'Tools' },
  { name: 'Optimal Workshop', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Adobe Creative Suite', category: 'Tools' },
  { name: 'Persona Development', category: 'Deliverables' },
  { name: 'Journey Mapping', category: 'Deliverables' },
  { name: 'Service Blueprinting', category: 'Deliverables' },
  { name: 'Wireframing', category: 'Deliverables' },
  { name: 'Research Reports', category: 'Deliverables' },
];

export const profile = {
  name: 'Landon LaPorte, PhD',
  title: 'Research Leader',
  tagline: 'Research with Purpose',
  description: 'Mixed-methods Researcher and leader with 10+ years of experience transforming user insights into strategic product decisions.',
  location: 'Boston, MA',
  email: 'landonlaporte@gmail.com',
  phone: '984.209.6344',
  linkedin: 'https://linkedin.com/in/landonlaporte',
  expertise: [
    'Leading cross-functional research initiatives that drive product strategy',
    'Building and scaling research operations for high-growth organizations',
    'Developing frameworks that integrate qualitative and quantitative insights',
    'Mentoring researchers and democratizing research across product teams',
  ],
};
