<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import page from 'page';

import Home from './pages/Home.svelte';
import Test from './pages/Test.svelte';
import Result from './pages/Result.svelte';

import ButtonBar from './components/NavBar.svelte';

import { currentPage } from './stores';

let current;

currentPage.set(Home);
currentPage.subscribe((v) => {
  current = v;
});

page('/', () => currentPage.set(Home));
page('/test', () => currentPage.set(Test));
page('/result', () => currentPage.set(Result));

page.start();
</script>

<main>
  <body class="dark:bg-gray-800 dark:text-gray-200">
    <ButtonBar />
    <svelte:component this="{current}" />
  </body>
</main>
