# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    first = [] 
    second = [] 
    
    until l1.nil? 
        first << l1.val.to_s
        l1 = l1.next 
    end 
    
    until l2.nil? 
        second << l2.val.to_s
        l2 = l2.next 
    end 
    
    result = (first.reverse.join('').to_i + second.reverse.join('').to_i).to_s.chars.map(&:to_i).reverse
    
    head = ListNode.new(result.shift)
    current = head 
    until result.empty? 
        current.next = ListNode.new(result.shift)
        current = current.next 
    end 
    
    head
    
end