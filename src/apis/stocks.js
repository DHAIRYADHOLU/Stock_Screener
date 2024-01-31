import axiosInstance from "../../src/services/handlers/request.ts";

export function GET_STOCKS(searchTerm) {
    return axiosInstance.request({
        method: "GET",
        url: `/stock/${searchTerm}/quote?token=pk_91968dfd5ac54f69a37d10a0328d8306`,
    });
}

// export function GET_BILLING_ACCOUNT() {
// 	return axiosInstance.request({
// 		method: "GET",
// 		url: "/api/member/merchantbank/account",
// 	});
// }

// export function POST_BILLING_ACCOUNT(data) {
// 	return axiosInstance.request({
// 		method: "POST",
// 		url: "/api/member/merchantbank/account",
// 		data,
// 	});
// }
