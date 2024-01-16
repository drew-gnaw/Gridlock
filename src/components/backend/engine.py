from flask import Flask, request
from flask_cors import CORS, cross_origin
from tensorflow import keras

app = Flask(__name__)
CORS(app)

model = keras.models.load_model('model')

@cross_origin(supports_credentials=True)
@app.route('/predict', methods=['POST'])
def predict():
    fen = request.get_json()['fen']
    prediction = model.predict(fen)
    return {'prediction': prediction.tolist()}