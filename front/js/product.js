import getData from './utils.module.js'

const pageLocation = window.location.href
// console.log('url de la page', pageLocation)
const urlProduct = new URL(pageLocation)
// console.log(urlProduct)
const productId = urlProduct.searchParams.get('id')
// console.log(productId)

getData(`http://127.0.0.1:3000/api/products/${productId}`)
  .then((kanap) => {
    console.log(kanap)
    document.getElementById('title').innerText = kanap.name
    document.getElementById('price').innerText = kanap.price
    document.getElementById('description').innerText = kanap.description
    let targetImg = document.querySelector('.item__img')
    let image = document.createElement('img')
    image.src = kanap.imageUrl
    console.log('url image', kanap.imageUrl)
    targetImg.appendChild(image)

    for (let i of kanap.colors) {
      let targetSelect = document.getElementById('colors')
      let option = document.createElement('option')
      targetSelect.appendChild(option).innerText = i
      option.setAttribute('value', `i`)
    }
  })

  .catch(function (err) {
    console.log('erreur GRAVE', err)
    let items = document.getElementById('test')
    items.innerHTML =
      'Une erreur est survenue, veuillez réessayer ulterieurement.'
    items.style.fontSize = 'x-large'
  })
