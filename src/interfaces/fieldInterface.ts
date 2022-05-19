export default interface fieldInterface {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  icon?: () => string;
  value?: string;
  isReadonly?: boolean;
  events?: {
    click?: () => void;
    keydown?: (arg0?: any) => void;
    change?: (arg0?: any) => void;
    blur?: (arg0?: any) => void;
    focus?: (arg0?: any) => void;
  };
}
