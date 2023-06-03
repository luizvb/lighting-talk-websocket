import { Module } from '@nestjs/common';
import { IoService } from './io.service';
import { IoGateway } from './io.gateway';

@Module({
  providers: [IoGateway, IoService]
})
export class IoModule {}
