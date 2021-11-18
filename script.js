// JSON API //

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const name = document.getElementById('name').value
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      const pokemon = res.data
      console.log(pokemon)

      if (pokemon.name) {
        document.getElementById('pokemon').innerHTML = `
          <h1>${pokemon.name}</h1>
          <h2>List of  2 Moves: ${pokemon.moves[0].move.name}, ${pokemon.moves[1].move.name}</h2>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} picture">
        `
      } else {
        document.getElementById('pokemon').innerHTML = `
          <h3> No Pokemon Found </h4> `
      }
      document.getElementById('name').value = '';
    })
    .catch(err => console.log(err))
})