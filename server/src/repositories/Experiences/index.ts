import { prisma } from "../../config/Repository";

export const GetExperiencesByUserRepository = async (userId: string) => {
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
  } catch (error) {};
};