import { prisma } from "../../config/Repository";
import { GetCertificateTypesToInsert } from "../../scripts/CertificateTypes";
import { ThrowConflictException, ThrowRepositoryException } from "../../utils/Functions";

export const CreateCertificateTypesRepository = async (route: string) => {
  const certificateTypesToInsert = GetCertificateTypesToInsert();

  try {
    const existingCertificateTypes = await GetCertificateTypesRepository(route);

    const existingCertifcateTypesDescription = new Set(
      existingCertificateTypes?.map(
        (type) => type.typeDescription.toLowerCase().trim()
      )
    );

    const typesToInsert = certificateTypesToInsert.filter(
      (typeToInsert) =>!existingCertifcateTypesDescription.has(
        typeToInsert.typeDescription.toLowerCase().trim()
      )
    );

    if (typesToInsert.length === 0) {
      ThrowConflictException(route);
    };

    const insertedCertificateTypes = Promise.all(
      typesToInsert.map((typeToInsert) => prisma.certificateTypes.create({
        data: typeToInsert
      }))
    );

    return insertedCertificateTypes;
  } catch (error) {
    ThrowRepositoryException(route, undefined, error);
  };
};

export const GetCertificateTypesRepository = async (route: string) => {
  try {
    const certificateTypes = await prisma.certificateTypes.findMany();

    return certificateTypes;
  } catch (error) {
    ThrowRepositoryException(route, undefined, error);
  };
};