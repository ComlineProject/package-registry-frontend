export interface GitServiceInfo {
    name: string
    url: URL
    assets_path: string
}

export const serviceInfos: GitServiceInfo[] = [
    { 
        name: "GitHub", url: new URL("https://github.com/"),
        assets_path: "images/github/github-mark/"
    },
    { 
        name: "GitLab", url: new URL("https://github.com/"),
        assets_path: "images/github/github-mark/"
    },
]

export function guessServiceInfo(repositoryUrl: URL): GitServiceInfo | undefined {
    serviceInfos.forEach(info => {
        if (info.url.hostname == repositoryUrl.hostname) {
            return info
        }
    });

    return
}

