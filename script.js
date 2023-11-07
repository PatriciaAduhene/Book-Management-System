let form = document.getElementById("form");
let table = document.getElementById("table-section");
let book = JSON.parse(localStorage.getItem("books"))||[];



form.addEventListener("submit" , (e) =>{
  e.preventDefault ();
  let FormData={
    title:form.title.value,
    author:form.author.value,
    isbn:form.isbn.value,
    genre:form.genre.value,
  }
  let tr = document.createElement("tr");
    tr.innerHTML= `
     
    <td>${FormData.title}</td>
    <td>${FormData.author}</td>
    <td>${FormData.isbn}</td>
    <td>${FormData.genre}</td>
    `
    table.appendChild(tr)
    form.reset()
    book.push(FormData)
    localStorage.setItem("books",JSON.stringify(book))

});

document.addEventListener("DOMContentLoaded")