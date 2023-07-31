import Wrapper from "./calculator/Wrapper";
import Screen from "./calculator/Screen";
import ButtonBox from "./calculator/ButtonBox";
import Button from "./calculator/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Wrapper>
      <Screen value={0}/>  
      <ButtonBox>
        {
          btnValues.flat().map((button, index)=>{
            return (
              <Button 
                  key={index}
                  value={button}
                  onClick={() => console.log(button)}
                  className={button === '=' ? 'equals' :' '}
              />
            )
          })
        }
      </ButtonBox> 
    </Wrapper>
  );
}

export default App;
