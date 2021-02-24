function handleDownloads() {
  const downloadAllButton = document.getElementById("download-all-button");
  const downloadButtons = document.querySelectorAll(".js-download-button");

  downloadAllButton.addEventListener("click", () => {
    downloadButtons.forEach((downloadButton) => {
      setTimeout(() => {
        downloadButton.click();
      }, 0);
    });
  });
}

handleDownloads();

function setupDownloadLinks(options, canvas, linkId) {
  setTimeout(() => {
    const downloadUrl = canvas.toDataURL("image/jpeg");
    const downloadLink = document.getElementById(linkId);
    downloadLink.href = downloadUrl;
    downloadLink.download = `${options.product} | ${options.partner} | ${options.messaging} | ${options.background} | ${options.language} | ${canvas.width}x${canvas.height}`;
  }, 0);
}

export { setupDownloadLinks };
