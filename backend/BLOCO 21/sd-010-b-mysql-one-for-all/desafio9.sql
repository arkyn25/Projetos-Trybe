USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN inpurt_artista VARCHAR(50))
BEGIN
SELECT (SELECT CONCAT(nome, ' ', sobrenome) FROM SpotifyClone.artistas WHERE artista_id = ALB.artista_id) as artista,
titulo AS album
FROM SpotifyClone.albuns AS ALB
ORDER BY titulo ASC
LIMIT 2;
END $$

DELIMITER ;
