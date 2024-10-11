import { route } from "../../config/Router";
import { AuthenticateJwt } from "../../middlewares/Jwt";
import { CreateCertificateAreasController, GetCertificateAreasController } from "../../controllers/CertificateAreas";

export const CreateCertificateAreasRoute = route.post(
  '/certificateAreas', AuthenticateJwt, CreateCertificateAreasController
);

export const GetCertificateAreasRoute = route.get(
  '/certificateAreas', GetCertificateAreasController
);