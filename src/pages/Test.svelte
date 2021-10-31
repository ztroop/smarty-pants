<script>
import { writable } from 'svelte/store';
import { onMount, onDestroy } from 'svelte';

import LetterMatch from '../components/letterMatching/LetterMatching.svelte';
import { finalScore, challengeTime, overTime, challengesAnswered } from '../stores';

let minutes = 0;

onMount(async () => {
  finalScore.set(0);
  challengeTime.set(0);
  overTime.set(0);
});


let timeTicker = writable(0, () => {
  let interval = setInterval(() => {
    timeTicker.update((v) => v + 1);
    challengeTime.update((v) => v + 1);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

const unsubTimeTicker = timeTicker.subscribe((v) => {
  if (v > 59) {
    timeTicker.set(0);
    minutes++;
  }
})
onDestroy(unsubTimeTicker)

const unsubChallengeTime = challengeTime.subscribe((v) => {
  if (v > 4) {
    overTime.update((v) => v + 1);
    challengeTime.set(0);
  }
})
onDestroy(unsubChallengeTime)

const availableModes = [LetterMatch];
const randomChoice = a => a[Math.floor(Math.random() * a.length)];
let gameMode = randomChoice(availableModes);
let activeMode = true;

const unsubChallengesAnswered = challengesAnswered.subscribe(_ => {
  activeMode = false;
  setTimeout(() => activeMode = true, 0);
  gameMode = randomChoice(availableModes);
})
onDestroy(unsubChallengesAnswered)
</script>

<div class="grid place-items-center">
  <div class="text-6xl font-normal leading-normal mt-0 mb-2 dark:text-blue-400 text-red-500">
    Time: {minutes}m {$timeTicker}s Score: {$finalScore}
  </div>
  <div id="progress-bar" class="progress"></div>
  {#if activeMode}
  <svelte:component this="{gameMode}" />
  {/if}
</div>
