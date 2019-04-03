import {
	FETCH_TENANT
} from "../actions/types";

export const reducer = (state = {}, action) => {

	switch (action.type) {
	case FETCH_TENANT:
		return { ...state, tenant: action.payload };
	default:
		return state;
	}
};
