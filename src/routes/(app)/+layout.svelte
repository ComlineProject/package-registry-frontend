<script lang="ts">
	import HeaderBar from "$lib/components/HeaderBar.svelte";
    import "/src/styles/global.css"

    export let data;
    
    let searchInput: HTMLInputElement;
    function onKeyPress(event: KeyboardEvent) {
        if (event.key == "s") {
            searchInput.focus()
        }
    }
</script>


<svelte:head>
    <title>Comline Packages</title> 
</svelte:head>

<header>
    <HeaderBar user={data.user}/>
    <div class="titleContainer">
        <a class="titleLink" href="/">
            <h1 class="title">Comline Package Registry</h1>
        </a>
        <!--<input bind:this={searchInput} placeholder="Search for a package (press [S] key to focus)"/>-->
    </div>
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
        flex-direction: column;
        margin-top: 1pt;
        margin-bottom: 1pt;
        justify-content: center;
        height: 300px;

        background-color: #FF6847EB;
        
        border-style: ridge;
        border-color: #614A39;
    }
    body {
        display: flex;
        flex-direction: column;
        height: calc(300vh - 300px);
        background-color: #181111;
    }

    .titleContainer {
        display: flex;
        justify-content: center;
    }
    .titleLink {
        text-decoration: none;
    }
    .title {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: xxx-large;
        font-weight: bolder;
    }
    .title:hover {
        color: #DBB594;
    }
</style>
