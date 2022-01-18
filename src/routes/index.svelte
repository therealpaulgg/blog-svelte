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
    import Post from "../components/Post.svelte";
</script>

<svelte:head>
    <title>Paul's Blog</title>
</svelte:head>

{#each posts as post}
    <a href={`${base}/${post.slug}`} class="hover:text-white no-underline">
        <Post {post} hover />
    </a>
{/each}
