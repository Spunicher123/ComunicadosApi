import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { clientes } from 'src/entity/clientes';
import { comunicados } from 'src/entity/comunicados';
import { detalles } from 'src/entity/detalles';
import { Repository } from 'typeorm';

@Injectable()
export class DetallesService {

    constructor(
        @InjectRepository(detalles)
        private readonly detallesRepository: Repository<detalles>,
        @InjectRepository(comunicados)
        private readonly comunicadosRepository: Repository<comunicados>,
        @InjectRepository(clientes)
        private readonly clientesRepository: Repository<clientes>,
    ) { }

    async findAll(): Promise<detalles[]> {
        return this.detallesRepository.find();
    }

    async findAll1(): Promise<any[]> {
        const detalles = await this.detallesRepository.find();
        const detalleslst = [];
      
        for (const e of detalles) {
          const comunicados = await this.comunicadosRepository.findOne({ where: { id: e.comunicado.toString()} });
          const cliente = await this.clientesRepository.findOne({ where: { id: e.cliente.toString()} });
          detalleslst.push({ id: e.id, comunicados:comunicados, cliente:cliente });
        }
      
        return detalleslst;
      }

    async findOne(id: string): Promise<detalles> {
        return this.detallesRepository.findOne({ where: { id: id } });
    }

    async flitrosDetalles(buscar: number): Promise<detalles[]> {
        return this.detallesRepository.find({
            where: [
                { comunicado: buscar }
            ],
        });
    }

    async create(detalleData: detalles): Promise<detalles> {
        const nuevoDetalle = new detalles();

        const comunicado = await this.comunicadosRepository.findOne({ where: { id: detalleData.comunicado.toString() } });
        const cliente = await this.clientesRepository.findOne({ where: { id: detalleData.cliente.toString() } });
        const detalle = await this.detallesRepository.findOne({
            where: {
                comunicado: detalleData.comunicado,
                cliente: detalleData.cliente
            }
        });

        if (comunicado == null || cliente == null) {
            console.log("no existe esos valores");
            return null;
        } else if (detalle != null) {
            console.log("ya existe esos valores");
            return null;
        } else {
            nuevoDetalle.comunicado = detalleData.comunicado;
            nuevoDetalle.cliente = detalleData.cliente;
            console.log(nuevoDetalle.comunicado, nuevoDetalle.cliente)
            return this.detallesRepository.save(nuevoDetalle);
        }
    }

    async delete(id: string): Promise<detalles> {
        const detallesEliminado = this.detallesRepository.findOne({ where: { id: id } });
         await this.detallesRepository.delete(id);
         return detallesEliminado;
       }
}
