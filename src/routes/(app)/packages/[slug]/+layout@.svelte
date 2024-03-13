<script lang="ts">
    // Ordered Imports
    import "/src/styles/global.css"

    // Local Imports
    import HeaderBar from "$lib/components/HeaderBar.svelte"


    export let data;
</script>


<header>
    <HeaderBar user={data.user}/>
</header>

<body>
    <slot/>
</body>

<footer>
</footer>


<style>
    header {
        display: flex;
        margin-top: 1pt;
        margin-bottom: 1pt;
        justify-content: center;
        height: 130px;

        background-color: #FF6847EB;
        
        border-style: ridge;
        border-color: #614A39;
    }

    body {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 100px);
        background-color: #181111;
    }
</style>
