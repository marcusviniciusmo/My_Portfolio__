import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateBlogsByUserController, GetBlogsByUserController } from "../../controllers/Blogs";

export const CreateBlogsByUserRoute = route.post(
  '/blogs/:userId', AuthenticateJwt, CreateBlogsByUserController
);

export const GetBlogsByUserRoute = route.get(
  '/blogs/:userId', GetBlogsByUserController
);