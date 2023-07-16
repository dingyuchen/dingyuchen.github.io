<script lang="ts">
	import { formatDate } from '$lib/util';

	export let data;
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<article class="prose">
	<h1 class="font-serif">Writing</h1>
	<p>Blogs, notes, tutorials, references, etc.</p>
</article>

<ul>
	{#each data.posts as post}
		<li>
			<a href={`/writing/${post.slug}`}>{post.title}</a>
			<p>{formatDate(post.date)}</p>
			<p>{post.tags}</p>
		</li>
	{/each}
</ul>
