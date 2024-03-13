<script lang="ts">
    import type {PackageMeta} from "$lib/package"
    
    export let meta: PackageMeta;
</script>


<div class="packageContainer unselectable">
    <div class="package">
        <a href="/packages/{meta.id}">
            <p class="identifier">{meta.namespace}</p>
            <br/>
            <p class="version">{meta.current_version}</p>
        </a>
    </div>
</div>


<style>
    .packageContainer {
        display: grid;
        column-gap: 50px;
        grid-template-columns: auto auto auto;
        padding: 10px;
    }
    .package {
        background-color: #1F1513;

        border-style: solid;
        border-color: #AC4D39;
    }
    .package:hover {
        background-color: #391714;
        cursor: pointer;
    }
    .package:active {
        background-color: #5E1C16;
    }
    
    .unselectable {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .identifier {
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
    }
    .version {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
</style>
