const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof (sampleActivity) != 'string') || !sampleActivity || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);

  if (sampleActivity < 1 || sampleActivity > 15) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
};
