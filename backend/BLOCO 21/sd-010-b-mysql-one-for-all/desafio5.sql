CREATE VIEW top_2_hits_do_momento AS
    SELECT 
        (SELECT 
                titulo
            FROM
                SpotifyClone.musicas
            WHERE
                musica_id = UM.musica_id) AS cancao,
        COUNT(*) AS reproducoes
    FROM
        SpotifyClone.user_musicas AS UM
    GROUP BY cancao
    ORDER BY reproducoes DESC , cancao ASC
    LIMIT 2;
