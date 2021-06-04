import { Grid, TextField } from "@material-ui/core";
import React, { useRef } from "react";

interface FileUploadProps
{
    set_file: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ set_file, accept, children }) =>
{
    const ref: React.MutableRefObject<HTMLInputElement | any> = useRef<HTMLInputElement>();

    const on_change = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (e.target.files) set_file(e.target.files[0]);
    }

    return (
        <div onClick={ () => ref.current.click() }>
            <input 
                type="file"
                accept={accept}
                style={{ display: "none" }}
                ref={ref}
                onChange={on_change}
            />
            {children}
        </div>
    );
}

export default FileUpload;