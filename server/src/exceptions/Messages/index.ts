export const Controller = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to create blog(s) for user ID '${userId}'.`,
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "GetCertificateAreas": () =>
    `Failed to process request to get certificate areas.`,
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
  "GetCertificateAreas": () =>
    `Unable to retrieve certificate areas.`,
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
  "GetCertificateAreas": () =>
    `Failed to fetch certificate areas.`,
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
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Profile with user ID '${userId}' not found.`,
};

export const Conflict = {
  "CreateBlogsByUser": ({ userId }: { userId: string }) =>
    `Blog(s) with user ID '${userId}' exists on database.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer '${layer}' and route '${route}'.`;