<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Register</h1>

<form method="POST" use:enhance>
	{#if form?.user}
		<p class="error">Username is taken.</p>
	{/if}
	{#if form?.emailUser}
		<p class="error">Email is taken.</p>
	{/if}

	<div>
		<label for="username">Username</label>
		<input class="border" id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="email">email</label>
		<input class="border" id="email" name="email" type="email" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input class="border" id="password" name="password" type="password" required />
	</div>

	<button type="submit">Register</button>
</form>
