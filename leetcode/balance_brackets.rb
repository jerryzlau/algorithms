def is_balance(expression)
  stack = []
  expression = expression.chars
  expression.each_with_index do |expr, idx|
    if expr == '('
      stack.push(')')
    elsif expr == '['
      stack.push(']')
    elsif expr == '{'
      stack.push('}')
    else
       (stack.length == 0 || stack[-1] != expression[idx]) ? (return false) : stack.pop() 
    end 
  end 
    stack.length == 0
end 

p is_balance("[]")