CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Romulo Franklin de Meira Ramos",
    "romulo.ramos@gee.inatel.br",
    29    
);

SELECT * FROM usuarios