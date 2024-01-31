import { IS_LOGIN } from "../../common/constants/index.ts";
import { onClearLoginCache } from "./logout.tsx";
import { ERROR_CODE } from "../../common/constants/responseCode.ts";
import { ERROR_MSG } from "../../common/constants/responseMsg.ts";

export default function handleError(code) {
	if (code === ERROR_CODE.UNAUTHORIZED && localStorage.getItem(IS_LOGIN)) {
		// Token Invalid, Clear localStorage
		// Remind User for Upcoming Redirection
		// (Logic Stores in ContentProvider.tsx)
		onClearLoginCache();
		window.location.href = window.location.origin;
		return Promise.reject(ERROR_MSG[ERROR_CODE.UNAUTHORIZED]);
	} else if (code === ERROR_CODE.INTERNAL_SERVER_ERROR)
		return Promise.reject(ERROR_MSG[ERROR_CODE.INTERNAL_SERVER_ERROR]);
	else return Promise.reject(ERROR_MSG[ERROR_CODE.SERVICE_UNAVAILABLE]);
}
