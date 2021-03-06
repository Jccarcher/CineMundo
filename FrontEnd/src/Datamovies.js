const datamovies = [
  {
    id: 1,
    title: 'Spider-Man: No Way Home   ',
    year: '2021 ',
    genres: 'Accion, Aventuras, Ciencia Ficcion',
    trailer:
      ' www.youtube.com/watch?v=iqyPvdsOWKk/m/spider_man_no_way_home634649',
    plot: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    image: 'https://img.ecartelera.com/noticias/fotos/66900/66992/2.jpg',
  },
  {
    id: 2,

    title: "Lemony Snicket's A Series of Unfortunate Events   ",
    year: '2004',
    genres: 'Aventuras, Comedia, Familiar',
    trailer: 'www.youtube.com/watch?v=fccho1IyX8Y/m/lemony_snicket11774',
    plot: "Three wealthy children's parents are killed in a fire. When they are sent to a distant relative, they find out that he is plotting to kill them and seize their fortune.",
    image: 'https://m.media-amazon.com/images/I/51hGU7mAw0L._AC_.jpg',
  },
  {
    id: 3,

    title: 'Avengers: Endgame',
    year: '2019',
    genres: 'Aventuras, Ciencia Ficcion, Accion',
    trailer: '    www.youtube.com/watch?v=TcMBFSGVi1c/m/avengers_endgame299534',
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    image:
      'https://http2.mlstatic.com/D_NQ_NP_848578-MLA40987549719_032020-O.jpg ',
  },
  {
    id: 4,

    title: 'Hackers   ',
    year: '1995 ',
    genres: ' Accion, Policial, Suspenso, Drama',
    trailer: 'www.youtube.com/watch?v=Rn2cf_wJ4f4/m/hackers10428',
    plot: 'Along with his new friends, a teenager who was arrested by the US Secret Service and banned from using a computer for writing a computer virus discovers a plot by a nefarious hacker, but they must use their computer skills to find the evidence while being pursued by the Secret Service and the evil computer genius behind the virus.',
    image: 'https://m.media-amazon.com/images/I/51eGN+IIt8L._AC_.jpg ',
  },
  {
    id: 5,

    title: 'Just Friends',
    year: '2005',
    genres: 'Comedia, Romantica',
    trailer: ' www.youtube.com/watch?v=vIBBVzy5UoQ/m/just_friends10033',
    plot: 'While visiting his hometown during Christmas, a man comes face-to-face with his old high school crush whom he was best friends with ???????? a woman whose rejection of him turned him into a ferocious womanizer.',
    image: 'https://m.media-amazon.com/images/I/81UP7xTgM2L._SY606_.jpg ',
  },
  {
    id: 6,

    title: 'The Mad Adventures of Rabbi Jacob ',
    year: '1973',
    genres: 'Comedia',
    trailer: '   https://www.youtube.com/watch?v=TGx2DwPq8AA',
    plot: "In this riot of frantic disguises and mistaken identities, Victor Pivert, a blustering, bigoted French factory owner, finds himself taken hostage by Slimane, an Arab rebel leader. The two dress up as rabbis as they try to elude not only assasins from Slimane's country, but also the police, who think Pivert is a murderer. Pivert ends up posing as Rabbi Jacob, a beloved figure who's returned to France for his first visit after 30 years in the United States. Adding to the confusion are Pivert's dentist-wife, who thinks her husband is leaving her for another woman, their daughter, who's about to get married, and a Parisian neighborhood filled with people eager to celebrate the return of Rabbi Jacob.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mad_Adventures_of_Rabbi_Jacob_-_US_poster.jpg/1200px-Mad_Adventures_of_Rabbi_Jacob_-_US_poster.jpg ',
  },
  {
    id: 7,

    title: 'Saw VI',
    year: '2009',
    genres: 'Terror, Misterio',
    trailer: ' www.youtube.com/watch?v=XKxcf50t1xE/m/saw_VI22804',
    plot: "Special Agent Strahm is dead, and Detective Hoffman has emerged as the unchallenged successor to Jigsaw's legacy. However, when the FBI draws closer to Hoffman, he is forced to set a game into motion, and Jigsaw's grand scheme is finally understood.",
    image: 'https://m.media-amazon.com/images/I/91XLsBloYHL._AC_SY606_.jpg',
  },
  {
    id: 8,

    title: 'Superman Returns',
    year: '2006 ',
    genres: 'Ciencia Ficcion, Accion, Aventuras ',
    trailer: 'www.youtube.com/watch?v=zVCozSQj8TQ/m/superman_returns1452',
    plot: 'Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.',
    image: 'https://i.blogs.es/028328/148056218_66f9ce7a0e_o/450_1000.jpg',
  },
  {
    id: 9,

    title: "The Sorcerer's Apprentice   ",
    year: '2010 ',
    genres: 'Fantasi??a, Aventuras, Accion',
    trailer: ' www.youtube.com/watch?v=v2uV0_1C4UM/m/sorcerers_apprentice27022',
    plot: "Balthazar Blake is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath. Balthazar can't do it alone, so he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant prot????g????. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness.",
    image:
      'https://i.pinimg.com/originals/c2/4c/eb/c24ceb204a192d6c222b76849dc1fc63.jpg ',
  },
  {
    id: 10,

    title: "Ron's Gone Wrong   ",
    year: '2021 ',
    genres: 'Animaci????n, Ciencia Ficci????n',
    trailer:
      '   www.youtube.com/watch?v=fCqGfjBSk0I  /m/rons_gone_wrong 482321',
    plot: "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
    image:
      ' https://i.pinimg.com/736x/a5/21/ff/a521ff9424db57ebc495b3b760859300.jpg',
  },
  {
    id: 11,

    title: 'Chaos Walking   ',
    year: '2021',
    genres: 'Ciencia Ficci????n',
    trailer: '   https://www.youtube.com/watch?v=nRf4ZgzHoVw',
    plot: 'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chaos-walking-poster-fotogramas-1605452797.jpg ',
  },
  {
    id: 12,

    title: 'The Machines',
    year: '2014  ',
    genres: 'Ciencia Ficci????n, Acci????n',
    trailer: 'https://www.youtube.com/watch?v=Nq72Aux346Y',
    plot: 'This Disc Details the machine and tactics of the American army, which in 1930 lacked machines, weapons and tanks. Soldiers marched with sticks because they had no weapons, and in the end they fought in their own way to win around the world.\r Extras:\r Autobiography of a Jeep\r Army News',
    image:
      'https://www.lahiguera.net/cinemania/pelicula/6511/the_machine-cartel-5537.jpg ',
  },
  {
    id: 13,

    title: 'Transformers: Age of Extinction   ',
    year: '2014 ',
    genres: 'Aventuras, Ciencia Ficci????n, Acci????n',
    trailer:
      ' www.youtube.com/watch?v=glcOSZrUw2Q  /m/transformers_age_of_extinction 91314   ',
    plot: 'As humanity picks up the pieces, following the conclusion of <DQ>Transformers: Dark of the Moon,<DQ> Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.',
    image: ' https://m.media-amazon.com/images/I/71EsANpfHVL._AC_SY741_.jpg',
  },
  {
    id: 14,

    title: 'Transformers   ',
    year: '2007',
    genres: 'Aventuras, Ciencia Ficci????n, Acci????n ',
    trailer:
      '   www.youtube.com/watch?v=dI4RZIaSC2M  /m/transformers_the_movie 1858',
    plot: 'Young teenager Sam Witwicky becomes involved in the ancient struggle between two extraterrestrial factions of transforming robots ???????? the heroic Autobots and the evil Decepticons. Sam holds the clue to unimaginable power and the Decepticons will stop at nothing to retrieve it.',
    image: 'https://m.media-amazon.com/images/I/51m2UmuaxuL._AC_.jpg ',
  },
]
export default datamovies
