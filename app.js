const _APIKEY = "xXcNlWmBEO7LRyk91ausdjgseEEnjUkV";

const getRandomGif = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${_APIKEY}&limit=1`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    changeImage(data.data.images.original.url);
  } catch (error) {
    console.error("Server not available:", error);
  }
};

const searchGifOnline = async (search) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${_APIKEY}&limit=1`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    changeImage(data.data[0].images.original.url);
  } catch (error) {
    console.error("Server not available!");
  }
};

const changeImage = (link) => {
  const giphy = document.getElementById("giphy");
  giphy.src = link;
};

const searchGif = () => {
  const inputGif = document.getElementById("gif-input");
  const submitBtn = document.getElementById("gif-search-btn");

  const submitBtnHandler = (event) => {
    event.preventDefault();
    searchGifOnline(inputGif.value);
  };
  submitBtn.addEventListener("click", submitBtnHandler);
};

const randomBtn = () => {
  const btn = document.getElementById("new-image-btn");
  btn.addEventListener("click", getRandomGif);
};

document.addEventListener("DOMContentLoaded", () => {
  searchGif();
  getRandomGif();
  randomBtn();
});
