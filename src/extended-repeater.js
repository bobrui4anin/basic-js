module.exports = function repeater(str, options) {
    let tempArr = [];
    let additionalArr = [];
    let additionalStr = '';

    if (str === null) {
        str = 'null';
    } else {
        str = str.toString();
    }

    if (!options.separator) {
        options.separator = '+';
    }

    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }

    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }

    if (options.addition || ((typeof options.addition) == 'boolean' || options.addition === null)) {
        if (options.addition === null) {
            options.addition = 'null';
        } else {
            options.addition = options.addition.toString();
        }

        for (let i = 0; i < options.additionRepeatTimes; i++) {
            additionalArr.push(options.addition);
            if (i == options.additionRepeatTimes - 1) {
                if (options.additionSeparator && options.additionRepeatTimes != 1) {
                    additionalStr = additionalArr.join(options.additionSeparator);
                } else {
                    additionalStr = additionalArr.join();
                }
            }
        }
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        tempArr.push(str + additionalStr);
    }

    return tempArr.join(options.separator);
};
  