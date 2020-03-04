const chainMaker = {
  arrayValues: [],

  getLength() {
    return this.arrayValues.length;
  },
  addLink(value) {
    (typeof value == 'undefined') ? this.arrayValues.push(`( )`): this.arrayValues.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || isNaN(position) || position > (this.getLength())) {
      this.arrayValues = [];
      throw new Error('Position is not correct');
    }
    this.arrayValues.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrayValues.reverse();
    return this;
  },
  finishChain() {
    let finalString = this.arrayValues.join("~~");
    this.arrayValues = [];
    return finalString;
  }
};

module.exports = chainMaker;
