<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<div class="flex flex-col items-center">
	<Header />
	<main class="max-w-prose w-full flex flex-col m-4 mb-10 items-center">
		<slot />
	</main>
	<Footer />
</div>
