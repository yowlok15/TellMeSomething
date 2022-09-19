import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { IMessage } from 'src/interface/message.interface';
import { Model } from "mongoose";
@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private messageModel: Model<IMessage>) { }


    async createMessage(CreateMessageDto: CreateMessageDto): Promise<IMessage> {
        try {
            const newMessage = await new this.messageModel(CreateMessageDto);
            return newMessage.save();
        }
        catch (err) {
            throw new BadRequestException('Messages data not created!');
        }
    }

    async getAllMessages(numberPerPage: number, pageNumber: number): Promise<IMessage[]> {
        const messageData = await this.messageModel.find({review: {$eq: true}})
            .sort({ _id: 1 })
            .skip(pageNumber > 0 ? ((pageNumber - 1) * numberPerPage) : 0)
            .limit(numberPerPage);
        if (!messageData || messageData.length == 0) {
            throw new NotFoundException('Messages data not found!');
        }
        return messageData;
    }
}