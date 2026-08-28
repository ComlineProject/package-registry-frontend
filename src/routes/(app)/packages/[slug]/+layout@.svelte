<script lang="ts">
	// Ordered Imports
	import '/src/styles/global.css';

	// Local Imports
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	import type { User } from '$lib/user/user';
	import type { Snippet } from 'svelte';

	// This layout uses the `@` reset, so it has no load function of its own;
	// `user` is only present once a loader is added for this branch.
	let { data, children }: { data: { user?: User }; children: Snippet } = $props();
</script>

<header>
	<HeaderBar user={data.user} />
</header>

<div class="content">
	{@render children()}
</div>

<footer></footer>

<style>
	header {
		display: flex;
		margin-top: 1pt;
		margin-bottom: 1pt;
		justify-content: center;
		height: 130px;

		background-color: #ff6847eb;

		border-style: ridge;
		border-color: #614a39;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: calc(100vh - 100px);
		background-color: #181111;
	}
</style>
