CREATE DATABASE cuervana;

CREATE TABLE usuario 
    (
    id_usr int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    email VARCHAR(40)
    contraseña VARCHAR(30)
    tipo VARCHAR(30)
    fecha_creacion DATETIME
    dni int, 
    edad int,
    
);

CREATE TABLE administrador 
    (
    id_adm int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    email VARCHAR(40)
    contraseña VARCHAR(30)
    tipo VARCHAR(30)
    fecha_creacion DATETIME
    dni int, 
    edad int,
    
);

CREATE TABLE peliculas (
    id_peliculas int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    poster BINARY,
    idioma VARCHAR(30),
    duracion int,
    fecha_lanzamiento DATE,
);

CREATE TABLE series (
    id_series int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    idioma VARCHAR(30),
    temporadas int,
    fecha_lanzamiento DATE,
);

CREATE TABLE documentales (
    id_documentales int PRIMARY KEY,
    title VARCHAR(30),
    sinopsis VARCHAR(120),
    poster BINARY,
    idioma VARCHAR(30),
    duracion int,
    fecha_lanzamiento DATE,
);

CREATE TABLE comunicar_peli(
    id_com_peli int PRIMARY KEY,
    id_usr int PRIMARY KEY,
    estado_vis BOOLEAN,
    estado_fav BOOLEAN,
    fecha_visual DATE,
    fecha_add DATE,
    valoracion int,
    comentario VARCHAR(60)
);

CREATE TABLE comunicar_series (
    id_com_series intPRIMARY KEY,
    id_usr int PRIMARY KEY,
    estado_vis BOOLEAN,
    estado_fav BOOLEAN,
    fecha_visual DATE,
    fecha_add DATE,
    valoracion int,
    comentario VARCHAR(60)
);

CREATE TABLE comunicar_doc (
    id_com_doc int PRIMARY KEY,
    id_usr int PRIMARY KEY,
    estado_vis BOOLEAN,
    estado_fav BOOLEAN,
    fecha_visual DATE,
    fecha_add DATE,
    valoracion int,
    comentario VARCHAR(60)
);