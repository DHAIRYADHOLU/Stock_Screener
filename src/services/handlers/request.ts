import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosInstance } from "axios";
import { api } from "../../common/configs/index.ts";
import handleError from "./error.tsx";
import { ERROR_CODE } from "../../common/constants/responseCode.ts";

// axios singleton
const axiosInstance: AxiosInstance = axios.create({
	baseURL: api.base,
	timeout: 10000,
	timeoutErrorMessage: "Timeout Error, ",
});

// request interceptor
axiosInstance.interceptors.request.use(
	(config: any) => {
		// console.log(config)
		// const preka_access_token = localStorage.getItem(ACCESS_TOKEN);
		// const preka_id_token = localStorage.getItem(ID_TOKEN);
		const baseURL = config.baseURL || "";
		const url = config.url || "";

		config.url = `${baseURL}${url}`;

		// if (preka_access_token)
		// 	config.headers["Authorization"] = "Bearer " + preka_access_token;
		// if (preka_id_token) config.headers["id_token"] = preka_id_token;
		return config;
	},
	(error: any) => {
		// store.dispatch(setLoading(false));
		return handleError(error?.data?.code);
	}
);

// response interceptor
axiosInstance.interceptors.response.use(
	(response: any) => {
		if (response?.data?.code === ERROR_CODE.UNAUTHORIZED)
			return handleError(response?.data?.code);
		return response;
	},
	(error: any) => {
		return handleError(error?.data?.code);
	}
);

export default axiosInstance;
