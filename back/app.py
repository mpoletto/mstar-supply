from os import abort
import time
import json
import redis
from flask import Flask, jsonify, Response, request
import pprint
import mysql.connector

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def mercadoria():
    config = {
        'user': 'flask',
        'password': '9027',
        'host': 'db',
        'port': '3306',
        'database': 'mstar_supply'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM mercadoria')
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return results

@app.route('/')
def hello():
    count = get_hit_count()
    # mysql_data = jsonify({'Mercadorias': mercadoria()})
    data = {"viewed times": format(count), "test": "json", "mysql_data": mercadoria()}
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/mercadoria/save', methods=['POST'])
def save_mercadoria():
    
    # str = pprint.pformat(request.environ, depth=5)
    # json_str = json.dumps(jsonify({request.json}))
    # return Response(str, mimetype="application/json")
    return { request.json['nome'] }, 201

    if not request.json or not'mercadoria' in request.json:
        return jsonify({'message': 'no json or mercadoria field'}), 400
    mercadoria = {
        'registro': request.json['mercadoria']['registro'],
        'nome': request.json['mercadoria']['nome'],
        'fabricante': request.json['mercadoria']['fabricante'],
        'tipo': request.json['mercadoria']['tipo'],
        'descricao': request.json['mercadoria']['descricao']
    }
    cursor = mysql.connection.cursor(dictionary=True)
    query = "INSERT INTO mercadoria (registro, nome, fabricante, tipo, descricao) VALUES (%(registro)s, %(nome)s, %(fabricante)s, %(tipo)s, %(descricao)s)"
    cursor.execute(query, mercadoria)
    mysql.connection.commit()
    cursor.close()
    
    return jsonify({'mercadoria': mercadoria}), 201

app.run(debug=True)