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
    console.log(targetImg)
    let image = document.createElement('img')
    image.src = kanap.imageUrl
    console.log('url image', kanap.imageUrl)
    targetImg.appendChild(image)
  })

  .catch(function (err) {
    console.log('erreur', err)
    // Une erreur est survenue, veuillez réessayer ulterieurement.
  })
