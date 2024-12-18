let nums = [10, 20, 30];

// Using 'for-in' (index)
for (const i in nums) {
    console.log(i); // "0", "1", "2"
}

// Using 'for-of' (value)
for (const i of nums) {
    console.log(i); // 10, 20, 30
}