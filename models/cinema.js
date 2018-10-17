const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.titles = function () {
  const map1 = this.films.map(film => film.title);
  return map1;
};

Cinema.prototype.find = function (title) {
const result = this.films.filter(film => film.title == title)
return result;
};

Cinema.prototype.filter = function (genre) {
  const result = this.films.filter(film => film.genre == genre)
  return result;
};

// Cinema.prototype.date = function (year) {
//   const result = this.films.filter(film => film.year == year)
//   return result;
// };

// Cinema.prototype.isEqualToDate = function (year) {
//   return currentValue == year;
//
//
//   const array1 = this.films.year
//   return (array1.every(isEqualToDate));
// };

Cinema.prototype.isEqualToDate = function (year) {
  const map1 = this.films.map(film => film.year);
  return map1.includes(year);
};


Cinema.prototype.runningTime = function (length) {
  const map1 = this.films.map(film => film.length);
  return map1.includes(length);




  //return output of map1 where film.length > 95
};


module.exports = Cinema;
