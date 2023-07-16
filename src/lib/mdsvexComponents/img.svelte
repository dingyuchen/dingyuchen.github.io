<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<!-- all to add "lazy" to image tags -->
<img {src} {alt} loading="lazy" />
