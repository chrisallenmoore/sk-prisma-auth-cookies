<script>
	import { page } from '$app/stores';
	import mark from '$lib/logos/mark.svg';
</script>

<header class="bg-indigo-600">
	<nav class="mx-auto max-w-screen page-px" aria-label="Top">
		<div
			class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none"
		>
			<div class="flex items-center">
				<a href="/">
					<span class="sr-only">Your Company</span>
					<img class="h-10 w-auto" src={mark} alt="company logo" />
				</a>
				<div class="ml-10 hidden space-x-8 lg:block">
					<a href="/about" class="text-base font-medium text-white hover:text-indigo-50">About</a>
				</div>
			</div>
			<div class="ml-10 space-x-4">
				{#if !$page.data.user}
					<a
						href="/signin"
						class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
						>Sign in</a
					>
					<a
						href="/signup"
						class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
						>Sign up</a
					>
				{/if}
				{#if $page.data.user}
					<a
						href="/dashboard"
						class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
						>Dashboard</a
					>
					<a
						href="/signout"
						class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
						>Sign out</a
					>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
			<a href="/about" class="text-base font-medium text-white hover:text-indigo-50">About</a>
		</div>
	</nav>
</header>
