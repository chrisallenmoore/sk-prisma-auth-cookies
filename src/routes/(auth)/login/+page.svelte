<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../../../.svelte-kit/types/src/routes/(auth)/login/$types';

	export let form: ActionData;
</script>

<section class="page-px section-py bg-indigo-600 text-white">
	<h1 class="text-3xl">Sign in</h1>

	<form method="POST" use:enhance>
		{#if form?.invalid}
			<p class="error">Username and password is required.</p>
		{/if}

		{#if form?.credentials}
			<p class="error">You have entered the wrong credentials.</p>
		{/if}

		<div>
			<label for="username">Username</label>
			<input class="border" id="username" name="username" type="text" required />
		</div>

		<div>
			{#if form?.password}
				<p class="error">You have entered the wrong password.</p>
			{/if}

			<label for="password">Password</label>
			<input class="border" id="password" name="password" type="password" required />
		</div>

		<button class="border" type="submit">Sign in</button>
	</form>
</section>
