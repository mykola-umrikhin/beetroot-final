const gameDate1 = '2023-08-28T18:30-07:00';
const gameDate2 = '2023-08-30T20:00-07:00';
const gameDate3 = '2023-09-02T19:00-06:00';

const norm = (v) => (v < 10 ? '0' + v : v);

function countDown(gameDate, gameId) {
  return function countCloser() {
    const dif = Date.parse(gameDate) - Date.parse(new Date());
    const game = document.getElementById(gameId);

    let res = '';
    if (dif < 0) {
      res += `<div class='shedule__count-end-game'>the game was ending</div>`;
      game.innerHTML = res;
      return;
    }
    console.log(dif);
    let days = Math.floor(dif / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dif / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((dif / (1000 * 60)) % 60);
    let seconds = Math.floor((dif / 1000) % 60);

    res += `
  <div class='shedule__count-time'>
  <p class='shedule__count-num'>${days}</p>
  <p class='shedule__count-text'>days</p>
  </div>
  <div class='shedule__count-time'>
  <p class='shedule__count-num'>${norm(hours)}</p>
  <p class='shedule__count-text'>hours</p>
  </div>
  <div class='shedule__count-time'>
  <p class='shedule__count-num'> ${norm(minutes)} </p>
  <p class='shedule__count-text'>min</p>
  </div>
  <div class='shedule__count-time'>
  <p class='shedule__count-num'>${norm(seconds)}</p>
  <p class='shedule__count-text'>sec</p>
  </div>
  `;
    game.innerHTML = res;
    setTimeout(countCloser, 1000);
  };
}

const count1 = countDown(gameDate1, 'game-1');
const count2 = countDown(gameDate2, 'game-2');
const count3 = countDown(gameDate3, 'game-3');

count1();
count2();
count3();
