const target = document.getElementById("target");
target.addEventListener("click", function() {
  let element = document.getElementById("catCount").value;
  console.log(element);
  let cat = "";
  for (let i = 0; i < element; i++) {
    cat += "🐈";
  }
  document.getElementsByClassName("pink-box")[0].innerHTML=cat;
});
