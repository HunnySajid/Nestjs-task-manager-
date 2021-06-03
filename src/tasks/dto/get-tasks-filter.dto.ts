import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TASK_STATUS } from "../task.constant";

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TASK_STATUS.OPEN, TASK_STATUS.IN_PROGRESS, TASK_STATUS.DONE])
    status: TASK_STATUS;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}