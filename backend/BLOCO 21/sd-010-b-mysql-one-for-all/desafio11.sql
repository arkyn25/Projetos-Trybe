CREATE VIEW cancoes_premium AS
    SELECT 
        M.titulo AS nome, COUNT(*) AS reproducoes
    FROM
        SpotifyClone.user_musicas AS UM
            INNER JOIN
        SpotifyClone.musicas AS M ON M.musica_id = UM.musica_id
    WHERE
        user_id IN (SELECT 
                user_id
            FROM
                SpotifyClone.usuarios
            WHERE
                plano_id IN (SELECT 
                        plano_id
                    FROM
                        SpotifyClone.planos
                    WHERE
                        plano <> 'gratuito'))
    GROUP BY UM.musica_id
    ORDER BY nome;
