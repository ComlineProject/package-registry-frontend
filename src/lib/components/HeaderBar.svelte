<script lang="ts">
    // Local Imports
    import type { User } from "$lib/user/user";

    
    export let user: User;
</script>


<div class="main">
    <div class="topBar">
        <div class="logo">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
                draggable="false" class="unselectable"
                src="/images/comline/logos_2/white.png" width="128" height="128"
            />
            <h2>Comline Packages</h2>
        </div>

        <div class="auth">
            {#if user}
                <a class="authButton" href="/profile">My Profile</a>
            {:else}
                <a class="authButton" href="/auth">Log In</a>
            {/if}
            
            <a class="authButton" href="/packages">All Packages</a>
        </div>
    </div>
</div>


<style>
    .main {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .topBar {
        display: flex;
        flex-direction: row;
    }

    .logo {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .logo > h2 {
        padding-top: 30px;
    }

    .auth {
        display: flex;
        flex-direction: column;

        width: 20%;
    }
    /*
    .authButton {
        background-color: #E54D2E;
        text-align: center;

        border-style: solid;
        border-radius: 12%;

        border-color: #AC4D39;
    }
    .authButton > a {
        text-decoration: none;
        color: #FFD6CEFB;
    }
    */
    
    .authButton {
        background-color: #E54D2E;
        text-decoration: none;
        text-align: center;

        border-style: solid;
        border-radius: 12%;

        margin: 5px;

        color: #FFD6CEFB;
        border-color: #AC4D39;
    }

    .unselectable {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>
