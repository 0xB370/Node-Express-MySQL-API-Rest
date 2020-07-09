--Replace "node_api" for your DB name
CREATE DATABASE IF NOT EXISTS node_api;

USE node_api;

CREATE TABLE IF NOT EXISTS user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  contrasenia VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE user;