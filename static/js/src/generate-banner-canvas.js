import { addText } from "./text";
import { addUbuntuLogo, addIllustration } from "./images";
import {
  createColorGradient,
  createWhiteGradient,
  createLightGreyGradient,
  createMidGreyGradient,
} from "./gradients";

function generateBannerCanvas(options) {
  // FACEBOOK
  var canvasfacebook = document.getElementById("facebook");
  var ctxfacebook = canvasfacebook.getContext("2d");

  createColorGradient(ctxfacebook, options.background, {
    width: 1200,
    height: 628,
  });

  createWhiteGradient(ctxfacebook, {
    width: 1200,
    height: 628,
  });

  createLightGreyGradient(ctxfacebook, {
    width: 1200,
    height: 628,
  });

  createMidGreyGradient(ctxfacebook);

  addUbuntuLogo(ctxfacebook, {
    x: 100,
    y: 219.8,
    width: 143,
    height: 32,
  });

  addIllustration(ctxfacebook, options.illustrationUrl, {
    x: 720,
    y: 192,
    width: 244,
    height: 250,
  });

  addText(ctxfacebook, {
    fontWeight: 100,
    fontSize: 46,
    text: options.title,
    x: 100,
    y: 314.8,
    maxWidth: 400,
    lineHeight: 48,
  });

  addText(ctxfacebook, {
    fontWeight: 300,
    fontSize: 20.8979,
    text: options.subtitle,
    x: 100,
    y: 420.8,
    maxWidth: 400,
    lineHeight: 30,
  });

  // FACEBOOK MOBILE
  var canvasfacebookmobile = document.getElementById("facebookmobile");
  var ctxfacebookmobile = canvasfacebookmobile.getContext("2d");

  createColorGradient(ctxfacebookmobile, options.background, {
    width: 1080,
    height: 1080,
  });

  createWhiteGradient(ctxfacebookmobile, {
    width: 1080,
    height: 1080,
  });

  createLightGreyGradient(ctxfacebookmobile, {
    width: 1080,
    height: 1080,
  });

  createMidGreyGradient(ctxfacebookmobile);

  addUbuntuLogo(ctxfacebookmobile, {
    x: 100,
    y: 378,
    width: 143,
    height: 32,
  });

  addIllustration(ctxfacebookmobile, options.illustrationUrl, {
    x: 648,
    y: 418,
    width: 244,
    height: 250,
  });

  addText(ctxfacebookmobile, {
    fontWeight: 100,
    fontSize: 46,
    text: options.title,
    x: 100,
    y: 473,
    maxWidth: 400,
    lineHeight: 48,
  });

  addText(ctxfacebookmobile, {
    fontWeight: 300,
    fontSize: 20.8979,
    text: options.subtitle,
    x: 100,
    y: 579,
    maxWidth: 400,
    lineHeight: 30,
  });

  // FACEBOOK916
  var canvasfacebook916 = document.getElementById("facebook916");
  var ctxfacebook916 = canvasfacebook916.getContext("2d");

  createColorGradient(ctxfacebook916, options.background, {
    width: 400,
    height: 500,
  });

  createWhiteGradient(ctxfacebook916, {
    width: 400,
    height: 500,
  });

  createLightGreyGradient(ctxfacebook916, {
    width: 400,
    height: 500,
  });

  createMidGreyGradient(ctxfacebook916);

  addUbuntuLogo(ctxfacebook916, {
    x: 30,
    y: 175,
    width: 143,
    height: 32,
  });

  addIllustration(ctxfacebook916, options.illustrationUrl, {
    x: 30,
    y: 50,
    width: 102,
    height: 100,
  });

  addText(ctxfacebook916, {
    fontWeight: 100,
    fontSize: 36,
    text: options.title,
    x: 30,
    y: 265,
    maxWidth: 320,
    lineHeight: 48,
  });

  addText(ctxfacebook916, {
    fontWeight: 300,
    fontSize: 20.8979,
    text: options.subtitle,
    x: 30,
    y: 366,
    maxWidth: 320,
    lineHeight: 30,
  });

  // TWITTER
  var canvastwitter = document.getElementById("twitter");
  var ctxtwitter = canvastwitter.getContext("2d");

  createColorGradient(ctxtwitter, options.background, {
    width: 800,
    height: 418,
  });

  createWhiteGradient(ctxtwitter, {
    width: 800,
    height: 418,
  });

  createLightGreyGradient(ctxtwitter, {
    width: 800,
    height: 418,
  });

  createMidGreyGradient(ctxtwitter);

  addUbuntuLogo(ctxtwitter, {
    x: 30,
    y: 146.3,
    width: 143,
    height: 32,
  });

  addIllustration(ctxtwitter, options.illustrationUrl, {
    x: 480,
    y: 87,
    width: 244,
    height: 250,
  });

  addText(ctxtwitter, {
    fontWeight: 100,
    fontSize: 36,
    text: options.title,
    x: 30,
    y: 236.3,
    maxWidth: 400,
    lineHeight: 48,
  });

  addText(ctxtwitter, {
    fontWeight: 300,
    fontSize: 20.8979,
    text: options.subtitle,
    x: 30,
    y: 337.3,
    maxWidth: 400,
    lineHeight: 30,
  });

  // TWITTERSQUARE
  var canvastwittersquare = document.getElementById("twittersquare");
  var ctxtwittersquare = canvastwittersquare.getContext("2d");

  createColorGradient(ctxtwittersquare, options.background, {
    width: 800,
    height: 800,
  });

  createWhiteGradient(ctxtwittersquare, {
    width: 800,
    height: 800,
  });

  createLightGreyGradient(ctxtwittersquare, {
    width: 800,
    height: 800,
  });

  createMidGreyGradient(ctxtwittersquare);

  addUbuntuLogo(ctxtwittersquare, {
    x: 30,
    y: 280,
    width: 143,
    height: 32,
  });

  addIllustration(ctxtwittersquare, options.illustrationUrl, {
    x: 480,
    y: 278,
    width: 244,
    height: 250,
  });

  addText(ctxtwittersquare, {
    fontWeight: 100,
    fontSize: 36,
    text: options.title,
    x: 30,
    y: 370,
    maxWidth: 400,
    lineHeight: 48,
  });

  addText(ctxtwittersquare, {
    fontWeight: 300,
    fontSize: 20.8979,
    text: options.subtitle,
    x: 30,
    y: 471,
    maxWidth: 400,
    lineHeight: 30,
  });
}

export { generateBannerCanvas };
