<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="page-px section-py">
	<h1 class="text-3xl">Account</h1>

	{#if $page.data.user}
		<p>Welcome {$page.data.user}!</p>
	{/if}
</section>
