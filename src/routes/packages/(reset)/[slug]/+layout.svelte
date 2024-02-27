<script lang="ts">
    import "/src/styles/global.css"

    import HeaderBar from "$lib/components/HeaderBar.svelte";
</script>


<header>
    <HeaderBar/>
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
        height: 100px;

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
