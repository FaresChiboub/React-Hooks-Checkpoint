const moviesData = [
  
  {
    title: "The Shawshank Redemption",
    description:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    posterURL:
      "https://www.tallengestore.com/cdn/shop/products/Movie_Poster_Art_-_The_Shawshank_Redemption_-_Tallenge_Hollywood_Poster_Collection_9e0e143e-20a5-4e91-b757-2c38daa34d41.jpg?v=1578138055",
    rating: 9.2,
    trailerLink: "https://youtu.be/NmzuHjWmXOc?feature=shared",
  },
  {
    title: "The Godfather: Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.0,
    trailerLink: "https://youtu.be/9O1Iy9od7-A?feature=shared",
  },
  {
    title: "The Pursuit of Happyness",
    description:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 8.0,
    trailerLink: "https://youtu.be/DMOBlEcRuw8?si=cgjs8oZmlHzWe-ej",
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL:
      "https://m.media-amazon.com/images/S/pv-target-images/57618417a0ddf3b7aa29db658bef2fc3b9608bb11a021631d3b6408441c1e0f7.jpg",
    rating: 9.0,
    trailerLink: "https://youtu.be/EXeTwQWrcwY?si=bROpHnhvXatKer4M",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterURL:
      "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
    rating: 8.8,
    trailerLink: "https://youtu.be/V75dMMIW2B4?si=bIjuwaNOAo-kbUcQ",
  },
  {
    title: "Gladiator",
    description: "A historical drama film directed by Ridley Scott.",
    posterURL:
      "https://m.media-amazon.com/images/I/61MSIFHAxML._AC_UF894,1000_QL80_.jpg",
    rating: 8.5,
    trailerLink: "https://youtu.be/P5ieIbInFpg?si=d3B6KpuOrNv3mg_Q",
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 9.3,
    trailerLink: "https://youtu.be/8hP9D6kZseM?si=W5YQN8CLfkeLqbnC",
  },
  {
    title: "Interstellar",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    posterURL:
      "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
    rating: 8.6,
    trailerLink: "https://youtu.be/2LqzF5WauAw?si=rvoXVEFXkdKuqfch",
  },
  {
    title: "Saving Private Ryan",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    rating: 8.6,
    trailerLink: "https://youtu.be/9CiW_DgxCnQ?si=cW3CAlwOs1tlPZwU",
  },
  {
    title: "Braveheart",
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    posterURL:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16782_p_v12_au.jpg",
    rating: 6.3,
    trailerLink: "https://youtu.be/1NJO0jxBtMo?si=TStSK4466zydZtmx",
  },
  {
    title: "The Matrix",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    posterURL:
      "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF894,1000_QL80_.jpg",
    rating: 8.7,
    trailerLink: "https://youtu.be/vKQi3bBA1y8?si=KSAy2hXkcLpwQa37",
  },
  {
    title: "Amadeus",
    description:
      "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozarts talent and claimed to have murdered him.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    rating: 8.3,
    trailerLink: "https://youtu.be/C-sMNilkxmI?si=ap0r4oV7m6pBGqJc",
  },
  {
    title: "Creed",
    description:
      "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    posterURL:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11491087_p_v8_ad.jpg",
    rating: 7.7,
    trailerLink: "https://youtu.be/JQ9OhBYjTds?si=27RW4lPmO5hRq5PK",
  },
  {
    title: "The Imitation Game",
    description:
      "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_.jpg",
    rating: 8.1,
    trailerLink: "https://youtu.be/nuPZUUED5uk?si=ptPB21nhcPeS6LlN",
  },
  {
    title: "A Few Good Men",
    description:
      "Military lawyer Lieutenant Daniel Kaffee defends Marines accused of murder. They contend they were acting under orders.",
    posterURL:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14383_p_v8_aa.jpg",
    rating: 8.4,
    trailerLink: "https://youtu.be/iIaAL7JTEgE?si=Qu-rN9XFx0jDK9FV",
  },
  {
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    posterURL:
      "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF894,1000_QL80_.jpg",
    rating: 9.0,
    trailerLink: "https://youtu.be/gG22XNhtnoY?si=iFiLWmqOVqHxfjGr",
  },
  {
    title: "The Last Samurai",
    description:
      "Nathan Algren, a US army veteran, is hired by the Japanese emperor to train his army in the modern warfare techniques. Nathan finds himself trapped in a struggle between two eras and two worlds.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_.jpg",
    rating: 8.2,
    trailerLink: "https://youtu.be/T50_qHEOahQ?si=VzQHEcbzj_64ZSGz",
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    description:
      "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
    rating: 8.5,
    trailerLink: "https://youtu.be/qIYyXcCwvKc?si=u_ICUzc80pQyuN_x",
  },
  {
    title: "Shutter Island",
    description:
      "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    posterURL: "https://cdn2.penguin.com.au/covers/original/9780553824483.jpg",
    rating: 8.2,
    trailerLink: "https://youtu.be/v8yrZSkKxTA?si=LEIOssDNtIqkqRjJ",
  },
  {
    title: "Se7en",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    posterURL: "https://static.tvtropes.org/pmwiki/pub/images/se7en_poster.png",
    rating: 7.6,
    trailerLink: "https://youtu.be/SpKbZ_3zlb0?si=gZzdGPwboCr4UTPG",
  },
  {
    title: "I Am Legend",
    description:
      "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/df/I_am_legend_teaser.jpg",
    rating: 7.2,
    trailerLink: "https://youtu.be/dtKMEAXyPkg?si=L0QwwQGWZaT3vQUr",
  },
  {
    title: "Man on Fire",
    description:
      "In Mexico City, a former CIA operative swears vengeance on those who committed an unspeakable act against the family he was hired to protect.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BODFlMmEwMDgtYjhmZi00ZTE5LTk2NWQtMWE1Y2M0NjkzOGYxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 7.4,
    trailerLink: "https://youtu.be/eDDh50B6kA4?si=EkV_wxk5qSu9kp_i",
  },
  {
    title: "Top Gun: Maverick",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    rating: 8.3,
    trailerLink: "https://youtu.be/giXco2jaZ_4?si=lxpbYt9ND0ZQcUgy",
  },
  {
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    posterURL:
      "https://m.media-amazon.com/images/I/71VwCOzh9dL._AC_UF894,1000_QL80_.jpg",
    rating: 6.5,
    trailerLink: "https://youtu.be/7TavVZMewpY?si=-7Vfrmt2cMlJ7skB",
  },
];

export default moviesData;
