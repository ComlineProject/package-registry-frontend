// Local Imports
import type { User } from "./user"

// External Imports
import type { RequestEvent } from "@sveltejs/kit"


export interface AuthMethod {
    id: string
    name: string
    description: string   
}


export const AUTH_METHODS: AuthMethod[] = [
    { id: "gitlab_oidc", name: "GitLab", description: "GitLab OpenID Connect" },
    { id: "github_oidc", name: "GitHub", description: "GitHub OpenID Connect" },
]


export function authenticate(event: RequestEvent): User | undefined {
    if (!event.cookies.get('logged_in')) {
        return
    }

    return
}
