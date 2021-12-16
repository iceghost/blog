<script>
	export let title;
	export let date;
</script>

<header class="w-full pt-4 pb-4 flex justify-around">
	<span> duy khang's blog </span>
	<nav class="flex gap-12">
		<span>
			<a href="/blog"> blog </a>
		</span>
	</nav>
</header>

<div class="bg-teal-900 px-12 py-12 text-white mb-4">
	<h1 class="text-4xl font-bold uppercase tracking-wider mb-2">{title}</h1>
	<p>{date}</p>
</div>

<div class="prose prose-lg prose-teal mx-auto">
	<slot />
</div>
