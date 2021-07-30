import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'url';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDTO: TaskDTO) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => reject('Error en petición'), 2000);
    // });
    // return this.taskService.create(taskDTO);
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Something was wrong'), 5000);
    });
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
