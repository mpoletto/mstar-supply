import pymysql

db = pymysql.connect(host="localhost", user="root", password="2790", database="mstar_supply")
cursor = db.cursor()
sql = "SELECT * FROM mercadoria"
cursor.execute(sql)
results = cursor.fetchall()

print(results)