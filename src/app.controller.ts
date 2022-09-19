import { Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';
import { MessageService } from './service/message/message.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly messageService: MessageService ) {}

  @Get()
  @Render('index')
  root() {
    return {};
  }

  @Get('/thank_you')
  @Render('thank_you')
  thankYou() {
    return {};
  }
}
