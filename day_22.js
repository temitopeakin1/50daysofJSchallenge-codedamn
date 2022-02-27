// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// The argument can contain a string or an array

// For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]




let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    const type = typeof iterable
        if(type == 'string') iterable = iterable.split('')
        let stack = [];
        stack.push(iterable[0])
        for(let i=0;i<iterable.length;i++){
            if(stack[stack.length - 1] === iterable[i]) continue
            stack.push(iterable[i])
        }
        return stack;
  };
  