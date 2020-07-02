function setText(context, options) {
  // create title
  context.font = `normal ${options.title.fontWeight} ${options.title.fontSize}px Ubuntu`;
  context.fillStyle = "#ffffff";

  const title = options.title.text;
  const titleWords = title.split(" ");

  let titleX = options.x;
  let titleY = options.y;
  let titleLine = "";
  let numberOfTitleLines = 1;

  for (let n = 0; n < titleWords.length; n++) {
    const titleTestLine = titleLine + titleWords[n] + " ";
    const titleMetrics = context.measureText(titleTestLine);
    const titleTestWidth = titleMetrics.width;

    if (titleTestWidth > options.width && n > 0) {
      context.fillText(titleLine, titleX, titleY);
      numberOfTitleLines++;
      titleLine = titleWords[n] + " ";
      titleY += options.title.lineHeight;
    } else {
      titleLine = titleTestLine;
    }
  }

  context.fillText(titleLine, titleX, titleY);

  // create subtitle
  context.font = `normal ${options.subtitle.fontWeight} ${options.subtitle.fontSize}px Ubuntu`;
  context.fillStyle = "#ffffff";

  const subtitle = options.subtitle.text;
  const subtitleWords = subtitle.split(" ");

  let subtitleY = numberOfTitleLines * options.title.lineHeight + options.y;
  let subtitleLine = "";

  for (let n = 0; n < subtitleWords.length; n++) {
    const subtitleTestLine = subtitleLine + subtitleWords[n] + " ";
    const subtitleMetrics = context.measureText(subtitleTestLine);
    const subtitleTestWidth = subtitleMetrics.width;

    if (subtitleTestWidth > options.width && n > 0) {
      context.fillText(subtitleLine, options.x, subtitleY);
      subtitleLine = subtitleWords[n] + " ";
      subtitleY += options.subtitle.lineHeight;
    } else {
      subtitleLine = subtitleTestLine;
    }
  }

  context.fillText(subtitleLine, titleX, subtitleY);
}

export { setText };
