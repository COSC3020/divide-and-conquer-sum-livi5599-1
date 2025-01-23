function divideAndConquerSum(a) {
    if (a.length == 0) {
        return 0; //O(1)
    }
    
    if (a.length == 1) {
        return a[0]; //O(1)
    }
    
    if (a.length == 2) {
        return a[0] + a[1]; //O(1)
    }

        var mid1 = Math.floor(a.length / 3); //O(1)
        var mid2 = 2 * mid1; //O(1)

        var leftSubArray = a.slice(0, mid1 + 1); //O(n)
        var middleSubArray = a.slice(mid1 + 1, mid2 + 1); //O(n)
        var rightSubArray = a.slice(mid2 + 1) // O(n)
    
        var leftSum = divideAndConquerSum(leftSubArray); //O(n/3)
        var middleSum = divideAndConquerSum(middleSubArray); //O(n/3)
        var rightSum = divideAndConquerSum(rightSubArray); //O(n/3)

        return leftSum + middleSum + rightSum; //O(1)
}
