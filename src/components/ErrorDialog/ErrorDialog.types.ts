export interface IErrorDialog {
  info?: string;
  homePath?: string;
  redirect?: (path: string) => void;
}
