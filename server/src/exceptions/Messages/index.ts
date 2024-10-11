export const Controller = {
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Failed to process request to create new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
};

export const Service = {
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Unable to retrieve blog(s) for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Unable to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID '${userId}'.`,
};

export const Repository = {
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Failed to fetch blog(s) for user ID '${userId}'.`,
  "CreateProfile": () =>
    `Failed to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID '${userId}'.`,
};

export const NotFound = {
  "GetBlogsByUser": ({ userId }: { userId: string }) =>
    `Blog(s) with user ID '${userId}' not found.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Profile with user ID '${userId}' not found.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer '${layer}' and route '${route}'.`;