import { GraphQLClient } from "graphql-hooks";
import { createCustomerWithSub, createCustomerNoSub } from "./methods/customer";
import { getEntitlementByCustomer } from "./methods/entitlement";

const getClient = (url: string, token: string): GraphQLClient => {
  const client = new GraphQLClient({ url });
  client.setHeader("Authorization", `Bearer ${token}`);
  client.setHeader("client", `api`);
  return client;
};

const createCustomer = (client: GraphQLClient, data: any, sub: any) => {
  if (!client) {
    throw new Error("Client is not passed");
  }
  if (data && sub) {
    data.sub = sub;
    return createCustomerWithSub(client, data);
  }
  if (data) {
    return createCustomerNoSub(client, data);
  }
};

const getEntitlementOfCustomer = (client: GraphQLClient, data: any) => {
  if (!client) {
    throw new Error("Client is not passed");
  }
  if (data) {
    return getEntitlementByCustomer(client, data);
  }
};

export { getClient, getEntitlementOfCustomer, createCustomer };
