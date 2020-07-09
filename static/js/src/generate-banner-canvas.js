import { setContent } from "./content";
import { addUbuntuLogo } from "./images";
import { createSuru } from "./suru";
import { setupDownloadLinks } from "./handle-downloads";

function generateBannerCanvas(options) {
  // FACEBOOK
  const canvasfacebook = document.getElementById("facebook");
  const ctxfacebook = canvasfacebook.getContext("2d");

  createSuru(ctxfacebook, options.background, { width: 1200, height: 628 });

  addUbuntuLogo(ctxfacebook, {
    x: 70,
    y: 52,
    width: 241,
    height: 64,
  });

  setContent(ctxfacebook, {
    width: 560,
    x: 70,
    y: 210,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 64,
      lineHeight: 74,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 32,
    },
    imageOrientation: "right",
  });

  setupDownloadLinks(canvasfacebook, "facebook-download-button");

  // FACEBOOK MOBILE
  const canvasfacebookmobile = document.getElementById("facebookmobile");
  const ctxfacebookmobile = canvasfacebookmobile.getContext("2d");

  createSuru(ctxfacebookmobile, options.background, {
    width: 1080,
    height: 1080,
  });

  addUbuntuLogo(ctxfacebookmobile, {
    x: 70,
    y: 52,
    width: 295,
    height: 79,
  });

  setContent(ctxfacebookmobile, {
    width: 800,
    x: 70,
    y: 230,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 76,
      lineHeight: 90,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 38,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(canvasfacebookmobile, "facebook-mobile-download-button");

  // FACEBOOK916
  const canvasfacebook916 = document.getElementById("facebook916");
  const ctxfacebook916 = canvasfacebook916.getContext("2d");

  createSuru(ctxfacebook916, options.background, {
    width: 400,
    height: 500,
  });

  addUbuntuLogo(ctxfacebook916, {
    x: 43,
    y: 24,
    width: 139,
    height: 37,
  });

  setContent(ctxfacebook916, {
    width: 330,
    x: 43,
    y: 110,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 36,
      lineHeight: 42,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(canvasfacebook916, "facebook-9-16-download-button");

  // TWITTER
  const canvastwitter = document.getElementById("twitter");
  const ctxtwitter = canvastwitter.getContext("2d");

  createSuru(ctxtwitter, options.background, {
    width: 800,
    height: 418,
  });

  addUbuntuLogo(ctxtwitter, {
    x: 420,
    y: 40,
    width: 170,
    height: 45,
  });

  setContent(ctxtwitter, {
    width: 360,
    x: 420,
    y: 165,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 42,
      lineHeight: 48,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "left",
  });

  setupDownloadLinks(canvastwitter, "twitter-wide-download-button");

  // TWITTERSQUARE
  const canvastwittersquare = document.getElementById("twittersquare");
  const ctxtwittersquare = canvastwittersquare.getContext("2d");

  createSuru(ctxtwittersquare, options.background, {
    width: 800,
    height: 800,
  });

  addUbuntuLogo(ctxtwittersquare, {
    x: 70,
    y: 50,
    width: 223,
    height: 59,
  });

  setContent(ctxtwittersquare, {
    width: 630,
    x: 70,
    y: 190,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 58,
      lineHeight: 68,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 19,
      lineHeight: 32,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(canvastwittersquare, "twitter-square-download-button");
}

export { generateBannerCanvas };
