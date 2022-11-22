USE SpotifyClone;
DELIMITER $$

DROP TRIGGER IF EXISTS trigger_usuario_delete;
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuarios
FOR EACH ROW
BEGIN
DELETE FROM user_artista WHERE user_id = OLD.user_id;
DELETE FROM user_musicas WHERE user_id = OLD.user_id;
DELETE FROM user_plano WHERE user_id = OLD.user_id;
END $$

DELIMITER ;
