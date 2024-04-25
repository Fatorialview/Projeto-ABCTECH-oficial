CREATE TABLE Estudante (
    ID_estudante INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100),
  	Idade INT
);

INSERT INTO Estudante (ID_estudante, Nome, Email)
VALUES
    (1, 'João Silva', 'joao@example.com'),
    (2, 'Maria Souza', 'maria@example.com'),
    (3, 'Pedro Santos', 'pedro@example.com');


CREATE TABLE Professor (
    ID_professor INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100)
);


INSERT INTO Professor (ID_professor, Nome, Email)
VALUES
    (1, 'Gustavo Guanabara', 'Gustavo@example.com'),
    (2, 'Carlos Pereira', 'carlos@example.com');
    

CREATE TABLE Curso (
    ID_curso INT PRIMARY KEY,
    Nome VARCHAR(100),
    ID_professor INT,
    FOREIGN KEY (ID_professor) REFERENCES Professor(ID_professor)
);

INSERT INTO Curso (ID_curso, Nome, ID_professor)
VALUES
    (1, 'Introdução à HTML 5', 1),
    (2, 'Introdução à CSS 3', 2),
    (3, 'Iniciação ao JavaScript', 1),
    (4, 'Introdução à Programação em Java', 1);
    
CREATE TABLE Inscricao (
    ID_inscricao INT PRIMARY KEY,
    ID_estudante INT,
    ID_curso INT,
    FOREIGN KEY (ID_estudante) REFERENCES Estudante(ID_estudante),
    FOREIGN KEY (ID_curso) REFERENCES Curso(ID_curso)
);


INSERT INTO Inscricao (ID_inscricao, ID_estudante, ID_curso)
VALUES
    (1, 1, 1),
    (2, 2, 1);
    
SELECT * FROM estudante

SELECT Email from estudante

SELECT Id_estudante from Inscricao

SELECT nome from Professor

SELECT nome from Curso