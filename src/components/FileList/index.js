import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar"
import { Container, FileInfo, Preview } from './styles'
import { MdCheckCircle, MdError } from 'react-icons/md'
import pdf from '../../assets/images/pdf.png'

export default function FileList({ files, accept }) {

    const nameAjuste = file => {
        
        // if(file.name.lenght > 20){
        //     return file.name.substring(0, 20).concat('...')
        // }else{
        //     return file.name
        // }

        return file.name.substring(0, 20).concat('...')
    }

  return (
    <Container>

        { files.map( uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={ accept === 'application/pdf' ? pdf : uploadedFile.preview}/>
                    <div>
                        <strong>
                            {  nameAjuste(uploadedFile) }
                        </strong>
                        <span>
                            { uploadedFile.readableSize }{" "}
                        </span>
                    </div>
                </FileInfo>
                <div>
                    {! uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' }
                            }}
                            value={uploadedFile.progress}
                        />
                    )}

                    { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
                    { uploadedFile.error && <MdError size={24} color="#e57878" /> }
                </div>
            </li>
        ))}
    </Container>
  );
}
