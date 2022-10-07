<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="page-px section-py">
	<h1 class="text-3xl">About</h1>

	{#if !$page.data.user}
		<p>This is the about page.</p>
		<p>This will show up only when a user IS NOT signed in.</p>
	{/if}

	{#if $page.data.user}
		<p>Hi, {$page.data.user}. This is the about page.</p>
		<p>This will show up only when a user IS signed in.</p>
	{/if}
</section>
