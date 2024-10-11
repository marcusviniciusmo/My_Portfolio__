import { prisma } from "../../config/Repository";

export const GetBlogsByUserRepository = async (userId: string) => {
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
  } catch (error) {};
};