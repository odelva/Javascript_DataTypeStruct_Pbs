#Arrays

The array is one of the most widely used data structures in programming. Together with objects, these collections are the workhorses of iteration in JavaScript (technically an array is an object).

##Summary
This challenge will test your understanding on how arrays work. We will be building a constructor (a function that creates objects) that returns instances with a push and pop method that behaves similarly to the native array methods. This can also be referred to as an array *class*. Classes can be thought of as *data types*. For example, `String`, `Number`, and `Date` are classes built into the JS language along with arrays. They are classes that have instances. Each instance of the class shares the same methods/functions. To implement your own class, you want your instances to have access to those methods. This is accomplished with *inheritance*. This can be done with prototypical inheritance (i.e. using `Object.create`) or with pseudo-classical inheritance (i.e. using the `new` keyword on a constructor function). Check out [this walkthrough](http://davidshariff.com/blog/javascript-inheritance-patterns/) 


##How do I get started?
1. Fork this repo
  - click on fork button on the top right of the page
  <br><img src="https://help.github.com/assets/images/help/repository/fork_button.jpg" width="300px"></img>  
  - click on your handle to fork to your repo

1. Clone the repo
  - copy and paste github url from the right side of the screen
  <br><img src="https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png" width="200px"></img>
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````

1. Complete the skills builder
  - add the necessary lines of code inside the ArrayClone constructor (function) in ```src/Array.js.```

##Challenges

####Implement the following methods and properties
  - [ ] `length` is a property that holds the size (number of elements) in the array.
  - [ ] `push` is a method that adds the inputted values to the end of the array.
  - [ ] `pop` is a method that removes the last element from the array and returns it
  - [ ] `shift` is a method that removes the first element from the array, returns it, and *shifts* the remaining elements one to the left so that there isn't an empty space at index 0.
  - [ ] `unshift` is a method that adds the inputted values at the beginning of the array.

<img src="./assets/array-push-pop.png" height="200px">

##How do I test if my answer is correct?
* To test your functions, open index.html in your browser

* NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
