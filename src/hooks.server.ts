// Local Imports
import { authenticate } from "$lib/user/auth";

// External Imports
import { redirect, type Handle } from "@sveltejs/kit";



export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = authenticate(event);

    if (event.url.pathname.startsWith("/profile")) {
        if (!event.locals.user) {
            throw redirect(303, `/auth/login?redirectTo=${event.url.pathname}`);
            throw redirect(303, "/auth/login")
        }
    }
    
    const response = await resolve(event);

    return response
}
