/* eslint-disable no-undef */
function getUserData(userId, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const userData = { id: userId, name: 'John', email: 'john@example.com' }

      if (callback && typeof callback === 'function') {
        callback(null, userData)
      }

      resolve(userData)
    }, 1000)
  })
}

// Example with callback
getUserData(123, function (error, userData) {
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Callback User Data:', userData)
  }
})

// Example with Promise
getUserData(456)
  .then(function (userData) {
    console.log('Promise User Data:', userData)
  })
  .catch(function (error) {
    console.error('Promise Error:', error)
  })
