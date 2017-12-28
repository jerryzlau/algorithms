# n = size of array 
# k = number of left rotation 
# a = input array 

def left_rotation(n,k,a)
  move = k%n
  (a[move..-1] + a[0...move]).each {|n| print n, " "}
end 