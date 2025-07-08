function searchInsert(nums, target) {
  let index = 0;
  while (index < nums.length && nums[index] < target) {
    index++;
  }
  nums.splice(index, 0, target);
  return nums;
}
