def nearest_multiple_of_four(n)
  num = 4 
  while num < n 
    num += 4 
  end 
  num 
end 

def hamming_distance(x, y)
    count = 0 
    x = x.to_s(2)
    y = y.to_s(2)
    length = nearest_multiple_of_four([x.length, y.length].max)
    x = x.rjust(length, '0').chars
    y = y.rjust(length, '0').chars

    (0...length).each do |idx|
      count += 1 if x[idx] != y[idx]
    end 

    count 
end

p hamming_distance(1,4)



