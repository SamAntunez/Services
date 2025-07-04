// src/services/services.service.ts
import { Injectable } from '@nestjs/common';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  private services: Service[] = [
    {
      id: 1,
      customerName: 'Ana',
      serviceType: 'Limpieza',
      scheduledAt: new Date('2025-07-01T10:00:00'),
      price: 100,
      status: 'completed',
    },
    {
      id: 2,
      customerName: 'Luis',
      serviceType: 'Reparación',
      scheduledAt: new Date('2025-07-02T12:00:00'),
      price: 150,
      status: 'pending',
    },
    {
      id: 3,
      customerName: 'Carlos',
      serviceType: 'Electricidad',
      scheduledAt: new Date('2025-07-03T09:30:00'),
      price: 200,
      status: 'completed',
    },
    {
      id: 4,
      customerName: 'María',
      serviceType: 'Jardinería',
      scheduledAt: new Date('2025-07-04T15:00:00'),
      price: 80,
      status: 'cancelled',
    },
    {
      id: 5,
      customerName: 'Javier',
      serviceType: 'Pintura',
      scheduledAt: new Date('2025-07-05T11:00:00'),
      price: 300,
      status: 'pending',
    },
    {
      id: 6,
      customerName: 'Sofía',
      serviceType: 'Carpintería',
      scheduledAt: new Date('2025-07-06T13:30:00'),
      price: 250,
      status: 'completed',
    },
    {
      id: 7,
      customerName: 'Roberto',
      serviceType: 'Cerrajería',
      scheduledAt: new Date('2025-07-07T08:00:00'),
      price: 120,
      status: 'completed',
    },
    {
      id: 8,
      customerName: 'Laura',
      serviceType: 'Plomería',
      scheduledAt: new Date('2025-07-08T14:45:00'),
      price: 180,
      status: 'pending',
    },
    {
      id: 9,
      customerName: 'Miguel',
      serviceType: 'Calefacción',
      scheduledAt: new Date('2025-07-09T10:15:00'),
      price: 400,
      status: 'cancelled',
    },
    {
      id: 10,
      customerName: 'Valentina',
      serviceType: 'Aire Acondicionado',
      scheduledAt: new Date('2025-07-10T17:00:00'),
      price: 350,
      status: 'completed',
    },
  ];

  findAll(): Service[] {
    return this.services;
  }

  create(service: Omit<Service, 'id'>): Service {
    const newService = {
      id: this.services.length + 1,
      ...service,
    };
    this.services.push(newService);
    return newService;
  }
}
