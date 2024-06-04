import RocketseatBlog from '../assets/rocketseatBlog.png';
import CursoEmVideoBlog from '../assets/cursoEmVideoBlog.jpeg';

export interface BlogsListType {
  id: string;
  name: string;
  image: string;
  url: string;
}

export const BlogsList: BlogsListType[] = [
  {
    id: '1',
    name: 'Blog da Rocketseat',
    image: RocketseatBlog,
    url: 'https://blog.rocketseat.com.br/',
  },
  {
    id: '2',
    name: 'Curso em Video - Blog',
    image: CursoEmVideoBlog,
    url: 'https://www.cursoemvideo.com/blog/',
  },
];
