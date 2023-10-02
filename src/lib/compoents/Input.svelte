<script lang='ts'>
    export let type = 'text'
    export let name: string
    export let label: string
    export let required = false
</script>

<section>
  <label for={name}>{label}</label>
  <input {type} {name} id={name} {required} placeholder="."/>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    width: 100%;
  }

  label {
    position: relative;
    top: 0;
    left: 1rem;
    z-index: 1;
    color: #DEF5F9;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s ease-out;
  }

  section:has(input:placeholder-shown) > label {
    top: 2.3rem;
  }

  input {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    padding: 1rem;
    color: #DEF5F9;
    font-size: 1rem;
  }

  input::placeholder {
    color: #00000000;
  }
</style>
