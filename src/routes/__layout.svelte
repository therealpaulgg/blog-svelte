<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');
</style>

<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-gray-800 text-white font-body">
	<nav class="bg-emerald-500 p-3 mb-3">
		<div class="mx-auto container flex gap-6 text-lg">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/settings">Settings</a>
		</div>
	</nav>

	<div class="mx-auto container"><slot /></div>
</div>
