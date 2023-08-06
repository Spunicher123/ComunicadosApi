import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity()
export class detalles {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Este es el id único del detalle que se autogenera' })
  id: string;

  @Column()
  @ApiProperty({
    example: '1',
    description: 'FK_comunicados: llave que une al comunicado con el cliente correspondiente',
  })
  comunicado: number;

  @Column()
  @ApiProperty({
    example: '1',
    description: 'FK_clientes: llave que une al cliente con el comunicado correspondiente',
  })
  cliente: number;

  
}
