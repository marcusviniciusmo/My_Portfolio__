import { route } from "../../config/Router"
import { GenerateTokenController } from "../../controllers/Jwt";

export const GenerateTokenRoute = route.get(
  '/generateToken', GenerateTokenController
);