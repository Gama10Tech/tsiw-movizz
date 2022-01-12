import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   obras_gosto:localStorage.obras_gosto ? JSON.parse(localStorage.obras_gosto) : [
      {id_imdb:'tt0111161', id_utilizador:1}
   ],
   vistos:localStorage.vistos ? JSON.parse(localStorage.vistos) : [
      {id_imdb:'tt0111161', id_utilizador:1}
   ],
   elenco_obra:localStorage.elenco_obra ? JSON.parse(localStorage.elenco_obra) : [],
   equipa:localStorage.equipa ? JSON.parse(localStorage.equipa) : [],
   genero_obra:localStorage.genero_obra ? JSON.parse(localStorage.genero_obra) : [],
   obra:localStorage.obra ? JSON.parse(localStorage.obra) : [],
   produtor_obra: localStorage.produtor_obra ? JSON.parse(localStorage.produtor_obra):[],
   diretor_obra: localStorage.diretor_obra ? JSON.parse(localStorage.diretor_obra):[],
   escritor_obra: localStorage.escritor_obra ? JSON.parse(localStorage.escritor_obra):[],
   genero: localStorage.genero ? JSON.parse(localStorage.genero) :
      [
        {
          id_genero: 0,
          descricao: 'Action'
        },
        {
          id_genero: 1,
          descricao: 'Adventure'
        },
        {
          id_genero: 2,
          descricao: 'Animation'
        },
        {
          id_genero: 3,
          descricao: 'Biography'
        },
        {
          id_genero: 4,
          descricao: 'Comedy'
        },
        {
          id_genero: 5,
          descricao: 'Crime'
        },
        {
          id_genero: 6,
          descricao: 'Documentary'
        },
        {
          id_genero: 7,
          descricao: 'Drama'
        },
        {
          id_genero: 8,
          descricao: 'Family'
        },
        {
          id_genero: 9,
          descricao: 'Fantasy'
        },
        {
          id_genero: 10,
          descricao: 'Game Show'
        },
        {
          id_genero: 11,
          descricao: 'History'
        },
        {
          id_genero: 12,
          descricao: 'Horror'
        },
        {
          id_genero: 13,
          descricao: 'Music'
        },
        {
          id_genero: 14,
          descricao: 'Musical'
        },
        {
          id_genero: 15,
          descricao: 'Mystery'
        },
        {
          id_genero: 16,
          descricao: 'News'
        },
        {
          id_genero: 17,
          descricao: 'Reality-TV'
        },
        {
          id_genero: 18,
          descricao: 'Romance'
        },
        {
          id_genero: 19,
          descricao: 'Sci-Fi'
        },
        {
          id_genero: 20,
          descricao: 'Sport	'
        },
        {
          id_genero: 21,
          descricao: 'Superhero'
        },
        {
          id_genero: 22,
          descricao: 'Talk Show'
        },
        {
          id_genero: 23,
          descricao: 'Thriller'
        },
        {
          id_genero: 24,
          descricao: 'War'
        },
        {
          id_genero: 25,
          descricao: 'Western'
        }
   ],
   movies: localStorage.movies? JSON.parse(localStorage.movies):
    [
        {
          "id":"tt0111161",
          "rank":"1",
          "title":"The Shawshank Redemption",
          "fullTitle":"The Shawshank Redemption (1994)",
          "year":"1994",
          "image":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
          "imDbRating":"9.2",
          "imDbRatingCount":"2522734"
       },
       {
          "id":"tt0068646",
          "rank":"2",
          "title":"The Godfather",
          "fullTitle":"The Godfather (1972)",
          "year":"1972",
          "image":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
          "imDbRating":"9.1",
          "imDbRatingCount":"1736923"
       },
       {
          "id":"tt0071562",
          "rank":"3",
          "title":"The Godfather: Part II",
          "fullTitle":"The Godfather: Part II (1974)",
          "year":"1974",
          "image":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
          "imDbRating":"9.0",
          "imDbRatingCount":"1205269"
       },
       {
          "id":"tt0468569",
          "rank":"4",
          "title":"The Dark Knight",
          "fullTitle":"The Dark Knight (2008)",
          "year":"2008",
          "image":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Christian Bale, Heath Ledger",
          "imDbRating":"9.0",
          "imDbRatingCount":"2472942"
       },
       {
          "id":"tt0050083",
          "rank":"5",
          "title":"12 Angry Men",
          "fullTitle":"12 Angry Men (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
          "imDbRating":"8.9",
          "imDbRatingCount":"745004"
       },
       {
          "id":"tt0108052",
          "rank":"6",
          "title":"Schindler's List",
          "fullTitle":"Schindler's List (1993)",
          "year":"1993",
          "image":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
          "imDbRating":"8.9",
          "imDbRatingCount":"1289300"
       },
       {
          "id":"tt0167260",
          "rank":"7",
          "title":"The Lord of the Rings: The Return of the King",
          "fullTitle":"The Lord of the Rings: The Return of the King (2003)",
          "year":"2003",
          "image":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
          "imDbRating":"8.9",
          "imDbRatingCount":"1741456"
       },
       {
          "id":"tt0110912",
          "rank":"8",
          "title":"Pulp Fiction",
          "fullTitle":"Pulp Fiction (1994)",
          "year":"1994",
          "image":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Quentin Tarantino (dir.), John Travolta, Uma Thurman",
          "imDbRating":"8.8",
          "imDbRatingCount":"1943929"
       },
       {
          "id":"tt0060196",
          "rank":"9",
          "title":"The Good, the Bad and the Ugly",
          "fullTitle":"The Good, the Bad and the Ugly (1966)",
          "year":"1966",
          "image":"https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
          "imDbRating":"8.8",
          "imDbRatingCount":"729375"
       },
       {
          "id":"tt0120737",
          "rank":"10",
          "title":"The Lord of the Rings: The Fellowship of the Ring",
          "fullTitle":"The Lord of the Rings: The Fellowship of the Ring (2001)",
          "year":"2001",
          "image":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
          "imDbRating":"8.8",
          "imDbRatingCount":"1762658"
       },
       {
          "id":"tt0137523",
          "rank":"11",
          "title":"Fight Club",
          "fullTitle":"Fight Club (1999)",
          "year":"1999",
          "image":"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Fincher (dir.), Brad Pitt, Edward Norton",
          "imDbRating":"8.7",
          "imDbRatingCount":"1984149"
       },
       {
          "id":"tt0109830",
          "rank":"12",
          "title":"Forrest Gump",
          "fullTitle":"Forrest Gump (1994)",
          "year":"1994",
          "image":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
          "imDbRating":"8.7",
          "imDbRatingCount":"1946975"
       },
       {
          "id":"tt1375666",
          "rank":"13",
          "title":"Inception",
          "fullTitle":"Inception (2010)",
          "year":"2010",
          "image":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
          "imDbRating":"8.7",
          "imDbRatingCount":"2217519"
       },
       {
          "id":"tt0167261",
          "rank":"14",
          "title":"The Lord of the Rings: The Two Towers",
          "fullTitle":"The Lord of the Rings: The Two Towers (2002)",
          "year":"2002",
          "image":"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
          "imDbRating":"8.7",
          "imDbRatingCount":"1573748"
       },
       {
          "id":"tt0080684",
          "rank":"15",
          "title":"Star Wars: Episode V - The Empire Strikes Back",
          "fullTitle":"Star Wars: Episode V - The Empire Strikes Back (1980)",
          "year":"1980",
          "image":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Irvin Kershner (dir.), Mark Hamill, Harrison Ford",
          "imDbRating":"8.7",
          "imDbRatingCount":"1225595"
       },
       {
          "id":"tt0133093",
          "rank":"16",
          "title":"The Matrix",
          "fullTitle":"The Matrix (1999)",
          "year":"1999",
          "image":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne",
          "imDbRating":"8.7",
          "imDbRatingCount":"1817710"
       },
       {
          "id":"tt0099685",
          "rank":"17",
          "title":"Goodfellas",
          "fullTitle":"Goodfellas (1990)",
          "year":"1990",
          "image":"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Robert De Niro, Ray Liotta",
          "imDbRating":"8.6",
          "imDbRatingCount":"1091484"
       },
       {
          "id":"tt0073486",
          "rank":"18",
          "title":"One Flew Over the Cuckoo's Nest",
          "fullTitle":"One Flew Over the Cuckoo's Nest (1975)",
          "year":"1975",
          "image":"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Milos Forman (dir.), Jack Nicholson, Louise Fletcher",
          "imDbRating":"8.6",
          "imDbRatingCount":"967585"
       },
       {
          "id":"tt10872600",
          "rank":"19",
          "title":"Spider-Man: No Way Home",
          "fullTitle":"Spider-Man: No Way Home (2021)",
          "year":"2021",
          "image":"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Jon Watts (dir.), Tom Holland, Zendaya",
          "imDbRating":"8.6",
          "imDbRatingCount":"371148"
       },
       {
          "id":"tt0047478",
          "rank":"20",
          "title":"Seven Samurai",
          "fullTitle":"Seven Samurai (1954)",
          "year":"1954",
          "image":"https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura",
          "imDbRating":"8.6",
          "imDbRatingCount":"333666"
       },
       {
          "id":"tt0114369",
          "rank":"21",
          "title":"Se7en",
          "fullTitle":"Se7en (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Fincher (dir.), Morgan Freeman, Brad Pitt",
          "imDbRating":"8.6",
          "imDbRatingCount":"1548580"
       },
       {
          "id":"tt0102926",
          "rank":"22",
          "title":"The Silence of the Lambs",
          "fullTitle":"The Silence of the Lambs (1991)",
          "year":"1991",
          "image":"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Jonathan Demme (dir.), Jodie Foster, Anthony Hopkins",
          "imDbRating":"8.6",
          "imDbRatingCount":"1356974"
       },
       {
          "id":"tt0317248",
          "rank":"23",
          "title":"City of God",
          "fullTitle":"City of God (2002)",
          "year":"2002",
          "image":"https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Fernando Meirelles (dir.), Alexandre Rodrigues, Leandro Firmino",
          "imDbRating":"8.6",
          "imDbRatingCount":"730896"
       },
       {
          "id":"tt0038650",
          "rank":"24",
          "title":"It's a Wonderful Life",
          "fullTitle":"It's a Wonderful Life (1946)",
          "year":"1946",
          "image":"https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Frank Capra (dir.), James Stewart, Donna Reed",
          "imDbRating":"8.6",
          "imDbRatingCount":"437165"
       },
       {
          "id":"tt0118799",
          "rank":"25",
          "title":"Life Is Beautiful",
          "fullTitle":"Life Is Beautiful (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Roberto Benigni (dir.), Roberto Benigni, Nicoletta Braschi",
          "imDbRating":"8.6",
          "imDbRatingCount":"663713"
       },
       {
          "id":"tt0120815",
          "rank":"26",
          "title":"Saving Private Ryan",
          "fullTitle":"Saving Private Ryan (1998)",
          "year":"1998",
          "image":"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Tom Hanks, Matt Damon",
          "imDbRating":"8.6",
          "imDbRatingCount":"1317266"
       },
       {
          "id":"tt0076759",
          "rank":"27",
          "title":"Star Wars: Episode IV - A New Hope",
          "fullTitle":"Star Wars: Episode IV - A New Hope (1977)",
          "year":"1977",
          "image":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"George Lucas (dir.), Mark Hamill, Harrison Ford",
          "imDbRating":"8.5",
          "imDbRatingCount":"1297198"
       },
       {
          "id":"tt0816692",
          "rank":"28",
          "title":"Interstellar",
          "fullTitle":"Interstellar (2014)",
          "year":"2014",
          "image":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway",
          "imDbRating":"8.5",
          "imDbRatingCount":"1669058"
       },
       {
          "id":"tt0245429",
          "rank":"29",
          "title":"Spirited Away",
          "fullTitle":"Spirited Away (2001)",
          "year":"2001",
          "image":"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Hayao Miyazaki (dir.), Daveigh Chase, Suzanne Pleshette",
          "imDbRating":"8.5",
          "imDbRatingCount":"711175"
       },
       {
          "id":"tt0120689",
          "rank":"30",
          "title":"The Green Mile",
          "fullTitle":"The Green Mile (1999)",
          "year":"1999",
          "image":"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Frank Darabont (dir.), Tom Hanks, Michael Clarke Duncan",
          "imDbRating":"8.5",
          "imDbRatingCount":"1227355"
       },
       {
          "id":"tt6751668",
          "rank":"31",
          "title":"Parasite",
          "fullTitle":"Parasite (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Bong Joon Ho (dir.), Kang-ho Song, Sun-kyun Lee",
          "imDbRating":"8.5",
          "imDbRatingCount":"703459"
       },
       {
          "id":"tt0110413",
          "rank":"32",
          "title":"Léon: The Professional",
          "fullTitle":"Léon: The Professional (1994)",
          "year":"1994",
          "image":"https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Luc Besson (dir.), Jean Reno, Gary Oldman",
          "imDbRating":"8.5",
          "imDbRatingCount":"1102834"
       },
       {
          "id":"tt0056058",
          "rank":"33",
          "title":"Hara-Kiri",
          "fullTitle":"Hara-Kiri (1962)",
          "year":"1962",
          "image":"https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"Masaki Kobayashi (dir.), Tatsuya Nakadai, Akira Ishihama",
          "imDbRating":"8.5",
          "imDbRatingCount":"51304"
       },
       {
          "id":"tt0253474",
          "rank":"34",
          "title":"The Pianist",
          "fullTitle":"The Pianist (2002)",
          "year":"2002",
          "image":"https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"Roman Polanski (dir.), Adrien Brody, Thomas Kretschmann",
          "imDbRating":"8.5",
          "imDbRatingCount":"786553"
       },
       {
          "id":"tt0103064",
          "rank":"35",
          "title":"Terminator 2: Judgment Day",
          "fullTitle":"Terminator 2: Judgment Day (1991)",
          "year":"1991",
          "image":"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"James Cameron (dir.), Arnold Schwarzenegger, Linda Hamilton",
          "imDbRating":"8.5",
          "imDbRatingCount":"1049632"
       },
       {
          "id":"tt0088763",
          "rank":"36",
          "title":"Back to the Future",
          "fullTitle":"Back to the Future (1985)",
          "year":"1985",
          "image":"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Robert Zemeckis (dir.), Michael J. Fox, Christopher Lloyd",
          "imDbRating":"8.5",
          "imDbRatingCount":"1135254"
       },
       {
          "id":"tt0114814",
          "rank":"37",
          "title":"The Usual Suspects",
          "fullTitle":"The Usual Suspects (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Bryan Singer (dir.), Kevin Spacey, Gabriel Byrne",
          "imDbRating":"8.5",
          "imDbRatingCount":"1043732"
       },
       {
          "id":"tt0054215",
          "rank":"38",
          "title":"Psycho",
          "fullTitle":"Psycho (1960)",
          "year":"1960",
          "image":"https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), Anthony Perkins, Janet Leigh",
          "imDbRating":"8.5",
          "imDbRatingCount":"641701"
       },
       {
          "id":"tt0110357",
          "rank":"39",
          "title":"The Lion King",
          "fullTitle":"The Lion King (1994)",
          "year":"1994",
          "image":"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Roger Allers (dir.), Matthew Broderick, Jeremy Irons",
          "imDbRating":"8.5",
          "imDbRatingCount":"1001860"
       },
       {
          "id":"tt0027977",
          "rank":"40",
          "title":"Modern Times",
          "fullTitle":"Modern Times (1936)",
          "year":"1936",
          "image":"https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Charles Chaplin (dir.), Charles Chaplin, Paulette Goddard",
          "imDbRating":"8.5",
          "imDbRatingCount":"232549"
       },
       {
          "id":"tt0095327",
          "rank":"41",
          "title":"Grave of the Fireflies",
          "fullTitle":"Grave of the Fireflies (1988)",
          "year":"1988",
          "image":"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Isao Takahata (dir.), Tsutomu Tatsumi, Ayano Shiraishi",
          "imDbRating":"8.5",
          "imDbRatingCount":"258930"
       },
       {
          "id":"tt0120586",
          "rank":"42",
          "title":"American History X",
          "fullTitle":"American History X (1998)",
          "year":"1998",
          "image":"https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Tony Kaye (dir.), Edward Norton, Edward Furlong",
          "imDbRating":"8.5",
          "imDbRatingCount":"1080683"
       },
       {
          "id":"tt2582802",
          "rank":"43",
          "title":"Whiplash",
          "fullTitle":"Whiplash (2014)",
          "year":"2014",
          "image":"https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Damien Chazelle (dir.), Miles Teller, J.K. Simmons",
          "imDbRating":"8.5",
          "imDbRatingCount":"783358"
       },
       {
          "id":"tt0172495",
          "rank":"44",
          "title":"Gladiator",
          "fullTitle":"Gladiator (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ridley Scott (dir.), Russell Crowe, Joaquin Phoenix",
          "imDbRating":"8.5",
          "imDbRatingCount":"1425305"
       },
       {
          "id":"tt0021749",
          "rank":"45",
          "title":"City Lights",
          "fullTitle":"City Lights (1931)",
          "year":"1931",
          "image":"https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Charles Chaplin (dir.), Charles Chaplin, Virginia Cherrill",
          "imDbRating":"8.5",
          "imDbRatingCount":"178619"
       },
       {
          "id":"tt0407887",
          "rank":"46",
          "title":"The Departed",
          "fullTitle":"The Departed (2006)",
          "year":"2006",
          "image":"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Leonardo DiCaprio, Matt Damon",
          "imDbRating":"8.5",
          "imDbRatingCount":"1261896"
       },
       {
          "id":"tt1675434",
          "rank":"47",
          "title":"The Intouchables",
          "fullTitle":"The Intouchables (2011)",
          "year":"2011",
          "image":"https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Olivier Nakache (dir.), François Cluzet, Omar Sy",
          "imDbRating":"8.5",
          "imDbRatingCount":"812889"
       },
       {
          "id":"tt0482571",
          "rank":"48",
          "title":"The Prestige",
          "fullTitle":"The Prestige (2006)",
          "year":"2006",
          "image":"https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Christian Bale, Hugh Jackman",
          "imDbRating":"8.5",
          "imDbRatingCount":"1267951"
       },
       {
          "id":"tt0034583",
          "rank":"49",
          "title":"Casablanca",
          "fullTitle":"Casablanca (1942)",
          "year":"1942",
          "image":"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Michael Curtiz (dir.), Humphrey Bogart, Ingrid Bergman",
          "imDbRating":"8.4",
          "imDbRatingCount":"550652"
       },
       {
          "id":"tt0064116",
          "rank":"50",
          "title":"Once Upon a Time in the West",
          "fullTitle":"Once Upon a Time in the West (1968)",
          "year":"1968",
          "image":"https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sergio Leone (dir.), Henry Fonda, Charles Bronson",
          "imDbRating":"8.4",
          "imDbRatingCount":"318678"
       },
       {
          "id":"tt0047396",
          "rank":"51",
          "title":"Rear Window",
          "fullTitle":"Rear Window (1954)",
          "year":"1954",
          "image":"https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), James Stewart, Grace Kelly",
          "imDbRating":"8.4",
          "imDbRatingCount":"472761"
       },
       {
          "id":"tt0095765",
          "rank":"52",
          "title":"Cinema Paradiso",
          "fullTitle":"Cinema Paradiso (1988)",
          "year":"1988",
          "image":"https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Giuseppe Tornatore (dir.), Philippe Noiret, Enzo Cannavale",
          "imDbRating":"8.4",
          "imDbRatingCount":"249740"
       },
       {
          "id":"tt0078748",
          "rank":"53",
          "title":"Alien",
          "fullTitle":"Alien (1979)",
          "year":"1979",
          "image":"https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ridley Scott (dir.), Sigourney Weaver, Tom Skerritt",
          "imDbRating":"8.4",
          "imDbRatingCount":"837989"
       },
       {
          "id":"tt0078788",
          "rank":"54",
          "title":"Apocalypse Now",
          "fullTitle":"Apocalypse Now (1979)",
          "year":"1979",
          "image":"https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Francis Ford Coppola (dir.), Martin Sheen, Marlon Brando",
          "imDbRating":"8.4",
          "imDbRatingCount":"639924"
       },
       {
          "id":"tt0209144",
          "rank":"55",
          "title":"Memento",
          "fullTitle":"Memento (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Guy Pearce, Carrie-Anne Moss",
          "imDbRating":"8.4",
          "imDbRatingCount":"1186634"
       },
       {
          "id":"tt0082971",
          "rank":"56",
          "title":"Indiana Jones and the Raiders of the Lost Ark",
          "fullTitle":"Indiana Jones and the Raiders of the Lost Ark (1981)",
          "year":"1981",
          "image":"https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Harrison Ford, Karen Allen",
          "imDbRating":"8.4",
          "imDbRatingCount":"929639"
       },
       {
          "id":"tt0032553",
          "rank":"57",
          "title":"The Great Dictator",
          "fullTitle":"The Great Dictator (1940)",
          "year":"1940",
          "image":"https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Charles Chaplin (dir.), Charles Chaplin, Paulette Goddard",
          "imDbRating":"8.4",
          "imDbRatingCount":"216342"
       },
       {
          "id":"tt1853728",
          "rank":"58",
          "title":"Django Unchained",
          "fullTitle":"Django Unchained (2012)",
          "year":"2012",
          "image":"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Quentin Tarantino (dir.), Jamie Foxx, Christoph Waltz",
          "imDbRating":"8.4",
          "imDbRatingCount":"1458769"
       },
       {
          "id":"tt0405094",
          "rank":"59",
          "title":"The Lives of Others",
          "fullTitle":"The Lives of Others (2006)",
          "year":"2006",
          "image":"https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Florian Henckel von Donnersmarck (dir.), Ulrich Mühe, Martina Gedeck",
          "imDbRating":"8.4",
          "imDbRatingCount":"377762"
       },
       {
          "id":"tt0050825",
          "rank":"60",
          "title":"Paths of Glory",
          "fullTitle":"Paths of Glory (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Kirk Douglas, Ralph Meeker",
          "imDbRating":"8.4",
          "imDbRatingCount":"189989"
       },
       {
          "id":"tt0043014",
          "rank":"61",
          "title":"Sunset Blvd.",
          "fullTitle":"Sunset Blvd. (1950)",
          "year":"1950",
          "image":"https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Billy Wilder (dir.), William Holden, Gloria Swanson",
          "imDbRating":"8.4",
          "imDbRatingCount":"214197"
       },
       {
          "id":"tt0910970",
          "rank":"62",
          "title":"WALL·E",
          "fullTitle":"WALL·E (2008)",
          "year":"2008",
          "image":"https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Andrew Stanton (dir.), Ben Burtt, Elissa Knight",
          "imDbRating":"8.4",
          "imDbRatingCount":"1061010"
       },
       {
          "id":"tt4154756",
          "rank":"63",
          "title":"Avengers: Infinity War",
          "fullTitle":"Avengers: Infinity War (2018)",
          "year":"2018",
          "image":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Anthony Russo (dir.), Robert Downey Jr., Chris Hemsworth",
          "imDbRating":"8.4",
          "imDbRatingCount":"965351"
       },
       {
          "id":"tt0051201",
          "rank":"64",
          "title":"Witness for the Prosecution",
          "fullTitle":"Witness for the Prosecution (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BZDA4MWNkMTctZDQ0Mi00MTY2LThjYTAtNWM5OTY3NzA4MzIyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Billy Wilder (dir.), Tyrone Power, Marlene Dietrich",
          "imDbRating":"8.4",
          "imDbRatingCount":"119247"
       },
       {
          "id":"tt0081505",
          "rank":"65",
          "title":"The Shining",
          "fullTitle":"The Shining (1980)",
          "year":"1980",
          "image":"https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Jack Nicholson, Shelley Duvall",
          "imDbRating":"8.4",
          "imDbRatingCount":"963984"
       },
       {
          "id":"tt4633694",
          "rank":"66",
          "title":"Spider-Man: Into the Spider-Verse",
          "fullTitle":"Spider-Man: Into the Spider-Verse (2018)",
          "year":"2018",
          "image":"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Bob Persichetti (dir.), Shameik Moore, Jake Johnson",
          "imDbRating":"8.4",
          "imDbRatingCount":"459234"
       },
       {
          "id":"tt0057012",
          "rank":"67",
          "title":"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
          "fullTitle":"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
          "year":"1964",
          "image":"https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Peter Sellers, George C. Scott",
          "imDbRating":"8.4",
          "imDbRatingCount":"473430"
       },
       {
          "id":"tt0119698",
          "rank":"68",
          "title":"Princess Mononoke",
          "fullTitle":"Princess Mononoke (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Hayao Miyazaki (dir.), Yôji Matsuda, Yuriko Ishida",
          "imDbRating":"8.3",
          "imDbRatingCount":"372675"
       },
       {
          "id":"tt0364569",
          "rank":"69",
          "title":"Oldboy",
          "fullTitle":"Oldboy (2003)",
          "year":"2003",
          "image":"https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Park Chan-wook (dir.), Choi Min-sik, Yoo Ji-Tae",
          "imDbRating":"8.3",
          "imDbRatingCount":"551083"
       },
       {
          "id":"tt7286456",
          "rank":"70",
          "title":"Joker",
          "fullTitle":"Joker (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Todd Phillips (dir.), Joaquin Phoenix, Robert De Niro",
          "imDbRating":"8.3",
          "imDbRatingCount":"1124380"
       },
       {
          "id":"tt5311514",
          "rank":"71",
          "title":"Your Name.",
          "fullTitle":"Your Name. (2016)",
          "year":"2016",
          "image":"https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Makoto Shinkai (dir.), Ryûnosuke Kamiki, Mone Kamishiraishi",
          "imDbRating":"8.3",
          "imDbRatingCount":"236241"
       },
       {
          "id":"tt2380307",
          "rank":"72",
          "title":"Coco",
          "fullTitle":"Coco (2017)",
          "year":"2017",
          "image":"https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Lee Unkrich (dir.), Anthony Gonzalez, Gael García Bernal",
          "imDbRating":"8.3",
          "imDbRatingCount":"452820"
       },
       {
          "id":"tt1345836",
          "rank":"73",
          "title":"The Dark Knight Rises",
          "fullTitle":"The Dark Knight Rises (2012)",
          "year":"2012",
          "image":"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Christian Bale, Tom Hardy",
          "imDbRating":"8.3",
          "imDbRatingCount":"1606493"
       },
       {
          "id":"tt0090605",
          "rank":"74",
          "title":"Aliens",
          "fullTitle":"Aliens (1986)",
          "year":"1986",
          "image":"https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"James Cameron (dir.), Sigourney Weaver, Michael Biehn",
          "imDbRating":"8.3",
          "imDbRatingCount":"688943"
       },
       {
          "id":"tt0087843",
          "rank":"75",
          "title":"Once Upon a Time in America",
          "fullTitle":"Once Upon a Time in America (1984)",
          "year":"1984",
          "image":"https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sergio Leone (dir.), Robert De Niro, James Woods",
          "imDbRating":"8.3",
          "imDbRatingCount":"335948"
       },
       {
          "id":"tt4154796",
          "rank":"76",
          "title":"Avengers: Endgame",
          "fullTitle":"Avengers: Endgame (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Anthony Russo (dir.), Robert Downey Jr., Chris Evans",
          "imDbRating":"8.3",
          "imDbRatingCount":"991111"
       },
       {
          "id":"tt8267604",
          "rank":"77",
          "title":"Capernaum",
          "fullTitle":"Capernaum (2018)",
          "year":"2018",
          "image":"https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Nadine Labaki (dir.), Zain Al Rafeea, Yordanos Shiferaw",
          "imDbRating":"8.3",
          "imDbRatingCount":"79990"
       },
       {
          "id":"tt0082096",
          "rank":"78",
          "title":"Das Boot",
          "fullTitle":"Das Boot (1981)",
          "year":"1981",
          "image":"https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Wolfgang Petersen (dir.), Jürgen Prochnow, Herbert Grönemeyer",
          "imDbRating":"8.3",
          "imDbRatingCount":"243651"
       },
       {
          "id":"tt0057565",
          "rank":"79",
          "title":"High and Low",
          "fullTitle":"High and Low (1963)",
          "year":"1963",
          "image":"https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Toshirô Mifune, Yutaka Sada",
          "imDbRating":"8.3",
          "imDbRatingCount":"41068"
       },
       {
          "id":"tt1187043",
          "rank":"80",
          "title":"3 Idiots",
          "fullTitle":"3 Idiots (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Rajkumar Hirani (dir.), Aamir Khan, Madhavan",
          "imDbRating":"8.3",
          "imDbRatingCount":"375607"
       },
       {
          "id":"tt0114709",
          "rank":"81",
          "title":"Toy Story",
          "fullTitle":"Toy Story (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John Lasseter (dir.), Tom Hanks, Tim Allen",
          "imDbRating":"8.3",
          "imDbRatingCount":"943443"
       },
       {
          "id":"tt0086879",
          "rank":"82",
          "title":"Amadeus",
          "fullTitle":"Amadeus (1984)",
          "year":"1984",
          "image":"https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Milos Forman (dir.), F. Murray Abraham, Tom Hulce",
          "imDbRating":"8.3",
          "imDbRatingCount":"387488"
       },
       {
          "id":"tt0169547",
          "rank":"83",
          "title":"American Beauty",
          "fullTitle":"American Beauty (1999)",
          "year":"1999",
          "image":"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sam Mendes (dir.), Kevin Spacey, Annette Bening",
          "imDbRating":"8.3",
          "imDbRatingCount":"1117454"
       },
       {
          "id":"tt0112573",
          "rank":"84",
          "title":"Braveheart",
          "fullTitle":"Braveheart (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Mel Gibson (dir.), Mel Gibson, Sophie Marceau",
          "imDbRating":"8.3",
          "imDbRatingCount":"1001211"
       },
       {
          "id":"tt0361748",
          "rank":"85",
          "title":"Inglourious Basterds",
          "fullTitle":"Inglourious Basterds (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Quentin Tarantino (dir.), Brad Pitt, Diane Kruger",
          "imDbRating":"8.3",
          "imDbRatingCount":"1361312"
       },
       {
          "id":"tt8503618",
          "rank":"86",
          "title":"Hamilton",
          "fullTitle":"Hamilton (2020)",
          "year":"2020",
          "image":"https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Thomas Kail (dir.), Lin-Manuel Miranda, Phillipa Soo",
          "imDbRating":"8.3",
          "imDbRatingCount":"80318"
       },
       {
          "id":"tt0119217",
          "rank":"87",
          "title":"Good Will Hunting",
          "fullTitle":"Good Will Hunting (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Gus Van Sant (dir.), Robin Williams, Matt Damon",
          "imDbRating":"8.3",
          "imDbRatingCount":"918046"
       },
       {
          "id":"tt0086190",
          "rank":"88",
          "title":"Star Wars: Episode VI - Return of the Jedi",
          "fullTitle":"Star Wars: Episode VI - Return of the Jedi (1983)",
          "year":"1983",
          "image":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Richard Marquand (dir.), Mark Hamill, Harrison Ford",
          "imDbRating":"8.3",
          "imDbRatingCount":"1002155"
       },
       {
          "id":"tt0062622",
          "rank":"89",
          "title":"2001: A Space Odyssey",
          "fullTitle":"2001: A Space Odyssey (1968)",
          "year":"1968",
          "image":"https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Keir Dullea, Gary Lockwood",
          "imDbRating":"8.3",
          "imDbRatingCount":"640275"
       },
       {
          "id":"tt0091251",
          "rank":"90",
          "title":"Come and See",
          "fullTitle":"Come and See (1985)",
          "year":"1985",
          "image":"https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Elem Klimov (dir.), Aleksey Kravchenko, Olga Mironova",
          "imDbRating":"8.3",
          "imDbRatingCount":"70960"
       },
       {
          "id":"tt0105236",
          "rank":"91",
          "title":"Reservoir Dogs",
          "fullTitle":"Reservoir Dogs (1992)",
          "year":"1992",
          "image":"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Quentin Tarantino (dir.), Harvey Keitel, Tim Roth",
          "imDbRating":"8.3",
          "imDbRatingCount":"973017"
       },
       {
          "id":"tt0986264",
          "rank":"92",
          "title":"Like Stars on Earth",
          "fullTitle":"Like Stars on Earth (2007)",
          "year":"2007",
          "image":"https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Aamir Khan (dir.), Darsheel Safary, Aamir Khan",
          "imDbRating":"8.3",
          "imDbRatingCount":"184195"
       },
       {
          "id":"tt0052357",
          "rank":"93",
          "title":"Vertigo",
          "fullTitle":"Vertigo (1958)",
          "year":"1958",
          "image":"https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), James Stewart, Kim Novak",
          "imDbRating":"8.3",
          "imDbRatingCount":"388161"
       },
       {
          "id":"tt0022100",
          "rank":"94",
          "title":"M",
          "fullTitle":"M (1931)",
          "year":"1931",
          "image":"https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Fritz Lang (dir.), Peter Lorre, Ellen Widmann",
          "imDbRating":"8.3",
          "imDbRatingCount":"152807"
       },
       {
          "id":"tt2106476",
          "rank":"95",
          "title":"The Hunt",
          "fullTitle":"The Hunt (2012)",
          "year":"2012",
          "image":"https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Thomas Vinterberg (dir.), Mads Mikkelsen, Thomas Bo Larsen",
          "imDbRating":"8.3",
          "imDbRatingCount":"311214"
       },
       {
          "id":"tt0033467",
          "rank":"96",
          "title":"Citizen Kane",
          "fullTitle":"Citizen Kane (1941)",
          "year":"1941",
          "image":"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Orson Welles (dir.), Orson Welles, Joseph Cotten",
          "imDbRating":"8.3",
          "imDbRatingCount":"428096"
       },
       {
          "id":"tt0180093",
          "rank":"97",
          "title":"Requiem for a Dream",
          "fullTitle":"Requiem for a Dream (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Darren Aronofsky (dir.), Ellen Burstyn, Jared Leto",
          "imDbRating":"8.3",
          "imDbRatingCount":"806400"
       },
       {
          "id":"tt0045152",
          "rank":"98",
          "title":"Singin' in the Rain",
          "fullTitle":"Singin' in the Rain (1952)",
          "year":"1952",
          "image":"https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Donen (dir.), Gene Kelly, Donald O'Connor",
          "imDbRating":"8.3",
          "imDbRatingCount":"232663"
       },
       {
          "id":"tt0053125",
          "rank":"99",
          "title":"North by Northwest",
          "fullTitle":"North by Northwest (1959)",
          "year":"1959",
          "image":"https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), Cary Grant, Eva Marie Saint",
          "imDbRating":"8.3",
          "imDbRatingCount":"316825"
       },
       {
          "id":"tt0338013",
          "rank":"100",
          "title":"Eternal Sunshine of the Spotless Mind",
          "fullTitle":"Eternal Sunshine of the Spotless Mind (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Michel Gondry (dir.), Jim Carrey, Kate Winslet",
          "imDbRating":"8.3",
          "imDbRatingCount":"962720"
       },
       {
          "id":"tt0044741",
          "rank":"101",
          "title":"Ikiru",
          "fullTitle":"Ikiru (1952)",
          "year":"1952",
          "image":"https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Takashi Shimura, Nobuo Kaneko",
          "imDbRating":"8.3",
          "imDbRatingCount":"75133"
       },
       {
          "id":"tt0040522",
          "rank":"102",
          "title":"Bicycle Thieves",
          "fullTitle":"Bicycle Thieves (1948)",
          "year":"1948",
          "image":"https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Vittorio De Sica (dir.), Lamberto Maggiorani, Enzo Staiola",
          "imDbRating":"8.3",
          "imDbRatingCount":"158060"
       },
       {
          "id":"tt0056172",
          "rank":"103",
          "title":"Lawrence of Arabia",
          "fullTitle":"Lawrence of Arabia (1962)",
          "year":"1962",
          "image":"https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Lean (dir.), Peter O'Toole, Alec Guinness",
          "imDbRating":"8.3",
          "imDbRatingCount":"283607"
       },
       {
          "id":"tt0012349",
          "rank":"104",
          "title":"The Kid",
          "fullTitle":"The Kid (1921)",
          "year":"1921",
          "image":"https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Charles Chaplin (dir.), Charles Chaplin, Edna Purviance",
          "imDbRating":"8.2",
          "imDbRatingCount":"122170"
       },
       {
          "id":"tt0093058",
          "rank":"105",
          "title":"Full Metal Jacket",
          "fullTitle":"Full Metal Jacket (1987)",
          "year":"1987",
          "image":"https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Matthew Modine, R. Lee Ermey",
          "imDbRating":"8.2",
          "imDbRatingCount":"711684"
       },
       {
          "id":"tt5074352",
          "rank":"106",
          "title":"Dangal",
          "fullTitle":"Dangal (2016)",
          "year":"2016",
          "image":"https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Nitesh Tiwari (dir.), Aamir Khan, Sakshi Tanwar",
          "imDbRating":"8.2",
          "imDbRatingCount":"176349"
       },
       {
          "id":"tt1255953",
          "rank":"107",
          "title":"Incendies",
          "fullTitle":"Incendies (2010)",
          "year":"2010",
          "image":"https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Denis Villeneuve (dir.), Lubna Azabal, Mélissa Désormeaux-Poulin",
          "imDbRating":"8.2",
          "imDbRatingCount":"167331"
       },
       {
          "id":"tt0053604",
          "rank":"108",
          "title":"The Apartment",
          "fullTitle":"The Apartment (1960)",
          "year":"1960",
          "image":"https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Billy Wilder (dir.), Jack Lemmon, Shirley MacLaine",
          "imDbRating":"8.2",
          "imDbRatingCount":"175035"
       },
       {
          "id":"tt0036775",
          "rank":"109",
          "title":"Double Indemnity",
          "fullTitle":"Double Indemnity (1944)",
          "year":"1944",
          "image":"https://m.media-amazon.com/images/M/MV5BZGRiNGQ0NzUtZjczMS00ZjIzLWI4NjAtY2ZiNTM2MGQxZGFiXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Billy Wilder (dir.), Fred MacMurray, Barbara Stanwyck",
          "imDbRating":"8.2",
          "imDbRatingCount":"151957"
       },
       {
          "id":"tt0017136",
          "rank":"110",
          "title":"Metropolis",
          "fullTitle":"Metropolis (1927)",
          "year":"1927",
          "image":"https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Fritz Lang (dir.), Brigitte Helm, Alfred Abel",
          "imDbRating":"8.2",
          "imDbRatingCount":"169057"
       },
       {
          "id":"tt0075314",
          "rank":"111",
          "title":"Taxi Driver",
          "fullTitle":"Taxi Driver (1976)",
          "year":"1976",
          "image":"https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Robert De Niro, Jodie Foster",
          "imDbRating":"8.2",
          "imDbRatingCount":"776695"
       },
       {
          "id":"tt0066921",
          "rank":"112",
          "title":"A Clockwork Orange",
          "fullTitle":"A Clockwork Orange (1971)",
          "year":"1971",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Malcolm McDowell, Patrick Magee",
          "imDbRating":"8.2",
          "imDbRatingCount":"797229"
       },
       {
          "id":"tt10272386",
          "rank":"113",
          "title":"The Father",
          "fullTitle":"The Father (2020)",
          "year":"2020",
          "image":"https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Florian Zeller (dir.), Anthony Hopkins, Olivia Colman",
          "imDbRating":"8.2",
          "imDbRatingCount":"116253"
       },
       {
          "id":"tt1832382",
          "rank":"114",
          "title":"A Separation",
          "fullTitle":"A Separation (2011)",
          "year":"2011",
          "image":"https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Asghar Farhadi (dir.), Payman Maadi, Leila Hatami",
          "imDbRating":"8.2",
          "imDbRatingCount":"235459"
       },
       {
          "id":"tt0070735",
          "rank":"115",
          "title":"The Sting",
          "fullTitle":"The Sting (1973)",
          "year":"1973",
          "image":"https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"George Roy Hill (dir.), Paul Newman, Robert Redford",
          "imDbRating":"8.2",
          "imDbRatingCount":"253712"
       },
       {
          "id":"tt0086250",
          "rank":"116",
          "title":"Scarface",
          "fullTitle":"Scarface (1983)",
          "year":"1983",
          "image":"https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Brian De Palma (dir.), Al Pacino, Michelle Pfeiffer",
          "imDbRating":"8.2",
          "imDbRatingCount":"793206"
       },
       {
          "id":"tt0208092",
          "rank":"117",
          "title":"Snatch",
          "fullTitle":"Snatch (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Guy Ritchie (dir.), Jason Statham, Brad Pitt",
          "imDbRating":"8.2",
          "imDbRatingCount":"823583"
       },
       {
          "id":"tt8579674",
          "rank":"118",
          "title":"1917",
          "fullTitle":"1917 (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sam Mendes (dir.), Dean-Charles Chapman, George MacKay",
          "imDbRating":"8.2",
          "imDbRatingCount":"522002"
       },
       {
          "id":"tt0211915",
          "rank":"119",
          "title":"Amélie",
          "fullTitle":"Amélie (2001)",
          "year":"2001",
          "image":"https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Jean-Pierre Jeunet (dir.), Audrey Tautou, Mathieu Kassovitz",
          "imDbRating":"8.2",
          "imDbRatingCount":"733114"
       },
       {
          "id":"tt0056592",
          "rank":"120",
          "title":"To Kill a Mockingbird",
          "fullTitle":"To Kill a Mockingbird (1962)",
          "year":"1962",
          "image":"https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Robert Mulligan (dir.), Gregory Peck, John Megna",
          "imDbRating":"8.2",
          "imDbRatingCount":"307631"
       },
       {
          "id":"tt0435761",
          "rank":"121",
          "title":"Toy Story 3",
          "fullTitle":"Toy Story 3 (2010)",
          "year":"2010",
          "image":"https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Lee Unkrich (dir.), Tom Hanks, Tim Allen",
          "imDbRating":"8.2",
          "imDbRatingCount":"798426"
       },
       {
          "id":"tt0048473",
          "rank":"122",
          "title":"Pather Panchali",
          "fullTitle":"Pather Panchali (1955)",
          "year":"1955",
          "image":"https://m.media-amazon.com/images/M/MV5BNDE5YmMxYjEtZjNjNC00NjM2LWE2ZjctOTkyNGMxODRiMGNiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Satyajit Ray (dir.), Kanu Bannerjee, Karuna Bannerjee",
          "imDbRating":"8.2",
          "imDbRatingCount":"29979"
       },
       {
          "id":"tt0059578",
          "rank":"123",
          "title":"For a Few Dollars More",
          "fullTitle":"For a Few Dollars More (1965)",
          "year":"1965",
          "image":"https://m.media-amazon.com/images/M/MV5BNWM1NmYyM2ItMTFhNy00NDU0LThlYWUtYjQyYTJmOTY0ZmM0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sergio Leone (dir.), Clint Eastwood, Lee Van Cleef",
          "imDbRating":"8.2",
          "imDbRatingCount":"247284"
       },
       {
          "id":"tt1049413",
          "rank":"124",
          "title":"Up",
          "fullTitle":"Up (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Pete Docter (dir.), Ed Asner, Jordan Nagai",
          "imDbRating":"8.2",
          "imDbRatingCount":"992914"
       },
       {
          "id":"tt0097576",
          "rank":"125",
          "title":"Indiana Jones and the Last Crusade",
          "fullTitle":"Indiana Jones and the Last Crusade (1989)",
          "year":"1989",
          "image":"https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Harrison Ford, Sean Connery",
          "imDbRating":"8.2",
          "imDbRatingCount":"727287"
       },
       {
          "id":"tt0113277",
          "rank":"126",
          "title":"Heat",
          "fullTitle":"Heat (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Michael Mann (dir.), Al Pacino, Robert De Niro",
          "imDbRating":"8.2",
          "imDbRatingCount":"620653"
       },
       {
          "id":"tt0119488",
          "rank":"127",
          "title":"L.A. Confidential",
          "fullTitle":"L.A. Confidential (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Curtis Hanson (dir.), Kevin Spacey, Russell Crowe",
          "imDbRating":"8.2",
          "imDbRatingCount":"561677"
       },
       {
          "id":"tt0055630",
          "rank":"128",
          "title":"Yojimbo",
          "fullTitle":"Yojimbo (1961)",
          "year":"1961",
          "image":"https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Toshirô Mifune, Eijirô Tôno",
          "imDbRating":"8.2",
          "imDbRatingCount":"118932"
       },
       {
          "id":"tt0089881",
          "rank":"129",
          "title":"Ran",
          "fullTitle":"Ran (1985)",
          "year":"1985",
          "image":"https://m.media-amazon.com/images/M/MV5BNTEyNjg0MDM4OF5BMl5BanBnXkFtZTgwODI0NjUxODE@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Tatsuya Nakadai, Akira Terao",
          "imDbRating":"8.2",
          "imDbRatingCount":"121273"
       },
       {
          "id":"tt0095016",
          "rank":"130",
          "title":"Die Hard",
          "fullTitle":"Die Hard (1988)",
          "year":"1988",
          "image":"https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John McTiernan (dir.), Bruce Willis, Alan Rickman",
          "imDbRating":"8.2",
          "imDbRatingCount":"844596"
       },
       {
          "id":"tt6966692",
          "rank":"131",
          "title":"Green Book",
          "fullTitle":"Green Book (2018)",
          "year":"2018",
          "image":"https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Farrelly (dir.), Viggo Mortensen, Mahershala Ali",
          "imDbRating":"8.2",
          "imDbRatingCount":"443678"
       },
       {
          "id":"tt0042876",
          "rank":"132",
          "title":"Rashomon",
          "fullTitle":"Rashomon (1950)",
          "year":"1950",
          "image":"https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Toshirô Mifune, Machiko Kyô",
          "imDbRating":"8.2",
          "imDbRatingCount":"162550"
       },
       {
          "id":"tt0363163",
          "rank":"133",
          "title":"Downfall",
          "fullTitle":"Downfall (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Oliver Hirschbiegel (dir.), Bruno Ganz, Alexandra Maria Lara",
          "imDbRating":"8.2",
          "imDbRatingCount":"345498"
       },
       {
          "id":"tt0071853",
          "rank":"134",
          "title":"Monty Python and the Holy Grail",
          "fullTitle":"Monty Python and the Holy Grail (1975)",
          "year":"1975",
          "image":"https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Terry Gilliam (dir.), Graham Chapman, John Cleese",
          "imDbRating":"8.2",
          "imDbRatingCount":"524283"
       },
       {
          "id":"tt0042192",
          "rank":"135",
          "title":"All About Eve",
          "fullTitle":"All About Eve (1950)",
          "year":"1950",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Joseph L. Mankiewicz (dir.), Bette Davis, Anne Baxter",
          "imDbRating":"8.2",
          "imDbRatingCount":"127663"
       },
       {
          "id":"tt0053291",
          "rank":"136",
          "title":"Some Like It Hot",
          "fullTitle":"Some Like It Hot (1959)",
          "year":"1959",
          "image":"https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Billy Wilder (dir.), Marilyn Monroe, Tony Curtis",
          "imDbRating":"8.2",
          "imDbRatingCount":"258009"
       },
       {
          "id":"tt0372784",
          "rank":"137",
          "title":"Batman Begins",
          "fullTitle":"Batman Begins (2005)",
          "year":"2005",
          "image":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Christopher Nolan (dir.), Christian Bale, Michael Caine",
          "imDbRating":"8.2",
          "imDbRatingCount":"1383395"
       },
       {
          "id":"tt0105695",
          "rank":"138",
          "title":"Unforgiven",
          "fullTitle":"Unforgiven (1992)",
          "year":"1992",
          "image":"https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Clint Eastwood (dir.), Clint Eastwood, Gene Hackman",
          "imDbRating":"8.2",
          "imDbRatingCount":"397581"
       },
       {
          "id":"tt0118849",
          "rank":"139",
          "title":"Children of Heaven",
          "fullTitle":"Children of Heaven (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Majid Majidi (dir.), Mohammad Amir Naji, Amir Farrokh Hashemian",
          "imDbRating":"8.2",
          "imDbRatingCount":"71758"
       },
       {
          "id":"tt0347149",
          "rank":"140",
          "title":"Howl's Moving Castle",
          "fullTitle":"Howl's Moving Castle (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Hayao Miyazaki (dir.), Chieko Baishô, Takuya Kimura",
          "imDbRating":"8.2",
          "imDbRatingCount":"367400"
       },
       {
          "id":"tt15097216",
          "rank":"141",
          "title":"Jai Bhim",
          "fullTitle":"Jai Bhim (2021)",
          "year":"2021",
          "image":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY176_CR6,0,128,176_AL_.jpg",
          "crew":"T.J. Gnanavel (dir.), Suriya, Lijo Mol Jose",
          "imDbRating":"8.2",
          "imDbRatingCount":"166207"
       },
       {
          "id":"tt0993846",
          "rank":"142",
          "title":"The Wolf of Wall Street",
          "fullTitle":"The Wolf of Wall Street (2013)",
          "year":"2013",
          "image":"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Leonardo DiCaprio, Jonah Hill",
          "imDbRating":"8.2",
          "imDbRatingCount":"1300380"
       },
       {
          "id":"tt0055031",
          "rank":"143",
          "title":"Judgment at Nuremberg",
          "fullTitle":"Judgment at Nuremberg (1961)",
          "year":"1961",
          "image":"https://m.media-amazon.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kramer (dir.), Spencer Tracy, Burt Lancaster",
          "imDbRating":"8.2",
          "imDbRatingCount":"74818"
       },
       {
          "id":"tt0469494",
          "rank":"144",
          "title":"There Will Be Blood",
          "fullTitle":"There Will Be Blood (2007)",
          "year":"2007",
          "image":"https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Paul Thomas Anderson (dir.), Daniel Day-Lewis, Paul Dano",
          "imDbRating":"8.2",
          "imDbRatingCount":"556056"
       },
       {
          "id":"tt0057115",
          "rank":"145",
          "title":"The Great Escape",
          "fullTitle":"The Great Escape (1963)",
          "year":"1963",
          "image":"https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John Sturges (dir.), Steve McQueen, James Garner",
          "imDbRating":"8.2",
          "imDbRatingCount":"237036"
       },
       {
          "id":"tt0112641",
          "rank":"146",
          "title":"Casino",
          "fullTitle":"Casino (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Robert De Niro, Sharon Stone",
          "imDbRating":"8.2",
          "imDbRatingCount":"496372"
       },
       {
          "id":"tt0040897",
          "rank":"147",
          "title":"The Treasure of the Sierra Madre",
          "fullTitle":"The Treasure of the Sierra Madre (1948)",
          "year":"1948",
          "image":"https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John Huston (dir.), Humphrey Bogart, Walter Huston",
          "imDbRating":"8.2",
          "imDbRatingCount":"121356"
       },
       {
          "id":"tt0457430",
          "rank":"148",
          "title":"Pan's Labyrinth",
          "fullTitle":"Pan's Labyrinth (2006)",
          "year":"2006",
          "image":"https://m.media-amazon.com/images/M/MV5BNzJlMjI2NjEtY2FmNy00ZTE0LWJjYWEtZDg0YmY1ZDBlNmEyXkEyXkFqcGdeQXVyOTI5NTk5NTQ@._V1_UY176_CR6,0,128,176_AL_.jpg",
          "crew":"Guillermo del Toro (dir.), Ivana Baquero, Ariadna Gil",
          "imDbRating":"8.1",
          "imDbRatingCount":"646785"
       },
       {
          "id":"tt0268978",
          "rank":"149",
          "title":"A Beautiful Mind",
          "fullTitle":"A Beautiful Mind (2001)",
          "year":"2001",
          "image":"https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ron Howard (dir.), Russell Crowe, Ed Harris",
          "imDbRating":"8.1",
          "imDbRatingCount":"894650"
       },
       {
          "id":"tt1305806",
          "rank":"150",
          "title":"The Secret in Their Eyes",
          "fullTitle":"The Secret in Their Eyes (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Juan José Campanella (dir.), Ricardo Darín, Soledad Villamil",
          "imDbRating":"8.1",
          "imDbRatingCount":"203545"
       },
       {
          "id":"tt0081398",
          "rank":"151",
          "title":"Raging Bull",
          "fullTitle":"Raging Bull (1980)",
          "year":"1980",
          "image":"https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Robert De Niro, Cathy Moriarty",
          "imDbRating":"8.1",
          "imDbRatingCount":"340350"
       },
       {
          "id":"tt0071315",
          "rank":"152",
          "title":"Chinatown",
          "fullTitle":"Chinatown (1974)",
          "year":"1974",
          "image":"https://m.media-amazon.com/images/M/MV5BOGMwYmY5ZmEtMzY1Yi00OWJiLTk1Y2MtMzI2MjBhYmZkNTQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Roman Polanski (dir.), Jack Nicholson, Faye Dunaway",
          "imDbRating":"8.1",
          "imDbRatingCount":"314107"
       },
       {
          "id":"tt0096283",
          "rank":"153",
          "title":"My Neighbor Totoro",
          "fullTitle":"My Neighbor Totoro (1988)",
          "year":"1988",
          "image":"https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Hayao Miyazaki (dir.), Hitoshi Takagi, Noriko Hidaka",
          "imDbRating":"8.1",
          "imDbRatingCount":"318515"
       },
       {
          "id":"tt1130884",
          "rank":"154",
          "title":"Shutter Island",
          "fullTitle":"Shutter Island (2010)",
          "year":"2010",
          "image":"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin Scorsese (dir.), Leonardo DiCaprio, Emily Mortimer",
          "imDbRating":"8.1",
          "imDbRatingCount":"1225253"
       },
       {
          "id":"tt0120735",
          "rank":"155",
          "title":"Lock, Stock and Two Smoking Barrels",
          "fullTitle":"Lock, Stock and Two Smoking Barrels (1998)",
          "year":"1998",
          "image":"https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Guy Ritchie (dir.), Jason Flemyng, Dexter Fletcher",
          "imDbRating":"8.1",
          "imDbRatingCount":"562815"
       },
       {
          "id":"tt0071411",
          "rank":"156",
          "title":"Dersu Uzala",
          "fullTitle":"Dersu Uzala (1975)",
          "year":"1975",
          "image":"https://m.media-amazon.com/images/M/MV5BYWY0OWJlZTgtMWUzNy00MGJhLTk5YzQtNmY5MDEwOTIxNjMyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Akira Kurosawa (dir.), Maksim Munzuk, Yuriy Solomin",
          "imDbRating":"8.1",
          "imDbRatingCount":"26707"
       },
       {
          "id":"tt0477348",
          "rank":"157",
          "title":"No Country for Old Men",
          "fullTitle":"No Country for Old Men (2007)",
          "year":"2007",
          "image":"https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ethan Coen (dir.), Tommy Lee Jones, Javier Bardem",
          "imDbRating":"8.1",
          "imDbRatingCount":"920156"
       },
       {
          "id":"tt0046912",
          "rank":"158",
          "title":"Dial M for Murder",
          "fullTitle":"Dial M for Murder (1954)",
          "year":"1954",
          "image":"https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), Ray Milland, Grace Kelly",
          "imDbRating":"8.1",
          "imDbRatingCount":"169380"
       },
       {
          "id":"tt4729430",
          "rank":"159",
          "title":"Klaus",
          "fullTitle":"Klaus (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sergio Pablos (dir.), Jason Schwartzman, J.K. Simmons",
          "imDbRating":"8.1",
          "imDbRatingCount":"135828"
       },
       {
          "id":"tt0015864",
          "rank":"160",
          "title":"The Gold Rush",
          "fullTitle":"The Gold Rush (1925)",
          "year":"1925",
          "image":"https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"Charles Chaplin (dir.), Charles Chaplin, Mack Swain",
          "imDbRating":"8.1",
          "imDbRatingCount":"107914"
       },
       {
          "id":"tt0084787",
          "rank":"161",
          "title":"The Thing",
          "fullTitle":"The Thing (1982)",
          "year":"1982",
          "image":"https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John Carpenter (dir.), Kurt Russell, Wilford Brimley",
          "imDbRating":"8.1",
          "imDbRatingCount":"401073"
       },
       {
          "id":"tt5027774",
          "rank":"162",
          "title":"Three Billboards Outside Ebbing, Missouri",
          "fullTitle":"Three Billboards Outside Ebbing, Missouri (2017)",
          "year":"2017",
          "image":"https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Martin McDonagh (dir.), Frances McDormand, Woody Harrelson",
          "imDbRating":"8.1",
          "imDbRatingCount":"477685"
       },
       {
          "id":"tt0050976",
          "rank":"163",
          "title":"The Seventh Seal",
          "fullTitle":"The Seventh Seal (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BM2I1ZWU4YjMtYzU0My00YmMzLWFmNTAtZDJhZGYwMmI3YWQ5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ingmar Bergman (dir.), Max von Sydow, Gunnar Björnstrand",
          "imDbRating":"8.1",
          "imDbRatingCount":"178399"
       },
       {
          "id":"tt0080678",
          "rank":"164",
          "title":"The Elephant Man",
          "fullTitle":"The Elephant Man (1980)",
          "year":"1980",
          "image":"https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Lynch (dir.), Anthony Hopkins, John Hurt",
          "imDbRating":"8.1",
          "imDbRatingCount":"233512"
       },
       {
          "id":"tt0167404",
          "rank":"165",
          "title":"The Sixth Sense",
          "fullTitle":"The Sixth Sense (1999)",
          "year":"1999",
          "image":"https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"M. Night Shyamalan (dir.), Bruce Willis, Haley Joel Osment",
          "imDbRating":"8.1",
          "imDbRatingCount":"954219"
       },
       {
          "id":"tt0120382",
          "rank":"166",
          "title":"The Truman Show",
          "fullTitle":"The Truman Show (1998)",
          "year":"1998",
          "image":"https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Weir (dir.), Jim Carrey, Ed Harris",
          "imDbRating":"8.1",
          "imDbRatingCount":"1010287"
       },
       {
          "id":"tt0107290",
          "rank":"167",
          "title":"Jurassic Park",
          "fullTitle":"Jurassic Park (1993)",
          "year":"1993",
          "image":"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Sam Neill, Laura Dern",
          "imDbRating":"8.1",
          "imDbRatingCount":"925881"
       },
       {
          "id":"tt0050986",
          "rank":"168",
          "title":"Wild Strawberries",
          "fullTitle":"Wild Strawberries (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BZjJhNTBmNTgtMDViOC00NDY2LWE4N2ItMDJiM2ZiYmQzYzliXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Ingmar Bergman (dir.), Victor Sjöström, Bibi Andersson",
          "imDbRating":"8.1",
          "imDbRatingCount":"103800"
       },
       {
          "id":"tt0041959",
          "rank":"169",
          "title":"The Third Man",
          "fullTitle":"The Third Man (1949)",
          "year":"1949",
          "image":"https://m.media-amazon.com/images/M/MV5BY2Y3OGIwNTgtYTlmMy00MDg0LWE4MTQtZDE2ODQ3ZThmNGYwXkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Carol Reed (dir.), Orson Welles, Joseph Cotten",
          "imDbRating":"8.1",
          "imDbRatingCount":"167306"
       },
       {
          "id":"tt0353969",
          "rank":"170",
          "title":"Memories of Murder",
          "fullTitle":"Memories of Murder (2003)",
          "year":"2003",
          "image":"https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Bong Joon Ho (dir.), Kang-ho Song, Kim Sang-kyung",
          "imDbRating":"8.1",
          "imDbRatingCount":"165468"
       },
       {
          "id":"tt0434409",
          "rank":"171",
          "title":"V for Vendetta",
          "fullTitle":"V for Vendetta (2005)",
          "year":"2005",
          "image":"https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"James McTeigue (dir.), Hugo Weaving, Natalie Portman",
          "imDbRating":"8.1",
          "imDbRatingCount":"1082812"
       },
       {
          "id":"tt0083658",
          "rank":"172",
          "title":"Blade Runner",
          "fullTitle":"Blade Runner (1982)",
          "year":"1982",
          "image":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ridley Scott (dir.), Harrison Ford, Rutger Hauer",
          "imDbRating":"8.1",
          "imDbRatingCount":"735607"
       },
       {
          "id":"tt0117951",
          "rank":"173",
          "title":"Trainspotting",
          "fullTitle":"Trainspotting (1996)",
          "year":"1996",
          "image":"https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Danny Boyle (dir.), Ewan McGregor, Ewen Bremner",
          "imDbRating":"8.1",
          "imDbRatingCount":"664272"
       },
       {
          "id":"tt2096673",
          "rank":"174",
          "title":"Inside Out",
          "fullTitle":"Inside Out (2015)",
          "year":"2015",
          "image":"https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Pete Docter (dir.), Amy Poehler, Bill Hader",
          "imDbRating":"8.1",
          "imDbRatingCount":"669002"
       },
       {
          "id":"tt0050212",
          "rank":"175",
          "title":"The Bridge on the River Kwai",
          "fullTitle":"The Bridge on the River Kwai (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BOGY5NmNlMmQtYzRlYy00NGQ5LWFkYjYtNzExZmQyMTg0ZDA0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Lean (dir.), William Holden, Alec Guinness",
          "imDbRating":"8.1",
          "imDbRatingCount":"213938"
       },
       {
          "id":"tt0116282",
          "rank":"176",
          "title":"Fargo",
          "fullTitle":"Fargo (1996)",
          "year":"1996",
          "image":"https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Joel Coen (dir.), William H. Macy, Frances McDormand",
          "imDbRating":"8.1",
          "imDbRatingCount":"652836"
       },
       {
          "id":"tt0266543",
          "rank":"177",
          "title":"Finding Nemo",
          "fullTitle":"Finding Nemo (2003)",
          "year":"2003",
          "image":"https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Andrew Stanton (dir.), Albert Brooks, Ellen DeGeneres",
          "imDbRating":"8.1",
          "imDbRatingCount":"998964"
       },
       {
          "id":"tt1291584",
          "rank":"178",
          "title":"Warrior",
          "fullTitle":"Warrior (2011)",
          "year":"2011",
          "image":"https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Gavin O'Connor (dir.), Tom Hardy, Nick Nolte",
          "imDbRating":"8.1",
          "imDbRatingCount":"455533"
       },
       {
          "id":"tt0266697",
          "rank":"179",
          "title":"Kill Bill: Vol. 1",
          "fullTitle":"Kill Bill: Vol. 1 (2003)",
          "year":"2003",
          "image":"https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Quentin Tarantino (dir.), Uma Thurman, David Carradine",
          "imDbRating":"8.1",
          "imDbRatingCount":"1064074"
       },
       {
          "id":"tt0031381",
          "rank":"180",
          "title":"Gone with the Wind",
          "fullTitle":"Gone with the Wind (1939)",
          "year":"1939",
          "image":"https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Victor Fleming (dir.), Clark Gable, Vivien Leigh",
          "imDbRating":"8.1",
          "imDbRatingCount":"305308"
       },
       {
          "id":"tt0046438",
          "rank":"181",
          "title":"Tokyo Story",
          "fullTitle":"Tokyo Story (1953)",
          "year":"1953",
          "image":"https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Yasujirô Ozu (dir.), Chishû Ryû, Chieko Higashiyama",
          "imDbRating":"8.1",
          "imDbRatingCount":"58927"
       },
       {
          "id":"tt0047296",
          "rank":"182",
          "title":"On the Waterfront",
          "fullTitle":"On the Waterfront (1954)",
          "year":"1954",
          "image":"https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Elia Kazan (dir.), Marlon Brando, Karl Malden",
          "imDbRating":"8.1",
          "imDbRatingCount":"150396"
       },
       {
          "id":"tt0476735",
          "rank":"183",
          "title":"My Father and My Son",
          "fullTitle":"My Father and My Son (2005)",
          "year":"2005",
          "image":"https://m.media-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Cagan Irmak (dir.), Eser Sariyar, Çetin Tekindor",
          "imDbRating":"8.1",
          "imDbRatingCount":"84268"
       },
       {
          "id":"tt3011894",
          "rank":"184",
          "title":"Wild Tales",
          "fullTitle":"Wild Tales (2014)",
          "year":"2014",
          "image":"https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Damián Szifron (dir.), Darío Grandinetti, María Marull",
          "imDbRating":"8.1",
          "imDbRatingCount":"189979"
       },
       {
          "id":"tt1392214",
          "rank":"185",
          "title":"Prisoners",
          "fullTitle":"Prisoners (2013)",
          "year":"2013",
          "image":"https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Denis Villeneuve (dir.), Hugh Jackman, Jake Gyllenhaal",
          "imDbRating":"8.1",
          "imDbRatingCount":"656547"
       },
       {
          "id":"tt0079944",
          "rank":"186",
          "title":"Stalker",
          "fullTitle":"Stalker (1979)",
          "year":"1979",
          "image":"https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Andrei Tarkovsky (dir.), Alisa Freyndlikh, Aleksandr Kaydanovskiy",
          "imDbRating":"8.1",
          "imDbRatingCount":"128902"
       },
       {
          "id":"tt1160419",
          "rank":"187",
          "title":"Dune",
          "fullTitle":"Dune (2021)",
          "year":"2021",
          "image":"https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Denis Villeneuve (dir.), Timothée Chalamet, Rebecca Ferguson",
          "imDbRating":"8.1",
          "imDbRatingCount":"436913"
       },
       {
          "id":"tt2278388",
          "rank":"188",
          "title":"The Grand Budapest Hotel",
          "fullTitle":"The Grand Budapest Hotel (2014)",
          "year":"2014",
          "image":"https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Wes Anderson (dir.), Ralph Fiennes, F. Murray Abraham",
          "imDbRating":"8.1",
          "imDbRatingCount":"762807"
       },
       {
          "id":"tt0077416",
          "rank":"189",
          "title":"The Deer Hunter",
          "fullTitle":"The Deer Hunter (1978)",
          "year":"1978",
          "image":"https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Michael Cimino (dir.), Robert De Niro, Christopher Walken",
          "imDbRating":"8.1",
          "imDbRatingCount":"328741"
       },
       {
          "id":"tt0060827",
          "rank":"190",
          "title":"Persona",
          "fullTitle":"Persona (1966)",
          "year":"1966",
          "image":"https://m.media-amazon.com/images/M/MV5BMTM0YzExY2EtMjUyZi00ZmIwLWFkYTktNjY5NmVkYTdkMjI5XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Ingmar Bergman (dir.), Bibi Andersson, Liv Ullmann",
          "imDbRating":"8.1",
          "imDbRatingCount":"112948"
       },
       {
          "id":"tt0017925",
          "rank":"191",
          "title":"The General",
          "fullTitle":"The General (1926)",
          "year":"1926",
          "image":"https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Clyde Bruckman (dir.), Buster Keaton, Marion Mack",
          "imDbRating":"8.1",
          "imDbRatingCount":"88184"
       },
       {
          "id":"tt0015324",
          "rank":"192",
          "title":"Sherlock Jr.",
          "fullTitle":"Sherlock Jr. (1924)",
          "year":"1924",
          "image":"https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Buster Keaton (dir.), Buster Keaton, Kathryn McGuire",
          "imDbRating":"8.1",
          "imDbRatingCount":"47120"
       },
       {
          "id":"tt1205489",
          "rank":"193",
          "title":"Gran Torino",
          "fullTitle":"Gran Torino (2008)",
          "year":"2008",
          "image":"https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Clint Eastwood (dir.), Clint Eastwood, Bee Vang",
          "imDbRating":"8.1",
          "imDbRatingCount":"751266"
       },
       {
          "id":"tt0112471",
          "rank":"194",
          "title":"Before Sunrise",
          "fullTitle":"Before Sunrise (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Richard Linklater (dir.), Ethan Hawke, Julie Delpy",
          "imDbRating":"8.1",
          "imDbRatingCount":"292193"
       },
       {
          "id":"tt0978762",
          "rank":"195",
          "title":"Mary and Max",
          "fullTitle":"Mary and Max (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Adam Elliot (dir.), Toni Collette, Philip Seymour Hoffman",
          "imDbRating":"8.1",
          "imDbRatingCount":"172697"
       },
       {
          "id":"tt0065234",
          "rank":"196",
          "title":"Z",
          "fullTitle":"Z (1969)",
          "year":"1969",
          "image":"https://m.media-amazon.com/images/M/MV5BNDQ4ZTI5NTktOTY2ZS00NmM3LWE2ZTAtMTdjNzFmOWYzYzhkXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Costa-Gavras (dir.), Yves Montand, Irene Papas",
          "imDbRating":"8.1",
          "imDbRatingCount":"27025"
       },
       {
          "id":"tt0264464",
          "rank":"197",
          "title":"Catch Me If You Can",
          "fullTitle":"Catch Me If You Can (2002)",
          "year":"2002",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steven Spielberg (dir.), Leonardo DiCaprio, Tom Hanks",
          "imDbRating":"8.1",
          "imDbRatingCount":"911272"
       },
       {
          "id":"tt0031679",
          "rank":"198",
          "title":"Mr. Smith Goes to Washington",
          "fullTitle":"Mr. Smith Goes to Washington (1939)",
          "year":"1939",
          "image":"https://m.media-amazon.com/images/M/MV5BZTYwYjYxYzgtMDE1Ni00NzU4LWJlMTEtODQ5YmJmMGJhZjI5L2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Frank Capra (dir.), James Stewart, Jean Arthur",
          "imDbRating":"8.1",
          "imDbRatingCount":"112781"
       },
       {
          "id":"tt0072684",
          "rank":"199",
          "title":"Barry Lyndon",
          "fullTitle":"Barry Lyndon (1975)",
          "year":"1975",
          "image":"https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stanley Kubrick (dir.), Ryan O'Neal, Marisa Berenson",
          "imDbRating":"8.1",
          "imDbRatingCount":"161013"
       },
       {
          "id":"tt0107207",
          "rank":"200",
          "title":"In the Name of the Father",
          "fullTitle":"In the Name of the Father (1993)",
          "year":"1993",
          "image":"https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Jim Sheridan (dir.), Daniel Day-Lewis, Pete Postlethwaite",
          "imDbRating":"8.1",
          "imDbRatingCount":"168346"
       },
       {
          "id":"tt2267998",
          "rank":"201",
          "title":"Gone Girl",
          "fullTitle":"Gone Girl (2014)",
          "year":"2014",
          "image":"https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Fincher (dir.), Ben Affleck, Rosamund Pike",
          "imDbRating":"8.1",
          "imDbRatingCount":"928847"
       },
       {
          "id":"tt3170832",
          "rank":"202",
          "title":"Room",
          "fullTitle":"Room (2015)",
          "year":"2015",
          "image":"https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Lenny Abrahamson (dir.), Brie Larson, Jacob Tremblay",
          "imDbRating":"8.1",
          "imDbRatingCount":"399967"
       },
       {
          "id":"tt2119532",
          "rank":"203",
          "title":"Hacksaw Ridge",
          "fullTitle":"Hacksaw Ridge (2016)",
          "year":"2016",
          "image":"https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Mel Gibson (dir.), Andrew Garfield, Sam Worthington",
          "imDbRating":"8.1",
          "imDbRatingCount":"483057"
       },
       {
          "id":"tt0019254",
          "rank":"204",
          "title":"The Passion of Joan of Arc",
          "fullTitle":"The Passion of Joan of Arc (1928)",
          "year":"1928",
          "image":"https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Carl Theodor Dreyer (dir.), Maria Falconetti, Eugene Silvain",
          "imDbRating":"8.1",
          "imDbRatingCount":"52377"
       },
       {
          "id":"tt8108198",
          "rank":"205",
          "title":"Andhadhun",
          "fullTitle":"Andhadhun (2018)",
          "year":"2018",
          "image":"https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sriram Raghavan (dir.), Ayushmann Khurrana, Tabu",
          "imDbRating":"8.1",
          "imDbRatingCount":"86148"
       },
       {
          "id":"tt1950186",
          "rank":"206",
          "title":"Ford v Ferrari",
          "fullTitle":"Ford v Ferrari (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"James Mangold (dir.), Matt Damon, Christian Bale",
          "imDbRating":"8.1",
          "imDbRatingCount":"350025"
       },
       {
          "id":"tt2024544",
          "rank":"207",
          "title":"12 Years a Slave",
          "fullTitle":"12 Years a Slave (2013)",
          "year":"2013",
          "image":"https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Steve McQueen (dir.), Chiwetel Ejiofor, Michael Kenneth Williams",
          "imDbRating":"8.1",
          "imDbRatingCount":"674181"
       },
       {
          "id":"tt0035446",
          "rank":"208",
          "title":"To Be or Not to Be",
          "fullTitle":"To Be or Not to Be (1942)",
          "year":"1942",
          "image":"https://m.media-amazon.com/images/M/MV5BYTIwNDcyMjktMTczMy00NDM5LTlhNDEtMmE3NGVjOTM2YjQ3XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ernst Lubitsch (dir.), Carole Lombard, Jack Benny",
          "imDbRating":"8.1",
          "imDbRatingCount":"34857"
       },
       {
          "id":"tt0118715",
          "rank":"209",
          "title":"The Big Lebowski",
          "fullTitle":"The Big Lebowski (1998)",
          "year":"1998",
          "image":"https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Joel Coen (dir.), Jeff Bridges, John Goodman",
          "imDbRating":"8.1",
          "imDbRatingCount":"777600"
       },
       {
          "id":"tt0097165",
          "rank":"210",
          "title":"Dead Poets Society",
          "fullTitle":"Dead Poets Society (1989)",
          "year":"1989",
          "image":"https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Peter Weir (dir.), Robin Williams, Robert Sean Leonard",
          "imDbRating":"8.1",
          "imDbRatingCount":"459329"
       },
       {
          "id":"tt0052618",
          "rank":"211",
          "title":"Ben-Hur",
          "fullTitle":"Ben-Hur (1959)",
          "year":"1959",
          "image":"https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"William Wyler (dir.), Charlton Heston, Jack Hawkins",
          "imDbRating":"8.1",
          "imDbRatingCount":"231580"
       },
       {
          "id":"tt0892769",
          "rank":"212",
          "title":"How to Train Your Dragon",
          "fullTitle":"How to Train Your Dragon (2010)",
          "year":"2010",
          "image":"https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Dean DeBlois (dir.), Jay Baruchel, Gerard Butler",
          "imDbRating":"8.1",
          "imDbRatingCount":"705128"
       },
       {
          "id":"tt1201607",
          "rank":"213",
          "title":"Harry Potter and the Deathly Hallows: Part 2",
          "fullTitle":"Harry Potter and the Deathly Hallows: Part 2 (2011)",
          "year":"2011",
          "image":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"David Yates (dir.), Daniel Radcliffe, Emma Watson",
          "imDbRating":"8.1",
          "imDbRatingCount":"822632"
       },
       {
          "id":"tt1392190",
          "rank":"214",
          "title":"Mad Max: Fury Road",
          "fullTitle":"Mad Max: Fury Road (2015)",
          "year":"2015",
          "image":"https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"George Miller (dir.), Tom Hardy, Charlize Theron",
          "imDbRating":"8.1",
          "imDbRatingCount":"946936"
       },
       {
          "id":"tt0077711",
          "rank":"215",
          "title":"Autumn Sonata",
          "fullTitle":"Autumn Sonata (1978)",
          "year":"1978",
          "image":"https://m.media-amazon.com/images/M/MV5BNGIyMWRlYTctMWNlMi00ZGIzLThjOTgtZjQzZjRjNmRhMDdlXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ingmar Bergman (dir.), Ingrid Bergman, Liv Ullmann",
          "imDbRating":"8.1",
          "imDbRatingCount":"32598"
       },
       {
          "id":"tt0405159",
          "rank":"216",
          "title":"Million Dollar Baby",
          "fullTitle":"Million Dollar Baby (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Clint Eastwood (dir.), Hilary Swank, Clint Eastwood",
          "imDbRating":"8.1",
          "imDbRatingCount":"665714"
       },
       {
          "id":"tt0046268",
          "rank":"217",
          "title":"The Wages of Fear",
          "fullTitle":"The Wages of Fear (1953)",
          "year":"1953",
          "image":"https://m.media-amazon.com/images/M/MV5BZDdkNzMwZmUtY2Q5MS00ZmM2LWJhYjItYTBjMWY0MGM4MDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Henri-Georges Clouzot (dir.), Yves Montand, Charles Vanel",
          "imDbRating":"8.1",
          "imDbRatingCount":"59042"
       },
       {
          "id":"tt0092005",
          "rank":"218",
          "title":"Stand by Me",
          "fullTitle":"Stand by Me (1986)",
          "year":"1986",
          "image":"https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Rob Reiner (dir.), Wil Wheaton, River Phoenix",
          "imDbRating":"8.1",
          "imDbRatingCount":"385455"
       },
       {
          "id":"tt4016934",
          "rank":"219",
          "title":"The Handmaiden",
          "fullTitle":"The Handmaiden (2016)",
          "year":"2016",
          "image":"https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Park Chan-wook (dir.), Kim Min-hee, Ha Jung-woo",
          "imDbRating":"8.1",
          "imDbRatingCount":"132887"
       },
       {
          "id":"tt0074958",
          "rank":"220",
          "title":"Network",
          "fullTitle":"Network (1976)",
          "year":"1976",
          "image":"https://m.media-amazon.com/images/M/MV5BZGNjYjM2MzItZGQzZi00NmY3LTgxOGUtMTQ2MWQxNWQ2MmMwXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sidney Lumet (dir.), Faye Dunaway, William Holden",
          "imDbRating":"8.1",
          "imDbRatingCount":"154231"
       },
       {
          "id":"tt3315342",
          "rank":"221",
          "title":"Logan",
          "fullTitle":"Logan (2017)",
          "year":"2017",
          "image":"https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"James Mangold (dir.), Hugh Jackman, Patrick Stewart",
          "imDbRating":"8.1",
          "imDbRatingCount":"706567"
       },
       {
          "id":"tt0113247",
          "rank":"222",
          "title":"La Haine",
          "fullTitle":"La Haine (1995)",
          "year":"1995",
          "image":"https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Mathieu Kassovitz (dir.), Vincent Cassel, Hubert Koundé",
          "imDbRating":"8.1",
          "imDbRatingCount":"163825"
       },
       {
          "id":"tt0061512",
          "rank":"223",
          "title":"Cool Hand Luke",
          "fullTitle":"Cool Hand Luke (1967)",
          "year":"1967",
          "image":"https://m.media-amazon.com/images/M/MV5BOWFlNzZhYmYtYTI5YS00MDQyLWIyNTUtNTRjMWUwNTEzNjA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Stuart Rosenberg (dir.), Paul Newman, George Kennedy",
          "imDbRating":"8.0",
          "imDbRatingCount":"172144"
       },
       {
          "id":"tt1028532",
          "rank":"224",
          "title":"Hachi: A Dog's Tale",
          "fullTitle":"Hachi: A Dog's Tale (2009)",
          "year":"2009",
          "image":"https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Lasse Hallström (dir.), Richard Gere, Joan Allen",
          "imDbRating":"8.0",
          "imDbRatingCount":"271473"
       },
       {
          "id":"tt5323662",
          "rank":"225",
          "title":"A Silent Voice: The Movie",
          "fullTitle":"A Silent Voice: The Movie (2016)",
          "year":"2016",
          "image":"https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Naoko Yamada (dir.), Miyu Irino, Saori Hayami",
          "imDbRating":"8.0",
          "imDbRatingCount":"68906"
       },
       {
          "id":"tt0053198",
          "rank":"226",
          "title":"The 400 Blows",
          "fullTitle":"The 400 Blows (1959)",
          "year":"1959",
          "image":"https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"François Truffaut (dir.), Jean-Pierre Léaud, Albert Rémy",
          "imDbRating":"8.0",
          "imDbRatingCount":"113325"
       },
       {
          "id":"tt1954470",
          "rank":"227",
          "title":"Gangs of Wasseypur",
          "fullTitle":"Gangs of Wasseypur (2012)",
          "year":"2012",
          "image":"https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Anurag Kashyap (dir.), Manoj Bajpayee, Richa Chadha",
          "imDbRating":"8.0",
          "imDbRatingCount":"91813"
       },
       {
          "id":"tt0091763",
          "rank":"228",
          "title":"Platoon",
          "fullTitle":"Platoon (1986)",
          "year":"1986",
          "image":"https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Oliver Stone (dir.), Charlie Sheen, Tom Berenger",
          "imDbRating":"8.0",
          "imDbRatingCount":"400354"
       },
       {
          "id":"tt1895587",
          "rank":"229",
          "title":"Spotlight",
          "fullTitle":"Spotlight (2015)",
          "year":"2015",
          "image":"https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Tom McCarthy (dir.), Mark Ruffalo, Michael Keaton",
          "imDbRating":"8.0",
          "imDbRatingCount":"450574"
       },
       {
          "id":"tt0198781",
          "rank":"230",
          "title":"Monsters, Inc.",
          "fullTitle":"Monsters, Inc. (2001)",
          "year":"2001",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Pete Docter (dir.), Billy Crystal, John Goodman",
          "imDbRating":"8.0",
          "imDbRatingCount":"865424"
       },
       {
          "id":"tt0032976",
          "rank":"231",
          "title":"Rebecca",
          "fullTitle":"Rebecca (1940)",
          "year":"1940",
          "image":"https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Alfred Hitchcock (dir.), Laurence Olivier, Joan Fontaine",
          "imDbRating":"8.0",
          "imDbRatingCount":"132918"
       },
       {
          "id":"tt0079470",
          "rank":"232",
          "title":"Life of Brian",
          "fullTitle":"Life of Brian (1979)",
          "year":"1979",
          "image":"https://m.media-amazon.com/images/M/MV5BMzAwNjU1OTktYjY3Mi00NDY5LWFlZWUtZjhjNGE0OTkwZDkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Terry Jones (dir.), Graham Chapman, John Cleese",
          "imDbRating":"8.0",
          "imDbRatingCount":"386918"
       },
       {
          "id":"tt0118694",
          "rank":"233",
          "title":"In the Mood for Love",
          "fullTitle":"In the Mood for Love (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Kar-Wai Wong (dir.), Tony Chiu-Wai Leung, Maggie Cheung",
          "imDbRating":"8.0",
          "imDbRatingCount":"140770"
       },
       {
          "id":"tt0116231",
          "rank":"234",
          "title":"The Bandit",
          "fullTitle":"The Bandit (1996)",
          "year":"1996",
          "image":"https://m.media-amazon.com/images/M/MV5BOGQ4ZjFmYjktOGNkNS00OWYyLWIyZjgtMGJjM2U1ZTA0ZTlhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Yavuz Turgul (dir.), Sener Sen, Ugur Yücel",
          "imDbRating":"8.0",
          "imDbRatingCount":"68712"
       },
       {
          "id":"tt0395169",
          "rank":"235",
          "title":"Hotel Rwanda",
          "fullTitle":"Hotel Rwanda (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Terry George (dir.), Don Cheadle, Sophie Okonedo",
          "imDbRating":"8.0",
          "imDbRatingCount":"347040"
       },
       {
          "id":"tt1979320",
          "rank":"236",
          "title":"Rush",
          "fullTitle":"Rush (2013)",
          "year":"2013",
          "image":"https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ron Howard (dir.), Daniel Brühl, Chris Hemsworth",
          "imDbRating":"8.0",
          "imDbRatingCount":"460152"
       },
       {
          "id":"tt0075148",
          "rank":"237",
          "title":"Rocky",
          "fullTitle":"Rocky (1976)",
          "year":"1976",
          "image":"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"John G. Avildsen (dir.), Sylvester Stallone, Talia Shire",
          "imDbRating":"8.0",
          "imDbRatingCount":"549054"
       },
       {
          "id":"tt0245712",
          "rank":"238",
          "title":"Amores perros",
          "fullTitle":"Amores perros (2000)",
          "year":"2000",
          "image":"https://m.media-amazon.com/images/M/MV5BMjQxMWJhMzMtMzllZi00NzMwLTllYjktNTcwZmU4ZmU3NTA0XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"Alejandro G. Iñárritu (dir.), Emilio Echevarría, Gael García Bernal",
          "imDbRating":"8.0",
          "imDbRatingCount":"234548"
       },
       {
          "id":"tt0758758",
          "rank":"239",
          "title":"Into the Wild",
          "fullTitle":"Into the Wild (2007)",
          "year":"2007",
          "image":"https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Sean Penn (dir.), Emile Hirsch, Vince Vaughn",
          "imDbRating":"8.0",
          "imDbRatingCount":"602806"
       },
       {
          "id":"tt0087544",
          "rank":"240",
          "title":"Nausicaä of the Valley of the Wind",
          "fullTitle":"Nausicaä of the Valley of the Wind (1984)",
          "year":"1984",
          "image":"https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Hayao Miyazaki (dir.), Sumi Shimamoto, Mahito Tsujimura",
          "imDbRating":"8.0",
          "imDbRatingCount":"163062"
       },
       {
          "id":"tt0025316",
          "rank":"241",
          "title":"It Happened One Night",
          "fullTitle":"It Happened One Night (1934)",
          "year":"1934",
          "image":"https://m.media-amazon.com/images/M/MV5BYzJmMWE5NjAtNWMyZS00NmFiLWIwMDgtZDE2NzczYWFhNzIzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Frank Capra (dir.), Clark Gable, Claudette Colbert",
          "imDbRating":"8.0",
          "imDbRatingCount":"100360"
       },
       {
          "id":"tt0381681",
          "rank":"242",
          "title":"Before Sunset",
          "fullTitle":"Before Sunset (2004)",
          "year":"2004",
          "image":"https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Richard Linklater (dir.), Ethan Hawke, Julie Delpy",
          "imDbRating":"8.0",
          "imDbRatingCount":"252094"
       },
       {
          "id":"tt0083922",
          "rank":"243",
          "title":"Fanny and Alexander",
          "fullTitle":"Fanny and Alexander (1982)",
          "year":"1982",
          "image":"https://m.media-amazon.com/images/M/MV5BZmQzMDE5ZWQtOTU3ZS00ZjdhLWI0OTctZDNkODk4YThmOTRhL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Ingmar Bergman (dir.), Bertil Guve, Pernilla Allwin",
          "imDbRating":"8.0",
          "imDbRatingCount":"62186"
       },
       {
          "id":"tt0060107",
          "rank":"244",
          "title":"Andrei Rublev",
          "fullTitle":"Andrei Rublev (1966)",
          "year":"1966",
          "image":"https://m.media-amazon.com/images/M/MV5BNjM2MjMwNzUzN15BMl5BanBnXkFtZTgwMjEzMzE5MTE@._V1_UY176_CR0,0,128,176_AL_.jpg",
          "crew":"Andrei Tarkovsky (dir.), Anatoliy Solonitsyn, Ivan Lapikov",
          "imDbRating":"8.0",
          "imDbRatingCount":"51866"
       },
       {
          "id":"tt0169858",
          "rank":"245",
          "title":"Neon Genesis Evangelion: The End of Evangelion",
          "fullTitle":"Neon Genesis Evangelion: The End of Evangelion (1997)",
          "year":"1997",
          "image":"https://m.media-amazon.com/images/M/MV5BMDAxYzU2YjEtNmNjNS00OGJlLTg3MzgtNzAwN2E1ZWFiYTg5XkEyXkFqcGdeQXVyNTkwNzYyODM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Hideaki Anno (dir.), Megumi Ogata, Megumi Hayashibara",
          "imDbRating":"8.0",
          "imDbRatingCount":"49465"
       },
       {
          "id":"tt0058946",
          "rank":"246",
          "title":"The Battle of Algiers",
          "fullTitle":"The Battle of Algiers (1966)",
          "year":"1966",
          "image":"https://m.media-amazon.com/images/M/MV5BZWEzMGY4OTQtYTdmMy00M2QwLTliYTQtYWUzYzc3OTA5YzIwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Gillo Pontecorvo (dir.), Brahim Hadjadj, Jean Martin",
          "imDbRating":"8.0",
          "imDbRatingCount":"57849"
       },
       {
          "id":"tt0050783",
          "rank":"247",
          "title":"Nights of Cabiria",
          "fullTitle":"Nights of Cabiria (1957)",
          "year":"1957",
          "image":"https://m.media-amazon.com/images/M/MV5BOTdhNmUxZmQtNmMwNC00MzE3LWE1MTUtZDgxZTYwYjEzZjcwXkEyXkFqcGdeQXVyNTA1NjYyMDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Federico Fellini (dir.), Giulietta Masina, François Périer",
          "imDbRating":"8.0",
          "imDbRatingCount":"47170"
       },
       {
          "id":"tt0093779",
          "rank":"248",
          "title":"The Princess Bride",
          "fullTitle":"The Princess Bride (1987)",
          "year":"1987",
          "image":"https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Rob Reiner (dir.), Cary Elwes, Mandy Patinkin",
          "imDbRating":"8.0",
          "imDbRatingCount":"415434"
       },
       {
          "id":"tt11032374",
          "rank":"249",
          "title":"Demon Slayer: Mugen Train",
          "fullTitle":"Demon Slayer: Mugen Train (2020)",
          "year":"2020",
          "image":"https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          "crew":"Haruo Sotozaki (dir.), Natsuki Hanae, Akari Kitô",
          "imDbRating":"8.0",
          "imDbRatingCount":"42673"
       },
       {
          "id":"tt10431500",
          "rank":"250",
          "title":"Miracle in Cell No. 7",
          "fullTitle":"Miracle in Cell No. 7 (2019)",
          "year":"2019",
          "image":"https://m.media-amazon.com/images/M/MV5BOGE3N2QxN2YtM2ZlNS00MWIyLWE1NDAtYWFlN2FiYjY1MjczXkEyXkFqcGdeQXVyOTUwNzc0ODc@._V1_UX128_CR0,1,128,176_AL_.jpg",
          "crew":"Mehmet Ada Öztekin (dir.), Aras Bulut Iynemli, Nisa Sofiya Aksongur",
          "imDbRating":"8.0",
          "imDbRatingCount":"44411"
       }
   ],
   users: localStorage.users ? JSON.parse(localStorage.users) :
      [
        {
          "id": 0,
          "primeiro_nome": "Admin",
          "ultimo_nome": "ESMAD",
          "email": "admin",
          "password": "esmad2122",
          "data_nascimento": "1990-01-01",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          "id_badge": 0,
          "pontos": 0,
          "xp": 0,
          "nivel": 0,
          "num_quizzes": 0,
          "num_certas": 0,
          "num_erradas": 0,
          "num_ajudas": 0,
          "data_registo": new Date()
        },
        {
          "id": 1,
          "primeiro_nome": "User",
          "ultimo_nome": "ESMAD",
          "email": "user",
          "password": "esmad2122",
          "data_nascimento": "1990-01-01",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          "id_badge": 0,
          "pontos": 0,
          "xp": 0,
          "nivel": 0,
          "num_quizzes": 0,
          "num_certas": 0,
          "num_erradas": 0,
          "num_ajudas": 0,
          "data_registo": new Date()
        }
   ],
   loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
   badges: localStorage.badges ? JSON.parse(localStorage.badges) :
      [
        {
          "icon": require("../assets/images/badges/0.svg"),
          "name": "Freshman",
          "xp_min": 0,
          "xp_max": 749,
          "level": 0
        },
        {
          "icon": require("../assets/images/badges/1.svg"),
          "name": "Sophomore",
          "xp_min": 750,
          "xp_max": 1499,
          "level": 5
        },
        {
          "icon": require("../assets/images/badges/2.svg"),
          "name": "Junior",
          "xp_min": 1500,
          "xp_max": 2249,
          "level": 10
        },
        {
          "icon": require("../assets/images/badges/3.svg"),
          "name": "Senior",
          "xp_min": 2250,
          "xp_max": 2999,
          "level": 15
        },
        {
          "icon": require("../assets/images/badges/4.svg"),
          "name": "Graduated",
          "xp_min": 3000,
          "xp_max": 3749,
          "level": 20
        },
        {
          "icon": require("../assets/images/badges/5.svg"),
          "name": "Apprentice",
          "xp_min": 3750,
          "xp_max": 4499,
          "level": 25
        },
        {
          "icon": require("../assets/images/badges/6.svg"),
          "name": "Extra",
          "xp_min": 4500,
          "xp_max": 5249,
          "level": 30
        },
        {
          "icon": require("../assets/images/badges/7.svg"),
          "name": "Producer",
          "xp_min": 5250,
          "xp_max": 5999,
          "level": 35
        },
        {
          "icon": require("../assets/images/badges/8.svg"),
          "name": "Expert",
          "xp_min": 6000,
          "xp_max": 6749,
          "level": 40
        },
        {
          "icon": require("../assets/images/badges/9.svg"),
          "name": "Cinema God",
          "xp_min": 6750,
          "xp_max": 7499,
          "level": 45
        },
        {
          "icon": require("../assets/images/badges/10.svg"),
          "name": "Freshman",
          "xp_min": 7500,
          "xp_max": 999999999,
          "level": 50
        }
   ]
  },
  getters: {
    isEmailAvailable: (state) => (email) => state.users.every((user) => user.email !== email),
    getLoggedUser: (state) => state.loggedUser,
    isUser: (state) => (email, password) => state.users.some((user) => user.email === email && user.password === password),
    getBadges: (state) => state.badges,
    getNextAvailableID: (state) => state.users ? state.users[state.users.length - 1].id + 1 : 0,
    getAllUsers: (state) => state.users,
    getAllMovies:(state) => state.obra,
    getTitleInfo:(state)=>(id)=>[
      state.obra.filter(filme=>filme.id_imdb==id),
      state.elenco_obra.filter(ator=>ator.id_imdb==id),
      state.genero_obra.filter(genero=>genero.id_imdb==id),
      state.escritor_obra.filter(escritor=>escritor.id_imdb==id),
      state.diretor_obra.filter(diretor=>diretor.id_imdb==id),
      state.produtor_obra.filter(produtor=>produtor.id_imdb==id)
    ],
    getCrewDescription:(state)=>(ids)=>{
      let result="";
      for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < state.equipa.length; j++) {
          if (ids[i].id_pessoa==state.equipa[j].id_pessoa) {
            if (i==ids.length-1 && ids.length>1) {
              result=result.slice(0,-2)
              result+=" and "+state.equipa[j].nome;
            }
            else
            {
              if (ids.length>1) {
                result+=state.equipa[j].nome+", ";
              }
              else{
                result+=state.equipa[j].nome;
              }
            }
            break;
          }
        }
      }
      return result;
    },
    getGenreDescription:(state)=>(ids)=>{
      let result="";
      for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < state.genero.length; j++) {
          if (ids[i].id_genero==state.genero[j].id_genero) {
            if (i==ids.length-1 && ids.length>1) {
              result=result.slice(0,-2)
              result+=" and "+state.genero[j].descricao;
            }
            else
            {
              if (ids.length>1) {
                result+=state.genero[j].descricao+", ";
              }
              else{
                result+=state.genero[j].descricao;
              }
            }
            break;
          }
        }
      }
      return result;
    },
    getAllCast:(state) => state.equipa,
    getTitleLikes:(state) => (id) => {
      let result=[];
      for (let j = 0; j < state.obras_gosto.length; j++) {
         if (id==state.obras_gosto[j].id_utilizador) {
            result.push(state.obras_gosto[j].id_imdb);
         }
      }
      return result;
    },
    getHasSeen:(state) => (id) => {
      let result=[];
      for (let j = 0; j < state.vistos.length; j++) {
         if (id==state.vistos[j].id_utilizador) {
            result.push(state.vistos[j].id_imdb);
         }
      }
      return result;
    },
  },
  actions:{
    async loadMovies(context) {
      
      for(let i=0; i<25; i++) {
        let wasfound=false;
        for (let j=0; j<this.state.obra.length; j++) {
          if(this.state.movies[i].id==this.state.obra[j].id_imdb){
            wasfound=true;
          }
        }
        if(!wasfound){
          const response = await fetch(
            `https://imdb-api.com/en/API/Title/k_utdlvs0n/${this.state.movies[i].id}/FullCast,Posters,Trailer`
          );
          if (response.ok) {
            context.commit("SET_OBRA", await response.json());
            
          } else {
            throw new Error(response.status);
          }
        }
      }
    },
  },
  mutations: {
    SET_OBRA: (state, payload) => {
      state.obra.push({
        id_imdb:payload.id,
        titulo: payload.title,
        sinopse: payload.plot,
        poster: payload.image,
        banner: payload.posters.backdrops[0].link,
        trailer: payload.trailer.link,
        ano: payload.year,
        pais: payload.countryList[0].value,
        lingua: payload.languageList[0].value,
        class_etaria:payload.contentRating,
        duracao:payload.runtimeMins,
        total_temporadas:0,
        pontuacao_imdb:payload.imDbRating
      });
      localStorage.obra = JSON.stringify(state.obra);
      //generos
      for(let i=0; i<payload.genreList.length; i++){
        for(let j=0; j<state.genero.length; j++){
          if(payload.genreList[i].value==state.genero[j].descricao){
            state.genero_obra.push({id_imdb:payload.id, id_genero:state.genero[j].id_genero})
            localStorage.genero_obra= JSON.stringify(state.genero_obra);
            break;
          }
        }
      }
      //atores
      for(let i=0; i<payload.actorList.length; i++){
        let wasfound=false;
        for(let j=0; j<state.equipa.length; j++){
          if(payload.actorList[i].id==state.equipa[j].id_pessoa){
            wasfound=true;
            state.elenco_obra.push({id_imdb:payload.id, id_pessoa:payload.actorList[i].id})
            localStorage.elenco_obra= JSON.stringify(state.elenco_obra);
            break;
          }
        }
        if(!wasfound){
          state.equipa.push({id_pessoa:payload.actorList[i].id, nome:payload.actorList[i].name, foto:payload.actorList[i].image})
          localStorage.equipa= JSON.stringify(state.equipa);
          state.elenco_obra.push({id_imdb:payload.id, id_pessoa:payload.actorList[i].id})
          localStorage.elenco_obra= JSON.stringify(state.elenco_obra);
        }
      }
      //produtores
      let wasProducerfound=false;
      for(let i=0; i<payload.fullCast.others.length; i++){
        if(payload.fullCast.others[i].job=="Produced by"){
          wasProducerfound=true;
          for(let j=0; j<payload.fullCast.others[i].items.length; j++){
            let wasfound=false;
            for(let k=0; k<state.equipa.length; k++){
              if(payload.fullCast.others[i].items[j].id==state.equipa[k].id_pessoa){
                wasfound=true;
                state.produtor_obra.push({id_imdb:payload.id, id_pessoa:payload.fullCast.others[i].items[j].id})
                localStorage.produtor_obra= JSON.stringify(state.produtor_obra);
                break;
              }
            }
            if(!wasfound){
              state.equipa.push({id_pessoa:payload.fullCast.others[i].items[j].id, nome:payload.fullCast.others[i].items[j].name, foto:"https://imdb-api.com/images/original/nopicture.jpg"})
              localStorage.equipa= JSON.stringify(state.equipa);
              state.produtor_obra.push({id_imdb:payload.id, id_pessoa:payload.fullCast.others[i].items[j].id})
              localStorage.produtor_obra= JSON.stringify(state.produtor_obra);
            }
          }
          break;
        }
      }
      if (!wasProducerfound){
        state.produtor_obra.push({id_imdb:payload.id, id_pessoa: null})
      }

      //diretores
      for(let i=0; i<payload.directorList.length; i++){
        let wasfound=false;
        for(let j=0; j<state.equipa.length; j++){
          if(payload.directorList[i].id==state.equipa[j].id_pessoa){
            wasfound=true;
            state.diretor_obra.push({id_imdb:payload.id, id_pessoa:payload.directorList[i].id})
            localStorage.diretor_obra= JSON.stringify(state.diretor_obra);
            break;
          }
        }
        if(!wasfound){
          state.equipa.push({id_pessoa:payload.directorList[i].id, nome:payload.directorList[i].name, foto:"https://imdb-api.com/images/original/nopicture.jpg"})
          localStorage.equipa= JSON.stringify(state.equipa);
          state.diretor_obra.push({id_imdb:payload.id, id_pessoa:payload.directorList[i].id})
          localStorage.diretor_obra= JSON.stringify(state.diretor_obra);
        }
      }

      //escritor
      for(let i=0; i<payload.writerList.length; i++){
        let wasfound=false;
        for(let j=0; j<state.equipa.length; j++){
          if(payload.writerList[i].id==state.equipa[j].id_pessoa){
            wasfound=true;
            state.escritor_obra.push({id_imdb:payload.id, id_pessoa:payload.writerList[i].id})
            localStorage.escritor_obra= JSON.stringify(state.escritor_obra);
            break;
          }
        }
        if(!wasfound){
          state.equipa.push({id_pessoa:payload.writerList[i].id, nome:payload.writerList[i].name, foto:"https://imdb-api.com/images/original/nopicture.jpg"})
          localStorage.equipa= JSON.stringify(state.equipa);
          state.escritor_obra.push({id_imdb:payload.id, id_pessoa:payload.writerList[i].id})
          localStorage.escritor_obra= JSON.stringify(state.escritor_obra);
        }
      }
    },
    SET_MOVIES: (state, payload) => {
      state.movies = payload
      localStorage.filmes = JSON.stringify(payload);
    },
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.email === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
    SET_EDITED_USER(state, payload) {
      if (!payload.isAvatar) {
        state.users[payload.index].primeiro_nome = payload.primeiro_nome;
        state.users[payload.index].ultimo_nome = payload.ultimo_nome;
        state.users[payload.index].email = payload.email;
        state.users[payload.index].password = payload.password;
        state.users[payload.index].data_nascimento = payload.data_nascimento;
        localStorage.users = JSON.stringify(state.users);
      } else {
        state.users[payload.index].avatar = payload.avatar;
        localStorage.users = JSON.stringify(state.users);
      }
    },
    SET_NEW_BADGE(state, payload) {
      state.users[payload.index].id_badge = payload.id_badge;
      localStorage.users = JSON.stringify(state.users);
    },
    SET_NEW_LIKE(state,payload){
      state.obras_gosto.push(payload);
      localStorage.obras_gosto = JSON.stringify(state.obras_gosto);
    },
    SET_HAS_SEEN(state,payload){
      state.vistos.push(payload);
      localStorage.vistos = JSON.stringify(state.vistos);
    },
    REMOVE_HAS_SEEN(state,payload){
      state.vistos= state.vistos.filter(filme=>(filme.id_imdb!=payload && filme.id_utilizador==state.loggedUser.id) || filme.id_utilizador!=state.loggedUser.id);
      localStorage.vistos = JSON.stringify(state.vistos);
    },
    REMOVE_LIKE(state,payload){
      state.obras_gosto= state.obras_gosto.filter(filme=>(filme.id_imdb!=payload && filme.id_utilizador==state.loggedUser.id) || filme.id_utilizador!=state.loggedUser.id);
      localStorage.obras_gosto = JSON.stringify(state.obras_gosto);
    },
  }
});
