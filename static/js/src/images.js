function drawImage(context, image, options) {
  let imageWidth = image.width;
  let imageHeight = image.height;

  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;
  const illustrationAspectRatio = imageHeight / imageWidth;

  let illustrationWrapperWidth = canvasWidth;
  let illustrationWrapperHeight = canvasHeight;
  let illustrationOffsetLeft = 0;
  let illustrationOffsetTop = 0;

  if (options.orientation === "left" || options.orientation === "right") {
    illustrationWrapperWidth = canvasWidth / 2;
  }

  if (options.orientation === "right") {
    illustrationOffsetLeft = illustrationWrapperWidth;
  }

  if (options.orientation === "bottom") {
    illustrationWrapperHeight = canvasHeight / 2;
    imageWidth = illustrationWrapperHeight * 0.9;
    imageHeight = illustrationAspectRatio * imageWidth;
    illustrationOffsetTop = illustrationWrapperHeight;
  }

  if (imageWidth > illustrationWrapperWidth) {
    imageWidth = illustrationWrapperWidth * 0.8;
    imageHeight = illustrationAspectRatio * imageWidth;
  }

  const x =
    illustrationOffsetLeft + (illustrationWrapperWidth - imageWidth) / 2;

  const y =
    illustrationOffsetTop + (illustrationWrapperHeight - imageHeight) / 2;

  context.drawImage(image, x, y, imageWidth, imageHeight);
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

function addIllustration(context, options) {
  const illustrationImage = document.getElementById("illustration");
  drawImage(context, illustrationImage, options);
}

export { addUbuntuLogo, addIllustration };
