const buildFrequencyMap = (word: string): Map<string, number> => {
        const freq = new Map<string, number>();
        for (const char of word) {
            const currentCount = freq.get(char)
            if (currentCount) {
                freq.set(char, currentCount + 1)
            } else {
                freq.set(char, 1)
            }
        }
        return freq
}

const isWordMatch = (inputFreq: Map<string, number>, wordFreq: Map<string, number>) => {
    for (const [char, count] of wordFreq) {
        const inputCharCount = inputFreq.get(char) || 0
        // If the input character frequency count is less than the word character frequency count
        // then it's invalid
        if (inputCharCount < count) {
            return false
        }
    }
    return true
}

const findWords = (inputString: string, dictionary: string[]): string[] => {
    const result: string[] = []
    // Create a frequency map for each character in input string and keep a count in value
    const inputFrequency = buildFrequencyMap(inputString)

    dictionary.forEach(word => {
        // Create a frequency map for each character in each word and keep a count in value
        const wordFrequency = buildFrequencyMap(word)
        if (isWordMatch(inputFrequency, wordFrequency)) {
            result.push(word)
        }
    })
    return result
}

/**
 * {
 *   o: 2,
 *   g: 1,
 *   d: 1 
 * }
 * 
 * {
 *  t: 1
 *  e: 1
 *  a: 1
 * }
 */
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
