import { Document } from 'mongoose';
export interface IMessage extends Document{
    readonly name: string;
    readonly sentMessage: string;
    readonly createdDateTime: string;
    readonly isAnonymous: boolean;
    readonly review: boolean;
}