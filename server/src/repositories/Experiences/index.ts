import { prisma } from "../../config/Repository";
import { ThrowRepositoryException } from "../../utils/Functions";

export const GetExperiencesByUserRepository = async (
  route: string, userId: string
) => {
  try {
    const experiencesByUser = await prisma.experiences.findMany({
      where: { user_ID: userId }
    });

    const experiencesByUserFormatted = experiencesByUser.map((experience) => ({
      ...experience,
      id: experience.experience_ID,
      experience_ID: undefined
    }))

    return experiencesByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(route, userId, error);
  };
};