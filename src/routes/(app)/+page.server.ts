// Local Imports
import type { PageServerLoad } from './$types.js';

// External Imports


export const load: PageServerLoad = async ({ locals }) => {
    return {
        user: locals.user,
    }
}
