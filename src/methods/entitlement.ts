import { GraphQLClient } from "graphql-hooks";


// - Getting & increment entitlement

const getEntitlementByCustomerQuery = `mutation getentitlementbycustomer($customerid: String!, $slug: String!, $requestedusage: String) {
    getmeteredentitlement(
        input: {custid: $customerid, slugtext: $slug, requestedusage: $requestedusage}
      ) {
        clientMutationId
        boolean
      }
}
`;

const getEntitlementByCustomer = async (client: GraphQLClient, data: any) => {
  return await client.request({
    query: getEntitlementByCustomerQuery,
    variables: data,
  });
};

export {
    getEntitlementByCustomer,
};
