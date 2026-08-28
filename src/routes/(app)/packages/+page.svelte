<script lang="ts">
	import PackageSummary from '$lib/components/PackageSummary.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="container">
	{#each data.packageMetas as meta (meta.id)}
		<PackageSummary {meta} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
