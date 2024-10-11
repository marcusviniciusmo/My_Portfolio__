import { CreateBlogsByUserRepository, GetBlogsByUserRepository } from "../../repositories/Blogs";
import { ThrowServiceException, ThrowNotFoundException } from "../../utils/Functions";

export const CreateBlogsByUserService = async (route:string, userId: string) => {
  try {
    const insertedBlogs = await CreateBlogsByUserRepository(route, userId);

    return insertedBlogs;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  };
};


export const GetBlogsByUserService = async (route:string, userId: string) => {
  try {
    const blogsByUser = await GetBlogsByUserRepository(route, userId);

    if (blogsByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    };

    return blogsByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  };
};