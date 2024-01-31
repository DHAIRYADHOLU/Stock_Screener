/**
 ** Interface for Routes in Router
 */
export enum APIEnvironment {
	DEV = "development",
	UAT = "uat",
	PRO = "pro",
}

export type FetchDataProps = {
	data_total: number;
	table_data: object[];
};
