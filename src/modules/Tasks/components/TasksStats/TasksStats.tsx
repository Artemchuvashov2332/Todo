import React from 'react';
import { observer } from 'mobx-react';
import { taskStoreInstance } from '../../store/index';
import { Loader } from 'components/index';

const TasksStatsProto = () => {
  const { tasksStats, isLoader } = taskStoreInstance;
  return (
    <div className="d-flex w-100 justify-content-between">
      <div>
        Total:
        <Loader isLoading={isLoader} variant="dot">
          <span className="badge bg-secondary">{tasksStats.total}</span>
        </Loader>
      </div>
      <div>
        Important:
        <Loader isLoading={isLoader} variant="dot">
          <span className="badge bg-secondary">{tasksStats.important}</span>
        </Loader>
      </div>
      <div>
        Done:
        <Loader isLoading={isLoader} variant="dot">
          <span className="badge bg-secondary">{tasksStats.done}</span>
        </Loader>
      </div>
    </div>
  );
};

export const TasksStats = observer(TasksStatsProto);
