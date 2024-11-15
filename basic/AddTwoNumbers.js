// 2. Add Two Numbers
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = new ListNode();
    let current = output;
    let carry = 0;

    while(l1 || l2) {
        let num = 0;
        if(l1 && l2) {
            num = l1.val + l2.val + carry;
        }
        else if(!l1) {
            num = l2.val + carry;
        } else if(!l2) {
            num = l1.val + carry;
        }

        if(num <= 9){
            carry = 0;
            num = num;
        } else {
            carry = 1;
            num = num - 10
        }
        current.val = num;
        if(l1) {
            l1 = l1.next ? l1.next : null;
        }
        if(l2) {
            l2 = l2.next ? l2.next : null;
        }
        if(!l1 && !l2 && carry == 1){
            current.next = new ListNode();
            current = current.next;
            current.val = carry;
        } else if(!l1 && !l2 && carry == 0) {
            break;
        } else{
            current.next = new ListNode()
            current = current.next;
        }
    }

    return output;
};