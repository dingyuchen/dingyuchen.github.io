<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
