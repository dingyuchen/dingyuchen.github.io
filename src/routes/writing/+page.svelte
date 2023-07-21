<script lang="ts">
	import { formatDate } from '$lib/util';

	export let data;
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<article class="w-full">
	<section class="prose dark:prose-invert">
		<h1 class="font-serif">Writing</h1>
		<p>Blogs, notes, tutorials, references, etc.</p>
	</section>
	<ul class="w-full max-w-prose dark:text-slate-200">
		{#each data.posts as post}
			<li>
				<a href={`/writing/${post.slug}`}>
					<div class="border rounded-md p-5 my-2 shadow-md">
						<h3 class="text-xl font-bold mb-2 dark:text-slate-200">
							{post.title}
						</h3>
						{#each post.tags as tag}
							<span class="rounded-lg bg-slate-200 mx-1 px-1 dark:text-slate-900">&num;{tag}</span>
						{/each}
						<span class="dark:text-slate-200">{formatDate(post.date)}</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</article>
<!-- footer -->
<section class="flex flex-row-reverse justify-start w-full p-3 dark:text-slate-200">
	<a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
</section>
