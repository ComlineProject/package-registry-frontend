<script>
	import { guessServiceInfo } from '$lib/repository';
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    const meta = data.packageMeta;

    const gitServiceInfo = guessServiceInfo(meta.repositoryUrl);
    const gitServiceIcon = () => {
        if (gitServiceIcon == undefined) { return undefined }

        return `${gitServiceInfo?.assets_path}/light.svg`
    };
</script>


<div class="main">
    <div class="identificationDescription">
        <div class="identification">
            <p>
                Tags:
                {#each meta.tags as tag}
                    <a href="/tag/{tag}">{tag}</a>
                {/each}
            </p>
            
            <div>
                
            </div>
            <h1>Package {meta.name} (@{meta.namespace}/{meta.id})</h1>
        </div>
    
        <div class="description">
            <SvelteMarkdown source={meta.description}/>
        </div>
    </div>

    <div class="info">
        <p>
            Namespace:
            <a href="/namespaces/{meta.namespace}">{meta.namespace}</a>
            <br/>
            ID:
            <a href="/packages/{meta.id}">{meta.id}</a>
        </p>
        <p>Last Updated: {meta.lastUpdate}</p>
        <p>Version: {meta.current_version}</p>
        <p>
            Licenses:
            {#each meta.licenses as license}
                {license}
            {/each}
        </p>
        <p>
            Repository:
            <a href={meta.repositoryUrl.toString()}>{meta.repositoryUrl}</a>
        </p>
        <p>Documentation:<a href={meta.docsUrl}>{meta.docsUrl}</a></p>
        <p>
            Owners:
            {#each meta.owners as owner}
                <a href="/users/{owner}">{owner}</a>
            {/each}
        </p>
        <p>
            Categories:
            {#each meta.categories as category}
                <a href="/categories/{category}">{category}</a>
            {/each}
        </p>
    </div>
</div>


<style>
    .main {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .identificationDescription {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2;

        margin-left: 2px;
        margin-right: 4px;

        height: 100%;
        width: 70%;
    }

    .identification {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        border-style: solid;
        border-radius: 1px;
        border-color: #853A2D;
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        width: 100%;

        border-style: solid;
        border-radius: 1px;
        border-color: #853A2D;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: left;
        height: 100%;
        width: 30%;

        border-style: solid;
        border-radius: 1px;
        border-color: #853A2D;
    }
</style>
