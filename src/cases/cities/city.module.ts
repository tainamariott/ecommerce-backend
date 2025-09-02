import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { StateController } from "./controller/state.controller";
import { CityService } from "./services/city.service";
import { State } from "./entities/state.entity";
import { City } from "./entities/city.entity";
import { CityController } from "./controller/city.controller";
import { StateService } from "./services/state.service";


@Module({
  imports: [TypeOrmModule.forFeature([State, City])],
  providers: [StateService, CityService],
  controllers: [StateController, CityController],
})
export class CityModule {}