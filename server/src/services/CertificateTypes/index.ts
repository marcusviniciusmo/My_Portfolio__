import { CreateCertificateTypesRepository, GetCertificateTypesRepository } from "../../repositories/CertificateTypes";
import { ThrowServiceException, ThrowNotFoundException } from "../../utils/Functions";

export const CreateCertificateTypesService = async (route: string) => {
  try {
    const insertedCertificateTypes = await CreateCertificateTypesRepository(route);

    return insertedCertificateTypes;
  } catch (error) {};
};

export const GetCertificateTypesService = async (route: string) => {
  try {
    const certificateTypes = await GetCertificateTypesRepository(route);

    if (certificateTypes?.length === 0) {
      ThrowNotFoundException(route);
    };

    return certificateTypes;
  } catch (error) {
    ThrowServiceException(error, route);
  };
};