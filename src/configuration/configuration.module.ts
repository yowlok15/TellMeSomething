
import { ConfigurationService } from "./configuration.service";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  exports: [ConfigurationService],
  imports: [ConfigModule.forRoot()],
  providers: [ConfigurationService]
})
export class ConfigurationModule {}