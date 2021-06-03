import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TASK_STATUS } from "../task.constant";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TASK_STATUS.OPEN,
        TASK_STATUS.IN_PROGRESS,
        TASK_STATUS.DONE
    ]

    transform(value:any){
        value = value.toLowerCase();

        if(!this.isStatusValid(value))
            throw new BadRequestException(`"${value}" is an invalid status`);
        return value;
    }

    private isStatusValid(status: any){
        const index = this.allowedStatuses.indexOf(status);
        return index !== -1;
    }
}