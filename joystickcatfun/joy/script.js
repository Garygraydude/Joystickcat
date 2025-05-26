const gameImages = [
    "img/horizon.png.png",
    "img/knightjump.png",
    "img/TheSummit.jpg.png"
  ];
  
  let currentIndex = 0;
  
  const gameImage = document.getElementById('gameImage');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gameImages.length) % gameImages.length;
    updateImage();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gameImages.length;
    updateImage();
  });
  
  function updateImage() {
    gameImage.src = gameImages[currentIndex];
  }
  