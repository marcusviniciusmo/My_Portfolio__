import { Request, Response } from "express";
import { CreateCertificateAreasService, GetCertificateAreasService } from "../../services/CertificateAreas";
import { ThrowControllerException } from "../../utils/Functions";

export const CreateCertificateAreasController = async (
  request: Request, response: Response
) => {
  const route = 'CreateCertificateAreas';

  try {
    const insertedCertificateAreas = await CreateCertificateAreasService(route);

    return response.status(201).json(insertedCertificateAreas);
  } catch (error) {
    ThrowControllerException(error, response, route);
  };
};

export const GetCertificateAreasController = async (
  request: Request, response: Response
) => {
  const route = 'GetCertificateAreas';
  try {
    const certificateAreas = await GetCertificateAreasService(route);

    return response.status(200).json(certificateAreas);
  } catch (error) {
    ThrowControllerException(error, response, route);
  };
};