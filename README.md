# Passantheon

Welcome to the repository for Passantheon, a chess engine created using Create React App, Flask, and TensorFlow.

## Overview

Passantheon is a chess engine that uses a combination of a minimax algorithm and a neural network to analyze possible board states as Forsyth-Edwards Notation (FENs). The neural network is built with TensorFlow and has been trained on 400,000 positions and validated on 10,000 positions. A unique characteristic of EnPassantEngine is its affinity for the en passant move in chess, adding a unique twist to its gameplay.

<img width="510" alt="Screenshot 2024-01-24 at 5 14 50 PM" src="https://github.com/drew-gnaw/Passantheon/assets/115036225/1ed35559-7fa7-435f-8d93-7f3afab3acf7">

<img width="274" alt="Screenshot 2024-01-24 at 5 15 58 PM" src="https://github.com/drew-gnaw/Passantheon/assets/115036225/600561a5-cb35-4003-adad-397a20ad78e9">

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- TensorFlow

### Usage

Start the frontend server with ```npm run start```. This should run the React app on localhost:3000.

To use the Neural Network, run the backend Flask API with \
```export FLASK_APP=engine```\
```flask run```. \
The frontend communicates with this API to fetch the Neural Network's evaluations.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Contact

If you have any questions, please feel free to ask me for more details. You can reach me at andrewzlwang@outlook.com
