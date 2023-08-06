import { ClientesService } from 'src/service/clientes.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { clientes } from 'src/entity/clientes';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los clientes' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: clientes })
    async findAll(): Promise<clientes[]> {
        return this.clientesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtiene un cliente' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: clientes })
    async findOne(@Param('id') id: string): Promise<clientes> {
        return this.clientesService.findOne(id);
    }

    @Get('buscar/:buscar')
    @ApiOperation({ summary: 'Busca un clientes por su nombre, telefono y email' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: clientes })
    async Buscarvarios(@Param('buscar') buscar: string): Promise<clientes[]> {
        return this.clientesService.flitrosCliente(buscar);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar el cliente' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 201, description: 'Creado.', type: clientes })
    async create(@Body() clientes: clientes): Promise<clientes> {
        return this.clientesService.create(clientes);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualiza el cliente' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 202, description: 'Aceptado.', type: clientes })
    async update(@Param('id') id: string, @Body() clientes: clientes): Promise<clientes> {
        return this.clientesService.update(id, clientes);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina el cliente' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: clientes })
    async delete(@Param('id') id: string): Promise<clientes> {
        return this.clientesService.delete(id);
    }
}
