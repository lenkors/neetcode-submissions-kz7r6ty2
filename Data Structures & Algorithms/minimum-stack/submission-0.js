class MinStack {
    listWithMin = new Map();
    array = []
    currentMin = null;

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMin = this.array.length === 0 
        ? val 
        : Math.min(val, this.getMin());
        
        this.array.push({ val, min: currentMin });
    }

    /**
     * @return {void}
     */
    pop() {
        this.currentMin = this.listWithMin.get(this.array[this.array.length-2])
        this.listWithMin.delete(this.array[this.array.length-1])
        return this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.array[this.array.length - 1].min;
    }
}
