class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const carStackTime:Record<'t' | 'position', number>[] = [];
        let result = 0;
        let maxTime = 0;

        for (let i = 0; i < position.length; i++) {
            const currentCarTime = (target - position[i]) / speed[i];
            carStackTime.push({t: currentCarTime, position: position[i] });
        }

        const sortedArray = carStackTime.sort((a, b) => b.position - a.position);

        for (let i = 0; i < sortedArray.length; i++) {
            if (maxTime < sortedArray[i].t) {
                maxTime = sortedArray[i].t
                result++;
            };
        }

        return result;
    }
}
