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
    import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
    import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import Tag from "../components/Tag.svelte";
    export let post;
    export let hover: boolean = false;
    export let showUpdatedTime = false;
</script>

<div class={`bg-slate-700 shadow-lg gap-2 p-2 rounded m-4 ${hover ? "hover:bg-slate-500" : ""}`}>
    <div class="flex gap-6 items-center">
        <a target="_blank" href="https://github.com/therealpaulgg">therealpaulgg</a>
        <div class="flex items-center gap-2">
            <Icon data={faCalendarAlt} />{post.metadata.createdAt}
        </div>
        {#if showUpdatedTime && post.metadata.updatedAt != null}
            <div class="flex items-center gap-2">
                <Icon data={faSyncAlt} />{post.metadata.updatedAt}
            </div>
        {/if}
    </div>
    <div>{post.readingTime}</div>
    {#if post.metadata.tags}
        <div class="flex gap-4 mt-1">
            {#each post.metadata.tags as name}
                <Tag {name} />
            {/each}
        </div>
    {/if}
    <h2 class="mt-0">{post.metadata.title}</h2>
    <div>{post.metadata.excerpt}</div>
</div>
