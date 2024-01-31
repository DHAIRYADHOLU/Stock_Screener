import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosInstance } from "axios";
import { store } from "src/services/store";
import { setLoading } from "src/services/store/Loading";
import { api } from "src/common/configs";
import { ACCESS_TOKEN, ID_TOKEN } from "../../../common/constants";
import handleError from "./error";
import { ERROR_CODE } from "src/common/constants/responseCode";

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
		// Show Loading Tip
		store.dispatch(setLoading(true));
		const preka_access_token = localStorage.getItem(ACCESS_TOKEN);
		const preka_id_token = localStorage.getItem(ID_TOKEN);
		const baseURL = config.baseURL || "";
		const url = config.url || "";

		config.url = `${baseURL}${url}`;

		if (preka_access_token)
			config.headers["Authorization"] = "Bearer " + preka_access_token;
		if (preka_id_token) config.headers["id_token"] = preka_id_token;
		return config;
	},
	(error: any) => {
		store.dispatch(setLoading(false));
		return handleError(error?.data?.code);
	}
);

// response interceptor
axiosInstance.interceptors.response.use(
	(response: any) => {
		store.dispatch(setLoading(false));
		if (response?.data?.code === ERROR_CODE.UNAUTHORIZED)
			return handleError(response?.data?.code);
		return response;
	},
	(error: any) => {
		store.dispatch(setLoading(false));
		return handleError(error?.data?.code);
	}
);

export default axiosInstance;
