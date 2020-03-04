module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if ((new Date(date)) == 'Invalid Date' || isNaN(Date.parse(date)) || date.hasOwnProperty('toString')) {
    throw 'Incorrect data';
  }

  let numMonth = date.getMonth() + 1,
    fallOrAutumn = date.getFullYear() < 1755 ? 'autumn' : 'fall';
  return numMonth >= 3 && numMonth <= 5 ? 'spring' : numMonth >= 6 && numMonth <= 8 ? 'summer' : numMonth >= 9 && numMonth <= 11 ? fallOrAutumn : numMonth == 12 || numMonth <= 2 ? 'winter' : false;
};
