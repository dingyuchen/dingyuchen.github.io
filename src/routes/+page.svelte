<script lang="ts">
	import { author } from '$lib/config.js';
	import { formatDate } from '$lib/util.js';

	export let data;
</script>

<svelte:head>
	<title>{author}</title>
</svelte:head>

<section class="prose lg:prose-xl md:prose-base dark:prose-invert">
	<h2 class="font-serif">{author}</h2>
	<p>
		I am a software engineer currently working at Shopee. My interests lie in programming languages,
		distributed systems. I dabble with frontend technologies in my free time.
	</p>
	<p>
		This site serves as my portfolio, personal notes collection and blog. Built over the course of
		several lunch breaks.
	</p>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/writing/${post.slug}`}>{post.title}</a>
				<p>{formatDate(post.date)}</p>
				<p>{post.tags}</p>
			</li>
		{/each}
	</ul>
</section>
