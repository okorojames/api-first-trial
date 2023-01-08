// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const apiData = document.querySelector('#apiData')
const loading = document.querySelector('.loading')

async function makeRequest() {
  loading.style.display = "block"
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  let content = document.createElement("div")
  data.forEach(jsondata => {
    content.innerHTML +=
    `
    <div class="content">
      <div class="title"> <span style="font-weight:bold; margin-right:7px">Title</span> ${jsondata.title}</div>
      <div class="body"> <span style="font-weight:bold; margin-right:7px">Body</span> ${jsondata.body}</div>
    </div>
    `
  })
  if (!response.ok) {
    apiData.append(
      `
      <div class="content">
        ${response.statusText}
      </div>
    `)
  } else {
    loading.style.display = "none"
    content.classList.add('apiData')
    apiData.append(content)
  }
  console.log(data)
}

makeRequest()