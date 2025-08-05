from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to fetch from Flask API

# Load datasets
prices_df = pd.read_csv("data/BrentOilPrices.csv")
events_df = pd.read_csv("data/oil_market_events.csv")
change_points_df = pd.read_csv("data/change_points.csv")

@app.route("/api/prices")
def get_prices():
    return jsonify(prices_df.to_dict(orient="records"))

@app.route("/api/events")
def get_events():
    return jsonify(events_df.to_dict(orient="records"))

@app.route("/api/change-points")
def get_change_points():
    return jsonify(change_points_df.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)
