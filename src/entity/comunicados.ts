import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { detalles } from './detalles';

@Entity()
export class comunicados {
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: "1", description: 'este es el id unico del comunicado se autogenera' })
    id: string;

    @Column()
    @ApiProperty({ example: "Saludo", description: 'titulo del comunicado' })
    titulo: string;

    @Column()
    @ApiProperty({ example: "Buenas tardes", description: 'descripcion del comunicado' })
    descripcion: string;

    @Column()
    @ApiProperty({ example: "www.saludo.com", description: 'link del comunicad para algun video informativo' })
    link: string;
}
