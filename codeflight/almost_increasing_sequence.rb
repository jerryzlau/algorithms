require 'byebug'

def almostIncreasingSequence(sequence)
    order = []
    inorder = []
    current_biggest = 0
    
    (0...sequence.length).each do |idx|
        if idx+1 <= sequence.length-1 && sequence[idx] > sequence[idx+1]
          inorder << sequence[idx]
        else 
          order << sequence[idx]
        end 
    end 

    p order
    p inorder
    
    if inorder.length <= 1
        return true 
    else 
        return false
    end
end

p almostIncreasingSequence([1, 2, 1, 2])