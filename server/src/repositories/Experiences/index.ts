import { prisma } from "../../config/Repository";
import { GetExperiencesByUserToInsert } from "../../scripts/Experiences";
import { ThrowRepositoryException } from "../../utils/Functions";

export const CreateExperiencesByUserRepository = async (
  route: string, userId: string
) => {
  const experiencesByUserToInsert = GetExperiencesByUserToInsert(userId);

  return await prisma.$transaction(async (prisma) => {
    try {
      const insertedExperiencesByUser = Promise.all(
        experiencesByUserToInsert.map((experience) =>
          prisma.experiences.create({
            data: experience
          })
        )
      );

      return insertedExperiencesByUser;
    } catch (error) {
      ThrowRepositoryException(route, userId, error);
    };
  });
};

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