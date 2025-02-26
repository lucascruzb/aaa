import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Product: a
    .model({
      id: a.string(),
      name: a.string(),
      description: a.string(),
      price: a.integer(),
      imageUrl: a.string(),
      isFavorite: a.boolean(),
    })
    .authorization((allow) => [allow.owner()]),
  CartItem: a
    .model({
      id: a.string(),
      productId: a.string(),
      name: a.string(),
      quantity: a.integer(),
      price: a.integer(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});