from flask import Flask
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route("/api/test", methods=['GET'])
def test():

    return {"message" : "Api started successfully"}


if __name__ == "__main__" :
    app.run(debug=True)

