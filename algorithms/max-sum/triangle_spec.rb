require_relative '../triangle'

describe 'triangle subproblem #pick_sum' do
  describe 'given a = 10, b = 5, c = 3' do
    it 'chooses a(10) + b(5) option' do
      expect(pick_sum 10, 5, 3).to eq(15)
    end
  end

  describe 'given a = 2, b = 12, c = 35' do
    it 'chooses a(2) + c(35) option' do
      expect(pick_sum 2, 12, 35).to eq(37)
    end
  end

  describe 'given a = 7, b = -2, c = 2' do
    it 'chooses a(7) + c(2) option' do
      expect(pick_sum 7, -2, 2).to eq(9)
    end
  end

  describe 'given a = -4, b = -3, c = -2' do
    it 'chooses a(-4) + c(-2) option' do
      expect(pick_sum -4, -3, -2).to eq(-6)
    end
  end
end

describe '#load_triangle' do
  let(:fixture) { 'spec/fixtures/known_triangle.txt' }

  it 'converts file into expected array' do
    expect(load_triangle fixture).to eq([[5], [9, 6], [4, 6, 8], [0, 7, 1, 5]])
  end

  it 'coverts all values to Fixnums' do
    load_triangle(fixture).each do |row|
      row.each { |value| expect(value.class).to eq(Fixnum) }
    end
  end
end

#    2
#   / \
#  4---7
describe 'a simple triangle' do
  let(:fixture) { 'spec/fixtures/simple_triangle.txt' }

  it 'calculates the correct answer(9)' do
    expect(calculate load_triangle(fixture)).to eq(9)
  end
end

#   4
describe 'a non triangle' do
  let(:fixture) { 'spec/fixtures/non_triangle_single_value.txt' }

  it 'returns the value(4)' do
    expect(calculate load_triangle(fixture)).to eq(4)
  end
end

#    5
#   9 6
#  4 6 8
# 0 7 1 5
describe 'the known triangle fixture' do
  let(:fixture) { 'spec/fixtures/known_triangle.txt' }

  it 'calculates the correct answer (27)' do
    expect(calculate load_triangle(fixture)).to eq(27)
  end
end

describe 'the given problem triangle fixture' do
  let(:fixture) { 'spec/fixtures/triangle.txt' }

  it 'calculates the correct answer (732506)' do
    expect(calculate load_triangle(fixture)).to eq(732506)
  end
end
