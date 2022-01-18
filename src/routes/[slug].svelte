<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ params, fetch }) {
        const slug = params.slug;
        const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
        return {
            props: { post }
        };
    }
</script>

<script lang="ts">
    export let post;
    let createdAt = post.metadata.createdAt.toUpperCase();
    let updatedAt = post.metadata.updatedAt ? post.metadata.updatedAt.toUpperCase() : null;
    import { faSyncAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import Post from "../components/Post.svelte";
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
</svelte:head>

<a href="/" class="no-underline"><Icon data={faArrowLeft} /> Back</a>
<Post {post} showUpdatedTime />
<div class="my-2">
    {@html post.content}
</div>
