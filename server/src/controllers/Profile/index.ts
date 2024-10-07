import { Request, Response } from "express";
import { CreateProfileService, GetProfileByIdService } from "../../services/Profile";
import { ThrowControllerException } from "../../utils/Functions";

export const CreateProfileController = async (
  request: Request, response: Response
) => {
  const route = 'CreateProfile';

  try {
    const profileInserted = await CreateProfileService(route);

    return response.status(201).json(profileInserted);
  } catch (error) {
    ThrowControllerException(error, response, route);
  };
};

export const GetProfileByIdController = async (
  request: Request, response: Response
) => {
  const { userId } = request.params;
  const route = 'GetProfileById';

  try {
    const profileById = await GetProfileByIdService(route, userId);

    return response.status(200).json(profileById);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  };
};