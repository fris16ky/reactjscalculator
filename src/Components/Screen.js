import { Textfit } from "react-textfit";
import "./Screen.css";

//Textfit is used in order to automatically resize the input as the user inputs data
//The longer the output on the screen, the more the values shrink (once you get past the 7 character limit
//that the screen has)

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
