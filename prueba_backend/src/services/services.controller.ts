// src/services/services.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  getAll(): Service[] {
    return this.servicesService.findAll();
  }

  @Post()
  create(@Body() serviceData: Omit<Service, 'id'>): Service {
    return this.servicesService.create(serviceData);
  }
}
    