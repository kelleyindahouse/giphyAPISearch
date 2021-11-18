// JSON API //


localStorage.setItem('gif', JSON.stringify(gifs));
const data = JSON.parse(localStorage.getItem('gif'));



const test = () => {
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=LkjgCSv5Afgm1PFuRjJZ28InVp1uCBNQ&q=dog")
    .then(res => {
        console.log(res);
    });
    alert("check console for api test");
}

test();
