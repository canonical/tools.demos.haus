function createColorGradient(context, background, dimensions) {
  const backgroundColors = {
    grad: {
      start: "#2c001e",
      middle: "#772953",
      end: "#b94e47",
    },
    dark: {
      start: "#111111",
      middle: "#333333",
      end: "#4e4e4e",
    },
    k8s: {
      start: "#326de6",
      middle: "#173d8b",
      end: "#173d8b",
    },
    aqua: {
      start: "#2b585d",
      middle: "#47919a",
      end: "#47919a",
    },
    snapcraft: {
      start: "#83bfa1",
      middle: "#83bfa1",
      end: "#2d6162",
    },
  };

  const gradient = context.createLinearGradient(
    0,
    0,
    dimensions.width,
    dimensions.height
  );

  const backgroundColor = backgroundColors[background] || backgroundColors.grad;

  gradient.addColorStop(0, backgroundColor.start);
  gradient.addColorStop(0.42, backgroundColor.middle);
  gradient.addColorStop(0.94, backgroundColor.end);

  context.globalAlpha = 1;
  context.fillStyle = gradient;
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createSuruLayerOne(context, dimensions) {
  context.fillStyle = "rgba(255, 255, 255, 0.03)";
  context.rotate((10 * Math.PI) / 180);
  context.fillRect(
    0,
    -dimensions.height,
    dimensions.width * 2,
    dimensions.height
  );
  context.rotate((-10 * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createSuruLayerTwo(context, dimensions) {
  context.fillStyle = "rgba(255, 255, 255, 0.05)";

  let rotateAngle = 25;
  let rectHeight = dimensions.height / 1.2;

  if (dimensions.width > dimensions.height) {
    rotateAngle = 10;
  }

  if (dimensions.height > dimensions.width) {
    rectHeight = dimensions.height / 1.4;
  }

  context.rotate((-rotateAngle * Math.PI) / 180);
  context.fillRect(
    -dimensions.width,
    rectHeight,
    dimensions.width * 2,
    dimensions.height
  );
  context.rotate((rotateAngle * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createSuruLayerThree(context, dimensions) {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";

  let rotateAngle = 40;
  let rectX = -dimensions.width;
  let rectY = 0;
  let rectWidth = dimensions.width * 2;
  let rectHeight = dimensions.height;

  if (dimensions.width === dimensions.height) {
    rotateAngle = 55;
    rectY = -dimensions.height / 2.5;
  }

  if (dimensions.height > dimensions.width) {
    rotateAngle = 60;
    rectX = -dimensions.width * 1.25;
    rectY = -dimensions.width / 1.75;
  }

  context.rotate((-rotateAngle * Math.PI) / 180);
  context.fillRect(rectX, rectY, rectWidth, rectHeight);
  context.rotate((rotateAngle * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

export {
  createColorGradient,
  createSuruLayerOne,
  createSuruLayerTwo,
  createSuruLayerThree,
};
