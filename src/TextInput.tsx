import * as React from "react";

import MaskInput from "react-text-mask";

export type Mask = (string | RegExp)[];
export type MaskFunction = (inputValue: string) => Mask;

interface TextInputProps {
  value?: string;
  mask?: Mask | MaskFunction;
}

interface TextInputState {
  value: string;
}
export class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);

    this.state = { value: props.value || "" };
  }

  public render() {
    const { value } = this.state;
    const { mask } = this.props;

    return (
      <MaskInput
        guide={false}
        mask={mask}
        value={value}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: target.value });
  };
}
