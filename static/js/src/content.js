import { addIllustration } from "./images";

function setFont(context, fontStyle) {
  context.font = fontStyle;
  context.fillStyle = "#ffffff";
}

function getTextLines(context, text, textWidth) {
  const words = text.split(" ");
  const lines = [];

  let line = "";

  for (let i = 0, ii = words.length; i < ii; i++) {
    const testLine = line + words[i] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > textWidth && i > 0) {
      lines.push(line);
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);

  return lines;
}

function setContent(context, options) {
  const titleFontStyle = `normal ${options.title.fontWeight} ${options.title.fontSize}px Ubuntu`;
  const subtitleFontStyle = `normal ${options.subtitle.fontWeight} ${options.subtitle.fontSize}px Ubuntu`;

  setFont(context, titleFontStyle);

  const titleLines = getTextLines(context, options.title.text, options.width);

  setFont(context, subtitleFontStyle);

  const subtitleLines = getTextLines(
    context,
    options.subtitle.text,
    options.width
  );

  let totalTitleTextHeight = options.title.lineHeight * titleLines.length;
  let totalSubtitleTextHeight =
    options.subtitle.lineHeight * subtitleLines.length;
  let totalTextHeight = totalTitleTextHeight + totalSubtitleTextHeight;
  let yPos = options.y;

  if (
    options.imageOrientation === "left" ||
    options.imageOrientation === "right"
  ) {
    yPos =
      context.canvas.height / 2 -
      totalTextHeight / 2 +
      options.title.lineHeight / 2;
  }

  setFont(context, titleFontStyle);

  titleLines.forEach((line) => {
    context.fillText(line, options.x, yPos);
    yPos += options.title.lineHeight;
  });

  setFont(context, subtitleFontStyle);

  subtitleLines.forEach((line) => {
    context.fillText(line, options.x, yPos);
    yPos += options.subtitle.lineHeight;
  });

  addIllustration(context, {
    orientation: options.imageOrientation,
    textHeight: totalTextHeight + options.y - options.subtitle.lineHeight,
    textWidth: options.width,
  });
}

export { setContent };
