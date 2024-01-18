import numpy as np
from flask import Flask, request
from flask_cors import CORS, cross_origin
from tensorflow import keras
import joblib

app = Flask(__name__)
CORS(app)

#model = keras.models.load_model('./forest_model')
model = keras.models.load_model('/Users/andrew/Repositories/chess/src/components/backend/model')

@cross_origin(supports_credentials=True)
@app.route('/predict', methods=['POST'])
def predict():
    fen = request.get_json()['fen']
    fen_vec = FENtoVEC(fen)
    # Ensure the input is in the correct format
    fen_vec = np.expand_dims(fen_vec, axis=-1)  # Add an extra dimension
    # Make a prediction
    prediction = model.predict([fen_vec])
    return {'prediction': prediction.tolist()}

def FENtoVEC (FEN):
    pieces = {"r":5,"n":3,"b":3.5,"q":9.5,"k":20,"p":1,"R":-5,"N":-3,"B":-3.5,"Q":-9.5,"K":-20,"P":-1}
    FEN = list(str(FEN.split()[0]))
    VEC = []
    for i in range(len(FEN)):
        if FEN[i] == "/":
            continue
        if FEN[i] in pieces:
            VEC.append(pieces[FEN[i]])
        else:
            em = [VEC.append(0) for i in range(int(FEN[i]))]
    VEC = np.array(VEC).reshape(8, 8)  # Reshape the 1D array to 2D (8, 8)
    return VEC

fen_vec = [FENtoVEC("rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR")]
fen_vec = np.expand_dims(fen_vec, axis=-1)
prediction = model.predict([fen_vec])
print(prediction)