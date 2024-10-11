import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateCertificatesByUserController, GetCertificatesByUserController } from "../../controllers/Certificates";

export const CreateCertificatesByUserRoute = route.post(
  '/certificates/:userId', AuthenticateJwt, CreateCertificatesByUserController
);

export const GetCertificatesByUserRoute = route.get(
  '/certificates/:userId', GetCertificatesByUserController
);