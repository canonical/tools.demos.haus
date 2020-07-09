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
