import { prisma } from "../../config/Repository";

export const GetCertificatesByUserRepository = async (userId: string) => {
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
  } catch (error) {};
};