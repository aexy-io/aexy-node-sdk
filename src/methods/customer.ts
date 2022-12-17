import { GraphQLClient } from "graphql-hooks";

// - Provisioning customers
const createCustomerQuery = `
mutation createCustomer(
  $customerid: String!
  $name: String
  $email: String
  $org: UUID!
  $billinginfo: JSON
  $coupounid: String
  $metadata: JSON
  $shouldsyncfree: Boolean!
  $excludefromexperiment: Boolean!
) {
  createCustomer(
    input: {
      customer: {
        customerid: $customerid
        email: $email
        name: $name
        org: $org
        billinginfo: $billinginfo
        couponid: $coupounid
        metadata: $metadata
        shouldsyncfree: $shouldsyncfree
        excludefromexperiment: $excludefromexperiment
      }
    }
  ) {
    customer {
      name
      email
      org
      billinginfo
      couponid
      customerid
      metadata
      shouldsyncfree
      excludefromexperiment
    }
  }
}

`;

const createCustomerNoSub = async (client: GraphQLClient, data: any) => {
  return await client.request({
    query: createCustomerQuery,
    variables: data,
  });
};

// - Provisioning customers
const createCustomerWithSubQuery = `
mutation createCustomerWithSub(
  $customerid: String!
  $name: String
  $email: String
  $org: UUID!
  $billinginfo: JSON
  $sub: CustomSubInput
  $coupounid: String
  $metadata: JSON
  $shouldsyncfree: Boolean!
  $excludefromexperiment: Boolean!
) {
  createCustomerWithSub(
    input: {
      customerid: $customerid
      email: $email
      name: $name
      orgid: $org
      billinginfo: $billinginfo
      sub: $sub
      couponid: $coupounid
      metadata: $metadata
      shouldsyncfree: $shouldsyncfree
      excludefromexperiment: $excludefromexperiment
    }
  ) {
    clientMutationId
    json
  }
}

`;

const createCustomerWithSub = async (client: GraphQLClient, data: any) => {
  return await client.request({
    query: createCustomerWithSubQuery,
    variables: data,
  });
};

// - Updating customers

const updateCustomerQuery = `mutation updatecustomerbyid($customerid: String!, $orgid: UUID!, $name: String!, $email: String!) {
  updatecustomerbyid(input: {customerid: $customerid, orgid: $orgid, name: $name, email: $email}) {
    customer {
      name
      customerid
      org
      email
    }
  }
}
`;

const updateCustomer = async (client: GraphQLClient, data: any) => {
  return await client.request({
    query: updateCustomerQuery,
    variables: data,
  });
};
// - Getting customer data

const getCustomerQuery = `mutation getcustomerbyid($customerid: String!, $orgid: UUID!) {
  getcustomerbyid(input: {customerid: $customerid, orgid:  $orgid}) {
    customer {
      name
      customerid
      couponid
      org
    }
  }
}
`;

const getCustomer = async (client: GraphQLClient, data: any) => {
  return await client.request({
    query: getCustomerQuery,
    variables: data,
  });
};

export {
  createCustomerNoSub,
  getCustomer,
  updateCustomer,
  createCustomerWithSub,
};
