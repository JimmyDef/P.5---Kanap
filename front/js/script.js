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

fetch('http://127.0.0.1:3000/api/products')
  // .then(res => res.json())
  // .then(res2 => console.log(res2));

  .then(function (res) {
    if (res.ok) {
      return res.json()
    }
  })
  .then((value) => {
    console.log(value)
    value.map((kanap, idx) => {
      console.log(`mon kanapé ${idx}`, kanap)
      displayKanap(kanap)
    })
  })

  .catch(function (err) {
    // Une erreur est survenue, veuillez réessayer ulterieurement.
  })

let pageLocation = window.location.href
console.log('url de la page', pageLocation)
const url = new URL(pageLocation)
console.log(url)

// import function fetch()

console.log('4')
