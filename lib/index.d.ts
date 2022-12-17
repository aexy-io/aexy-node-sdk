import { GraphQLClient } from "graphql-hooks";
declare const getClient: (url: string, token: string) => GraphQLClient;
declare const createCustomer: (client: GraphQLClient, data: any, sub: any) => Promise<import("graphql-hooks").Result<unknown, object>> | undefined;
declare const getEntitlementOfCustomer: (client: GraphQLClient, data: any) => Promise<import("graphql-hooks").Result<unknown, object>> | undefined;
export { getClient, getEntitlementOfCustomer, createCustomer };
