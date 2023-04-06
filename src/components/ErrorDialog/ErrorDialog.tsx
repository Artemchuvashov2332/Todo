import React from 'react';
import { IErrorDialog } from './ErrorDialog.types';

export function ErrorDialog({ homePath, redirect, children }: IErrorDialog) {
  const onClickThisHandler = () => window.location.reload();

  const onClickHomeHandler = () => {
    if (redirect && homePath) redirect(homePath);
  };

  return (
    <div className="text-center fs-3">
      {children}
      <div>
        <button className="w-100 my-1 btn btn-danger" onClick={onClickThisHandler}>
          Попробовать ещё раз
        </button>
        {homePath && redirect && (
          <button className="w-100 my-1 btn btn-primary" onClick={onClickHomeHandler}>
            На главную
          </button>
        )}
      </div>
    </div>
  );
}
