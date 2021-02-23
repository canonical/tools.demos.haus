function drawImage(context, image, options) {
  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;

  let imageWidth = image.width;
  let imageHeight = image.height;
  let imageXPosition = 0;
  let imageYPosition = 0;

  const imageAspectRatio = imageHeight / imageWidth;

  imageWidth = (canvasWidth - options.textWidth) * 0.6;
  imageHeight = imageAspectRatio * imageWidth;

  if (options.orientation === "left") {
    imageXPosition = (canvasWidth - options.textWidth) / 2 - imageWidth / 2;
    imageYPosition = canvasHeight / 2 - imageHeight / 2;
  }

  if (options.orientation === "right") {
    imageXPosition =
      options.textWidth +
      (canvasWidth - options.textWidth) / 2 -
      imageWidth / 2;
    imageYPosition = canvasHeight / 2 - imageHeight / 2;
  }

  if (options.orientation === "bottom") {
    imageWidth = (canvasHeight - options.textHeight) * 0.7;
    imageHeight = imageAspectRatio * imageWidth;
    imageXPosition = canvasWidth / 2 - imageWidth / 2;
    imageYPosition =
      options.textHeight +
      (canvasHeight - options.textHeight) / 2 -
      imageHeight / 2;
  }

  const newImage = new Image();

  newImage.addEventListener("load", () => {
    context.drawImage(
      newImage,
      imageXPosition,
      imageYPosition,
      imageWidth,
      imageHeight
    );
  });

  newImage.src = image.src;
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

function addMicrosoftLogo(logoAlignment, context, dimensions) {
  let microsoftLogoImage;
  if (logoAlignment === "horizontal") {
    microsoftLogoImage = document.getElementById("microsoft-logo-horizontal");
  } else if (logoAlignment === "vertical") {
    microsoftLogoImage = document.getElementById("microsoft-logo-vertical");
  }

  context.drawImage(
    microsoftLogoImage,
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

export { addUbuntuLogo, addIllustration, addMicrosoftLogo };
