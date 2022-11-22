DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE artistas (
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL
);

CREATE TABLE planos (
    plano_id INT PRIMARY KEY AUTO_INCREMENT,
    plano VARCHAR(50) NOT NULL,
    preco DECIMAL(5 , 2 ) NOT NULL
);

CREATE TABLE usuarios (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    plano_id INT NOT NULL,
    FOREIGN KEY (plano_id)
        REFERENCES planos (plano_id)
);

CREATE TABLE user_artista (
    user_id INT NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES usuarios (user_id),
    FOREIGN KEY (artista_id)
        REFERENCES artistas (artista_id),
CONSTRAINT PRIMARY KEY (user_id, artista_id)
);

CREATE TABLE user_plano (
    user_id INT NOT NULL,
    plano_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES usuarios (user_id),
    FOREIGN KEY (plano_id)
        REFERENCES planos (plano_id),
CONSTRAINT PRIMARY KEY (user_id, plano_id)
);

CREATE TABLE albuns (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (artista_id)
        REFERENCES artistas (artista_id)
);

CREATE TABLE musicas (
    musica_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id)
        REFERENCES albuns (album_id)
);

CREATE TABLE user_musicas (
    user_id INT NOT NULL,
    musica_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES usuarios (user_id),
    FOREIGN KEY (musica_id)
        REFERENCES musicas (musica_id),
CONSTRAINT PRIMARY KEY (user_id, musica_id)
);

INSERT INTO artistas (nome, sobrenome)
VALUES
('Walter', 'Phoenix'),
('Peter', 'Strong'),
('Lance', 'Day'),
('Freedie', 'Shannon');

INSERT INTO planos (plano, preco)
VALUES
('gratuito', 0),
('universitário', 5.99),
('familiar', 7.99);

INSERT INTO usuarios (nome, idade, plano_id)
VALUES
('Thati', 23, 1),
('Cintia',  35, 3),
('Bill', 20, 2),
('Roger', 45, 1);

INSERT INTO user_artista (user_id, artista_id)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);

INSERT INTO user_plano (user_id, plano_id)
VALUES
(1, 1),
(2, 3),
(3, 2),
(4, 1);

INSERT INTO albuns (titulo, artista_id)
VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

INSERT INTO musicas (titulo, album_id)
VALUES
('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
("Sweetie, Let's Go Wild", 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
("Honey, Let's Be Silly", 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO user_musicas (user_id, musica_id)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);
