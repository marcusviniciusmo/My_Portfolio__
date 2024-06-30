export interface CardType {
  id: string;
  period: string;
  title: string;
  institution: string;
}

export interface CardProps {
  $borderColor: string;
}

export interface WorkingSkillType {
  id: string;
  description: string;
  percentage: number;
}

export interface SkillProps {
  $percentage: number;
}

export interface KnowledgeType {
  id: string;
  description: string;
}

export interface GraduationType extends CardType {}

export interface ExperienceType extends CardType {}
