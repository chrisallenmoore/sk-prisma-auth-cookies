<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/headers/Header.svelte';
	import Footer from '$lib/footers/Footer.svelte';
</script>

<svelte:head>
	<title>SvelteKit, Prisma, Auth Cookies</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
