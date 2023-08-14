<script lang="ts">
	import '../app.css';
</script>

<div class="pt-8 bg-gradient-to-t from-blue-100 to-white">
	<div class="p-16 mx-auto rounded-2xl max-w-fit">
		<header class="mx-auto mb-20 max-w-prose drop-shadow-sm">
			<h1 class="mb-2 text-6xl font-bold text-purple-800">
				<a href="/">Scratch for Kids</a>
			</h1>
			<p>
				A <a
					href="https://frontendmasters.com"
					target="_blank"
					class="font-semibold underline decoration-purple-600 decoration-2">Frontend Masters</a
				> workshop.
			</p>
		</header>
		<main class="mx-auto prose prose-pre:bg-slate-100">
			<slot />
		</main>
	</div>
	<footer class="bg-repeat-x h-96 bg-rolling-grass" />
</div>
