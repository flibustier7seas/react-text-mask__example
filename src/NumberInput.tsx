import * as React from "react";

import MaskInput from "react-text-mask";

interface NumberInputProps {
  value?: number;
  maxValue?: number;
}

interface NumberInputState {
  value?: number;
}

export class NumberInput extends React.Component<
  NumberInputProps,
  NumberInputState
> {
  constructor(props: NumberInputProps) {
    super(props);

    this.state = { value: props.value };
  }

  public render() {
    const { maxValue } = this.props;
    const { value } = this.state;

    return (
      <MaskInput
        guide={false}
        mask={numberMask}
        pipe={maxValue ? createMaxNumberPipe(maxValue) : undefined}
        value={value}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: parseNumber(target.value) });
  };
}

const parseNumber = (value: string) => {
  if (value) {
    return parseInt(value, 10);
  }
  return undefined;
};

const numberMask = (inputValue: string): RegExp[] => {
  return inputValue.split("").map(_ => /\d/);
};

const createMaxNumberPipe = (maxValue: number) => {
  return (conformedValue: string) => {
    const value = parseNumber(conformedValue);
    return value && value > maxValue ? false : conformedValue;
  };
};
