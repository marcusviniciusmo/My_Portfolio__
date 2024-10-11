import { Request, Response } from "express";
import { CreateCertificatesByUserService, GetCertificatesByUserService } from "../../services/Certificates";
import { ThrowControllerException } from "../../utils/Functions";

export const CreateCertificatesByUserController = async (
  request: Request, response: Response
) => {
  const { userId } = request.params;
  const route = 'CreateCertificatesByUser';

  try {
    const insertedCertificatesByUser = await CreateCertificatesByUserService(
      route, userId
    );

    return response.status(201).json(insertedCertificatesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  };
};

export const GetCertificatesByUserController = async (
  request: Request, response: Response
) => {
  const { userId } = request.params;
  const route = 'GetCertificatesByUser';

  try {
    const certificatesByUser = await GetCertificatesByUserService(route, userId);

    return response.status(200).json(certificatesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  };
};