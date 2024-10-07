import { route } from "../../config/Router";
import { CreateProfileController, GetProfileByIdController } from "../../controllers/Profile";

export const CreateProfileRoute = route.post(
  '/profile', CreateProfileController
);

export const GetProfileByIdRoute = route.get(
  '/profile/:userId', GetProfileByIdController
);