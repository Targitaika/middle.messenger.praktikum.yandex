export default interface fieldInterface {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  icon?: (any) => string;
  value?: string;
  isReadonly?: boolean;
}
