import { AUTH_METHODS } from '$lib/user/auth';

export function load() {
	return {
		authMethods: AUTH_METHODS
	};
}
