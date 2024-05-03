function isPalindrome(word) {
    if (word === "") {
        return false;
    }

    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }

    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must contain only alphabetic characters');
    }

    if (word.length === 0) {
        return false;
    }

    word = word.toLowerCase();
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

module.exports = isPalindrome;
