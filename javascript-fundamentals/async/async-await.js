async function fetchData() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/591f9854c5cbe314f7a7ad34');
    const data = await response.json();
    console.log("Cat fact: " + data.text);
    return data;
}

fetchData();