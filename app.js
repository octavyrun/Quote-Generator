const btn = document.getElementById("button");
const content = document.querySelector(".card-content");

btn.addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "quotes.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const obj = JSON.parse(this.responseText);
      //   console.log(obj);
      //   console.log(`Response Text: ${this.responseText}`);
      //   console.log(obj.quotes[1]);
      let randomQuote = Math.floor(Math.random() * obj.quotes.length);
      console.log(randomQuote);
      Object.keys(obj).forEach((quote, index) => {
        content.innerHTML = `<h1 class="message white-text center-align">${obj[quote][randomQuote].msg}</h1>`;
      });
    }
  };

  xhr.send();
}
