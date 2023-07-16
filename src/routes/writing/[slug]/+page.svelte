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

<article class="flex flex-col">
	<hgroup class="mb-5 prose lg:prose-lg dark:prose-invert">
		<h1 class="font-serif mb-1">{data.metadata.title}</h1>
		<span>Published: {formatDate(new Date(data.metadata.date))}</span>
		<span>Edited: {formatDate(new Date(data.metadata.edited))}</span>
		<div>
			{#each data.metadata.tags as tag}
				<span class="rounded-lg bg-slate-200 mx-1 px-1 dark:text-slate-900">&num;{tag}</span>
			{/each}
		</div>
	</hgroup>

	<div class="prose lg:prose-lg dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>
