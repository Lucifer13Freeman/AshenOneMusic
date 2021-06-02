import { Body, Query, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";

@Controller('/tracks')
export class TrackController 
{
    constructor(private track_service: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor( [
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto)
    {
        const { picture, audio } = files;
        return this.track_service.create(dto, picture[0], audio[0]);
    }

    @Get()
    get_all(@Query('count') count: number,
            @Query('offset') offset: number) 
    {
        return this.track_service.get_all(count, offset);
    }

    @Get('/search')
    search(@Query('query') query: string) 
    {
        return this.track_service.search(query);
    }

    @Get(':id')
    get(@Param('id') id: ObjectId) 
    {
        return this.track_service.get(id);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId)
    {
        return this.track_service.delete(id);
    } 

    @Post('/comment')
    add_comment(@Body() dto: CreateCommentDto)
    {
        return this.track_service.add_comment(dto);
    }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId)
    {
        return this.track_service.listen(id);
    }
}