function drawImage(context, image, dimensions) {
  let imageWidth = image.width;
  let imageHeight = image.height;

  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;
  const illustrationAspectRatio = imageHeight / imageWidth;

  let illustrationWrapperWidth = canvasWidth;
  let illustrationWrapperHeight = canvasHeight;
  let illustrationOffsetLeft = 0;
  let illustrationOffsetTop = 0;

  if (dimensions.orientation === "left" || dimensions.orientation === "right") {
    illustrationWrapperWidth = canvasWidth / 2;
  }

  if (dimensions.orientation === "right") {
    illustrationOffsetLeft = illustrationWrapperWidth;
  }

  if (dimensions.orientation === "bottom") {
    illustrationWrapperHeight = canvasHeight / 2;
    imageWidth = illustrationWrapperHeight * 0.9;
    imageHeight = illustrationAspectRatio * imageWidth;
    illustrationOffsetTop = illustrationWrapperHeight;
  }

  if (imageWidth > illustrationWrapperWidth) {
    imageWidth = illustrationWrapperWidth * 0.8;
    imageHeight = illustrationAspectRatio * imageWidth;
  }

  dimensions.x =
    illustrationOffsetLeft + (illustrationWrapperWidth - imageWidth) / 2;

  dimensions.y =
    illustrationOffsetTop + (illustrationWrapperHeight - imageHeight) / 2;

  context.drawImage(image, dimensions.x, dimensions.y, imageWidth, imageHeight);
}

function addUbuntuLogo(context, dimensions) {
  const ubuntuLogoImage = document.getElementById("ubuntu-logo");
  context.drawImage(
    ubuntuLogoImage,
    dimensions.x,
    dimensions.y,
    dimensions.width,
    dimensions.height
  );
}

function addIllustration(context, illustrationUrl, dimensions) {
  const illustrationImage = new Image();

  illustrationImage.addEventListener("load", () => {
    drawImage(context, illustrationImage, dimensions);
  });

  illustrationImage.src = illustrationUrl;
}

export { addUbuntuLogo, addIllustration };
