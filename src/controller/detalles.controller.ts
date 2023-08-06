import { DetallesService } from 'src/service/detalles.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { detalles } from 'src/entity/detalles';

@ApiTags('detalles')
@Controller('detalles')
export class DetallesController {
    constructor(private readonly DetallesService: DetallesService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los detalles' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: detalles })
    async findAll(): Promise<detalles[]> {
        return this.DetallesService.findAll();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Obtener el detalle de un comunicado' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: detalles })
    async findOne(@Param('id') id: number): Promise<detalles[]> {
        return this.DetallesService.flitrosDetalles(id);
    }


    @Post()
    @ApiOperation({ summary: 'Guardar un detalle' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 201, description: 'Creado.', type: detalles })
    async create(@Body() detalles: detalles): Promise<detalles> {
        return this.DetallesService.create(detalles);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina el detalle(cliente) del comunicado' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: detalles })
    async delete(@Param('id') id: string): Promise<detalles> {
        return this.DetallesService.delete(id);
    }

}
