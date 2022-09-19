import { Body, Controller, Get, HttpStatus, NotFoundException, Post, Query, Render, Res } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { MessageService } from 'src/service/message/message.service';
@Controller('message')
export class MessageController {
   constructor(private readonly MessageService: MessageService) { }
   @Post()
   async createMessage(@Res() response, @Body() CreateMessageDto: CreateMessageDto) {
      try {
         const newMessage = await this.MessageService.createMessage(CreateMessageDto);
         return response.status(HttpStatus.CREATED).json({
            message: 'Message has been created successfully',
            newMessage,
         });
      } catch (err) {
         return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Message not created!',
            error: 'Bad Request'
         });
      }
   }

   @Render('message')
   @Get()
   async loadMessagePage(@Res() response) {
      try {
         const messageData = await this.MessageService.getAllMessages(parseInt(process.env.RESULT_PER_PAGE), 1);
         return { messages: messageData };
      } catch (err) {
         return response.status(err.status).json(err.response);
      }
   }

   @Get('/all')
   async getMessages(@Res() response, @Query('page') page: number,) {
      try {
         var messageData = {}
         messageData = await this.MessageService.getAllMessages(parseInt(process.env.RESULT_PER_PAGE), page);
         return response.status(HttpStatus.OK).json({ 'messages': messageData })
      } catch (err) {
         if (err instanceof NotFoundException) {
            return response.status(HttpStatus.NOT_FOUND).json({ 'messages': messageData });
         }
         else {
            return response.status(err.status).json(err.response);
         }
      }
   }
}