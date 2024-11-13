// Find the longest substring with k unique characters in a given string
// Given a string you need to print longest possible substring that has exactly M unique characters. 
// If there is more than one substring of longest possible length, then print any one of them.
// Input: Str = “aabbcc”, k = 1
// Output: 2
// Explanation: Max substring can be any one from {“aa” , “bb” , “cc”}.

// Input: Str = “aabbcc”, k = 2
// Output: 4
// Explanation: Max substring can be any one from {“aabb” , “bbcc”}.

const str = "aabbcc"
const str1 = "ababcccc"
const k = 2;

function longestSubStr(str, k){
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const mapper = new Map();

    while(right < str.length){
        const curr = str[right];
        mapper.set(curr, (mapper.get(curr) || 0) + 1)
        while(mapper.size > k) {
            let previousCharCount = mapper.get(str[left]);
            if(previousCharCount == 0) {
                mapper.delete(str[left]);
                left++;
            } else {
                mapper.set(str[left], mapper.get(str[left]) - 1)
            }
        }
        if(mapper.size === k) {
            maxLength = Math.max(maxLength, (right-left) + 1)
            console.log(`maxLength: `, maxLength);
        }

        right++;
    }
}

longestSubStr(str, 2)