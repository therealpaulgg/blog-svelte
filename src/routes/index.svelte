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
    import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
    import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

{#each posts as post}
    <a href={`${base}/${post.slug}`} class="hover:text-white">
        <div class="bg-slate-700 shadow-lg hover:bg-slate-500 gap-2 p-2 rounded m-4">
            <div class="flex gap-6 items-center">
                <a target="_blank" href="https://github.com/therealpaulgg">therealpaulgg</a>
                <div class="flex items-center gap-2">
                    <Icon data={faCalendarAlt} />{post.metadata.createdAt}
                </div>
                {#if post.metadata.updatedAt != null}
                    <div class="flex items-center gap-2">
                        <Icon data={faSyncAlt} />{post.metadata.updatedAt}
                    </div>
                {/if}
            </div>
            <div class="text-3xl">{post.metadata.title}</div>
            <div>{post.metadata.excerpt}</div>
        </div>
    </a>
{/each}
