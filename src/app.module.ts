import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.tvwaeokfmvdxlinlyhgv',
      password: 'NovaSenha0403@',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule
  ],
})
export class AppModule {}
