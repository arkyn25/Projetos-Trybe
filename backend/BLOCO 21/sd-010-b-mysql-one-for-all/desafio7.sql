CREATE VIEW perfil_artistas AS
    SELECT 
        CONCAT(A.nome, ' ', A.sobrenome) AS artista,
        ALB.titulo AS album,
        (SELECT 
                COUNT(*)
            FROM
                SpotifyClone.user_artista
            WHERE
                artista_id = ALB.artista_id
            GROUP BY artista_id) AS seguidores
    FROM
        SpotifyClone.albuns AS ALB
            INNER JOIN
        SpotifyClone.artistas AS A ON A.artista_id = ALB.artista_id
    ORDER BY seguidores DESC , artista asc;
