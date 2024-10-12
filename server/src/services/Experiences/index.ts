import { CreateExperiencesByUserRepository, GetExperiencesByUserRepository } from "../../repositories/Experiences";
import { ThrowServiceException, ThrowNotFoundException } from "../../utils/Functions";

export const CreateExperiencesByUserService = async (
  route: string, userId: string
) => {
  try {
    const insertedExperiencesByUser = await CreateExperiencesByUserRepository(
      route, userId
    );

    return insertedExperiencesByUser;
  } catch (error) {};
};

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