import Block from './Component';

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('Root not found');
  }
  component.dispatchComponentDidMount();
  // console.log('1', root.innerHTML);
  root.innerHTML = '';

  // console.log(component);
  root.append(component.getContent()!);
  // console.log('3', root.innerHTML);
}
