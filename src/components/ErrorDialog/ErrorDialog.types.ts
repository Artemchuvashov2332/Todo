import { PropsWithChildren } from 'react';

export interface IErrorDialog extends PropsWithChildren {
  homePath?: string;
  redirect?: (path: string) => void;
}
