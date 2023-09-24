import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useSelector } from 'react-redux';

const Three = () => {

  const questionData = useSelector(state => state.data).data;
  console.log(questionData);
  const data = `\\("If \\int_{-\\frac1{\\sqrt{3}}}^{\\frac1{\\sqrt{3}}} \\frac{x^4}{1-x^4} \\cos ^{-1} \\frac{2 x}{1+x^2} d x=-\\frac{\\pi}{\\sqrt{3}}-\\frac{\\pi}{4} \\log \\left(\\frac{\\sqrt{3}-1}{\\sqrt{3}+1}\\right)+k$, then $k=?$)"
  \\)`;
  console.log(questionData?.[0]?.[0]?.Question);
  let str = questionData?.[0]?.[0]?.Question;
  str = str.replaceAll('\\', '\\\\');
  console.log(str);
  const data2 = `\\(${str}\\)`
  return (
    <MathJaxContext>
      <div className='container'>
        {/* " If $(1+x)^n=C_0+C_1 x+C_2 x^2+\\ldots  C_n x^n$. Prove that $C_0C_1+C_1C_2+.....C_{n-1}C_n=\\frac{2n!}{(n-1)!(n+1)!}$" */}

        <MathJax> The question is:
          {String.raw`This is a $$f(x) = (1+x)^n = C_0 + C_1x$$.`}
          {`${data2}`}
        </MathJax>
      </div>
    </MathJaxContext>
  );
};

export default Three;
