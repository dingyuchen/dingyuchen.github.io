<script lang="ts">
	import Avatar from '$lib/Avatar.svelte';
	import { author } from '$lib/config';
	import { formatDate } from '$lib/util';

	export let data;
</script>

<svelte:head>
	<title>{author}</title>
</svelte:head>

<section>
	<div class="flex flex-col justify-around items-top prose lg:prose-lg dark:prose-invert">
		<div class="m-3 flex justify-center">
			<Avatar />
		</div>
		<h1 class="font-serif">About</h1>
		<p>Hi, I'm YuChen.</p>
		<p>
			I am a software engineer currently working at Shopee. My interests lie in programming
			languages, distributed systems and algorithms. I also dabble with frontend technologies in my
			free time.
		</p>
		<p>
			This site serves as my portfolio, personal notes collection and blog. Built over the course of
			several lunch breaks.
		</p>
		<h2 class="font-serif">Recent Posts</h2>
	</div>
	<ul class="dark:text-slate-300 mt-5">
		{#each data.posts as post}
			<li>
				<div class="border rounded-md p-5 my-2 shadow-md prose lg:prose-lg">
					<a href={`/writing/${post.slug}`}
						><h3 class="text-xl m-2 mt-0 dark:text-slate-200">{post.title}</h3></a
					>
					{#each post.tags as tag}
						<span class="rounded-lg bg-slate-200 mx-1 px-1 dark:text-slate-900">&num;{tag}</span>
					{/each}
					<span>{formatDate(post.date)}</span>
				</div>
			</li>
		{/each}
	</ul>
</section>
