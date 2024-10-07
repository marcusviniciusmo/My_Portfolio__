export const Controller = {
  "CreateProfile": () =>
    `Failed to process request to create new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
};

export const Service = {
  "CreateProfile": () =>
    `Unable to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Unable to retrieve profile for user ID '${userId}'.`,
};

export const Repository = {
  "CreateProfile": () =>
    `Failed to create the new profile.`,
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to fetch profile for user ID '${userId}'.`,
};

export const NotFound = {
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Profile with user ID '${userId}' not found.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer '${layer}' and route '${route}'.`;