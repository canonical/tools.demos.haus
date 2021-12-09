import { addIllustration } from "./images";
import decodeHtmlEntities from "./utils/decodeHtmlEntities";

function setFont(context, fontStyle) {
  context.font = fontStyle;
  context.fillStyle = "#ffffff";
}

function getTextLines(context, text, textWidth) {
  // To preserve line breaks in the URL, the strings are URI
  // encoded in the template and need to be decoded,
  // then we build an array of deliberately placed line breaks.
  const newLines = decodeURIComponent(text).split(/\r\n|<br>|<br\/>|<br \/>/);
  const lines = [];

  // Iterate over the array of line breaks and check that each
  // line isn't wider than the given banner. If it is, break
  // the line into multiple lines as necessary.
  newLines.forEach((newLine) => {
    const words = newLine.split(" ");
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
  });

  return lines;
}

function setContent(context, options) {
  const titleFontStyle = `normal ${options.title.fontWeight} ${options.title.fontSize}px Ubuntu`;
  const subtitleFontStyle = `normal ${options.subtitle.fontWeight} ${options.subtitle.fontSize}px Ubuntu`;

  setFont(context, titleFontStyle);

  const titleText = options.title.text.replace("&amp;", "&");

  const titleLines = getTextLines(
    context,
    decodeHtmlEntities(titleText),
    options.width
  );

  setFont(context, subtitleFontStyle);

  const subtitleText = options.subtitle.text.replace("&amp;", "&");

  const subtitleLines = getTextLines(
    context,
    decodeHtmlEntities(subtitleText),
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

  if (options.imageOrientation) {
    addIllustration(context, {
      orientation: options.imageOrientation,
      textHeight: totalTextHeight + options.y - options.subtitle.lineHeight,
      textWidth: options.width,
      logo: options.logo,
    });
  }
}

export { setContent };
