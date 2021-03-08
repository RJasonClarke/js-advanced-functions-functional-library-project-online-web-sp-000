const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // calls alert with each element passed
// calls alert properly on object values
// returns the original collection
each: function(collection, callback) {

    let dub = (collection instanceof Array) ? collection.split() : Object.values(collection);

    // if (collection instanceof Array) {
    //    collection.split();
    // } else {
    //    Object.values(collection);
    // }

    for (let i=0; i < dub.length; i++) {
        callback(dub[i]);
    }

    return collection;
},

// successfully returns a correctly populated array
// does not modify the original array
// successfully returns a correctly populated array from modified object values
// does not modify the original object
map: function(collection, callback) {

    if (!(collection instanceof Array)) {
        collection = Object.values(collection)
    }

    const newCollection = []

    for (let i = 0; i < collection.length; i++){
        newCollection.push(callback(collection[i]))
    }

    return newCollection;
},

// returns the correct reduced value when passed an accumulator
// returns the correct reduced value when not passed an accumulator
// does not modify the original array
reduce: function(c=[], callback = () => {}, accumulator) {
    let collection = c.slice(0)

if (!accumulator) {
  accumulator = collection[0]
  collection = collection.slice(1)
}

for (let i=0; i < collection.length; i++) {
  accumulator = callback(accumulator, collection[i], collection)
}

    return accumulator;
},

// returns the value if found
// does not traverse the whole array if the value is found early
// returns undefined if the value is not present
find: function(collection, callback) {
  if (!(collection instanceof Array))
    collection = Object.values(collection)

  for (let i=0; i < collection.length; i++)
    if (callback(collection[i])) return collection[i]

  return undefined
},

// filters for values that the callback evaluates as true
filter: function(collection, callback) {
    if (!(collection instanceof Array)) {
        collection = Object.values(collection)
    }

    const newCollection = []

    for (let i=0; i < collection.length; i++)
        if (callback(collection[i])) newCollection.push(collection[i])

    return newCollection
},

// returns the size of the collection when an array is passed
// returns the size of the collection (amount of keys) when an object is passed
size: function(collection) {
    return (collection instanceof Array) ? collection.length : Object.keys(collection).length
},

// returns the first element of the collection
// returns the first n elements of the collection when the second optional argument (n) is provided
first: function(collection, stop=false) {
    return (stop) ? collection.slice(0, stop) : collection[0]


    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
