def common_characters(a, b)
  a_hash = Hash.new(0)
  b_hash = Hash.new(0)
  a.each_char {|char| a_hash[char] += 1 if a_hash[char] }
  b.each_char {|char| b_hash[char] += 1 if b_hash[char] }
  a_hash.select {|k,v| v > 0 && b_hash[k] > 0}.keys.join
end 

common_characters('aabbaa', 'abc')