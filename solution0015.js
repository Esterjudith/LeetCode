// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list.Otherwise, return false.



//     Example 1:


// Input: head = [3, 2, 0, -4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node(0 - indexed).
//     Example 2:


// Input: head = [1, 2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
//     Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


//     Constraints:

// The number of the nodes in the list is in the range[0, 104].
// - 105 <= Node.val <= 105
// pos is - 1 or a valid index in the linked - list.


// Follow up: Can you solve it using O(1)(i.e.constant) memory ?

//pseudocode: use the fast and slow . A brute way to solve would be to put all the numbers in an array and if the value is seen more than once then it's a cycle, however this will be liner space and quadratic time. the best way would be with a method using two pointers, a fast pointer and a slow pointer, slow moves one step, fast moves two steps. I they ever meet(where they are equal) than there is a cycle.
var hasCycle = function (head) {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}
