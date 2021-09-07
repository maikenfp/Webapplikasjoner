function longestWordInText() {
    let A = document.getElementById("tekst").textContent;
    let B = A.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < B.length; i++) {
      if (B[i] > longestWord) {
        longestWord = B[i];
      }
    }
    console.log(longestWord + " er det lengste ordet.");
  }
  
  let button = document.getElementById("button").addEventListener("click", longestWordInText);