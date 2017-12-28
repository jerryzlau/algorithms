def making_anagram(a,b)
  a = a.chars.sort
  b = b.chars.sort 

  count = 0 

  until (a+b).empty?
    if a.empty? 
      count += b.length
      b = []
    elsif b.empty?
      count += a.length
      a = []
    elsif a[0] == b[0]
      a.shift
      b.shift 
    elsif a[0] < b[0]
      a.shift 
      count += 1
    elsif a[0] > b[0]
      b.shift 
      count += 1
    end 
  end 

  count 
end 