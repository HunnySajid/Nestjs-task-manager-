import { TASK_STATUS } from "../task.model";

export class GetTasksFilterDto {
    status: TASK_STATUS;
    search: string;
}