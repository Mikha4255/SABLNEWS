const mainTitle = document.getElementById("mainTitle");
const mainText = document.getElementById("mainText");
const mainImage = document.getElementById("mainImage");
const items = document.querySelectorAll(".item");
const resetButton = document.getElementById("resetButton");

const originalData = {
  title: mainTitle.textContent,
  text: mainText.innerHTML,
  img: mainImage.src
};

items.forEach(item => {
  item.addEventListener("click", () => {
    const newTitle = item.dataset.title;
    const newText = item.dataset.text;
    const newImg = item.dataset.img;

    mainTitle.textContent = newTitle;
    mainText.innerHTML = newText;
    mainImage.src = newImg;
  });
});

resetButton.addEventListener("click", () => {
  mainTitle.textContent = originalData.title;
  mainText.innerHTML = originalData.text;
  mainImage.src = originalData.img;
});
 