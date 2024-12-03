import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const structureError = (
	error: FetchBaseQueryError | SerializedError
) => {
	if ("status" in error) {
		// you can access all properties of `FetchBaseQueryError` here
		const errMsg = "error" in error ? error.error : JSON.stringify(error.data);

		return JSON.parse(errMsg);
	}
};
