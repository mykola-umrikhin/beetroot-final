// import { players, playersId } from "./data";

// //START FETCH players
const tab = document.querySelector('.js-statistic');
const players = [
  {
    fullName: 'Stephen Curry',
    number: '30',
    position: 'guard',
    pseudo: 'curry',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Donte DiVincenzo',
    number: '0',
    position: 'guard',
    pseudo: 'divizenco',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Draymond Green',
    number: '23',
    position: 'forward',
    pseudo: 'green',
    img: `../i/players/${this.pseudo}.webp`,
  },
  {
    fullName: 'JaMychal Green',
    number: '1',
    position: 'forward-center',
    pseudo: 'green-gm',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Andre Iguodala',
    number: '9',
    position: 'guard-forward',
    pseudo: 'iguodala',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Kevon Looney',
    number: '5',
    position: 'forward',
    pseudo: 'looney',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Klay Thompson',
    number: '11',
    position: 'guard',
    pseudo: 'thompson',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Andrew Wiggins',
    number: '22',
    position: 'forward',
    pseudo: 'wiggin',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Gary Payton II',
    number: '8',
    position: 'guard',
    pseudo: 'payton',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'James Wiseman',
    number: '33',
    position: 'center',
    pseudo: 'wiseman',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Jordan Poole',
    number: '3',
    position: 'guard',
    pseudo: 'poole',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Ty Jerome',
    number: '10',
    position: 'guard-forward',
    pseudo: 'jerome',
    img: `../i/players/${this.pseudo}`,
  },

  {
    fullName: 'Anthony Lamb',
    number: '40',
    position: 'forward',
    pseudo: 'lamb',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Jonathan Kuminga',
    number: '00',
    position: 'forward',
    pseudo: 'kuminga',
    img: `../i/players/${this.pseudo}`,
  },
  {
    fullName: 'Moses Moody',
    number: '4',
    position: 'guard',
    pseudo: 'moody',
    img: `../i/players/${this.pseudo}`,
  },
];
let playersArr = [];
const statTh = document.querySelectorAll('th');
const removeClas = (clas1, clas2) => {
  statTh.forEach((item) => {
    item.classList.remove(clas1) || item.classList.remove(clas2);
  });
};
const playersId =
  '?player_ids[]=224&player_ids[]=475&player_ids[]=7155648&player_ids[]=131&player_ids[]=185&player_ids[]=2189&player_ids[]=187&player_ids[]=3547240&player_ids[]=17553979&player_ids[]=666848&player_ids[]=282&player_ids[]=443&player_ids[]=17553992&player_ids[]=115&player_ids[]=666676';
fetch(`https://www.balldontlie.io/api/v1/season_averages${playersId}`)
  .then((data) => {
    if (data.ok) {
      return data.json();
    }
  })
  .then((data) => {
    const dat = [...data.data];

    for (let i = 0; i < players.length; i++) {
      playersArr.push(Object.assign(players[i], dat[i]));
    }
    console.log(playersArr);
    // r.sort((a, b) => a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase()))
    // r.sort((a, b) => b.pts - a.pts)

    // const res = playersArr.map((item) => renderFetch(item));
    // console.log(res)
    // tab.innerHTML = res.join('');
  })
  .catch((error) => {
    console.log(error);
  });

// axios
//   .get(`https://www.balldontlie.io/api/v1/season_averages${playersId}`)
//   .then((response) => {console.log(response.data);
//     playersArr = response.data});

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

setTimeout(() => {
  document.addEventListener('click', handleSort);
  let flag = [];
  for (let i = 0; i <= 11; i++) {
    flag.push(true);
  }
  console.log(flag);

  // let flag1 = true;
  function handleSort({ target }) {
    switch (target.id) {
      case 'table__players':
        flag[0]
          ? (sortByStr(playersArr, 'fullName', true),
            target.classList.add('sort-down'))
          : (sortByStr(playersArr, 'fullName', false),
            target.classList.add('sort-up'));
        flag[0] = !flag[0];
        break;
      case 'table__games':
        flag[1]
          ? (sortByNumb(playersArr, 'games_played', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'games_played', false),
            target.classList.add('sort-down'));
        flag[1] = !flag[1];
        break;
      case 'table__mins':
        flag[2]
          ? (sortByStr(playersArr, 'min', false),
            target.classList.add('sort-up'))
          : (sortByStr(playersArr, 'min', true),
            target.classList.add('sort-down'));
        flag[2] = !flag[2];
        break;
      case 'table__points':
        flag[3]
          ? (sortByNumb(playersArr, 'pts', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'pts', false),
            target.classList.add('sort-down'));
        flag[3] = !flag[3];
        break;
      case 'table__two-percent':
        flag[4]
          ? (sortByNumb(playersArr, 'fg_pct', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'fg_pct', false),
            target.classList.add('sort-down'));
        flag[4] = !flag[4];
        break;
      case 'table__three-percent':
        flag[5]
          ? (sortByNumb(playersArr, 'fg3_pct', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'fg3_pct', false),
            target.classList.add('sort-down'));
        flag[5] = !flag[5];
        break;
      case 'table__free-percent':
        flag[6]
          ? (sortByNumb(playersArr, 'ft_pct', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'ft_pct', false),
            target.classList.add('sort-down'));
        flag[6] = !flag[6];
        break;
      case 'table__rebs':
        flag[7]
          ? (sortByNumb(playersArr, 'reb', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'reb', false),
            target.classList.add('sort-down'));
        flag[7] = !flag[7];
        break;
      case 'table__asissts':
        flag[8]
          ? (sortByNumb(playersArr, 'ast', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'ast', false),
            target.classList.add('sort-down'));
        flag[8] = !flag[8];
        break;
      case 'table__tornov':
        flag[9]
          ? (sortByNumb(playersArr, 'turnover', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'turnover', false),
            target.classList.add('sort-down'));
        flag[9] = !flag[9];
        break;
      case 'table__steals':
        flag[10]
          ? (sortByNumb(playersArr, 'stl', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'stl', false),
            target.classList.add('sort-up'));
        flag[10] = !flag[10];
        break;
      case 'table__blocks':
        flag[11]
          ? (sortByNumb(playersArr, 'blk', true),
            target.classList.add('sort-up'))
          : (sortByNumb(playersArr, 'blk', false),
            target.classList.add('sort-up'));
        flag[11] = !flag[11];
        break;
    }
  }
  arr1 = playersArr.map((item) => renderFetch(item));
  tab.innerHTML = arr1.join('');
}, 500);

////START SORT Table

// ?END SORT Table
// ?END FETCH players
