
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Message {
  @Prop()
  name: string;
  @Prop()
  sentMessage: string;
  @Prop()
  createdDateTime: string
  @Prop()
  isAnonymous: boolean
  @Prop()
  review: boolean
}
export const MessageSchema = SchemaFactory.createForClass(Message);
