import csvFile from '../assets/list_2021_01_12.csv';

function filterByExchange(name) { // NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS
  return csvFile.filter((i) => i[2] === name);
}


export { filterByExchange };