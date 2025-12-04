import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    getProperties() {
        return 'All properties';
    }

    @Get(":id")
    getProperty(@Param("id") id) {
        console.log(typeof id);
        return id;
    }

    @Post()
    createProperty(@Body() body) {
        return body;
    }
}
