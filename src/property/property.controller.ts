import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
    @Get()
    getProperties() {
        return 'All properties';
    }

    @Get(":id")
    getProperty(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
        console.log(typeof id);
        console.log(typeof sort);
        return id;
    }

    @Post()
    // @UsePipes(new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true
    // }))
    createProperty(@Body(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        groups: ['create'],
        always: true
    })) body: CreatePropertyDto) {
        return body;
    }

    @Put(":id")
    updateProperty(@Param("id", ParseIntPipe) id, @Body(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        groups: ['update'],
        always: true
    })) body: CreatePropertyDto) {
        return body;
    }
}
