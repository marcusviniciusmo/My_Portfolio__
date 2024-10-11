const blogs = [
  {
    name: 'Blog da Rocketseat',
    image: 'RocketseatBlog',
    url: 'https://blog.rocketseat.com.br/',
  },
  {
    name: 'Curso em Video - Blog',
    image: 'CursoEmVideoBlog',
    url: 'https://www.cursoemvideo.com/blog/',
  },
];

export function GetBlogsByUserToInsert(userId: string) {
  const blogsByUserToInsert = blogs.map((blog) => ({
    ...blog,
    user_ID: userId
  }));

  return blogsByUserToInsert;
};