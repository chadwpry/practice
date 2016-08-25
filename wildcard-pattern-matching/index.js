var colors = require('colors');

/*
    Make all of the tests pass. Uncomment more tests as you go to check your work.
    If you cause an infinite loop, copy the URL to your code and add &turn_off_js=true to the end and open that URL in a new tab.

    Pattern descriptions:

        "." matches a literal period character
        "?" matches a single character
        "*" matches zero or more characters
        "[abc]" indicates a set of any single character, in this case it will match either "a", "b", or "c"
        "(abc|def)" indicates a set of any group of characters, in this case it will match either "abc" or "def"
        "[a-z]" indicates a range of characters

    Good luck!
*/

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

function wildcardPatternsMatch(patternA, patternB) {
  //console.log('comparing wildcardPatternA '+wildcardPatternA+' to wildcardPatternB '+wildcardPatternB);
  var match = false;

  // Handle exact matches
  if (patternA == patternB) {
      match = true;
  }

  if (patternA

  console.log(patternA.match(new RegExp(`(${patternB})`)))

    // TODO: Write code to make all tests pass
    // if ((wildcardPatternA == '?' && wildcardPatternB.length == 1) || (wildcardPatternB == '?' && wildcardPatternA.length == 1)) {
    //     match = true;
    // }

//    if (wildcardPatternA.indexOf('?') > -1) {
//        var cloneB = wildcardPatternB;
//
//        match = (wildcardPatternA == cloneB.replaceAt(wildcardPatternA.indexOf('?'), '?'));
//    } else if (wildcardPatternB.indexOf('?') > -1) {
//        var cloneA = wildcardPatternA;
//
//        match = (wildcardPatternB == cloneA.replaceAt(wildcardPatternB.indexOf('?'), '?'));
//    }
//
//    if (wildcardPatternA.length == 0 && wildcardPatternB.length != 0) {
//        match = false;
//    } else if (wildcardPatternB.length == 0 && wildcardPatternA.length != 0) {
//        match = false;
//    }

    return match;
}

// Tests
var tests = [
    // Standard comparison
    { patternA: 'abc', patternB: 'abc', expects: true, },
    { patternA: 'hello.world', patternB: 'hello.world', expects: true, },
    { patternA: '', patternB: '', expects: true, },
    { patternA: 'hello.world', patternB: 'hello.universe',expects: false,},
    { patternA: 'abc', patternB: 'abd',expects: false,},

    // "?" matches a single character
    { patternA: '?', patternB: 'a', expects: true, },
    { patternA: 'a', patternB: '?', expects: true, },
    { patternA: 'a?d', patternB: 'acd', expects: true, },
    { patternA: 'a?d', patternB: 'ace', expects: false, },
    { patternA: '?', patternB: '', expects: false,},
    { patternA: '???', patternB: '???', expects: true, },
    { patternA: '??d', patternB: 'acd', expects: true, },

    // "*" matches zero or more characters
    { patternA: '*', patternB: 'abc', expects: true, },
    { patternA: 'abc', patternB: 'a*c', expects: true, },
    { patternA: 'a*c', patternB: 'a*c', expects: true, },
    { patternA: '*', patternB: '', expects: true, },
    { patternA: 'hello.*.earth', patternB: 'hello.middle.earth', expects: true, },
    { patternA: 'left*right', patternB: 'left*middle*right', expects: true, },

    // "[abc]" indicates a set of any single character, in this case it will match either "a", "b", or "c"
    { patternA: '[abc]', patternB: 'a', expects: true, },
    { patternA: '[abc]', patternB: 'd',expects: false,},
    { patternA: 'a[bc]d', patternB: 'acd', expects: true, },
    { patternA: 'a[bc]d', patternB: 'a[ce]d', expects: true, },
    { patternA: '[abc][cde][efg]', patternB: '[abc][cde][efg]', expects: true, },
    { patternA: 'input.press.2.press', patternB: 'input.press.[1345].press',expects: false,},

    // More difficult patterns
    { patternA: 'hello*', patternB: '*ok', expects: true, },
    { patternA: 'a*b*c', patternB: 'a*b*d*b*c', expects: true, },
    { patternA: 'prefix*', patternB: 'wrong:prefix:*',expects: false,},
    { patternA: '*suffix', patternB: '*suffix:wrong',expects: false,},
    { patternA: 'prefix*', patternB: 'prefix:extended*', expects: true, },
    { patternA: '*suffix', patternB: '*:extended:suffix', expects: true, },
    { patternA: 'left*right', patternB: 'right*middle*left',expects: false,},
    { patternA: 'right*middle*left', patternB: 'left*right',expects: false,},
    { patternA: 'event1', patternB: 'event1.*', expects: true, },
    { patternA: 'event1.secondLevelEvent1', patternB: 'event1.*', expects: true, },
    { patternA: 'event1.secondLevelEvent1.thirdLevelEvent1', patternB: 'event1.secondLevelEvent1.*', expects: true, },
    { patternA: 'event1.secondLevelEvent1.thirdLevelEvent1', patternB: 'event1.*', expects: true, },
    { patternA: 'event123', patternB: 'event*', expects: true, },
    { patternA: 'event123event', patternB: 'event*event', expects: true, },
    { patternA: '123event123event123', patternB: '*event*event*', expects: true, },
    { patternA: 'input.key.*.up', patternB: 'input.key.*.up.*', expects: true, },
    { patternA: 'input.press.*', patternB: 'input.*.press.*', expects: true, },
    { patternA: 'one.two.*', patternB: 'one.*.three.*', expects: true, },
    { patternA: 'input.key.*.up', patternB: 'input.key.*.down',expects: false,},
    { patternA: 'html*.mountedToDom', patternB: 'htmlDocument.scroll.*', expects: true, },
    { patternA: '*', patternB: '*', expects: true, },
    { patternA: '*', patternB: '**', expects: true, },
    { patternA: '***', patternB: '***', expects: true, },

    // Various mix of patterns
    { patternA: 'a[bc]d*wyz', patternB: 'abd*w[xy]z', expects: true, },
    { patternA: '[abcd]d', patternB: '*d', expects: true, },
    { patternA: 'pre[ab]fix* ', patternB: 'pre[xy]fix*',expects: false,},
    { patternA: 'a*?de', patternB: 'ace',expects: false,},
    { patternA: '?*b*?', patternB: 'bcb',expects: false,},
    { patternA: 'abc?efg?ijk?n?p', patternB: 'abcdefg[hijk]ijk*mnop', expects: true, },
    { patternA: 'abc[def]efg[hij]ijk[lmn]mno[pqr]q', patternB: 'abcdefg[hij]ijk*lmno?q', expects: true, },
    { patternA: 'abc*fgh*ijklmn*pqr*tu', patternB: 'abcdefgh[ijk]jklmn?qr*u', expects: true, },
    { patternA: '[abc]*[def]*[abc]', patternB: 'cda', expects: true, },
    { patternA: 'ab*?*de', patternB: 'abcde', expects: true, },
    { patternA: '[abc]*[cde]*[efg]', patternB: 'abcde', expects: true, },
    { patternA: 'ab*?*de', patternB: 'abcde', expects: true, },
    { patternA: 'abc*def*hij', patternB: 'abc*def*hij', expects: true, },
    { patternA: 'abc[def]hij', patternB: 'a*j', expects: true, },
    { patternA: 'abc*hij*lmno', patternB: 'abcde*hi*no', expects: true, },
    { patternA: 'pre[ab]fix*', patternB: 'pre[bc]fix*', expects: true, },
    { patternA: 'abc[def]?fghi?*nop*[tuv]uv[wxy]?yz', patternB: 'abcdefghijklmnopqrstuvwxyz', expects: true, },
    { patternA: 'abc[def]?fghi?*nop*[tuv]uv[wxy]?yz', patternB: 'a?[cde]defg*?ilmn[opq]*tu*[xyz]*', expects: true, },
    { patternA: 'a?[cde]defg*?ilmn[opq]*tu*[xyz]*', patternB: 'abc[def]?fghi?*nop*[tuv]uv[wxy]?yz', expects: true, },

    // (|) sets of groups of characters
    { patternA: 'start.(one|two).end', patternB: 'start.one.end', expects: true, },
    { patternA: 'start.(one|two).end', patternB: 'start.two.end', expects: true, },
    { patternA: 'start.(one|two).end', patternB: 'start.three.end',expects: false,},
    { patternA: 'start.(one|two).end', patternB: 'start..end',expects: false,},
    { patternA: 'start.(one|two).end', patternB: 'start.().end',expects: false,},
    { patternA: 'start.([abc]|[cde]).end', patternB: 'start.a.end', expects: true, },
    { patternA: 'start.([abc]|[cde]).end', patternB: 'start.f.end',expects: false,},
    { patternA: 'start.([abc]|[cde]).end', patternB: 'start..end',expects: false,},

    { patternA: 'input.key.(f11|f.(control|command))', patternB: 'input.key.*', expects: true, },
    { patternA: 'input.key.*', patternB: 'input.key.(f11|f.(control|command))', expects: true, },

    { patternA: 'input.key.*', patternB: 'input.key.i.alt.(control|command)', expects: true, },
    { patternA: 'input.key.i.alt.(control|command)', patternB: 'input.key.*', expects: true, },

    { patternA: 'input.key.*', patternB: 'input.key.w.(alt|control).(control|command)', expects: true, },
    { patternA: 'input.key.w.(alt|control).(control|command)', patternB: 'input.key.*', expects: true, },

    { patternA: 'input.key.*', patternB: 'input.key.(alt|control|meta|shift)', expects: true, },
    { patternA: 'input.key.(alt|control|meta|shift)', patternB: 'input.key.*', expects: true, },

    { patternA: 'input.press.(one|two).down', patternB: 'input.press.two.down', expects: true, },
    { patternA: 'input.press.two.down', patternB: 'input.press.(one|two).down', expects: true, },
    { patternA: 'input.press.(1|2).down', patternB: 'input.press.2.down', expects: true, },
    { patternA: 'input.press.2.down', patternB: 'input.press.(1|2).down', expects: true, },
    { patternA: 'input.press.2.down', patternB: 'input.press.(2|1).down', expects: true, },

    // Ranges
    { patternA: 'start.[a-z].end', patternB: 'start.b.end', expects: true, },
    { patternA: 'start.[A-Z].end', patternB: 'start.B.end', expects: true, },
    { patternA: 'start.[a-z].end', patternB: 'start.z.end', expects: true, },
    { patternA: 'start.[0-9].end', patternB: 'start.5.end', expects: true, },
    { patternA: 'start.[0-9a-z].end', patternB: 'start.5.end', expects: true, },
    { patternA: 'start.[0-9a-z].end', patternB: 'start.x.end', expects: true, },
    { patternA: 'start.[0-9a-z].end', patternB: 'start.c.end', expects: true, },
    { patternA: 'start.([0-9a-z]|middle).end', patternB: 'start.middle.end', expects: true, },
    { patternA: 'start.([0-9a-z]|middle).end', patternB: 'start.b.end', expects: true, },
    { patternA: 'start.([0-9a-z]|middle).end', patternB: 'start.center.end', expects: false, },

    { patternA: 'start.(one|two|three).end', patternB: 'start.three.end', expects: true },
    { patternA: 'start.(one|two).end', patternB: 'start.*.end', expects: true },
    { patternA: 'start.(one|two).end', patternB: 'start.(two|one).end', expects: true },
    { patternA: 'start.(one|t[wo0]o).end', patternB: 'start.(t0o|three).end', expects: true },
    { patternA: 'start.((one|two)|(three|four)).end', patternB: 'start.(two|four).end', expects: true },
    { patternA: '(start*|*end)', patternB: 'start.xyz', expects: true },
    { patternA: '(start*|*end)', patternB: 'xyz.end', expects: true },
    { patternA: 'start.xyz', patternB: '(start*|*end)', expects: true },
    { patternA: '(start*|*end)', patternB: 'xyz.end', expects: true },
];

var Test = {
  run: function(test, assertionCallback) {
    if (test.expects == assertionCallback(test.patternA, test.patternB)) {
      console.log(`("${test.patternA}", "${test.patternB}") => ${test.expects}`.green);
    } else {
      console.log(`("${test.patternA}", "${test.patternB}") => ${test.expects}`.red);
      process.exit();
    }
  }
};

// Run tests
tests.forEach((test) => {
  Test.run(test, wildcardPatternsMatch);
});

