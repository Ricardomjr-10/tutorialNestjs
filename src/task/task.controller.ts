import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {} //importar task service

  @Post()
  create(@Body() task: TaskDto) {
    //pegar os dados da dto
    this.taskService.create(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto {
    return this.taskService.findById(id);
  }

  @Put()
  update(@Body() task: TaskDto) {
    this.taskService.update(task);
  }
}
