// 206. Reverse Linked List
let reverseList = function (head) {
    let prev = null
    let current = head
    let next = null
    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    head = prev
    return head
};