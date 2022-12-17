import { GraphQLClient } from "graphql-hooks";
declare const createCustomerNoSub: (client: GraphQLClient, data: any) => Promise<import("graphql-hooks").Result<unknown, object>>;
declare const createCustomerWithSub: (client: GraphQLClient, data: any) => Promise<import("graphql-hooks").Result<unknown, object>>;
declare const updateCustomer: (client: GraphQLClient, data: any) => Promise<import("graphql-hooks").Result<unknown, object>>;
declare const getCustomer: (client: GraphQLClient, data: any) => Promise<import("graphql-hooks").Result<unknown, object>>;
export { createCustomerNoSub, getCustomer, updateCustomer, createCustomerWithSub, };
