function myFunc() {
  let textarea = document.getElementById("textareabox").value;
  let word = document.getElementById("word").value;

  if (textarea.includes(word)) {
    alert("bunday soz bor");
  } else {
    alert("bunday soz yoq");
  }
}

document.getElementById("btn").addEventListener("click", myFunc);



