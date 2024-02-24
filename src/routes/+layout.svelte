<script lang="ts">
    import "../styles/global.css"

    let searchInput: HTMLInputElement;

    function onKeyPress(event: KeyboardEvent) {
        if (event.key == "s") {
            searchInput.focus()
        }
    }
</script>


<header>
    <a class="titleLink" href="/">
        <h1 class="title">Comline Package Registry</h1>
    </a>
    <div>
        <a class="" href="/auth">Log In</a>
    </div>
    <!--<input bind:this={searchInput} placeholder="Search for a package (press [S] key to focus)"/>-->
</header>

<body>
    <slot/>
</body>

<footer>

</footer>

<svelte:window on:keydown={(e) => onKeyPress}/>


<style>
    header {
        display: flex;
        margin-top: 1pt;
        margin-bottom: 1pt;
        justify-content: center;
        height: 300px;

        background-color: #FF6847EB;
        
        border-style: ridge;
        border-color: #614A39;
    }

    .titleLink {
        text-decoration: none;
    }
    .title {
        position: relative;
        display: flex;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
    }
    .title:hover {
        color: #DBB594;
    }

    body {
        display: flex;
        flex-direction: column;
        height: calc(300vh - 300px);
        background-color: #181111;
    }
</style>
