<script>
  import page from 'page';

  import Test from '../pages/Test.svelte'

  import { currentPage } from '../stores.js';

  let theme = 'light';

  const toggleDarkMode = () => {
    if (theme === 'light') {
      document.documentElement.classList.add("dark")
      theme = 'dark'
    } else {
      document.documentElement.classList.remove("dark");
      theme = 'light'
    }
  }
</script>

<div class="inline-flex">
  <button class="dark:bg-blue-500 bg-red-500 text-white font-bold py-2 px-4" on:click={() => page('/')}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  </button>
  <button class="dark:bg-blue-500 bg-red-500 text-white font-bold py-2 px-4" on:click={toggleDarkMode}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
  </button>
  {#if $currentPage === Test}
  <button class="dark:bg-blue-500 bg-red-500 text-white font-bold py-2 px-4" on:click={() => page('/result')}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" />
    </svg>
  </button>
  {:else}
  <button class="dark:bg-blue-500 bg-red-500 text-white font-bold py-2 px-4" on:click={() => page('/test')}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
    </svg>
  </button>
  {/if}
</div>