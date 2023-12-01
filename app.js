const getRandomGif = () => {
  const apiKey = "xXcNlWmBEO7LRyk91ausdjgseEEnjUkV";
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&limit=1`, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.data.images.original.url);
      changeImage(response.data.images.original.url);
      //refreshBtn(response.data.images.original.url);
      //console.log(response.data.images.original.url);
    });
};

const searchGifOnline = (search) => {
  const apiKey = "xXcNlWmBEO7LRyk91ausdjgseEEnjUkV";
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=1`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.data[0].images.original.url);
      changeImage(response.data[0].images.original.url);
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
