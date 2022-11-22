USE hr;
DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(qt_mes INT, qt_ano INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantity INT;
SELECT COUNT(*)
FROM hr.employees as E
WHERE MONTH(E.HIRE_DATE) = qt_mes AND YEAR(E.HIRE_DATE) = qt_ano
INTO quantity;
RETURN quantity;
END $$

DELIMITER ;
