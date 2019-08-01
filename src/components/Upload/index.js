import React from 'react';
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMenssage, Content } from './styles'
import FileList from '../FileList'

export default function Upload(props) {

  const renderDragMenssage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMenssage>Anexar arquivo...</UploadMenssage>
    }

    if(isDragReject){
      return <UploadMenssage type="error">Arquivo nao suportado!</UploadMenssage>
    }

    return <UploadMenssage type="success">Solte o arquivo aqui!</UploadMenssage>
  }

  const { onUpload, uploadedFiles } = props

  return (
    <Content>
      <Dropzone accept={props.accept} onDropAccepted={onUpload}>
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
          { ...getRootProps() }
          className="dropzone"
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          >
              <input {...getInputProps()} />
              {renderDragMenssage(isDragActive, isDragReject)}
            </DropContainer>
        )}
      </Dropzone>

      {
        //console.log('Upload ', uploadedFiles)
      }
      
      { !!uploadedFiles.length && (
        <FileList files={uploadedFiles} accept={props.accept} />
      )}
    </Content>
  );
}
