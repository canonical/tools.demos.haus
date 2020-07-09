import { setText } from "./text";
import { addUbuntuLogo, addIllustration } from "./images";
import {
  createColorGradient,
  createSuruLayerOne,
  createSuruLayerTwo,
  createSuruLayerThree,
} from "./gradients";

function generateBannerCanvas(options) {
  // FACEBOOK
  const canvasfacebook = document.getElementById("facebook");
  const ctxfacebook = canvasfacebook.getContext("2d");

  createColorGradient(ctxfacebook, options.background, {
    width: 1200,
    height: 628,
  });

  createSuruLayerOne(ctxfacebook, {
    width: 1200,
    height: 628,
  });

  createSuruLayerTwo(ctxfacebook, {
    width: 1200,
    height: 628,
  });

  createSuruLayerThree(ctxfacebook, {
    width: 1200,
    height: 628,
  });

  addUbuntuLogo(ctxfacebook, {
    x: 70,
    y: 52,
    width: 241,
    height: 64,
  });

  addIllustration(ctxfacebook, {
    orientation: "right",
  });

  setText(ctxfacebook, {
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
  });

  const facebookDownloadUrl = canvasfacebook.toDataURL("image/jpeg");
  const facebookDownloadLink = document.getElementById(
    "facebook-download-button"
  );
  facebookDownloadLink.href = facebookDownloadUrl;

  // FACEBOOK MOBILE
  const canvasfacebookmobile = document.getElementById("facebookmobile");
  const ctxfacebookmobile = canvasfacebookmobile.getContext("2d");

  createColorGradient(ctxfacebookmobile, options.background, {
    width: 1080,
    height: 1080,
  });

  createSuruLayerOne(ctxfacebookmobile, {
    width: 1080,
    height: 1080,
  });

  createSuruLayerTwo(ctxfacebookmobile, {
    width: 1080,
    height: 1080,
  });

  createSuruLayerThree(ctxfacebookmobile, {
    width: 1080,
    height: 1080,
  });

  addUbuntuLogo(ctxfacebookmobile, {
    x: 70,
    y: 52,
    width: 295,
    height: 79,
  });

  addIllustration(ctxfacebookmobile, {
    orientation: "bottom",
  });

  setText(ctxfacebookmobile, {
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
  });

  const facebookMobileDownloadUrl = canvasfacebookmobile.toDataURL(
    "image/jpeg"
  );
  const facebookMobileDownloadLink = document.getElementById(
    "facebook-mobile-download-button"
  );
  facebookMobileDownloadLink.href = facebookMobileDownloadUrl;

  // FACEBOOK916
  const canvasfacebook916 = document.getElementById("facebook916");
  const ctxfacebook916 = canvasfacebook916.getContext("2d");

  createColorGradient(ctxfacebook916, options.background, {
    width: 400,
    height: 500,
  });

  createSuruLayerOne(ctxfacebook916, {
    width: 400,
    height: 500,
  });

  createSuruLayerTwo(ctxfacebook916, {
    width: 400,
    height: 500,
  });

  createSuruLayerThree(ctxfacebook916, {
    width: 400,
    height: 500,
  });

  addUbuntuLogo(ctxfacebook916, {
    x: 43,
    y: 24,
    width: 139,
    height: 37,
  });

  addIllustration(ctxfacebook916, {
    orientation: "bottom",
  });

  setText(ctxfacebook916, {
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
  });

  const facebook916DownloadUrl = canvasfacebook916.toDataURL("image/jpeg");
  const facebook916DownloadLink = document.getElementById(
    "facebook-9-16-download-button"
  );
  facebook916DownloadLink.href = facebook916DownloadUrl;

  // TWITTER
  const canvastwitter = document.getElementById("twitter");
  const ctxtwitter = canvastwitter.getContext("2d");

  createColorGradient(ctxtwitter, options.background, {
    width: 800,
    height: 418,
  });

  createSuruLayerOne(ctxtwitter, {
    width: 800,
    height: 418,
  });

  createSuruLayerTwo(ctxtwitter, {
    width: 800,
    height: 418,
  });

  createSuruLayerThree(ctxtwitter, {
    width: 800,
    height: 418,
  });

  addUbuntuLogo(ctxtwitter, {
    x: 420,
    y: 40,
    width: 170,
    height: 45,
  });

  addIllustration(ctxtwitter, {
    orientation: "left",
  });

  setText(ctxtwitter, {
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
  });

  const twitterWideDownloadUrl = canvastwitter.toDataURL("image/jpeg");
  const twitterWideDownloadLink = document.getElementById(
    "twitter-wide-download-button"
  );
  twitterWideDownloadLink.href = twitterWideDownloadUrl;

  // TWITTERSQUARE
  const canvastwittersquare = document.getElementById("twittersquare");
  const ctxtwittersquare = canvastwittersquare.getContext("2d");

  createColorGradient(ctxtwittersquare, options.background, {
    width: 800,
    height: 800,
  });

  createSuruLayerOne(ctxtwittersquare, {
    width: 800,
    height: 800,
  });

  createSuruLayerTwo(ctxtwittersquare, {
    width: 800,
    height: 800,
  });

  createSuruLayerThree(ctxtwittersquare, {
    width: 800,
    height: 800,
  });

  addUbuntuLogo(ctxtwittersquare, {
    x: 70,
    y: 50,
    width: 223,
    height: 59,
  });

  addIllustration(ctxtwittersquare, {
    orientation: "bottom",
  });

  setText(ctxtwittersquare, {
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
  });

  const twitterSquareDownloadUrl = canvastwittersquare.toDataURL("image/jpeg");
  const twitterSquareDownloadLink = document.getElementById(
    "twitter-square-download-button"
  );
  twitterSquareDownloadLink.href = twitterSquareDownloadUrl;
}

export { generateBannerCanvas };
