CREATE VIEW top_3_artistas AS
    SELECT 
        (SELECT 
                CONCAT(nome, ' ', sobrenome)
            FROM
                SpotifyClone.artistas
            WHERE
                artista_id = UA.artista_id) AS artista,
        COUNT(*) AS seguidores
    FROM
        user_artista AS UA
    GROUP BY artista
    ORDER BY seguidores DESC , artista ASC
    LIMIT 3;
