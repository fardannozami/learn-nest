import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(3, 30, { message: "Name must be between 3 and 30 characters" })
    name: string;
    @IsString()
    description: string;
    @IsNumber()
    @IsPositive()
    area: number;
}