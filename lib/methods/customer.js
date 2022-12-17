"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerWithSub = exports.updateCustomer = exports.getCustomer = exports.createCustomerNoSub = void 0;
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
const createCustomerNoSub = (client, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.request({
        query: createCustomerQuery,
        variables: data,
    });
});
exports.createCustomerNoSub = createCustomerNoSub;
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
const createCustomerWithSub = (client, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.request({
        query: createCustomerWithSubQuery,
        variables: data,
    });
});
exports.createCustomerWithSub = createCustomerWithSub;
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
const updateCustomer = (client, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.request({
        query: updateCustomerQuery,
        variables: data,
    });
});
exports.updateCustomer = updateCustomer;
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
const getCustomer = (client, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.request({
        query: getCustomerQuery,
        variables: data,
    });
});
exports.getCustomer = getCustomer;
