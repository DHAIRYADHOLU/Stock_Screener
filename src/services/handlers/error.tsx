import { IS_LOGIN } from "src/common/constants";
import { onClearLoginCache } from "./logout";
import { ERROR_CODE } from "src/common/constants/responseCode";
import { ERROR_MSG } from "src/common/constants/responseMsg";

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
