<script lang="ts">
	import { formatDate } from '$lib/util';

	export let data;
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<article class="prose dark:prose-invert">
	<h2 class="font-serif">Writing</h2>
	<p>Blogs, notes, tutorials, references, etc.</p>
</article>

<ul class="w-96 min-w-full dark:text-slate-200">
	{#each data.posts as post}
		<li>
			<a href={`/writing/${post.slug}`}>{post.title}</a>
			<p>{formatDate(post.date)}</p>
			<p>{post.tags}</p>
		</li>
	{/each}
</ul>
<!-- footer -->
<section class="flex flex-row-reverse justify-start w-full p-3 dark:text-slate-200">
	<a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
</section>
