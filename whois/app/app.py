from flask import Flask, jsonify
import os
from pois import *

app = Flask(__name__)
PROXY_HOST = os.environ["PROXY_HOST"]
PROXY_PORT = os.environ["PROXY_PORT"]
PROXY_USERNAME = os.environ["PROXY_USERNAME"]
PROXY_PASSWORD = os.environ["PROXY_PASSWORD"]

proxy_info = {
  'proxy_type': 'socks5',
  'addr': PROXY_HOST,
  'port': PROXY_PORT,
  'username': PROXY_USERNAME,
  'password': PROXY_PASSWORD
}

def parse_whois(whois_result):
  # registry_result = whois_result.get("registry_result")
  # registrar_result = whois_result.get("registrar_result")
  # print("registry_result: ", registry_result)
  # print("registrar_result: ", registrar_result)

  return {
    "data": whois_result
  }


@app.route('/whois/<domain_name>', methods=['GET'])
def whois(domain_name):
  data = {}
  try:
    # p = Pois(timeout=60, proxy_info=proxy_info)
    p = Pois(timeout=60)
    result = p.fetch(domain=domain_name)
    data = parse_whois(result.get())
  except Exception as err:
    print(err)
  # print(data)
  return jsonify(data)

if __name__ == '__main__':
  app.run(port=8181)