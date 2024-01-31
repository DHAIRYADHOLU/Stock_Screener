import { APIEnvironment } from "../models/index.tsx";

//development开发模式  production生产模式 uat测试模式
export const ENVIRONMENT = APIEnvironment.DEV;

export const isAvailable = process.env.NODE_ENV !== "production";

export const ACCESS_TOKEN = "preka_access_token_key";

export const ID_TOKEN = "preka_id_token_key";

export const USER_NAME = "user_name";
export const PASSWORD = "password";

export const IS_LOGIN = "islogin";