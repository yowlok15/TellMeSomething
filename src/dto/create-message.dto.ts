import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    readonly sentMessage: string;
    @IsString()
    @IsNotEmpty()
    readonly createdDateTime: string;
    @IsBoolean()
    @IsNotEmpty()
    readonly isAnonymous: boolean;
    @IsBoolean()
    @IsNotEmpty()
    review: boolean;
}