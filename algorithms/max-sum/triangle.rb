def load_triangle(file_name)
  lines = File.readlines(file_name)
  lines.map {|line| line.split(' ').map(&:to_i)}
end

def calculate(triangle_array)
  return triangle_array.first.first if triangle_array.length == 1

  calculate(sum_upward!(triangle_array))
end

def sum_upward!(array)
  last_line = array.pop
  x = 0
  array.last.map! { |value| pick_sum(value, last_line[x], last_line[x+=1]) }
  array
end

#      a         value
#     / \
#    b---c       last_line
#
#    x  x+1
def pick_sum(a, b, c)
  (b > c) ? (a + b) : (a + c)
end

