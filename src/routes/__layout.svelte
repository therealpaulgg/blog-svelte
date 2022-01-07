<script lang="ts">
import dayjs from "dayjs";

    import "../app.css";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/base16/rebecca.min.css"
    />
</svelte:head>

<div class="relative min-h-screen bg-gray-800 text-white font-body pb-16">
    <nav class="bg-emerald-500 p-3 mb-3">
        <div class="mx-auto container flex gap-6 text-lg">
            <a href="/">Home</a>
        </div>
    </nav>

    <div class="mx-auto container pb-16"><slot /></div>
    <footer class="bottom-0 left-0 right-0 p-3 absolute w-full bg-gray-500">
        <div class="mx-auto container text-center">
            Copyright © {dayjs().year()} <a class="hover:text-emerald-300" href="https://paulgellai.dev"
                >Paul Gellai.</a
            > All rights reserved.
        </div>
    </footer>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap");
</style>
