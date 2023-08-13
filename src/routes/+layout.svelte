<script lang="ts">
	import '../app.css';
</script>

<div class="py-8">
	<header class="mx-auto mb-20 max-w-prose">
		<h1 class="mb-2 text-6xl font-semibold text-purple-800">
			<a href="/">Scratch for Kids</a>
		</h1>
		<p>
			A <a
				href="https://frontendmasters.com"
				target="_blank"
				class="font-semibold underline decoration-purple-600 decoration-2">Frontend Masters</a
			> workkshop.
		</p>
	</header>
	<main class="mx-auto prose prose-pre:bg-slate-100">
		<slot />
	</main>
</div>
