// Local Imports
import { AUTH_METHODS } from "$lib/user/auth"

// External Imports
import { redirect } from '@sveltejs/kit';


export function load({ cookies, locals, url }) {
    return {
        user: locals.user,
    }
}
