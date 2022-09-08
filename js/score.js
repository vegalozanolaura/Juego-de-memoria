function addScore(actualScore) {
    if (Number.isInteger(actualScore)) {
      return actualScore + 10;
    } else {
      console.error("No valido");
    }
  }
  
  function refreshScore(actualScore) {
    if (Number.isInteger(actualScore)) {
      document.querySelector("#puntos-total").innerText = actualScore;
    } else {
      console.error("No valido");
    }
  }