import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateExperiencesByUserController, GetExperiencesByUserController } from "../../controllers/Experiences";

export const CreateExperiencesByUserRoute = route.post(
  '/experiences/:userId', AuthenticateJwt, CreateExperiencesByUserController
);

export const GetExperiencesByUserRoute = route.get(
  '/experiences/:userId', GetExperiencesByUserController
);