import * as React from "react";
import { render } from "react-dom";

import MaskInput from "react-text-mask";

import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { PhoneInput } from "./PhoneInput";

// https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
//
class App extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <span>MaskInput: </span>
          <MaskInput
            guide={false}
            mask={defaultMask}
            //pipe={value => false} //TypeError: Cannot read property 'length' of undefined
            value="test"
          />
        </div>
        <div>
          <span>TextInput: </span>
          <TextInput mask={numberMask} value="100" />
        </div>
        <div>
          <span>NumberInput: </span>
          <NumberInput value={0} maxValue={1000} />
        </div>
        <div>
          <span>PhoneInput: </span>
          <PhoneInput />
        </div>
      </div>
    );
  }
}

const defaultMask = (inputValue: string): RegExp[] => {
  return inputValue.split("").map(_ => /.*/);
};

const MaxNumber = 1000;

const numberMask = (inputValue: string): RegExp[] => {
  if (Number.parseInt(inputValue, 10) > MaxNumber) {
    console.log(inputValue);
    // return [/1/, /0/, /0/, /0/];
    return MaxNumber.toString()
      .split("")
      .map(x => new RegExp(`[0-${x}]`));
  }
  return inputValue.split("").map(_ => /\d/);
};

render(<App />, document.getElementById("root"));
