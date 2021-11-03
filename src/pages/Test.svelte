<script>
import LetterMatch from '../components/letterMatching/LetterMatching.svelte';
import {
  finalScore,
  challengeTime,
  overTime,
  challengesAnswered,
  currentTime,
} from '../stores';
import Scoreboard from '../components/Scoreboard.svelte';

const availableModes = [LetterMatch];
const randomChoice = (a) => a[Math.floor(Math.random() * a.length)];

let gameMode = randomChoice(availableModes);
$: if ($challengesAnswered) {
  gameMode = randomChoice(availableModes);
  challengeTime.set(0);
}
$: if ($currentTime) {
  if ($challengeTime >= 4) {
    overTime.update((v) => v + 1);
    challengeTime.set(0);
  } else {
    challengeTime.update((v) => v + 1);
  }
}

finalScore.set(0);
challengeTime.set(0);
overTime.set(0);
</script>

<div class="grid place-items-center">
  <div
    class="text-6xl font-normal leading-normal mt-0 mb-2 dark:text-blue-400 text-red-500">
    <Scoreboard />
  </div>
  <div id="progress-bar" class="progress"></div>
  {#key $challengesAnswered}
    <svelte:component this="{gameMode}" />
  {/key}
</div>
