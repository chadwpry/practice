class AnagramDictionary
  constructor: () ->
    @dictionary = {}

  indexOf = (word) ->
    word.toLowerCase().split('').sort((a, b) ->
      if a < b then -1 else if a > b then 1 else 0
    ).join('')

  find: (word) =>
    set = @dictionary[indexOf(word)]
    if set && set.length > 1 then set else []

  insert: (word) =>
    if word.length
      index = indexOf(word)

      @dictionary[index] = @dictionary[index] || []

      if @dictionary[index].indexOf(word) == -1
        @dictionary[index].push(word)

      @dictionary[index]

  list: (size = 1) =>
    for key, value of @dictionary when value.length > size
      value

module.exports = AnagramDictionary
