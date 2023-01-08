fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    res.json()
    console.log(res)
  })
  // .then(data => console.log(data))