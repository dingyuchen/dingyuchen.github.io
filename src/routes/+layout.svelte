<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
</script>

<div class="flex flex-col items-center">
	<Header />
	<main class="m-4 mb-10">
		<slot />
	</main>
</div>
