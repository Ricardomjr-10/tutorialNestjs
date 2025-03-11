import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {} //importar task service

  @Post()
  async create(@Body() task: TaskDto): Promise<TaskDto> {
    //pegar os dados da dto
    return await this.taskService.create(task);
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<TaskDto> {
    return this.taskService.findById(id);
  }

  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[] {
    return this.taskService.findAll(params);
  }

  @Put()
  update(@Body() task: TaskDto) {
    this.taskService.update(task);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
