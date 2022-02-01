const dt = new Date();
const saat = dt.getHours();
const dakika = dt.getMinutes();
const saniye = dt.getSeconds();
const gun = dt.getDay()-1;
let gunum;
console.log(dt);
let isim = prompt("isim giriniz!")
let isimsecme = document.querySelector('#isim');
isimsecme.innerHTML = isim;
let tarih=document.querySelector("#tarih");
switch(gun) {
    case 1:
      gunum="pazartesi";
      break;
    case 2:
        gunum="salı";
      break;
    case 3:
        gunum="çarşamba";
      break;
    case 4:
        gunum="persembe";
      break;
     case 5:
        gunum="cuma";
      break;
    case 6:
        gunum="cumartesi";
      break;
    default:
      gunum="pazar";
  }
tarih.innerHTML = `${saat}:${dakika}:${saniye}  ${gunum}`;
