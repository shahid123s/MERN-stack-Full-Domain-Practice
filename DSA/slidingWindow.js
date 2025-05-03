function getTopThreeFromSlidingWindow(arr) {
    const result = [];
  
    if (arr.length < 3) return result; // Not enough elements
  
    for (let i = 0; i < arr.length; i += 3) {
      const window = arr.slice(i, i + 3);
      const sorted = [...window].sort((a, b) => b - a); // Descending
  
      result.push({
        a: sorted[0], // largest
        b: sorted[1] || 0, // second largest
        c: sorted[2] || 0, // third largest
      });
    }
  
    return result;
  }
  
  const input = [10, 5, 20, 8, 15, 2, 3];
  const output = getTopThreeFromSlidingWindow(input);


console.log(output);



