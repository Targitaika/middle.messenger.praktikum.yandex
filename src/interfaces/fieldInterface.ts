import { EventWithNameAndValue } from '@pages/profile/profile';

interface EventWithKey extends EventWithNameAndValue {
  key: string;
}

export default interface fieldInterface {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: (() => string) | string;
  value?: string;
  isReadonly?: boolean;
  events?: {
    click?: () => void;
    keypress?: (e?: EventWithKey) => void;
    keydown?: (e?: EventWithKey) => void;
    change?: (e?: EventWithNameAndValue) => void;
    blur?: (e?: EventWithNameAndValue) => void;
    focus?: (e?: EventWithNameAndValue) => void;
  };
}
