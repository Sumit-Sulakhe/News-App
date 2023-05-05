
const maincontainer = document.querySelector(".main-container")
console.log("maincontainer")

const input = document.getElementById("searchInput")
const btn = document.querySelector("#searchButton")
const search = document.querySelector(".search")
search.addEventListener("submit", (e) => {
  e.preventDefault()
  getdata(input.value);
  console.log(input.value);
})
btn.addEventListener("click", () => {

  console.log("clicked")
  // console.log(input.value)
  getdata(input.value);

})

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("content").style.display = "block";
});

function getdata(value) {
  console.log(value);
  let data = fetch(`https://newsapi.org/v2/everything?q=${value}&from=2023-04-28&sortBy=publishedAt&apiKey=9d1af46c5e114527b63d53649fde84aa`)

  data.then(response => response.json())
    .then((data1) => {
      maincontainer.innerHTML = ""
      data1.articles.map((ele, index, arr) => {
        let container = document.createElement("div")
        container.classList.add("container")
        container.innerHTML = ` <h3>${ele.title}</h3>
        <img src="${ele.urlToImage}">
        <a href="${ele.url}" style="text-decoration: none;">Read More</a>
        `
        document.getElementById("loader").style.display = "none";
        maincontainer.appendChild(container)

      })
    })
}
getdata("india")
