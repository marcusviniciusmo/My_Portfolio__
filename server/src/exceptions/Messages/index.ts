export const Controller = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to create blog(s) for user ID '${userId}'.`,
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "CreateCertificateAreas": () =>
    `Failed to process request to create certificate area(s).`,
  "GetCertificateAreas": () =>
    `Failed to process request to get certificate areas.`,
  "CreateCertificatesByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "GetCertificatesByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "CreateCertificateTypes": () =>
    `Failed to process request to create certificate type(s).`,
  "GetCertificateTypes": () =>
    `Failed to process request to get certificate type(s).`,
  "CreateExperiencesByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "GetExperiencesByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Failed to process request to create new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
};

export const Service = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Unable to create blog(s) for user ID '${userId}'.`,
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Unable to retrieve blog(s) for user ID '${userId}'.`,
  "CreateCertificateAreas": () =>
    `Unable to create certificate area(s).`,
  "GetCertificateAreas": () =>
    `Unable to retrieve certificate areas.`,
  "CreateCertificatesByUser": ({ userId }: { userId: string }) =>
    `Unable to create certificate(s) for user ID '${userId}'.`,
  "GetCertificatesByUser": ({ userId }: { userId: string }) =>
    `Unable to retrieve certificate(s) for user ID '${userId}'.`,
  "CreateCertificateTypes": () =>
    `Unable to create certificate type(s).`,
  "GetCertificateTypes": () =>
    `Unable to retrieve certificate type(s).`,
  "CreateExperiencesByUser": ({ userId}: { userId: string }) =>
    `Unable to create experience(s) for user ID '${userId}'.`,
  "GetExperiencesByUser": ({ userId }: { userId: string }) =>
    `Unable to retrieve experience(s) for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Unable to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID '${userId}'.`,
};

export const Repository = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to create blog(s) for user ID '${userId}'.`,
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to fetch blog(s) for user ID '${userId}'.`,
  "CreateCertificateAreas": () =>
    `Failed to create certificate area(s).`,
  "GetCertificateAreas": () =>
    `Failed to fetch certificate areas.`,
  "CreateCertificatesByUser": ({ userId }: { userId: string }) =>
    `Failed to create certificate(s) for user ID '${userId}'.`,
  "GetCertificatesByUser": ({ userId }: { userId: string }) =>
    `Failed to fetch certificate(s) for user ID '${userId}'.`,
  "CreateCertificateTypes": () =>
    `Failed to create certificate type(s).`,
  "GetCertificateTypes": () =>
    `Failed to fetch certificate type(s).`,
  "CreateExperiencesByUser": ({ userId }: { userId: string }) =>
    `Failed to create experience(s) for user ID '${userId}'.`,
  "GetExperiencesByUser": ({ userId }: { userId: string }) =>
    `Failed to fetch experience(s) for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Failed to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID '${userId}'.`,
};

export const NotFound = {
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Blog(s) with user ID '${userId}' not found.`,
  "GetCertificateAreas": () =>
    `Certificate areas not found.`,
  "GetCertificatesByUser": ({ userId }: { userId: string }) =>
    `Certificate(s) with user ID '${userId}' not found.`,
  "GetCertificateTypes": () =>
    `Certificate type(s) not found.`,
  "GetExperiencesByUser": ({ userId }: { userId: string }) =>
    `Experience(s) with user ID '${userId}' not found.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Profile with user ID '${userId}' not found.`,
};

export const Conflict = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Blog(s) with user ID '${userId}' exists on database.`,
  "CreateCertificateAreas": () =>
    `Certificate area(s) exists on database.`,
  "CreateCertificatesByUser": ({ userId }: { userId: string }) =>
    `Certificate(s) with user ID '${userId}' exists on database.`,
  "CreateCertificateTypes": () =>
    `Certificate type(s) exists on database.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer '${layer}' and route '${route}'.`;