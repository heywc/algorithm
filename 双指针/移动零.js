// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow =0, fast = 0;
    while(fast < nums.length) {
        if(nums[fast]) {
            [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
            slow++
        }
        fast++;
    }
    return nums;
};