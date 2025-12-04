import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    getProperties() {
        return 'All properties';
    }

    @Get(":id")
    getProperty(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
        console.log(typeof id);
        console.log(typeof sort );
        return id;
    }

    @Post()
    createProperty(@Body() body) {
        return body;
    }
}
