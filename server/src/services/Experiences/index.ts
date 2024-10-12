import { GetExperiencesByUserRepository } from "../../repositories/Experiences";
import { ThrowServiceException, ThrowNotFoundException } from "../../utils/Functions";

export const GetExperiencesByUserService = async (
  route: string, userId: string
) => {
  try {
    const experiencesByUser = await GetExperiencesByUserRepository(route, userId);

    if (experiencesByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    };

    return experiencesByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  };
};