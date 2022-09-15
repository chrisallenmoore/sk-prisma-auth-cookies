<script>
	import { page } from '$app/stores';
	import AppHeader from '$lib/headers/AppHeader.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>SvelteKit, Prisma, Auth Cookies</title>
</svelte:head>

<AppHeader />

<main class="grow">
	<slot />
</main>
