const players = [
  {
    fullName: 'Stephen Curry',
    number: '30',
    position: 'guard',
    pseudo: 'curry',
  },
  {
    fullName: 'Donte DiVincenzo',
    number: '0',
    position: 'guard',
    pseudo: 'divizenco',
  },
  {
    fullName: 'Draymond Green',
    number: '23',
    position: 'forward',
    pseudo: 'green',
  },
  {
    fullName: 'JaMychal Green',
    number: '1',
    position: 'forward-center',
    pseudo: 'green-gm',
  },
  {
    fullName: 'Andre Iguodala',
    number: '9',
    position: 'guard-forward',
    pseudo: 'iguodala',
  },
  {
    fullName: 'Kevon Looney',
    number: '5',
    position: 'forward',
    pseudo: 'looney',
  },
  {
    fullName: 'Klay Thompson',
    number: '11',
    position: 'guard',
    pseudo: 'thompson',
  },
  {
    fullName: 'Andrew Wiggins',
    number: '22',
    position: 'forward',
    pseudo: 'wiggins',
  },
  {
    fullName: 'Gary Payton II',
    number: '8',
    position: 'guard',
    pseudo: 'payton',
  },
  {
    fullName: 'James Wiseman',
    number: '33',
    position: 'center',
    pseudo: 'wiseman',
  },
  {
    fullName: 'Jordan Poole',
    number: '3',
    position: 'guard',
    pseudo: 'poole',
  },
  {
    fullName: 'Ty Jerome',
    number: '10',
    position: 'guard-forward',
    pseudo: 'jerome',
  },

  {
    fullName: 'Anthony Lamb',
    number: '40',
    position: 'forward',
    pseudo: 'lamb',
  },
  {
    fullName: 'Jonathan Kuminga',
    number: '00',
    position: 'forward',
    pseudo: 'kuminga',
  },
  {
    fullName: 'Moses Moody',
    number: '4',
    position: 'guard',
    pseudo: 'moody',
  },
];

const playersId =
  '?season=2022&player_ids[]=224&player_ids[]=475&player_ids[]=7155648&player_ids[]=131&player_ids[]=185&player_ids[]=2189&player_ids[]=187&player_ids[]=3547240&player_ids[]=17553979&player_ids[]=666848&player_ids[]=282&player_ids[]=443&player_ids[]=17553992&player_ids[]=115&player_ids[]=666676';

const fetchIds = [
  'fullName',
  'games_played',
  'min',
  'pts',
  'fg_pct',
  'fg3_pct',
  'ft_pct',
  'reb',
  'ast',
  'turnover',
  'stl',
  'blk',
];
const sortIds = [
  'table__players',
  'table__games',
  'table__mins',
  'table__points',
  'table__two-percent',
  'table__three-percent',
  'table__free-percent',
  'table__rebs',
  'table__asissts',
  'table__tornov',
  'table__steals',
  'table__blocks',
];
