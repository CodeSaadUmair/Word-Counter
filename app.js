const areaElement = document.getElementById("txt");

const characterElement = document.getElementById("total-count");

const wordElement = document.getElementById("word-count");

const spaceElement = document.getElementById("space-count");

areaElement.addEventListener("input", () => {
  updateCount();
});

updateCount();

function updateCount() {
  
  characterElement.innerText = areaElement.value.length;

  const spaceCount = areaElement.value.split(' ').length - 1;
  spaceElement.innerText = areaElement.value.length-spaceCount;

  const words = areaElement.value.trim().split(/\s+/);
  wordElement.innerText = words.filter((word) => word.length > 0).length;
}
