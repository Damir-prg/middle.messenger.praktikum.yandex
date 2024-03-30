import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block';
import { TEvents } from './types';

interface Props {
  text?: string;
  events?: Partial<TEvents>;
}

describe('Block', () => {
  let PageClass: typeof Block<Props>;

  before(() => {
    class Page extends Block<Props> {
      constructor(props: Props) {
        super({
          ...props,
        });
      }

      protected render(): string {
        return `<div>
                    <button id="test-button">{{text}}</button>
                </div>`;
      }
    }

    PageClass = Page;
  });

  // написать тест на то что комопнент создается с переданными пропсами
  it('Конструктор класса Block', () => {
    const text = 'Hello';
    const pageComponent = new PageClass({ text });

    const spanText = pageComponent.element?.querySelector('#test-button')?.innerHTML;

    expect(spanText).to.be.eq(text);
  });

  it('Реактивность пропсов', () => {
    const text = 'submit';
    const pageComponent = new PageClass({ text: 'just button' });

    pageComponent.setProps({ text });
    const spanText = pageComponent.element?.querySelector('#test-button')?.innerHTML;

    expect(spanText).to.be.eq(text);
  });

  it('Передаваемые события навешиваются на компонент', () => {
    const handlerStub = sinon.stub();
    const pageComponent = new PageClass({
      events: {
        click: handlerStub,
      },
    });

    const event = new MouseEvent('click');
    pageComponent.element?.dispatchEvent(event);

    expect(handlerStub.calledOnce).to.be.true;
  });

  it('Компонент вызывает dispatchComponentDidMount метод', () => {
    const clock = sinon.useFakeTimers();
    const pageComponent = new PageClass();

    const spyCDM = sinon.spy(pageComponent, 'componentDidMount');

    const element = pageComponent.getContent();
    document.body.append(element!);
    clock.next();

    expect(spyCDM.calledOnce).to.be.true;
  });
});
