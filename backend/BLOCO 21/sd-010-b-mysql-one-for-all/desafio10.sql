USE SpotifyClone;
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico (id_usuario INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantity INT;
SELECT 
    COUNT(*)
FROM
    SpotifyClone.user_musicas
WHERE
    user_id = id_usuario
GROUP BY user_id INTO quantity;
RETURN quantity;
END $$

DELIMITER ;
