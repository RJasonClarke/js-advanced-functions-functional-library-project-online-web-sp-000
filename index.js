const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx])

      return collection
      },

    map: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      const newC = [];
      for (let i = 0; i < newCollection.length; i++) {
          newC.push(iteratee(newCollection[i]))


    }
    return newC
    },

    reduce: function(collection, iteratee, acc) {
         collection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
         if (!acc) {
          acc = collection[0];
          collection = collection.slice(1);
         }
         for (let i = 0; i < collection.length; i++) {

              acc = iteratee(acc, collection[i]);

          }
            return acc;
,

find: function(arr, finderFn) {
  let newArr = (arr instanceof Array) ? arr.slice() : Object.values(arr);
  for (let i = 0; i < newArr.length; i++) {
    if (finderFn(newArr[i])) {
      return newArr[i]
    }
  }
},

filter: function(arr, excluder) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (excluder(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
},

size: function(thing) {
  if (thing instanceof Array) {
    return thing.length;
  }
  return Object.keys(thing).length;

    },

    first: function(arr, arg) {
         let newArr = [];
         if (arg) {
           for (let i = 0; i < arg; i++) {
             newArr.push(arr[i]);
           }
         return newArr;
         }
         else {
           return arr[0];
         }
       },

       last: function(arr, arg) {
         let newArr = [];
         if (arg) {
           for (let i = 0; i < arg; i++) {
             newArr.unshift(arr[arr.length - 1 - i]);
           }
         return newArr;
         }
         else {
           return arr[arr.length - 1];
         }
       },

       compact: function(arr) {
         let newArr = [];
         for (let i = 0; i < arr.length; i++) {
           if (arr[i]) {
             newArr.push(arr[i]);
           }
         }
         return newArr;
       },
       sortBy: function(collection, callback) {
           const newArr = [...collection];
           return newArr.sort(function (a, b) {
             return callback(a) - callback(b)
           })
          },

          unpack: function(receiver, arr) {
             for (let val of arr)
               receiver.push(val)


    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
