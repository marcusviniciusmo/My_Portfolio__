import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateProfileController, GetProfileByIdController } from "../../controllers/Profile";

export const CreateProfileRoute = route.post(
  '/profile', AuthenticateJwt, CreateProfileController
);

export const GetProfileByIdRoute = route.get(
  '/profile/:userId', GetProfileByIdController
);