import time

import redis
from flask import Flask, jsonify
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