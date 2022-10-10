<script>
	import { page } from '$app/stores';
	import mark from '$lib/logos/mark-violet-600.svg';
</script>

<header class="bg-white shadow-md relative">
	<nav class="mx-auto max-w-screen page-px" aria-label="Top">
		<div
			class="flex w-full items-center justify-between border-b border-violet-500 py-4 lg:border-none"
		>
			<div class="flex items-center">
				<a href="/">
					<span class="sr-only">Your Company</span>
					<img class="h-10 w-auto" src={mark} alt="company logo" />
				</a>
				<div class="ml-10 hidden space-x-8 lg:block">
					<a href="/about" class="text-base font-medium hover:opacity-75">About</a>
				</div>
			</div>
			<div class="ml-10 space-x-4">
				{#if !$page.data.user}
					<a
						href="/signin"
						class="inline-block rounded-md border border-transparent bg-violet-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
						>Sign in</a
					>
					<a
						href="/signup"
						class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-violet-600 hover:bg-violet-50"
						>Sign up</a
					>
				{/if}
				{#if $page.data.user}
					<a
						href="/dashboard"
						class="inline-block rounded-md border border-transparent bg-violet-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
						>Dashboard</a
					>
					<a
						href="/signout"
						class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-violet-600 hover:bg-violet-50"
						>Sign out</a
					>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
			<a href="/about" class="text-base font-medium text-white hover:text-violet-50">About</a>
		</div>
	</nav>
</header>
