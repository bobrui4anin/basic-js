module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counterDepth = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                counterDepth = Math.max(this.calculateDepth(arr[i]), counterDepth);
            }
        }
        return counterDepth + 1;
    }
};