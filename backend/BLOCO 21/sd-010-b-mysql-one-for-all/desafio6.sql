CREATE VIEW faturamento_atual AS
    SELECT 
        ROUND(MIN(preco), 2) AS faturamento_minimo,
        ROUND(MAX(preco), 2) AS faturamento_maximo,
        ROUND(AVG(preco), 2) AS faturamento_medio,
        ROUND(SUM(preco), 2) AS faturamento_total
    FROM
        (SELECT 
            (SELECT 
                        preco
                    FROM
                        SpotifyClone.planos
                    WHERE
                        plano_id = UP.plano_id) AS preco
        FROM
            SpotifyClone.user_plano AS UP) AS P;
