<script lang="ts">
  import { session } from "$lib/stores/session"

  if (!$session.token) window.location.href = "/login"
</script>

{#if $session.token}
  <main>
    <header>
        <input type="text">
        <button>Search</button>
    </header>

    <section>
        <article class="tarea"></article>
      
    </section>

    <footer>
     
    </footer>
  </main>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-image: url("/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border-radius: 20px;
    border: 1.5px solid #fff;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 9vh;
   
  }
  
</style>
