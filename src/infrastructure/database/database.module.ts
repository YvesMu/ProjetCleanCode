import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoOrmEntity } from '../entities/moto.orm-entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'postgres',
            entities: [MotoOrmEntity],
            synchronize: true, // Ne pas activer en production
        }),
        TypeOrmModule.forFeature([MotoOrmEntity]),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
