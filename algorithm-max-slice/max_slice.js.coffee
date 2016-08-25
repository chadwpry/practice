#!/usr/bin/env coffee

sum = (slice) ->
  slice.reduce (v1, v2) -> +v1 + +v2

max_slice = (array) ->
  slices = []
  positionRange = [0..(array.length - 1)]
  sizeRange = [1..(array.length)]

  for size in sizeRange
    for position in positionRange
      slice = array.slice position, (position + size)

      if slice.length == size
        currentSum = sum(slice)
        index = slices.push {slice: slice, sum: currentSum}

        if not previousSum or previousSum < currentSum
          greatestIndex = index
          previousSum = currentSum

  slices[greatestIndex - 1]

if process.argv.length > 2
  console.log max_slice(process.argv[2].split(',').map (number) -> +number)
else
  console.log "usage: ./max_slice <1,2,3,4>"
