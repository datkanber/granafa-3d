from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # We pass the Grafana URL to the template so it's easy to change later
    # Note: I updated the port to 3009 based on your docker-compose config
    grafana_url = "http://localhost:3009/d-solo/ad8c4jb/3d7?orgId=1&from=1769736357333&to=1769757957333&timezone=browser&panelId=panel-1&__feature.dashboardSceneSolo=true"
    
    return render_template('index.html', iframe_url=grafana_url)

if __name__ == '__main__':
    # Running on port 5000 (Flask default)
    app.run(debug=True, port=5000)