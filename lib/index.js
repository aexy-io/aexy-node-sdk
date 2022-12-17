"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = exports.getEntitlementOfCustomer = exports.getClient = void 0;
const graphql_hooks_1 = require("graphql-hooks");
const customer_1 = require("./methods/customer");
const entitlement_1 = require("./methods/entitlement");
const getClient = (url, token) => {
    const client = new graphql_hooks_1.GraphQLClient({ url });
    client.setHeader("Authorization", `Bearer ${token}`);
    client.setHeader("client", `api`);
    return client;
};
exports.getClient = getClient;
const createCustomer = (client, data, sub) => {
    if (!client) {
        throw new Error("Client is not passed");
    }
    if (data && sub) {
        data.sub = sub;
        return (0, customer_1.createCustomerWithSub)(client, data);
    }
    if (data) {
        return (0, customer_1.createCustomerNoSub)(client, data);
    }
};
exports.createCustomer = createCustomer;
const getEntitlementOfCustomer = (client, data) => {
    if (!client) {
        throw new Error("Client is not passed");
    }
    if (data) {
        return (0, entitlement_1.getEntitlementByCustomer)(client, data);
    }
};
exports.getEntitlementOfCustomer = getEntitlementOfCustomer;
