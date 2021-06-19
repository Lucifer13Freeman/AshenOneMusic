import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

//const URI: string = process.env.MONGO_URI;

const MONGO_URI = 'mongodb+srv://Lucifer:66DeusExAshenOneMusic66@ashenonemusic.x92w5.mongodb.net/AshenOneMusic?retryWrites=true&w=majority';

@Module(
{
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, '..', 'static') }),
        MongooseModule.forRoot(MONGO_URI),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}
