/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var n=nums.length;
    var i=0;
    if(!nums){
        return 0;
    }
    while(target>nums[i]){
        i++;
    }
    return i;

};