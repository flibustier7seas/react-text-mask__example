import * as React from "react";

import MaskInput from "react-text-mask";

interface PhoneInputProps {
  value?: string;
  mask?: RegExp[];
}

interface PhoneInputState {
  value: string;
}

const defaultMask = [/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/];

export class PhoneInput extends React.Component<
  PhoneInputProps,
  PhoneInputState
> {
  constructor(props: PhoneInputProps) {
    super(props);

    this.state = { value: props.value || "12345678" };
  }

  public render() {
    const { value } = this.state;
    const { mask = defaultMask } = this.props;

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
