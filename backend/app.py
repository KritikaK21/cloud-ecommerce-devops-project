from flask import Flask, send_from_directory
app = Flask(__name__, static_folder='frontend')

@app.route('/')
def home():
    return send_from_directory('frontend', 'index.html')

@app.route('/api/hello')
def api_hello():
    return {"message": "Hello from backend!"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
