CREATE DATABASE cineMundo1;

USE cineMundo1;

CREATE TABLE users(
	id_user int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30),
	lastname VARCHAR(30),
	documentNumber int(10), 
	email VARCHAR(80) UNIQUE,
	age int(3),
	password VARCHAR(20),
	typeSuscription VARCHAR(7),
	createTime datetime,
	updatetime datetime
);

CREATE TABLE admins
    (
   	id_adm int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30),
	lastname VARCHAR(30),
	documentNumber int(10), 
	email VARCHAR(80) UNIQUE,
	age int(3),
	password VARCHAR(20),
	typeSuscription VARCHAR(7),
	createTime datetime,
	updatetime datetime
    
);

CREATE TABLE movies (
    id_movie int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    trailer VARCHAR(120),
    synopsis VARCHAR(120),
    poster VARCHAR(120),
    year int
);

CREATE TABLE series (
    id_serie int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    trailer VARCHAR(120),
    synopsis VARCHAR(120),
    poster VARCHAR(120),
    year int
);

CREATE TABLE documentaries (
    id_doc int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    trailer VARCHAR(120),
    synopsis VARCHAR(120),
    poster VARCHAR(120),
    year int
);

CREATE TABLE connect_movie(
    id_con_movie int PRIMARY KEY AUTO_INCREMENT,
    id_movie int ,
    id_user int ,
    assessment int,
    comment VARCHAR(60),
    FOREIGN KEY (id_movie) REFERENCES movies (id_movie),
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);

CREATE TABLE connect_series (
    id_con_serie int PRIMARY KEY AUTO_INCREMENT,
    id_serie int ,
    id_user int ,
    assessment int,
    comment VARCHAR(60),
    FOREIGN KEY (id_serie) REFERENCES series (id_serie),
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);

CREATE TABLE connect_doc (
    id_con_doc int PRIMARY KEY AUTO_INCREMENT,
    id_doc int,
    id_user int ,
    assessment int,
    comment VARCHAR(60),
    FOREIGN KEY (id_doc) REFERENCES documentaries (id_doc),
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);
