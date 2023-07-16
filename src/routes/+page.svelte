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
		<div class="m-5 flex justify-center">
			<Avatar />
		</div>
		<h1 class="font-serif text-center">About</h1>
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
		<ul>
			{#each data.posts as post}
				<li>
					<a href={`/writing/${post.slug}`}>{post.title}</a>
					<p>{formatDate(post.date)}</p>
					<p>{post.tags}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
