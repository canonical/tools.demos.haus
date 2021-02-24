from canonicalwebteam.flask_base.app import FlaskBase
from flask import render_template, request, Response
from requests import get
from html import unescape

import os

app = FlaskBase(
    __name__,
    "social-banners",
    template_folder="../templates",
    static_folder="../static",
    template_404="404.html",
    template_500="500.html",
)


@app.route("/")
def index():
    banner_data = {}

    if "title" in request.args:
        banner_data["title"] = unescape(request.args["title"])

    if "subtitle" in request.args:
        banner_data["subtitle"] = unescape(request.args["subtitle"])

    if "illustration_url" in request.args:
        banner_data["illustration_url"] = request.args["illustration_url"]

    if "background" in request.args:
        banner_data["background"] = request.args["background"]

    if "logo" in request.args:
        banner_data["logo"] = request.args["logo"]

    if request.args.get("image"):
        image_url = request.args["image"]
        image = get(f"{image_url}").content
        filename, file_extension = os.path.splitext(image_url)
        mimetype = "image/svg+xml"

        if file_extension == ".png":
            mimetype = "image/png"

        return Response(image, mimetype=mimetype)
    else:
        return render_template("index.html", banner_data=banner_data)
