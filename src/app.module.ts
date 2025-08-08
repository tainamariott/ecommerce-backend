import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.tvwaeokfmvdxlinlyhgv.supabase.co',
      port: +'5432',
      username: 'postgres',
      password: 'NovaSenha0403@',
      database: 'postgres',
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
