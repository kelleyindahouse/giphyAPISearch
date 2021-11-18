
const test = () => {
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=LkjgCSv5Afgm1PFuRjJZ28InVp1uCBNQ&q=dog&limit=10").then(res => {
        const gifs = res.data.data
        let random = Math.floor(Math.random() * gifs.length)
        console.log(gifs)
        console.log(random)
        document.getElementById('showGifs').
        innerHTML= `
        <img src ='${gifs[random].images.original.url}'></img>
        `
    });
     
}
// .catch (err => console.log(err))
test();