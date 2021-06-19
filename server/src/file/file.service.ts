import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType
{
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService 
{
    create_file(type: FileType, file): string
    {
        try 
        {
            const extension = file.originalname.split('.').pop();
            const filename = uuid.v4() + '.' + extension;
            const filepath = path.resolve(__dirname, '..', '..', 'static', type);
            
            if(!fs.existsSync(filepath)) fs.mkdirSync(filepath, { recursive: true });
            
            fs.writeFileSync(path.resolve(filepath, filename), file.buffer);

            return type + '/' + filename;
        } 
        catch (e) 
        {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    remove_file(filename: string)
    {
        const filepath = path.resolve(__dirname, '..', '..', 'static', filename);

        if(!fs.existsSync(filepath)) return;
        fs.unlinkSync(filepath);
    }
}