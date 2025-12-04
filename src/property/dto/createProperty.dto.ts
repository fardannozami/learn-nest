import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(3, 30, { message: "Name must be between 3 and 30 characters" })
    name: string;
    @IsString()
    @Length(3, 100, { message: "Description must be between 3 and 100 characters", groups: ['create'] })
    @Length(2, 100, { message: "Description must be between 1 and 100 characters", groups: ['update'] })
    description: string;
    @IsNumber()
    @IsPositive()
    area: number;
}