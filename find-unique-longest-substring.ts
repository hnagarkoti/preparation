const str = "abcpqdamcpaikunsdeurnewku";
const str1 = "mnpsdabcspsdadbd";

function printLongestSubstring(str){
    let left = 0;
    let right = 0;
    const mapper = new Map();
    let maxLength = 0;

    while(right < str.length){
        const currChar = str[right];
        if(mapper.get(currChar)) {
            left++;
            
        }
        mapper.set(currChar, right);
        maxLength = Math.max(maxLength, (right - left) + 1)
        right++;
    }

    console.log(`mapper: `, mapper);
    console.log(`maxLength: `, maxLength);
}
printLongestSubstring(str);
printLongestSubstring(str1);
