const pageLocation = window.location.href
// console.log('url de la page', pageLocation)
const url = new URL(pageLocation)
console.log(url)
const productId = url.searchParams.get('id')
console.log(productId)

fetch(`http://127.0.0.1:3000/api/products/${productId}`)
  .then(function (res) {
    if (res.ok) {
      return res.json()
    }
  })
  .then((value) => {
    // console.log(value)
    value.map(kanap) => {

    };
    
  })
