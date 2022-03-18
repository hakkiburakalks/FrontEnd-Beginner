let kodluyoruz_content = document.querySelector("#kodluyoruz-content");

let userName = prompt("Lütfen İsminizi Giriniz");

let info = document.querySelector("#info");

info.innerHTML = `Merhaba, ${userName}! Hoş geldin!`;


let date = new Date();
let dateNow = date.toUTCString();
let dateHTML = document.querySelector("#date-html");

dateHTML.innerHTML = `${dateNow} tarihinde Kodluyoruz   Frontend Web Development Patikası'nın Javascript bölümü  1.Ödevindesiniz `;