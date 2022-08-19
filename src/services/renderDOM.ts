import Block from './Component';

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('Root not found');
  }
  console.log('component', component);
  if (component.dispatchComponentDidMount) {
    component.dispatchComponentDidMount();
  }
  root.innerHTML = '';
  if (component.getContent) {
    root.append(component.getContent()!);
  }
}
