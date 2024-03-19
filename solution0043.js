var firstMissingPositive = function(nums) {
    const unique = new Set(nums)
    let min = 1

    while (unique.has(min)){
        min++
    }
    return min
};