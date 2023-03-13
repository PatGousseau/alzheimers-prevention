from flask import Flask, request

from parse_genome import AlzheimerRiskProfiler

app = Flask(__name__)

@app.route('/run')
def run():
    filename = request.args.get('filename')
    if not filename:
        return 'Error: filename parameter missing'

    profiler = AlzheimerRiskProfiler(filename)
    profiler.get_risk()

    ret = dict(
        risk_increase=profiler.risk_increase,
        apoe4genotype=profiler.apoe4genotype,
        risk_factors=profiler.risk_factors
    )
    
    return ret

if __name__ == '__main__':
    app.run(debug=True)
