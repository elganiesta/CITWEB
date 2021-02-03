// Les elements dyawli
let memeImages = document.getElementsByName("meme");
let textTopInput = document.getElementById("top-text-input");
let textBottomInput = document.getElementById("bottom-text-input");
let form = document.getElementById("form");
let generatedMeme = document.getElementById("generated-meme");

const generateMeme = (event) => {
  event.preventDefault();

  let textTop = textTopInput.value;
  let textBottom = textBottomInput.value;
  let imageSrc;

  memeImages.forEach((memeImage) => {
    if (memeImage.checked) {
      switch (memeImage.value) {
        case "1":
          imageSrc = "./img/badluckbrian.jpg";
          break;
        case "2":
          imageSrc = "./img/goodguygreg.jpg";
          break;
        case "3":
          imageSrc = "./img/overlyattachedgf.jpg";
          break;
        case "4":
          imageSrc = "./img/whatifitoldyou.jpg";
          break;
        default:
          break;
      }
    }
  });

  // La generation dyal lmeme ta3i
  let meme = `
          <p class="text-meme text-meme-top">${textTop}</p>
          <img src=${imageSrc} alt="" />
          <p class="text-meme text-meme-bottom">${textBottom}</p>
  `;
  generatedMeme.innerHTML = meme;
};

form.addEventListener("submit", (e) => generateMeme(e));
