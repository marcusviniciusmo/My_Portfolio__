import { prisma } from "../../config/Repository";
import { GetBlogsByUserToInsert } from "../../scripts/Blogs";
import { ThrowRepositoryException, ThrowConflictException } from "../../utils/Functions";

export const CreateBlogsByUserRepository = async (route: string, userId: string) => {
  const blogsByUserToInsert = GetBlogsByUserToInsert(userId);

  try {
    const existingBlogsByUser = await GetBlogsByUserRepository(route, userId);

    const existingBlogsNamesByUser = new Set(
      existingBlogsByUser?.map(
        (existingBlogName) => existingBlogName.name.toLowerCase().trim()
      )
    );

    const blogsToInsert = blogsByUserToInsert.filter(
      (blogToInsert) =>
        !existingBlogsNamesByUser.has(blogToInsert.name.toLowerCase().trim())
    );

    if (blogsToInsert.length === 0) {
      ThrowConflictException(route, userId);
    };
    
    const blogsInserted = Promise.all(
      blogsToInsert.map((blogToInsert) => prisma.blogs.create({
        data: blogToInsert
      }))
    );

    return blogsInserted;
  } catch (error) {
    ThrowRepositoryException(route, userId, error);
  };
};

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