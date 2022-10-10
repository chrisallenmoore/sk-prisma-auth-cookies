<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import mark from '$lib/logos/mark-violet-600.svg';

	export let form: ActionData;
</script>

<section class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img class="mx-auto h-12 w-auto" src={mark} alt="Your Company" />
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-900">
			Sign in to your account
		</h2>
		<p class="mt-2 text-center text-sm text-zinc-600">
			Or
			<a href="/signup" class="font-medium text-violet-600 hover:text-violet-500"
				>Need an account?</a
			>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" method="POST" use:enhance>
				<div>
					{#if form?.invalid}
						<p class="error">email and password is required.</p>
					{/if}

					{#if form?.credentials}
						<p class="error">You have entered the wrong credentials.</p>
					{/if}
					<label for="email" class="block text-sm font-medium text-zinc-700">Email address</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full appearance-none rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					{#if form?.password}
						<p class="error">You have entered the wrong password.</p>
					{/if}
					<label for="password" class="block text-sm font-medium text-zinc-700">Password</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full appearance-none rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
						/>
					</div>
				</div>

				<!-- TODO: Integrate this remember me code? -->
				<!-- <div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded border-zinc-300 text-violet-600 focus:ring-violet-500"
						/>
						<label for="remember-me" class="ml-2 block text-sm text-zinc-900">Remember me</label>
					</div>

					<div class="text-sm">
						<a href="#" class="font-medium text-violet-600 hover:text-violet-500"
							>Forgot your password?</a
						>
					</div>
				</div> -->

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
						>Sign in</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
