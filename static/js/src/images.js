function drawImage(context, image, dimensions) {
  context.drawImage(
    image,
    dimensions.x,
    dimensions.y,
    dimensions.width,
    dimensions.height
  );
}

function addUbuntuLogo(context, dimensions) {
  const ubuntuLogoImage = document.getElementById("ubuntu-logo");
  drawImage(context, ubuntuLogoImage, dimensions);
}

function addIllustration(context, illustrationUrl, dimensions) {
  const illustrationImage = new Image();

  illustrationImage.addEventListener("load", () => {
    drawImage(context, illustrationImage, dimensions);
  });

  illustrationImage.src = illustrationUrl;
}

export { addUbuntuLogo, addIllustration };
