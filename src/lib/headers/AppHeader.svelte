<script>
	import { page } from '$app/stores';
</script>

<nav>
	{#if !$page.data.user}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{/if}

	{#if $page.data.user}
		<a href="/">Home</a>
		<a href="/admin">Admin</a>
		<a href="/logout">Log out</a>
	{/if}
</nav>
