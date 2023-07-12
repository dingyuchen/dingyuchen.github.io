<script lang="ts">
	import { author } from '$lib/config.js';
	import { formatDate } from '$lib/util.js';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:tag" content={data.metadata.tags.join(',')} />
	<meta property="og:author" content={author} />
</svelte:head>

<article class="prose">
	<hgroup>
		<h1>{data.metadata.title}</h1>
		<p>{formatDate(new Date(data.metadata.date))}</p>
	</hgroup>
</article>
