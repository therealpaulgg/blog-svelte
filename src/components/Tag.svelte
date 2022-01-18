<script lang="ts">
    export let name: string;
</script>

<a href={`/tag/${name}`} class="px-1 rounded bg-slate-600 hover:bg-gray-700 no-underline">{name}</a>
