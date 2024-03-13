// Local Imports
import { AUTH_METHODS } from "$lib/user/auth"

// External Imports
import { redirect } from '@sveltejs/kit';


export async function load({ cookies, url }) {
    return {
        authMethods: AUTH_METHODS,
    }
}
