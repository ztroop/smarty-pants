<script>
import { currentTime } from '../stores';

const start = Date.now();
$: diff = $currentTime - start;
$: seconds = (diff / 1000) % 60;
$: minutes = diff / 1000 / 60;

function format(number) {
  return Math.floor(number).toString().padStart(2, '0');
}
</script>

Time: {format(minutes)}:{format(seconds)}