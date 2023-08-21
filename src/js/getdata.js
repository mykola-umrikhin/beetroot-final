// //START FETCH players
const tab = document.querySelector('.js-statistic');
const statTh = document.querySelectorAll('th');
let playersArr = [];

const getData = async (url) => {
  try {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages${url}`
    );
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    tab.innerHTML =
      '<tr><td colspan="13" style="text-align: center; font-weight: 600">Error fetch data...</td></tr>';
  }
};

const sortData = async () => {
  const data = await getData(playersId);

  for (let i = 0; i < players.length; i++) {
    playersArr.push(Object.assign(players[i], data[i]));
  }

  document.addEventListener('click', (e) => {
    handleSort(playersArr, e.target);
  });

  const res = playersArr.map((item) => renderFetch(item));
  tab.innerHTML = res.join('');
  renderStatPlayer(playersArr, 'pts', 'player-stat-point', 'Points');
  renderStatPlayer(playersArr, 'reb', 'player-stat-reb', 'Rebounds');
  renderStatPlayer(playersArr, 'ast', 'player-stat-asst', 'Assists');
  renderStatPlayer(playersArr, 'stl', 'player-stat-stl', 'Steals');
};
sortData();

let flag = [];
for (let i = 0; i <= 11; i++) {
  flag.push(true);
}

const handleSort = (data, target) => {
  if (!target.classList.contains('js-click')) {
    return;
  }
  sortIds.forEach((item, idx) => {
    if (target.id === item && target.dataset.string) {
      flag[idx]
        ? (sortByStr(data, fetchIds[idx], true),
          target.classList.add('sort-down'))
        : (sortByStr(data, fetchIds[idx], false),
          target.classList.add('sort-up'));
      flag[idx] = !flag[idx];
    }

    if (target.id === item && !target.dataset.string) {
      flag[idx]
        ? (sortByNumb(data, fetchIds[idx], true),
          target.classList.add('sort-down'))
        : (sortByNumb(data, fetchIds[idx], false),
          target.classList.add('sort-up'));
      flag[idx] = !flag[idx];
    }
  });
};

const renderFetch = (item) => {
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
};

const removeClas = (clas1, clas2) => {
  statTh.forEach((item) => {
    item.classList.remove(clas1) || item.classList.remove(clas2);
  });
};

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
      return `<div class="player-stat__player">
        ${
          idx === 0
            ? `<h3 class="player-stat__title">${typeStat} Per Game</h3>`
            : '<h3 class="player-stat__title"></h3>'
        }
        
        <p class="player-stat__stat">${item[numb].toFixed(
          1
        )} <span>${numb}</span></p>
        <p class="player-stat__name">${item.fullName}</p>

        <div class="player-stat__img ${
          idx === 0 ? 'player-stat__img_first' : ''
        }">
          
        <img src="i/players/${item.pseudo}.webp" onerror="this.src='i/players/${
        item.pseudo
      }.avif';" alt="${item.fullName}" />
        </div>
      </div>`;
    }
  });
  document.getElementById(idDiv).innerHTML = res.join('');
};
// ?END FETCH players
