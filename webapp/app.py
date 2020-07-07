from canonicalwebteam.flask_base.app import FlaskBase
from flask import render_template, request, Response
from requests import get

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
    return render_template("index.html", banner_data=request.args)


@app.route("/fetch/<path:path>")
def proxy(path):
    image = get(f"{path}").content
    filename, file_extension = os.path.splitext(path)
    mimetype = "image/svg+xml"

    if file_extension == ".png":
        mimetype = "image/png"

    return Response(image, mimetype=mimetype)
