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

const sortByStr = (arr, str, rev=false) => {
 rev ? arr.sort((a, b) => a[str].toLowerCase().localeCompare(b[str].toLowerCase())) : arr.sort((a, b) => b[str].toLowerCase().localeCompare(a[str].toLowerCase()));
  const arr1 = arr.map((item) => renderFetch(item));
  return (tab.innerHTML = arr1.join(''));
};
const sortByNumb = (arr, numb, rev=false) => {
 rev ? arr.sort((a, b) => a[numb] - b[numb]) : arr.sort((a, b) => b[numb] - a[numb]);
  const arr1 = arr.map((item) => renderFetch(item));
  return (tab.innerHTML = arr1.join(''));
};

setTimeout(() => {
  document.addEventListener('click', handleSort);

  let flag1 = true;
  function handleSort({ target }) {
    switch (target.className) {
      case 'table__players':
        console.log(target)
        flag1
          ? sortByStr(playersArr, 'fullName', true)
          : sortByStr(playersArr, 'fullName', false);
        flag1 = !flag1;
        break;
      case 'table__games':
        flag1
          ? sortByNumb(playersArr, 'games_played', true)
          : sortByNumb(playersArr, 'games_played', false);
        flag1 = !flag1;
        break;
      case 'table__mins':
        flag1
          ? sortByStr(playersArr, 'min', false)
          : sortByStr(playersArr, 'min', true);
        flag1 = !flag1;
        break;
      case 'table__points':
        flag1
          ? sortByNumb(playersArr, 'pts', true)
          : sortByNumb(playersArr, 'pts', false);
        flag1 = !flag1;
        break;
      case 'table__two-percent':
        flag1
          ? sortByNumb(playersArr, 'fg_pct', true)
          : sortByNumb(playersArr, 'fg_pct', false);
        flag1 = !flag1;
        break;
      case 'table__three-percent':
        flag1
          ? sortByNumb(playersArr,  'fg3_pct', true)
          : sortByNumb(playersArr,  'fg3_pct', false);
        flag1 = !flag1;
        break;
      case 'table__free-percent':
        flag1
          ? sortByNumb(playersArr, 'ft_pct', true)
          : sortByNumb(playersArr, 'ft_pct', false);
        flag1 = !flag1;
        break;
      case 'table__rebs':
        flag1
          ? sortByNumb(playersArr, 'reb', true)
          : sortByNumb(playersArr, 'reb', false);
        flag1 = !flag1;
        break;
      case 'table__asissts':
        flag1
          ? sortByNumb(playersArr, 'ast', true)
          : sortByNumb(playersArr, 'ast', false);
        flag1 = !flag1;
        break;
      case 'table__tornov':
        flag1
          ? sortByNumb(playersArr, 'turnover', true)
          : sortByNumb(playersArr, 'turnover', false);
        flag1 = !flag1;
        break;
      case 'table__steals':
        flag1
          ? sortByNumb(playersArr, 'stl', true)
          : sortByNumb(playersArr, 'stl', false);
        flag1 = !flag1;
        break;
      case 'table__blocks':
        flag1
          ? sortByNumb(playersArr, 'blk', true)
          : sortByNumb(playersArr, 'blk', false);
        flag1 = !flag1;
        break;
    }
  }
  arr1 = playersArr.map((item) => renderFetch(item));
  tab.innerHTML = arr1.join('');
}, 500);

////START SORT Table

// ?END SORT Table
// ?END FETCH players
