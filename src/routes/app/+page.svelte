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
        <input class="buscardor--search">
        <button>Search</button>
    </header>

    <section>
        <article class="tarea">
          <div class="component--activity">
            <div class="status"></div>
            <h2 class="evento--tarea">texto</h2>
            <p class="days">1 days left</p>  
          </div>
        </article>
      
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
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 9vh;
    border-radius: 20px;
    margin: 20px;
  }
  .buscardor--search {
    width: 50%;
    height: 10vh;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
  }
  
  button {
    width: 10%;
    height: 7vh;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 10px;
  }
  /* estilos section */
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
       margin: 1rem;
   
     }
     .status {
       width: 10px;
       height: 10px;
       border-radius: 50%;
       background-color: #fc0a0a;
       margin: 10px;
     } 
     .component--activity{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 10vh;
      border-radius: 20px;
      background: #fff;
      margin: 10px;
     }
     .component--activity > p {
       position: relative;
        top: 9px;
        font-size: 12px;
        font-weight: 600;
        color: #000;
        margin: 100px;
     }

</style>
