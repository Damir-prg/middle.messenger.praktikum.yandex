import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { TRegexResult } from 'shared/types/utilities';

export interface IInputProps {
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  name?: string;
  classes?: string;
  placeholder?: string;
  error?: string;
  events?: Partial<TEvents>;
  defaultValue?: string;
}

type Ref = {
  input: HTMLInputElement;
  error: HTMLDivElement;
};

export default class Input extends Block<IInputProps, Ref> {
  constructor(props: IInputProps) {
    super(props);

    if (props?.defaultValue) {
      this.refs.input.value = props.defaultValue;
    }
  }

  public validate(callback: (value: string) => TRegexResult): boolean {
    if (!this.value()) {
      this.setError('Пустое поле');
      return false;
    }
    const result = callback(this.value());
    if (result.result) {
      this.setError('');
      return true;
    }
    this.setError(result.message);
    return false;
  }

  public value() {
    return this.refs.input.value;
  }

  public reset() {
    this.refs.input.value = '';
  }

  public setError(error: string) {
    this.refs.error.innerText = error;
  }

  protected render(): string {
    const { classes, placeholder, type, name } = this.props;
    return `
              <div class="input">
                  <input
                      autocomplete="off"
                      type="${type || 'text'}"
                      name="${name || ''}"
                      class="input__element ${classes || ''}"
                      placeholder="${placeholder}"
                      ref="input"
                  />
                  <label class="input__label">${placeholder}</label>
                  <div class="input__error" ref="error"></div>
              </div>
          `;
  }
}
