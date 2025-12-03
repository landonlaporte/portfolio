export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  comingSoon?: boolean;
  detailedContent?: {
    objective?: string;
    background?: string;
    hypothesis?: string;
    users?: string[];
    collaborators?: string[];
    stakeholders?: string[];
    researchPhases?: {
      name: string;
      methods: string[];
    }[];
    methods?: string[];
    findings?: string[];
    insights?: string[];
    outcomes?: string[];
    status?: string;
    timeline?: string;
    images?: string[];
    designPhilosophy?: string[] | string;
    productThemes?: {
      name: string;
      description: string;
    }[];
    productOfferings?: string[];
    productImages?: string[];
    website?: string;
  };
}

export interface Skill {
  name: string;
  category: string;
}
