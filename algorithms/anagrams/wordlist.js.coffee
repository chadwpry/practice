fs = require('fs')

AnagramDictionary = require('./anagramDictionary.js')

class Wordlist
  constructor: (@fileName) ->
    @dictionary = new AnagramDictionary

    for word in fs.readFileSync(@fileName).toString().split("\n")
      @dictionary.insert(word.replace(/\'s|\r/, ''))

  anagrams: (word) =>
    @dictionary.find(word)

  anagramSetGreaterThan: (size = 1) =>
    @dictionary.list(size)

  anagramCount: (wordCount) =>
    @anagramSetGreaterThan(wordCount).length

module.exports = Wordlist
