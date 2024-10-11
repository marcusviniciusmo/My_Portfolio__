import { Request, Response } from "express";
import { CreateCertificateTypesService, GetCertificateTypesService } from "../../services/CertificateTypes";
import { ThrowControllerException } from "../../utils/Functions";

export const CreateCertificateTypesController = async (
  request: Request, response: Response
) => {
  const route = 'CreateCertificateTypes';

  try {
    const insertedCertificateTypes = await CreateCertificateTypesService(route);

    return response.status(201).json(insertedCertificateTypes);
  } catch (error) {};
};

export const GetCertificateTypesController = async (
  request: Request, response: Response
) => {
  const route = 'GetCertificateTypes';

  try {
    const certificateTypes = await GetCertificateTypesService(route);

    return response.status(200).json(certificateTypes);
  } catch (error) {
    ThrowControllerException(error, response, route);
  };
};