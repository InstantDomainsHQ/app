# import sys, os
# print("path----------2: ", os.getcwd(), sys.path)
# sys.path.append(os.getcwd())
# print("path----------3: ", os.getcwd(), sys.path)
from flask import Flask, jsonify
from pois import *

app = Flask(__name__)

@app.route('/whois/<name>', methods=['GET'])
def whois(name):
  result = Pois().fetch(domain=name)
  data = {"result": result}
  return jsonify(data)

if __name__ == '__main__':
  app.run(port=8181)