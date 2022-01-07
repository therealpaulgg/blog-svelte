<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ page, fetch }) {
        const slug = page.params.slug;
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
    import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
    import { faSyncAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
</svelte:head>

<a class="hover:text-emerald-300" href="/"><Icon data={faArrowLeft} /> Back</a>

<div class="bg-gray-600 mt-2 p-2 rounded">
    <h1 class="mt-0">{post.metadata.title}</h1>
    <div class="flex gap-6 items-center mt-2">
        <a class="hover:text-emerald-300" target="_blank" href="https://github.com/therealpaulgg"
            >therealpaulgg</a
        >
        <div class="flex items-center gap-2">
            <Icon data={faCalendarAlt} />{post.metadata.createdAt}
        </div>
        {#if post.metadata.updatedAt != null}
            <div class="flex items-center gap-2">
                <Icon data={faSyncAlt} />{post.metadata.updatedAt}
            </div>
        {/if}
    </div>
</div>
<div class="my-2">
    {@html post.content}
</div>
