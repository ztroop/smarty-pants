<script>
import { onMount } from 'svelte';

import { finalScore, challengesAnswered } from '../../stores';
import challenge from './index';

let first_seq = [],
  second_seq = [],
  correctMatches = 0;

const { generate } = challenge();

onMount(async () => {
  ({ first_seq, second_seq, correctMatches } = generate());
});

const answerChallenge = (answer) => {
  if (answer == correctMatches) {
    finalScore.update((v) => v + 1);
  }
  challengesAnswered.update((v) => v + 1);
};
</script>

<div class="content-center">
  <div
    class="border-8 dark:border-gray-50 border-gray-900 text-9xl font-normal text-center p-6">
    <div class="m-2">
      {#each first_seq as i}{i}{/each}
    </div>
    <div class="m-2">
      {#each second_seq as i}{i}{/each}
    </div>
  </div>
</div>
<div class="text-5xl font-normal p-6">
  {#each { length: 5 } as _, i}
    <button
      on:click="{() => answerChallenge(i)}"
      class="dark:bg-blue-500 bg-red-500 text-white font-bold py-2 px-10 rounded m-4"
      >{i}</button>
  {/each}
</div>
