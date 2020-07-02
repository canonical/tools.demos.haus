function createColorGradient(context, background, dimensions) {
  const backgroundColors = {
    grad: {
      start: "#2c001e",
      middle: "#772953",
      end: "#e95420",
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

function createWhiteGradient(context, dimensions) {
  context.fillStyle = "rgba(255, 255, 255, 0.1)";
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

function createLightGreyGradient(context, dimensions) {
  const gradient = context.createLinearGradient(
    0,
    0,
    dimensions.width,
    dimensions.height
  );

  gradient.addColorStop(0, "rgba(228, 228, 228, 0.54)");
  gradient.addColorStop(0.5, "rgba(228, 228, 228, 0.54)");

  context.globalAlpha = 0.05;
  context.fillStyle = gradient;
  context.rotate((-12 * Math.PI) / 180);
  context.fillRect(-250, 400, dimensions.width * 1.25, dimensions.height);
  context.rotate((12 * Math.PI) / 180);
}

function createMidGreyGradient(context) {
  const gradient = context.createLinearGradient(0, 0, 2000, 2000);

  gradient.addColorStop(0, "rgba(216, 216, 216, 0.54)");
  gradient.addColorStop(0.5, "rgba(216, 216, 216, 0.54)");

  context.globalAlpha = 0.05;
  context.fillStyle = gradient;
  context.rotate((50 * Math.PI) / 180);
  context.fillRect(600, -1000, 2000, 2000);
  context.rotate((-50 * Math.PI) / 180);
  context.globalAlpha = 1;
}

export {
  createColorGradient,
  createWhiteGradient,
  createLightGreyGradient,
  createMidGreyGradient,
};
