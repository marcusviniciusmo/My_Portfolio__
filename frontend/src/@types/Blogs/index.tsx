import RocketseatBlog from '../../assets/blogs/rocketseatBlog.png';
import CursoEmVideoBlog from '../../assets/blogs/cursoEmVideoBlog.jpeg';

export const BlogsImagesMap = {
  RocketseatBlog,
  CursoEmVideoBlog,
};

export interface BlogType {
  id: string;
  name: string;
  image: keyof typeof BlogsImagesMap;
  url: string;
}

export interface BlogProps {
  $borderColor: string;
  $isListInHover: boolean;
  $isItemInHover: boolean;
}
