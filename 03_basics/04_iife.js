// Immediately Invoked Function Expressions (IIFE)



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

// note------------------------
// IIFEs are also useful for avoiding polluting the global namespace. below is the example


(function() {
    // This code is immediately invoked and has its own scope
    var localVar = "IIFE example";
    console.log(localVar);
  })();
  
  // Other code block (for example, if statement)
  if (true) {
    // This code block has its own scope
    var blockVar = "Block example";
    console.log(blockVar);
  }
  
  // localVar is not accessible here
  // blockVar is accessible here