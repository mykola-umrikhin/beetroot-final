// //START FETCH players
// const tab = document.querySelector('.js-statistic');
// const players = [
//   {name: 'Stephen Curry',
// number: '30',
// position: 'guard',
// pseudo: 'curry',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Donte DiVincenzo',
// number: '0',
// position: 'guard',
// pseudo: 'divizenco',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Draymond Green',
// number: '23',
// position: 'forward',
// pseudo: 'green',
// img: `../i/players/${this.pseudo}.webp`
// },
//   {name: 'JaMychal Green',
// number: '1',
// position: 'forward-center',
// pseudo: 'green-gm',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Andre Iguodala',
// number: '9',
// position: 'guard-forward',
// pseudo: 'iguodala',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Kevon Looney',
// number: '5',
// position: 'forward',
// pseudo: 'looney',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Klay Thompson',
// number: '11',
// position: 'guard',
// pseudo: 'thompson',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Andrew Wiggins',
// number: '22',
// position: 'forward',
// pseudo: 'wiggin',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Gary Payton II',
// number: '8',
// position: 'guard',
// pseudo: 'payton',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'James Wiseman',
// number: '33',
// position: 'center',
// pseudo: 'wiseman',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Ty Jerome',
// number: '10',
// position: 'guard-forward',
// pseudo: 'jerome',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Jordan Poole',
// number: '3',
// position: 'guard',
// pseudo: 'poole',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Anthony Lamb',
// number: '40',
// position: 'forward',
// pseudo: 'lamb',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Jonathan Kuminga',
// number: '00',
// position: 'forward',
// pseudo: 'kuminga',
// img: `../i/players/${this.pseudo}`
// },
//   {name: 'Moses Moody',
// number: '4',
// position: 'guard',
// pseudo: 'moody',
// img: `../i/players/${this.pseudo}`
// },
// ];
// let playersArr;
// const playersId =
//   '?player_ids[]=224&player_ids[]=475&player_ids[]=7155648&player_ids[]=131&player_ids[]=185&player_ids[]=2189&player_ids[]=187&player_ids[]=354720&player_ids[]=17553979&player_ids[]=666848&player_ids[]=282&player_ids[]=443&player_ids[]=17553992&player_ids[]=115&player_ids[]=666676';
// fetch(`https://www.balldontlie.io/api/v1/season_averages${playersId}`)
//   .then((data) => {
//     if (data.ok) {
//       data.json().then((data) => {
//         // console.log(data);
//         const dat = [...data.data];
//         playersArr = dat;
//         const res = dat.map((item, idx) => {
//           return `<tr><td>${players[idx].name}</td>
//      <td>${item.games_played}</td>
//      <td>${item.min}</td>
//      <td>${item.pts.toFixed(1)}</td>
//      <td>${item.fg_pct}</td>
//      <td>${item.fg3_pct}</td>
//      <td>${item.ft_pct}</td>
//      <td>${item.reb.toFixed(1)}</td>
//      <td>${item.ast.toFixed(1)}</td>
//      <td>${item.turnover.toFixed(1)}</td>
//      <td>${item.stl.toFixed(1)}</td>
//      <td>${item.blk.toFixed(1)}</td>
//      </tr>`;
//         });
//         tab.innerHTML = res.join('');
//       });
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const resp = await fetch(`https://www.balldontlie.io/api/v1/season_averages${playersId}`);
// const data = await response.json()
// console.log(data)

// console.log(playersArr);
////START SORT Table
document.addEventListener('click', handleSort);
const sortByName = () => {
  res.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  tab.innerHTML = res.join('');
};

function handleSort({ target }) {
  switch (target.className) {
    case 'table__players':
      sortByName();
      break;
    case 'table__games':
      console.log(2);
      break;
    case 'table__mins':
      console.log(3);
      break;
    case 'table__points':
      console.log(4);
      break;
    case 'table__two-percent':
      console.log(5);
      break;
    case 'table__three-percent':
      console.log(6);
      break;
    case 'table__free-percent':
      console.log(7);
      break;
    case 'table__rebs':
      console.log(8);
      break;
    case 'table__asissts':
      console.log(9);
      break;
    case 'table__tornov':
      console.log(10);
      break;
    case 'table__steals':
      console.log(11);
      break;
    case 'table__blocks':
      console.log(12);
      break;
  }
}
// ?END SORT Table
// ?END FETCH players
