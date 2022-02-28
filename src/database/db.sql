CREATE DATABASE cineMundo;

CREATE TABLE `cinemundo`.`usuarios`(
	`id_usr` int auto_increment,
	`name` varchar(30),
	`lastname` varchar(30),
	`documentNumber` int(10), 
	`email` varchar(80),
	`age` int(3),
	`password` varchar(20),
	`typeSuscription` varchar(7),
	`createTime` datetime,
	`updatetime` datetime,
PRIMARY KEY (`id_usr`));

CREATE TABLE administrador 
    (
    id_adm int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    email VARCHAR(40),
    contraseña VARCHAR(30),
    tipo VARCHAR(30),
    fecha_creacion DATETIME,
    dni int, 
    edad int
    
);

CREATE TABLE peliculas (
    id_peliculas int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    poster BINARY,
    idioma VARCHAR(30),
    duracion int,
    fecha_lanzamiento DATE
);

CREATE TABLE series (
    id_series int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    idioma VARCHAR(30),
    temporadas int,
    fecha_lanzamiento DATE
);

CREATE TABLE documentales (
    id_documentales int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    poster BINARY,
    idioma VARCHAR(30),
    duracion int,
    fecha_lanzamiento DATE
);

CREATE TABLE comunicar_peli(
    id_com_peli int PRIMARY KEY AUTO_INCREMENT,
    id_peliculas int ,
    id_usr int ,
    valoracion int,
    comentario VARCHAR(60),
    FOREIGN KEY (id_peliculas) REFERENCES peliculas (id_peliculas),
    FOREIGN KEY (id_usr) REFERENCES usuario (id_usr)
);

CREATE TABLE comunicar_series (
    id_com_series int PRIMARY KEY AUTO_INCREMENT,
    id_series int ,
    id_usr int ,
    valoracion int,
    comentario VARCHAR(60),
    FOREIGN KEY (id_series) REFERENCES series (id_series),
    FOREIGN KEY (id_usr) REFERENCES usuario (id_usr)
);

CREATE TABLE comunicar_doc (
    id_com_doc int PRIMARY KEY AUTO_INCREMENT,
    id_documentales int,
    id_usr int ,
    valoracion int,
    comentario VARCHAR(60),
    FOREIGN KEY (id_documentales) REFERENCES documentales (id_documentales),
    FOREIGN KEY (id_usr) REFERENCES usuario (id_usr)
);
