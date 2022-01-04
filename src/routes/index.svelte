<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ fetch }) {
        const posts = await fetch(`${base}/index.json`).then((r) => r.json());
        return {
            props: { posts }
        };
    }
</script>

<script lang="ts">
    export let posts;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div>My content</div>
{#each posts as post}
    <a href={`${base}/${post.slug}`}>
        <h2 class="title">{post.metadata.title}</h2>
        <p>{post.metadata.excerpt}</p>
    </a>
{/each}
