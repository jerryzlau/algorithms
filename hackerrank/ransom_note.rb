def ransom_note(magazine,ransom)
  m_hash = Hash.new(0)
  r_hash = Hash.new(0)

  magazine.each {|word| m_hash[word] += 1}
  ransom.each {|word| r_hash[word] += 1}

  flag = 'Yes'

  r_hash.each do |word, count|
    if m_hash[word] < count 
      flag = 'No'
    end 
  end 

  flag 
end 