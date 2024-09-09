from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


def get_db_connection():
    return mysql.connector.connect(
        user="root", password="S1a2i3$$", host="localhost", database="institution_db"
    )


@app.route("/login", methods=["POST", "OPTIONS"])
def login():
    if request.method == "OPTIONS":  # Handle preflight request
        return jsonify({"status": "OK"}), 200

    data = request.get_json()  # Ensure JSON parsing
    institution = data.get("institution")
    roll_number = data.get("roll_number")
    password = data.get("password")

    if not institution or not roll_number or not password:
        return jsonify({"error": "Missing required fields"}), 400

    table_name = f"{institution}_users"

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = f"SELECT * FROM {table_name} WHERE roll_number = %s"
    cursor.execute(query, (roll_number,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if user and user["password"] == password:  # Directly compare plain text passwords
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401


if __name__ == "__main__":
    app.run(debug=True)
