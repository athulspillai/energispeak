import React, { useState } from 'react'

function Formula() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [formula, setFormula] = useState('');
    const [result, setResult] = useState(null);

    const calculateResult = () => {
        try {
            const formulaWithValues = formula
                .replace(/a/g, a)
                .replace(/b/g, b)
                .replace(/c/g, c);
                
            const calculatedResult = eval(formulaWithValues);
            setResult(calculatedResult);
        } catch (error) {
            setResult('Error in formula');
        }
    };



    return (
        <div>
            <h1>Formula Calculator</h1>
            <div>
                <label>
                    Number a:
                    <input
                        type="number"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Number b:
                    <input
                        type="number"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Number c:
                    <input
                        type="number"
                        value={c}
                        onChange={(e) => setC(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Formula:
                    <input
                        type="text"
                        value={formula}
                        onChange={(e) => setFormula(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calculateResult}>Calculate</button>
            {result !== null && (
                <div>
                    <h2>Result: {result}</h2>
                </div>
            )}

        </div>
    )
}

export default Formula