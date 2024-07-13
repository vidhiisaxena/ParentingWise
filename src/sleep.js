

document.getElementById('sleep-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const sleepTime = document.getElementById('sleep-time').value;
  const wakeTime = document.getElementById('wake-time').value;

  const entry = document.createElement('li');
  entry.textContent = `Date: ${date}, Sleep Time: ${sleepTime}, Wake Time: ${wakeTime}`;

  document.getElementById('entries-list').appendChild(entry);

  document.getElementById('sleep-form').reset();
});