module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else if (!members.length) {
    throw ("Empty array");
  }

  let tempArr = '';
  members.map((el) => {
    if (typeof (el) == 'string') {
      tempArr += el.trim()[0].toUpperCase();
    }
  });

  return tempArr.split('').sort().join('');
};