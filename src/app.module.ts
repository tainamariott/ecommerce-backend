import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.tvwaeokfmvdxlinlyhgv',
      password: 'TainaMariott1',
      database: 'postgres',
    }),
  ],
})
export class AppModule {}
