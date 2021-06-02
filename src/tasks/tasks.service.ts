import { Injectable } from '@nestjs/common';
import {v4 as uuidV4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TASK_STATUS } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id == id);
    }

    createTask(createTaskDto: CreateTaskDto): Task{
        const {title, description} = createTaskDto;
        const task: Task = {
            id: uuidV4(),
            title,
            description,
            status: TASK_STATUS.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    updateTaskStatus(id: string, status: TASK_STATUS): Task{
        const task = this.getTaskById(id);
        if(task)
            task.status = status;
        return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        }
}
