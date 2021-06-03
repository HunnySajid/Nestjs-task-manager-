import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TASK_STATUS } from './task.constant';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
    constructor( @InjectRepository(TaskRepository) 
                private taskRepository: TaskRepository){

    }

    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
        return await this.taskRepository.getTasks(filterDto);
    }

    async getTaskById(id: number): Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if(!found)
            throw new NotFoundException(`Task with id "${id}" not found`);
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskRepository.createTask(createTaskDto);
    }

    async updateTaskStatus(id: number, status: TASK_STATUS): Promise<Task>{
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }

    async deleteTask(id: number): Promise<void>{
       const result = await this.taskRepository.delete(id);
       
       if(result.affected === 0)
        throw new NotFoundException(`Task with id "${id}" not found`);

    }
}
