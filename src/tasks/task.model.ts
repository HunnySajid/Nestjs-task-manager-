export interface Task {
id: string;
title: string;
description: string;
status: TASK_STATUS;
}

export enum TASK_STATUS {
    OPEN = 'open',
    IN_PROGRESS = 'in_progress',
    DONE = 'done'
}