const url = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();
//console.log(xhr);

//xhr.onreadystatechange = () => {
//console.log(xhr.readyState);
//};

xhr.onload = function () {
  var result = JSON.parse(xhr.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].flags);
  }
};