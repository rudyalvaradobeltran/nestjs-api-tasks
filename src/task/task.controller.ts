import { Controller, Post, Get, Req, Param, Query, Body } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post(':id')
  method(@Param('id') id: string) {
    return { id };
  }

  @Get('done')
  method2(@Req() req: Request) {
    return 'method ' + req.method;
  }

  @Post()
  method3(@Query('id') id: string) {
    return { id };
  }

  @Post()
  method4(@Body() body: any) {
    return body;
  }
}
