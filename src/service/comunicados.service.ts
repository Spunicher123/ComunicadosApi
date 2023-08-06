import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { comunicados } from 'src/entity/comunicados';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ComunicadosService {

  constructor(
    @InjectRepository(comunicados)
    private readonly comunicadosRepository: Repository<comunicados>,
  ) { }

  async findAll(): Promise<comunicados[]> {
    return this.comunicadosRepository.find();
  }

  async flitrosComunicado(buscar: string): Promise<comunicados[]> {
    return this.comunicadosRepository.find({
      where: [
        { titulo: ILike(`%${buscar}%`) },
        { descripcion: ILike(`%${buscar}%`) },
        { link: ILike(`%${buscar}%`) },
      ],
    });
  }

  async create(comunicados: comunicados): Promise<comunicados> {
    return this.comunicadosRepository.save(comunicados);
  }

  async update(id: string, comunicados: comunicados): Promise<comunicados> {
    await this.comunicadosRepository.update(id, comunicados);
    return this.comunicadosRepository.findOne({ where: { id: id } });
  }

  async findOne(id: string): Promise<comunicados> {
    return this.comunicadosRepository.findOne({ where: { id: id } });
  }

  async delete(id: string): Promise<comunicados> {
    const comunicadoEliminado = this.comunicadosRepository.findOne({ where: { id: id } });
    await this.comunicadosRepository.delete(id);
    return comunicadoEliminado;
  }
}
