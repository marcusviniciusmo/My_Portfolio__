import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateCertificateTypesController, GetCertificateTypesController } from "../../controllers/CertificateTypes";

export const CreateCertificateTypesRoute = route.post(
  '/certificateTypes', AuthenticateJwt, CreateCertificateTypesController
);

export const GetCertificateTypesRoute = route.get(
  '/certificateTypes', GetCertificateTypesController
);