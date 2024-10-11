import { Request, Response, NextFunction } from "express";
import * as Exception from '../../exceptions';
import dotenv from 'dotenv';

dotenv.config();

export function RestrictWriteRoutes(
  request: Request, response: Response, next: NextFunction
) {
  if (process.env.NODE_ENV === 'PRODUCTION' && (request.method === 'POST')) {
    return response.status(403).json(
      { Exception: 'Write routes are disabled in production environment.' }
    );
  };

  next();
};

export function ThrowControllerException(
  error: any, response: Response, route: string, userId?: string
) {
  let statusCode = 500;

  if (error instanceof Exception.NotFound) {
    statusCode = 404;
  } else if (error instanceof Exception.Conflict) {
    statusCode = 409;
  } else if (
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
  if (
    error instanceof Exception.Repository ||
    error instanceof Exception.NotFound ||
    error instanceof Exception.Conflict
  ) {
    throw error;
  } else {
    throw new Exception.Service(route, { userId });
  };
};

export function ThrowRepositoryException(route: string, userId?: string, error?: any ) {
  if (error instanceof Exception.Conflict) {
    throw error;
  } else {
    throw new Exception.Repository(route, { userId });
  };
};

export function ThrowNotFoundException(route: string, userId?: string) {
  throw new Exception.NotFound(route, { userId });
};

export function ThrowConflictException(route: string, userId?: string) {
  throw new Exception.Conflict(route, { userId });
};

export function ThrowAuthenticateException(error: any, response: Response) {
  console.log(error);

  return response.status(401).json(
    { Exception: 'Failed to authenticate the request.' }
  );
};

export function ThrowInvalidTokenException(response: Response) {
  return response.status(403).json({ Exception: 'Invalid token.' });
};