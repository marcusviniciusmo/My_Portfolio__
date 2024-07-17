export interface ProjectType {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  urlRepository: string;
  createdAt: string;
  technologies: string[];
}

export interface ProjectTypeFromApi {
  id: string;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  topics: string[];
}

export interface ProjectProps {
  $borderColor: string;
  $isListInHover: boolean;
  $isItemInHover: boolean;
}

export interface ProjectModalProps {
  project: ProjectType;
}

export interface ImageContainerProps {
  $background: string;
}

export interface RowTableModalProps {
  $isListInHover: boolean;
  $isItemInHover: boolean;
}
