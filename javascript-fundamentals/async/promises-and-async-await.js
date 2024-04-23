/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
function fetchData() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
      const result = await response.json()
      console.log('Random cat fact: ', result.text)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}
fetchData()
