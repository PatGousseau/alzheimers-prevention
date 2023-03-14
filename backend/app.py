from flask import Flask, request
from flask_cors import CORS

from parse_genome import AlzheimerRiskProfiler

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/run', methods=['POST'])
def run():
    file = request.files['file']
    if not file:
        return 'Error: file missing!'

    profiler = AlzheimerRiskProfiler(file)
    profiler.get_risk()

    ret = dict(
        risk_increase=profiler.risk_increase,
        apoe4genotype=profiler.apoe4genotype,
        risk_factors=profiler.risk_factors
    )
    return ret

if __name__ == '__main__':
    app.run(debug=True)
