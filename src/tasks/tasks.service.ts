import { Injectable } from '@nestjs/common';
import {v4 as uuidV4 } from 'uuid';
import { Task, TASK_STATUS } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    createTask(title: string, description: string): Task{
        const task: Task = {
            id: uuidV4(),
            title,
            description,
            status: TASK_STATUS.OPEN
        }

        this.tasks.push(task);
        return task;
    }
}
