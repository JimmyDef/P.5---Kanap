import getData from './utils.module.js'

let displayKanap = (modelKanap) => {
  let target = document.getElementById('items')
  let link = document.createElement('a')
  link.href = `./product.html?id=${modelKanap._id}`
  console.log('link', link)
  link.innerHTML = `<article>
            <img src="${modelKanap.imageUrl}" alt="${modelKanap.altTxt}">
            <h3 class="productName">${modelKanap.name}</h3>
            <p class="productDescription">${modelKanap.description}</p>
            </article>`
  target.append(link)
}
getData('http://127.0.0.1:3000/api/products')
  .then((value) => {
    console.log(value)
    value.map((kanap, idx) => {
      console.log(`mon canapé ${idx}`, kanap)
      displayKanap(kanap)
    })
  })

  .catch(function (err) {
    console.log('erreur', err)
    let items = document.getElementById('items')
    items.innerHTML =
      'Une erreur est survenue, veuillez réessayer ulterieurement.'
    items.style.fontSize = 'x-large'
  })
