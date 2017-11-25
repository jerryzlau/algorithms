def two_sum(nums, target)
  (0...nums.length).each do |idx|
    (idx+1...nums.length).each do |idx2|
      return [idx, idx2] if nums[idx] + nums[idx2] == target
    end 
  end 
end

p two_sum([3,2,4], 6)