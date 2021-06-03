import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TASK_STATUS } from "./task.constant";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TASK_STATUS;
}