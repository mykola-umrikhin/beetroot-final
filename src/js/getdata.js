// import { players, playersId } from "./data";
console.log(playersId, players);
// //START FETCH players
const tab = document.querySelector('.js-statistic');
//
let playersArr = [];
const statTh = document.querySelectorAll('th');
const removeClas = (clas1, clas2) => {
  statTh.forEach((item) => {
    item.classList.remove(clas1) || item.classList.remove(clas2);
  });
};

const getData = async (url) => {
  try {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages${url}`
    );
    const { data } = await response.json();

    for (let i = 0; i < players.length; i++) {
      playersArr.push(Object.assign(players[i], data[i]));
    }
    document.addEventListener('click', handleSort);
    let flag = [];

    for (let i = 0; i <= 11; i++) {
      flag.push(true);
    }

    function handleSort({ target }) {
      if (!target.className === 'js-click') {
        console.log('click', target.className);
        return;
      }

      sortIds.forEach((item, idx) => {
        if (target.id === item && target.dataset.string) {
          flag[idx]
            ? (sortByStr(playersArr, fetchIds[idx], true),
              target.classList.add('sort-down'))
            : (sortByStr(playersArr, fetchIds[idx], false),
              target.classList.add('sort-up'));
          flag[idx] = !flag[idx];
        }

        if (target.id === item && !target.dataset.string) {
          flag[idx]
            ? (sortByNumb(playersArr, fetchIds[idx], true),
              target.classList.add('sort-down'))
            : (sortByNumb(playersArr, fetchIds[idx], false),
              target.classList.add('sort-up'));
          flag[idx] = !flag[idx];
        }
      });
    }
    arr1 = playersArr.map((item) => renderFetch(item));
    tab.innerHTML = arr1.join('');
    renderStatPlayer(playersArr, 'pts', 'player-stat-point', 'Points');
    renderStatPlayer(playersArr, 'reb', 'player-stat-reb', 'Rebounds');
    renderStatPlayer(playersArr, 'ast', 'player-stat-asst', 'Assists');
    renderStatPlayer(playersArr, 'stl', 'player-stat-stl', 'Steals');
  } catch (err) {
    console.log(err);
    tab.innerHTML =
      '<tr><td colspan="13" style="text-align: center; font-weight: 600">Error fetch data...</td></tr>';
  }
};
getData(playersId);

function renderFetch(item) {
  return `<tr><td>${item.fullName}</td>
     <td>${item.games_played}</td>
     <td>${item.min}</td>
     <td>${item.pts.toFixed(1)}</td>
     <td>${(item.fg_pct * 100).toFixed(1)}</td>
     <td>${(item.fg3_pct * 100).toFixed(1)}</td>
     <td>${(item.ft_pct * 100).toFixed(1)}</td>
     <td>${item.reb.toFixed(1)}</td>
     <td>${item.ast.toFixed(1)}</td>
     <td>${item.turnover.toFixed(1)}</td>
     <td>${item.stl.toFixed(1)}</td>
     <td>${item.blk.toFixed(1)}</td>
     </tr>`;
}

const sortByStr = (arr, str, rev = false) => {
  rev
    ? arr.sort((a, b) =>
        a[str].toLowerCase().localeCompare(b[str].toLowerCase())
      )
    : arr.sort((a, b) =>
        b[str].toLowerCase().localeCompare(a[str].toLowerCase())
      );
  const arr1 = arr.map((item) => renderFetch(item));
  tab.innerHTML = arr1.join('');
  removeClas('sort-up', 'sort-down');
};
const sortByNumb = (arr, numb, rev = false) => {
  rev
    ? arr.sort((a, b) => a[numb] - b[numb])
    : arr.sort((a, b) => b[numb] - a[numb]);
  const arr1 = arr.map((item) => renderFetch(item));
  tab.innerHTML = arr1.join('');
  removeClas('sort-up', 'sort-down');
};

const renderStatPlayer = (arr, numb, idDiv, typeStat) => {
  arr.sort((a, b) => b[numb] - a[numb]);
  const res = arr.map((item, idx) => {
    while (idx <= 2) {
      if (idx === 0) {
        return `<div class="player-stat__player">
        <h3 class="player-stat__title">${typeStat} Per Game</h3>
        <p class="player-stat__stat">${item[numb].toFixed(1)} <span>${numb}</span></p>
        <p class="player-stat__name">${item.fullName}</p>

        <div class="player-stat__img player-stat__img_first">
          <img src="i/players/${item.pseudo}.webp" onerror="this.src='i/players/${item.pseudo}.avif';" alt="${item.fullName}" />
        </div>
      </div>`;
      } else {
        return `<div class="player-stat__player">
        <h3 class="player-stat__title"></h3>
        <p class="player-stat__stat">${item[numb].toFixed(1)} <span>${numb}</span></p>
        <p class="player-stat__name">${item.fullName}</p>

        <div class="player-stat__img">
        <img src="i/players/${item.pseudo}.webp" onerror="this.src='i/players/${item.pseudo}.avif';" alt="${item.fullName}" />
        </div>
      </div>`;
      }
    }
  });
  document.getElementById(idDiv).innerHTML = res.join('');
};

////START SORT Table

// ?END SORT Table
// ?END FETCH players
