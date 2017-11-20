def island_perimeter(grid)
    return 0 if grid.flatten.all? {|el| el == 0}
    perimeter = 0 
    (0...grid.length).each do |i|
        (0...grid[0].length).each do |j|
            if grid[i][j] == 1
                perimeter += 4
                perimeter -= 2 if (i > 0 && grid[i-1][j] == 1)
                perimeter -= 2 if (j > 0 && grid[i][j-1] == 1)
            end 
        end 
    end 
    perimeter 
end

p island_perimeter([
                    [0,1,0,0],
                    [1,1,1,0],
                    [0,1,0,0],
                    [1,1,0,0]])