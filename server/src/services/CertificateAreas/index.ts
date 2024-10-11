import { CreateCertificateAreasRepository, GetCertificateAreasRepository } from "../../repositories/CertificateAreas";
import { ThrowServiceException, ThrowNotFoundException } from "../../utils/Functions";

export const CreateCertificateAreasService = async (route: string) => {
  try {
    const insertedCertificateAreas = await CreateCertificateAreasRepository(route);

    return insertedCertificateAreas;
  } catch (error) {
    ThrowServiceException(error, route);
  };
};

export const GetCertificateAreasService = async (route: string) => {
  try {
    const certificateAreas = await GetCertificateAreasRepository(route);

    if (certificateAreas?.length === 0) {
      ThrowNotFoundException(route);
    };

    return certificateAreas;
  } catch (error) {
    ThrowServiceException(error, route);
  };
};