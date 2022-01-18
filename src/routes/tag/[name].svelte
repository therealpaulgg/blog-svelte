<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ fetch, params }) {
        const name = params.name;
        const posts = await fetch(`${base}/tag/${name}.json`).then((r) => r.json());
        return {
            props: { posts, name }
        };
    }
</script>

<script lang="ts">
    export let posts;
    export let name;
    import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
    import { faSyncAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import { stringify } from "yaml";
    import Tag from "../../components/Tag.svelte";

    window.history.back;
</script>

<svelte:head>
    <title>Paul's Blog - {name} tag</title>
</svelte:head>

<a
    href={document.referrer}
    class="no-underline"
    on:click={() => {
        window.history.back();
        return false;
    }}><Icon data={faArrowLeft} /> Back</a
>

<h1 class="mt-2">Posts in {name}:</h1>

{#each posts as post}
    <a href={`${base}/${post.slug}`} class="hover:text-white no-underline">
        <div class="bg-slate-700 shadow-lg hover:bg-slate-500 gap-2 p-2 rounded m-4">
            <div class="flex gap-6 items-center">
                <a target="_blank" href="https://github.com/therealpaulgg">therealpaulgg</a>
                <div class="flex items-center gap-2">
                    <Icon data={faCalendarAlt} />{post.metadata.createdAt}
                </div>
            </div>
            <div>{post.readingTime}</div>
            {#if post.metadata.tags}
                <div class="flex gap-4 mt-1">
                    {#each post.metadata.tags as name}
                        <Tag {name} />
                        <!-- <a href={`/tag/${tag}`} class="px-1 rounded bg-slate-600 hover:bg-gray-700 no-underline">{tag}</a> -->
                    {/each}
                </div>
            {/if}
            <h2 class="mt-0">{post.metadata.title}</h2>
            <div>{post.metadata.excerpt}</div>
        </div>
    </a>
{/each}
