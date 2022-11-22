SELECT 
    *
FROM
    (SELECT 
        ContactName AS Nome,
            Country AS País,
            (SELECT 
                    COUNT(*)
                FROM
                    w3schools.customers
                WHERE
                    Country = País AND ContactName <> Nome) AS `Número de compatriotas`
    FROM
        w3schools.customers AS cus
    ORDER BY Nome) AS T
WHERE
    `Número de compatriotas` <> 0;
