<script>
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    const meta = data.packageMeta;
</script>


<div class="main">
    <div class="description">
        <p>
            Tags:
            {#each meta.tags as tag}
                <a href="/tag/{tag}">{tag}</a>
            {/each}
        </p>
        
        <h1>Package {meta.name} (@{meta.namespace}/{meta.id})</h1>
        <SvelteMarkdown source={meta.description}/>
    </div>

    <div class="info">
        <p>Last Updated: {meta.lastUpdate}</p>
        <p>Version: {meta.current_version}</p>
        <p>
            Licenses:
            {#each meta.licenses as license}
                {license}
            {/each}
        </p>
        <p>Repository:<a href={meta.repositoryUrl}>{meta.repositoryUrl}</a></p>
        <p>Documentation:<a href={meta.docsUrl}>{meta.docsUrl}</a></p>
        <p>Namespace:<a href="namespaces/{meta.namespace}">{meta.namespace}</a></p>
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

        border-style: ridge;
        border-radius: 2;
    }
    
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 70%;

        border-style: ridge;
        border-radius: 2;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: left;
        height: 100%;
        width: 30%;

        border-style: ridge;
        border-radius: 2;
    }
</style>
