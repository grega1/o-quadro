import styled from 'styled-components';

export const Titulo = styled.h2`
text-align: center;
`;

export const Conteiner = styled.section`
font-weight: 500;
`;

export const ArtigoPrincipal = styled.article`
text-align: justify;
width: 100%;
padding: 3vh 0;
p{
    padding-bottom: 2vh;
}
`;

export const ConteinerLinha = styled.div`
display: flex;
flex-direction: row;
`;

export const ImagemLateral = styled.img`
display: flex;
height: 100%;
width: auto;
`;

export const ArtigoLateral = styled.article`
text-align: justify;
p{
    padding: 0 0 2vh 2vw;
}
`;

export const ListaLivro = styled.ul`
width: 100%;
height: auto;
margin: 7vh 0;
list-style: none;

`;

export const Livro = styled.li`
display: flex;
flex-direction: row;
gap: 1.5vw;
padding: 1%;
margin-bottom: 2vh;
text-decoration: none;
:visited{
  color: #000000;
}
&:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
  }
`;

export const CapaLivro = styled.img`
height: 25vh;
width: auto;
`;

export const InfoLivro = styled.section``;

export const TituloLivro = styled.h3`
color: #CF0018;
`;

export const AutorLivro = styled.p`
color: #000000;
`;
