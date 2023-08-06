import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { comunicados } from 'src/entity/comunicados';
import { ComunicadosService } from 'src/service/comunicados.service';


import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';


@ApiTags('comunicados')
@Controller('comunicados')
export class ComunicadosController {
    constructor(private readonly comunicadosntesService: ComunicadosService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los comunicados' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: comunicados })
    async findAll(): Promise<comunicados[]> {
        return this.comunicadosntesService.findAll();
    }

    
    @Get('buscar/:buscar')
    @ApiOperation({ summary: 'Busca un comunicado por su titulo, descripcion y link' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: comunicados })
    async Buscarvarios(@Param('buscar') buscar: string): Promise<comunicados[]> {
        return this.comunicadosntesService.flitrosComunicado (buscar);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un comunicado' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: comunicados })
    async findOne(@Param('id') id: string): Promise<comunicados> {
        return this.comunicadosntesService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar el comunicados' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 201, description: 'Creado.', type: comunicados })
    async create(@Body() comunicados: comunicados): Promise<comunicados> {
        return this.comunicadosntesService.create(comunicados);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualiza el comunicados' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 202, description: 'Aceptado.', type: comunicados })
    async update(@Param('id') id: string, @Body() comunicados: comunicados): Promise<comunicados> {
        return this.comunicadosntesService.update(id, comunicados);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina el comunicados' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: comunicados })
    async delete(@Param('id') id: string): Promise<comunicados> {
        return this.comunicadosntesService.delete(id);
    }
}
