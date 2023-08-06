import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clientes } from './entity/clientes';
import { comunicados } from './entity/comunicados';
import { ClientesController } from './controller/clientes.controller';
import { ComunicadosController } from './controller/comunicados.controller';
import { ClientesService } from './service/clientes.service';
import { ComunicadosService } from './service/comunicados.service';
import { detalles } from './entity/detalles';
import { DetallesController } from './controller/detalles.controller';
import { DetallesService } from './service/detalles.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: 'localhost', // Host de la base de datos
      port: 3306, // Puerto de la base de datos
      username: 'root', // Usuario de la base de datos
      password: '123456', // Contraseña de la base de datos
      database: 'comunicados', // Nombre de la base de datos
      entities: [comunicados,clientes,detalles], // Entidades que serán utilizadas en el proyecto
      synchronize: true, // Sincroniza las entidades con la base de datos (en desarrollo, deshabilitar en producción)
      logging: true,
      extra: {"insecureAuth":true}
    }),
    TypeOrmModule.forFeature([clientes,comunicados,detalles]), // Agrega tu entidad aquí
  ],
  controllers: [AppController,ClientesController,ComunicadosController,DetallesController],
  providers: [AppService,ClientesService,ComunicadosService,DetallesService],
})
export class AppModule {}
