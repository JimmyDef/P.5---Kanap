const getData = async (url) => {
  try {
    const res = await fetch(url)
    if (res.ok) {
      const result = await res.json()
      return result
    } else {
      throw new Error("ca s'est mal passé")
    }
  } catch (err) {
    console.log('error getData')
    return err
  }
}

export default getData
