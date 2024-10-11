import { prisma } from "../../config/Repository";
import { GetCertificateAreasToInsert } from "../../scripts/CertificateAreas";
import { ThrowRepositoryException } from "../../utils/Functions";

export const CreateCertificateAreasRepository = async (route: string) => {
  const certificateAreasToInsert = GetCertificateAreasToInsert();

  try {
    const existingCertificateAreas = await GetCertificateAreasRepository(route);

    const existingCertificateAreasDescription = new Set(
      existingCertificateAreas?.map(
        (area) => area.areaDescription.toLowerCase().trim()
      )
    );

    const areasToInsert = certificateAreasToInsert.filter(
      (areaToInsert) => !existingCertificateAreasDescription.has(
        areaToInsert.areaDescription.toLowerCase().trim()
      )
    );

    const insertedCertificateAreas = Promise.all(
      areasToInsert.map((areaToInsert) => prisma.certificateAreas.create({
        data: areaToInsert
      }))
    );

    return insertedCertificateAreas;
  } catch (error) {};
};

export const GetCertificateAreasRepository = async (route: string) => {
  try {
    const certificateAreas = await prisma.certificateAreas.findMany();

    return certificateAreas;
  } catch (error) {
    ThrowRepositoryException(route, undefined, error);
  };
};