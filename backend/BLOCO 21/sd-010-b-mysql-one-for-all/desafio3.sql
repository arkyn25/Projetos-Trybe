CREATE VIEW historico_reproducao_usuarios AS
    SELECT 
        (SELECT 
                nome
            FROM
                SpotifyClone.usuarios
            WHERE
                user_id = UM.user_id) AS usuario,
        (SELECT 
                titulo
            FROM
                SpotifyClone.musicas
            WHERE
                musica_id = UM.musica_id) AS nome
    FROM
        SpotifyClone.user_musicas AS UM
    ORDER BY usuario ASC , nome ASC;
