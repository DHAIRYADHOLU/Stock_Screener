import { ERROR_CODE } from "../constants/responseCode.ts"

const ERROR_MSG = {
	ERROR: "Failed to process the request",
	[ERROR_CODE.INVALID_PARAMS]: "Invalid request parameters",
	[ERROR_CODE.WRONG_EMAIL]: "Incorrect email",
	[ERROR_CODE.WRONG_PASSWORD]: "Incorrect password",
	[ERROR_CODE.VALIDATION_ERROR]: "Validation failed",
	[ERROR_CODE.INVALID_AUTHENTICATION]: "Invalid authentication token",
	[ERROR_CODE.NOT_FOUND]: "Requested resource not found",
	[ERROR_CODE.USER_NOT_FOUND]: "User not found",
	[ERROR_CODE.TOO_MANY_REQUESTS]: "Too many requests, please try again later",
	[ERROR_CODE.MAILER_FROM_ADDRESS_UNDEFINED]: "Mailer 'From' address is not defined",
	[ERROR_CODE.MAILER_SMTP_URL_UNDEFINED]: "Mailer SMTP URL is not defined",
	[ERROR_CODE.FORBIDDEN]: "Access denied",
	[ERROR_CODE.UNAUTHORIZED]: "Unauthorized access",
	[ERROR_CODE.INTERNAL_SERVER_ERROR]: "Internal server error",
	[ERROR_CODE.SERVICE_UNAVAILABLE]: "Service unavailable",
	[ERROR_CODE.INVALID_USER]: "Invalid user information",
	[ERROR_CODE.ERROR_CHECK_EXIST_FAIL]: "Requested item does not exist",
	[ERROR_CODE.ERROR_FAILED_TO_CREATE_USER]: "Failed to create the user",
	[ERROR_CODE.ERROR_FAILED_TO_CREATE]: "Failed to create the item",
	[ERROR_CODE.ERROR_FAILED_TO_DELETE]: "Failed to delete the item",
	[ERROR_CODE.ERROR_FAILED_TO_UPDATE]: "Failed to update the item",
	[ERROR_CODE.ERROR_GET_MULTIPLE_FAIL]: "Failed to retrieve multiple items",
	[ERROR_CODE.ERROR_GET_SINGLE_FAIL]: "Failed to retrieve the item",
	[ERROR_CODE.ERROR_AUTH_CHECK_TOKEN_FAIL]: "Failed to authenticate token",
	[ERROR_CODE.ERROR_AUTH_CHECK_TOKEN_TIMEOUT]: "Token has timed out",
	[ERROR_CODE.ERROR_AUTH_TOKEN]: "Failed to generate authentication token",
	[ERROR_CODE.ERROR_AUTH]: "Authentication error",
	[ERROR_CODE.ERROR_DATABASE]: "Database error",
	UNKNOWN: "Unknown error",
}

enum SUCCESS_MSG {
	OK = "OK",
}

export { ERROR_MSG, SUCCESS_MSG }
