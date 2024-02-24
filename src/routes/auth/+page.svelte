<script lang="ts">
    import "../../styles/global.css"

    const authMethods: AuthMethod[] = [
        { id: "gitlab_oidc", name: "GitLab", description: "GitLab OpenID Connect" },
        { id: "github_oidc", name: "GitHub", description: "GitHub OpenID Connect" },
    ]
    const authMethodsIcons = [
        { 
            id: "gitlab_oidc",
            logo_white: "/images/github/github-mark/github-mark-white.svg",
            logo_dark: "/images/github/github-mark/github-mark.svg",
        },
        { 
            id: "github_oidc",
            logo_white: "/images/github/github-mark/github-mark-white.svg",
            logo_dark: "/images/github/github-mark/github-mark.svg",
        },
    ]

    function methodIcon(id: string): string {
        let url = authMethodsIcons.filter(p => p.id == id)[0].logo_dark
        console.log(url)

        return url
    }
</script>


<div class="methodsMenu">
    <h4>Connect using one of these</h4>
    
    {#each authMethods as method}
        <div class="loginButton">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="unselectable" draggable="false" src={methodIcon(method.id)} width="24" height="24"/>
            <a href="/auth/{method.id}">{method.name}</a>    
        </div>
    {/each}
</div>


<style>
    .methodsMenu {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-style: ridge;
        border-width: 2;
    }
    .loginButton {
        background-color: #EC6142;
        border-radius: 15%;
        border-width: 0;
        border-top: 0;
    }
    .loginButton > a {
        text-decoration: none;
        color: #FFD6CEFB;
    }
    .unselectable {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>