<script lang="ts">
	import '../app.css';
</script>

<div class="w-full pt-8 bg-gradient-to-t to-blue-100 from-blue-300">
	<div class="w-full max-w-6xl p-16 mx-auto bg-white rounded-2xl">
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
