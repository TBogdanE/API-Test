const _APIKEY = "xXcNlWmBEO7LRyk91ausdjgseEEnjUkV";

const getRandomGif = () => {
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${_APIKEY}&limit=1`, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      changeImage(response.data.images.original.url);
    })
    .catch(() => {
      console.error("Server not available");
    });
};

const searchGifOnline = (search) => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${_APIKEY}&limit=1`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      changeImage(response.data[0].images.original.url);
    })
    .catch(() => {
      console.error("Server not available!");
    });
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
