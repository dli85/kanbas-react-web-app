import Add from "../Add";
import ArrowFunction from "./Functions/ArrowFunctions";
import ES5Functions from "./Functions/ES5Functions";
import FunctionDestructing from "./Functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./Functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./Functions/ImpliedReturn";
import BooleanVariables from "./Variables/BooleanVariables";
import VariableTypes from "./Variables/VariableTypes";
import VariablesAndConstants
  from "./Variables/VariablesAndConstants";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToAndFromArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import FilterFunction from "./arrays/FilterFunction";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import ForLoops from "./arrays/ForLoops";
import JsonStringify from "./arrays/JSONStringify";
import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TerneryOperator from "./conditionals/TerneryOperator";
import Destructing from "./json/Destructing";
import House from "./json/House";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {
    console.log('Hello World!');

    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables />
          <IfElse />
          <TerneryOperator />
          <ES5Functions />
          <ArrowFunction />
          <ImpliedReturn />
          <FunctionParenthesisAndParameters />
          <WorkingWithArrays />
          <ArrayIndexAndLength />
          <AddingAndRemovingDataToFromArrays />
          <ForLoops />
          <MapFunction />
          <JsonStringify />
          <FindFunction />
          <FindIndex />
          <FilterFunction />
          <TemplateLiterals />
          <House />
          <Spreading />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript