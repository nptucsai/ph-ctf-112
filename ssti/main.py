from flask import Flask, render_template_string, request, send_file
 
app = Flask(__name__)
 
@app.route('/', methods=['GET'])
def root():
  return render_template_string("""
    <form method="POST">
        <input type="text" name="name" placeholder="Your name">
        <button>submit</button>
    </form>
    <p><a href="/source">Source code</a></p>
  """)

@app.route("/", methods=["POST"])
def welcome_message():
    name = request.form.get('name')
    return render_template_string("<p>Hello, " + name + "</p>")

@app.route("/source")
def source():
    return send_file(__file__, mimetype="text/plain")
 
 
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)