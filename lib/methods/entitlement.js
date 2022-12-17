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
exports.getEntitlementByCustomer = void 0;
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
const getEntitlementByCustomer = (client, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.request({
        query: getEntitlementByCustomerQuery,
        variables: data,
    });
});
exports.getEntitlementByCustomer = getEntitlementByCustomer;
