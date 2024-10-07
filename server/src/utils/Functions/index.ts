import { Response } from "express";
import * as Exception from '../../exceptions';

export function ThrowControllerException(
  error: any, response: Response, route: string, userId?: string
) {
  let statusCode = 500;

  if (
    !(error instanceof Exception.Service) &&
    !(error instanceof Exception.Repository)
  ) {
    error = new Exception.Controller(route, { userId });
  };

  console.log(error);

  return response.status(statusCode).json(error);
};

export function ThrowServiceException(
  error: any, route: string, userId?: string
) {
  if (error instanceof Exception.Repository) {
    throw error;
  } else {
    throw new Exception.Service(route, { userId });
  };
};

export function ThrowRepositoryException(route: string, userId?: string) {
  throw new Exception.Repository(route, { userId });
};