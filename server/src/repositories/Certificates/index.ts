import { prisma } from "../../config/Repository";
import { GetCertificateAreasRepository } from "../CertificateAreas";
import { GetCertificateTypesRepository } from "../CertificateTypes";
import { GetCertificatesByUserToInsert } from "../../scripts/Certificates";
import { ThrowRepositoryException } from "../../utils/Functions";

export const CreateCertificatesByUserRepository = async (
  route: string, userId: string
) => {
  const certificatesByUserToInsert = GetCertificatesByUserToInsert(userId);

  return await prisma.$transaction(async (prisma) => {
    try {
      const existingCertificatesByUser = await GetCertificatesByUserRepository(
        route, userId
      );

      const existingCertificatesNamesByUser = new Set(
        existingCertificatesByUser?.map(
          (existingCertificate) => existingCertificate.name.toLowerCase().trim()
        )
      );

      const existingCertificateAreas = await GetCertificateAreasRepository(route);
      const exisitingCertificateAreasDescription = new Map(
        existingCertificateAreas?.map(
          (existingArea) =>
            [existingArea.areaDescription.toLowerCase().trim(), existingArea.area_ID]
        )
      );

      const existingCertificateTypes = await GetCertificateTypesRepository(route);
      const existingCertificateTypesDescription = new Map(
        existingCertificateTypes?.map(
          (existingType) =>
            [existingType.typeDescription.toLowerCase().trim(), existingType.type_ID]
        )
      );

      const certificatesToInsert = certificatesByUserToInsert.filter(
        (certificateToInsert) =>
          !existingCertificatesNamesByUser.has(
            certificateToInsert.name.toLowerCase().trim()
          )
      );

      const insertCertificateAreaIfNoExists = async (certificateArea: string) => {
        const areaLower = certificateArea.toLowerCase().trim();

        if (!exisitingCertificateAreasDescription.has(areaLower)) {
          const newArea = await prisma.certificateAreas.create({
            data: { areaDescription: certificateArea }
          });

          exisitingCertificateAreasDescription.set(areaLower, newArea.area_ID);

          return newArea.area_ID;
        };

        return exisitingCertificateAreasDescription.get(areaLower);
      };

      const insertCertificateTypeIfNoExists = async (certificateType: string) => {
        const typeLower = certificateType.toLowerCase().trim();

        if (!existingCertificateTypesDescription.has(typeLower)) {
          const newType = await prisma.certificateTypes.create({
            data: { typeDescription: certificateType }
          });

          existingCertificateTypesDescription.set(typeLower, newType.type_ID);

          return newType.type_ID;
        };

        return existingCertificateTypesDescription.get(typeLower);
      };

      const insertedCertificatesByUser = [];

      for (const certificateToInsert of certificatesToInsert) {
        const areaId = await insertCertificateAreaIfNoExists(certificateToInsert.area);
        const typeId = await insertCertificateTypeIfNoExists(certificateToInsert.type);

        await prisma.certificates.create({
          data: {
            ...certificateToInsert,
            area: areaId as string,
            type: typeId as string
          }
        });

        insertedCertificatesByUser.push(certificateToInsert);
      };

      return insertedCertificatesByUser;
    } catch (error) {};
  })
};

export const GetCertificatesByUserRepository = async (
  route: string, userId: string
) => {
  try {
    const certificatesByUser = await prisma.certificates.findMany({
      where: { user_ID: userId },
      include: {
        areaID: true,
        typeID: true
      }
    });

    const certificatesByUserFormatted = certificatesByUser.map((certificate) => ({
      ...certificate,
      id: certificate.certificate_ID,
      certificate_ID: undefined,
      area: certificate.areaID.areaDescription,
      areaID: undefined,
      type: certificate.typeID.typeDescription,
      typeID: undefined
    }));

    return certificatesByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(route, userId, error);
  };
};