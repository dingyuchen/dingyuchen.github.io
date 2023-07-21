<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';
	
	export let data
</script>

<div class="flex flex-col items-center">
	<Header />
	<main class="max-w-prose w-full flex flex-col m-4 mb-10 items-center">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
