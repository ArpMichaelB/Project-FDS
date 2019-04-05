import {
	FETCH_TENANT,
	UPDATE_USER
} from "../actions/types";

export const reducer = (state = {}, action) => {

	switch (action.type) {
	case FETCH_TENANT:
		return { ...state, tenant: action.payload };
	case UPDATE_USER:
		return {...state, tenant:{...state.tenant, email:action.payload}};
	default:
		return state;
	}
};
