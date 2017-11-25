require 'byebug'

def length_of_longest_substring(str)
  map = {}
  i = 0
  start = 0
  str_chars = str.chars
  result = 0
  while i < str_chars.length
    debugger
    if !map[str_chars[i]]
      map[str_chars[i]] = i
    else
      result = result > (i-start) ? result : (i-start) # current longest
      prev_pos = map[str_chars[i]] # where did we previously find the repeated character
      start = prev_pos + 1 # start after the repeated character
      map[str_chars[i]] = i # update the new position for the repeated character
    end
    i += 1
  end

  result = result > (i-start) ? result : (i-start) # need to check one more time because we dont check after last char, if we go into if block
  result 
end

p length_of_longest_substring("dvdf")