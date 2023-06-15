CREATE TABLE campers (
  id int PRIMARY KEY AUTO_INCREMENT,
  nombres varchar(50) NOT NULL,
  direccion varchar(50) DEFAULT NULL,
  logros varchar(60) DEFAULT NULL,
  ser int NOT NULL,
  ingles int NOT NULL,
  review int NOT NULL,
  skills int NOT NULL,
  especialidad varchar(50) NOT NULL
);

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  idCamper int NOT NULL,
  email varchar(80) NOT NULL,
  username varchar(80) NOT NULL,
  password varchar(60) NOT NULL
);
