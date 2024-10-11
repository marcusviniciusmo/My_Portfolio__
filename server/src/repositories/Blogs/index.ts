import { prisma } from "../../config/Repository";
import { ThrowRepositoryException } from "../../utils/Functions";

export const GetBlogsByUserRepository = async (route:string, userId: string) => {
  try {
    const blogsByUser = await prisma.blogs.findMany({
      where: { user_ID: userId }
    });

    const blogsByUserFormatted = blogsByUser.map((blog) => ({
      ...blog,
      id: blog.blog_ID,
      blog_ID: undefined
    }));

    return blogsByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(route, userId);
  };
};