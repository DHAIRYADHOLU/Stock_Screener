import {
	ACCESS_TOKEN,
	ID_TOKEN,
	IS_LOGIN,
	USER_NAME,
} from "../../common/constants/index.ts";

export const onClearLoginCache = () => {
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(ID_TOKEN);
	localStorage.removeItem(IS_LOGIN);

	localStorage.removeItem(USER_NAME);
};
