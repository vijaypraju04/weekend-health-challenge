"use strict";
const findWords = (inputString, dictionary) => {
    const result = [];
    const set = new Set(inputString.split(''));
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < dictionary[i].length; j++) {
            if (set.has(dictionary[i][j])) {
                set.delete(dictionary[i][j]);
                if (j === dictionary[i].length - 1) {
                    result.push(dictionary[i]);
                }
            }
            else {
                break;
            }
        }
    }
    return result;
};
// Test cases
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
console.log(findWords("abc", ["a", "ab", "abc", "bac"]));
// Expected output: ["a", "ab", "abc", "bac"]
console.log(findWords("x", ["xy", "yx", "zzx"]));
// Expected output: []
console.log(findWords("p", ["p", "pp", "ppp", "pppp"]));
// Expected output: ["p"]
