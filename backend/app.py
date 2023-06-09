from flask import Flask, request, render_template
from flask_cors import CORS

from parse_genome import AlzheimerRiskProfiler

app = Flask(__name__)
CORS(app)#, resources={r"/*": {"origins": "http://127.0.0.1:8080"}})

@app.route('/ping')
def ping():
    return 'pong'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/ping_api_as_get')
def ping_api_as_get():
    return 'pong'

@app.route('/api/ping_api_as_post', methods=['POST'])
def ping_api_as_post():
    return 'pong'

@app.route('/api/analyze_genetics', methods=['POST'])
def analyze_genetics():
    # return {'running': 1}
    file = request.files['file']
    if not file:
        return 'Error: file missing!'

    profiler = AlzheimerRiskProfiler(file)
    profiler.get_risk()

    ret = dict(
        apoe_risk_ratio=profiler.apoe_risk_ratio,
        risk_ratio=profiler.risk_ratio,
        apoe_genotype=profiler.apoe_genotype,
        risk_factors=profiler.risk_factors,
        apoe_risk_factors=profiler.apoe_risk_factors,
        prs_percentile = profiler.prs_percentile,
        overall_risk_percentile = profiler.overall_risk_percentile,
        risk_percentile_with_intervention = profiler.risk_percentile_with_intervention,
        other_relevant_genes = profiler.other_genes,
        gender = profiler.gender,
    )
    return ret

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80, debug=True)
