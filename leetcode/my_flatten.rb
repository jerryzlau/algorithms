def my_flatten(array)
  result = []
  array.each do |el|
    if el.class == Array 
      result += my_flatten(el)
    else 
      result << el 
    end 
  end 
  result
end 

p my_flatten([[1,2,3], 2, [3,2,[4]]])