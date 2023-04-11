import { NavigateFunction } from 'react-router-dom';

export interface IErrorDialog {
  redirect: NavigateFunction;
  info?: string;
  homePath?: string;
}
