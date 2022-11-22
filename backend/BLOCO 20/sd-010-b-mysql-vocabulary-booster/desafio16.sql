USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario (input_email VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantity INT;
SELECT 
    COUNT(*)
FROM
    hr.job_history
WHERE
    EMPLOYEE_ID = (SELECT 
            EMPLOYEE_ID
        FROM
            hr.employees
        WHERE
            EMAIL = input_email)
GROUP BY EMPLOYEE_ID INTO quantity;
RETURN quantity;
END $$

DELIMITER ;
