export const Controller = {
  "GetProfileById": ({ userId }: { userId: string }) =>
    `Failed to process request for user ID '${userId}'.`,
};

export const Unknown = (layer: string, route: string) =>
  `Unknown error in the layer '${layer}' and route '${route}'.`;