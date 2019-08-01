const books = [
    {
        _id: '1',
        name: 'Harry Potter e as Relíquias da Morte',
        description: 'Sem a orientação e a proteção de seus professores, Harry, Rony e Hermione começam uma missão para destruir as Horcruxes, que são fontes da imortalidade de Voldemort. Mais do que nunca, eles dependem uns dos outros, mas forças obscuras ameaçam separá-los.',
        genre: 'Aventura',
        author: 'J. K. Rowling',
        publicationDate: '21/07/2007',
        language: 'Português',
        pages: '415',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/pao.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/J.K.-Rowling-7-Harry-Potter-e-As-Reliquias-da-Morte.pdf'
    },
    {
        _id: '2',
        name: 'O Diário de Anne Frank',
        description: 'O Diário de Anne Frank é um livro escrito por Anne Frank entre 12 de junho de 1942 e 1.º de agosto de 1944 durante a Segunda Guerra Mundial. É conhecido por narrar momentos vivenciados pelo grupo de judeus confinado num esconderijo durante a ocupação nazista dos Países Baixos.',
        genre: 'Biografia',
        author: 'Anne Frank',
        publicationDate: '12/09/1959',
        language: 'Português',
        pages: '192',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/8e7eebcb-f3b6-4e18-8335-978c91a30b73.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/o_diario_de_anne_frank_-portuguese.pdf'
    },
    {
        _id: '3',
        name: 'Laranja Mecânica',
        description: 'O jovem Alex passa as noites com uma gangue de amigos briguentos. Depois que é preso, se submete a uma técnica de modificação de comportamento para poder ganhar sua liberdade.',
        genre: 'Drama',
        author: 'Anthony Burgess',
        publicationDate: '23/01/1962',
        language: 'Português',
        pages: '84',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/capa.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/laranja-mecanica.pdf'
    },
    {
        _id: '4',
        name: 'O Hobbit',
        description: 'Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições, raramente aventurando-se para além de sua despensa ou sua adega. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem em sua porta e levam-no para uma expedição.',
        genre: 'Fantasia',
        author: 'J. R. R. Tolkien',
        publicationDate: '21/09/1937',
        language: 'Português',
        pages: '281',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/download.png',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/O-Hobbit-J.-R.-R.-Tolkien.pdf'
    },
    {
        _id: '5',
        name: 'Marcas da Guerra – Star Wars',
        description: 'O que aconteceu depois da destruição da segunda Estrela da Morte? Qual o destino dos remanescentes do Império Galáctico e dos antigos Rebeldes, agora responsáveis pela fundação da Nova República?',
        genre: 'Ficção Científica',
        author: 'Chuck Wendig',
        publicationDate: '04/09/2015',
        language: 'Português',
        pages: '379',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/download-1-1.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/ExerciciosIPv6.pdf'
    },
    {
        _id: '6',
        name: 'João e Maria',
        description: 'Hänsel und Gretel é um conto de fadas de tradição oral e que foi coletado pelos irmãos Grimm.',
        genre: 'Literatura Infantil',
        author: 'Engelbert Humperdinck',
        publicationDate: '01/11/1971',
        language: 'Português',
        pages: '8',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/livro-joo-e-maria-junior-babel-infantil-D_NQ_NP_620601-MLB26229081110_102017-F-807x1024.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/11/MIOLO_Joao_e_Maria.pdf'
    },
    {
        _id: '7',
        name: 'Harry Potter e o Cálice de Fogo',
        description: 'Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Rony e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.',
        genre: 'Aventura',
        author: 'J. K. Rowling',
        publicationDate: '08/07/2000',
        language: 'Português',
        pages: '402',
        image: '',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/J.K.-Rowling-4-Harry-Potter-e-O-Calice-de-Fogo.pdf'
    },
    {
        _id: '8',
        name: 'O Senhor dos Anéis – As Duas Torres',
        description: 'Frodo, seus amigos e os contínuos esforços para destruir o anel. Frodo e Sam descobrem que estão sendo seguidos pelo misterioso Gollum. Enquanto iso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.',
        genre: 'Fantasia',
        author: 'J. R. R. Tolkien',
        publicationDate: '29/07/1954',
        language: 'Português',
        pages: '444',
        image: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/8533615566.jpg',
        document: 'http://lebook.clientesmentores.com.br/wp-content/uploads/2018/10/As-Duas-Torres-O-Senhor-dos-J.R.R.-Tolkien.pdf'
    },
]

export default {
    books,
}