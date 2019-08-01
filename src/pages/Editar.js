import React, { useState, useEffect } from 'react'
import api from '../services/api'
import Upload from '../components/Upload'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

export default function EditarLivros(props) {

    // const { match: { params } } = props;
    const [ book, setBook ] = useState({})

    const [ name, setName ] = useState('')
    const [ idAuthor, setIdAuthor ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ genre, setGenre ] = useState('')
    const [ publicationDate, setPublicationDate ] = useState('')
    const [ language, setLanguage ] = useState('')
    const [ pages, setPages ] = useState('')
    const [ uploadedImage, setUploadedImage ] = useState([])
    const [ uploadedDocument, setUploadedDocument ] = useState([])

    useEffect(() => {
        const fetchDataAuthor = async e => {
            const user = await api.get(`/users/${localStorage.getItem('@Login:username')}`)
            if(user.data[0].type === 'leitor'){
                props.history.push('/browse')
                return
            }

            const bookAtual = await api.get(`/books/${props.match.params.id}`)

            if(user.data[0]._id !== bookAtual.data[0].idAuthor){
                props.history.push('/browse')
                return
            }

            setBook(bookAtual.data[0])

            setName(bookAtual.data[0].name)
            setIdAuthor(bookAtual.data[0].idAuthor)
            setDescription(bookAtual.data[0].description)
            setGenre(bookAtual.data[0].genre)
            setPublicationDate(bookAtual.data[0].publicationDate)
            setLanguage(bookAtual.data[0].language)
            setPages(bookAtual.data[0].pages)
        }

        fetchDataAuthor()
    }, [props])

    const handleSave = () => {

        if(name === '' || idAuthor === '' || description === '' || genre === '' || publicationDate === '' || 
        language === '' || pages === '' || !uploadedDocument.length || !uploadedImage.length){
            alert('Preencha todos os campos')
            return
        }

        handleSaveBook()
    }

    const handleSaveBook = async e => {

        const formDataImage = new FormData();
        const formDataDocument = new FormData();

        formDataImage.append("fileImage", uploadedImage[0].file, uploadedImage[0].name);
        formDataDocument.append("fileDocument", uploadedDocument[0].file, uploadedDocument[0].name);

        const resultImage = await api.post("/uploads/images", formDataImage, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                setUploadedImage([{ ...uploadedImage[0], progress }])
            }
        })

        const resultDocument = await api.post("/uploads/documents", formDataDocument, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                setUploadedDocument([{ ...uploadedDocument[0], progress }])
            }
        })

        if(!resultImage.data){
            alert("Erro no upload da imagem! Tente novamente!")
            setUploadedImage([{ ...uploadedImage[0], error: true }])
            return
        }

        setUploadedImage([{ ...uploadedImage[0], uploaded: true }])
        
        if(!resultDocument.data){
            alert("Erro no upload do documento! Tente novamente!")
            setUploadedDocument([{ ...uploadedDocument[0], error: true }])
            return
        }

        setUploadedDocument([{ ...uploadedDocument[0], uploaded: true }])

        const { name: nameImage, size: sizeImage, url: image, key: keyImage } = resultImage.data
        const { name: nameDocument, size: sizeDocument, url: document, key: keyDocument } = resultDocument.data

        const result = await api.put(`/books/${book._id}`, {
            name,
            idAuthor,
            description,
            genre,
            publicationDate,
            language,
            pages,
            image,
            nameImage,
            keyImage,
            sizeImage,
            document,
            nameDocument,
            keyDocument,
            sizeDocument,
        })

        if(result){
            alert('Livro atualizado com sucesso! =D')
            props.history.push('/browse/books')
            return
        }
        
        alert('Ocorreu algum erro, tente novamente mais tarde! :(')
    }

    const handleUploadImage = files => {

        const uploadedFiles = {
            file: files[0],
            id: uniqueId(),
            name: files[0].name,
            readableSize: filesize(files[0].size),
            preview: URL.createObjectURL(files[0]),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }
      
        setUploadedImage([ uploadedFiles ])
    }

    const handleUploadDocument = files => {

        const uploadedFiles = {
            file: files[0],
            id: uniqueId(),
            name: files[0].name,
            readableSize: filesize(files[0].size),
            preview: URL.createObjectURL(files[0]),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }
      
        setUploadedDocument([ uploadedFiles ])
    }

    return (
        <div className="container py-5">
            <h2>Editar Livro</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" id="name"
                            onChange={e => setName(e.target.value)}
                            defaultValue={name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Capa</label>

                        <Upload 
                            onUpload={handleUploadImage}
                            uploadedFiles={uploadedImage}
                            accept="image/*"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="document">Documento</label>
                        <Upload 
                            onUpload={handleUploadDocument}
                            uploadedFiles={uploadedDocument}
                            accept="application/pdf"
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="genre">Genero</label>
                            <input type="text" className="form-control" id="genre"
                                onChange={e => setGenre(e.target.value)}
                                defaultValue={genre}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="pages">Paginas</label>
                            <input type="text" className="form-control" id="pages"
                                onChange={e => setPages(e.target.value)}
                                defaultValue={pages}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="publicationDate">Data de Publicacao</label>
                            <input type="text" className="form-control" id="publicationDate"
                                onChange={e => setPublicationDate(e.target.value)}
                                defaultValue={publicationDate}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="language">Idioma</label>
                            <input type="text" className="form-control" id="language"
                                onChange={e => setLanguage(e.target.value)}
                                defaultValue={language}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="description">Descricao</label>
                            <textarea  className="form-control" id="description"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary"
                onClick={handleSave}
            >Salvar Alteracoes</button>
        </div>
    );
}
