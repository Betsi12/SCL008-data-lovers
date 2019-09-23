/* Manejo de data */

const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascendente los nombres de los pokemones

const sortData = (pokeData, sortBy, sortOrder) => {
  let orderAz = pokeData.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  })
  if (sortOrder === "z--a") {
    orderAz.reverse();
  }
  return orderAz;
};
//Funcion para mostrar la cantidad de pokemones que hay cada vez que se filtre por un tipo
const computeStats = (pokeData, condition) => {
  const result2 = filterData(pokeData, condition).length;
  return result2;
}
//Funcion para ordenar los pokemones en forma numerica
const orderNum = (pokeData,sortBy1,sortOrder1) => {
  const arrNumOrder = pokeData.sort((a, b) => {
    return a[sortBy1].localeCompare(b[sortBy1]);
  })
  if (sortOrder1 === "descend") {
    arrNumOrder.reverse();
  }
  return arrNumOrder;
}

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
window.orderNum = orderNum;
