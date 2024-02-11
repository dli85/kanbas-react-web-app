function FunctionParenthesisAndParameters() {
    const square  = (a: number = 2) => a * a;
    const plusOne = (a: number = 3) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
         <h3>Parenthesis and parameters</h3>
         twoSquared = {twoSquared}<br />
         square(2) = {square()}<br />
         threePlusOne = {threePlusOne}<br />
         plusOne(3) = {plusOne()} <br />
        </>
       )
     
}

export default FunctionParenthesisAndParameters;