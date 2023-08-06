import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class clientes {
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: "1", description: 'este es el id unico de la persona se autogenera' })
    id: string;

    @Column()
    @ApiProperty({ example: "marlon", description: 'nombre de la persona' })
    nombre: string;

    @Column()
    @ApiProperty({ example: "70927698", description: 'telefono de la persona' })
    telefono: string;

    @Column()
    @ApiProperty({ example: "marlon124gmial.com", description: 'correo de la persona' })
    email: string;

}
