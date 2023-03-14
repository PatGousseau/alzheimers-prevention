from flask import Flask, request

from parse_genome import AlzheimerRiskProfiler

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run():
    print('patrick')
    file = request.files['file']
    if not file:
        return 'Error: file missing!'

    print('patrick2')

    profiler = AlzheimerRiskProfiler(file)
    print('patrick3')
    profiler.get_risk()
    print('patrick4')

    ret = dict(
        risk_increase=profiler.risk_increase,
        apoe4genotype=profiler.apoe4genotype,
        risk_factors=profiler.risk_factors
    )
    print("alloooo")
    return ret

if __name__ == '__main__':
    app.run(debug=True)
