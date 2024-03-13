<script lang="ts">
    import PackageSummary from "$lib/components/PackageSummary.svelte"

    export let data;
</script>


<div class="container">
    {#each data.packageMetas as meta}
        <PackageSummary meta={meta}/>
    {/each}
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>
