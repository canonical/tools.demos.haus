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
  var canvasfacebook = document.getElementById("facebook");
  var ctxfacebook = canvasfacebook.getContext("2d");

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

  addIllustration(ctxfacebook, options.illustrationUrl, {
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

  // FACEBOOK MOBILE
  var canvasfacebookmobile = document.getElementById("facebookmobile");
  var ctxfacebookmobile = canvasfacebookmobile.getContext("2d");

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

  addIllustration(ctxfacebookmobile, options.illustrationUrl, {
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

  // FACEBOOK916
  var canvasfacebook916 = document.getElementById("facebook916");
  var ctxfacebook916 = canvasfacebook916.getContext("2d");

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

  addIllustration(ctxfacebook916, options.illustrationUrl, {
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

  // TWITTER
  var canvastwitter = document.getElementById("twitter");
  var ctxtwitter = canvastwitter.getContext("2d");

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

  addIllustration(ctxtwitter, options.illustrationUrl, {
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

  // TWITTERSQUARE
  var canvastwittersquare = document.getElementById("twittersquare");
  var ctxtwittersquare = canvastwittersquare.getContext("2d");

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

  addIllustration(ctxtwittersquare, options.illustrationUrl, {
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
}

export { generateBannerCanvas };
