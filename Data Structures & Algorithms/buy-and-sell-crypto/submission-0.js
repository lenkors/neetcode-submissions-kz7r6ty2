class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = 0;
        let maxProfit = 0;
        for (let day = 0; day < prices.length; day++) {
            if (day == 0) minPrice = prices[day];
            else if (minPrice > prices[day]) {
                minPrice = prices[day]
            } else {
                maxProfit = Math.max((prices[day] - minPrice), maxProfit);
            };
        }

        return maxProfit;
    }
}
