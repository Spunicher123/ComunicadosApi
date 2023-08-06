import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { clientes } from 'src/entity/clientes';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(clientes)
        private readonly clientesRepository: Repository<clientes>,
      ) { }

      async findAll(): Promise<clientes[]> {
        return this.clientesRepository.find();
      }

      async findOne(id: string): Promise<clientes> {
        return this.clientesRepository.findOne({ where: { id: id } });
      }

      async flitrosCliente(buscar: string): Promise<clientes[]> {
        return this.clientesRepository.find({
          where: [
            { nombre: ILike(`%${buscar}%`) },
            { telefono: ILike(`%${buscar}%`) },
            { email: ILike(`%${buscar}%`) },
          ],
        });
      }

      async create(clientes: clientes): Promise<clientes> {
        return this.clientesRepository.save(clientes);
      }
    
      async update(id: string, clientes: clientes): Promise<clientes> {
        await this.clientesRepository.update(id, clientes);
        return this.clientesRepository.findOne({ where: { id: id } });
      }
    
      async delete(id: string): Promise<clientes> {
       const cienteEliminado = this.clientesRepository.findOne({ where: { id: id } });
        await this.clientesRepository.delete(id);
        return cienteEliminado;
      }
    

}
