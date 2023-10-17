<script lang="ts">
  let session: {
    user: null | {
        avatar: string | null
        created_at: string | null
        displayname: string | null
        email: string
        id: string
        username: string
      },
    token: null | string,
    expires: null | number,
} = {
  expires: null,
  token: null,
  user: null
}

try {
  session = JSON.parse(localStorage.getItem('session')!)
} catch (error) {
  window.location.href = '/login'
}
// session.subscribe(s => {
//   console.log('s', s);
//   if (!s.token) console.log('no hay');
//   else ses = s
// })
</script>

{#if session.token}
  <main>
    <header>
        <input>
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
