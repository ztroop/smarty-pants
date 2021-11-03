<script>
import { currentTime, finalScore } from '../stores';

const start = Date.now();
$: diff = $currentTime - start;
$: seconds = (diff / 1000) % 60;
$: minutes = diff / 1000 / 60;

function format(number) {
  if (number < 0) {
    return '00';
  } else {
    return Math.floor(number).toString().padStart(2, '0');
  }
}
</script>

Time: {format(minutes)}:{format(seconds)} Score: {$finalScore}
