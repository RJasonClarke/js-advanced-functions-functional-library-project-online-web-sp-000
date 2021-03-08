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

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
