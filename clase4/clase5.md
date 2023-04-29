------------------------------------
|MI PRIMER EJERCICIO CON PostgreSQL|
------------------------------------ 
SELECT Name from student where id_reader=4;

UPDATE student SET career = "camera operation"
WHERE id_reader = 2;

SELECT * FROM student WHERE id_reader=2;

SELECT * FROM student WHERE career="Medicine";

DELETE FROM student
WHERE id_reader = 3;

SELECT * FROM student;


**Schema (MySQL v5.7)**
Results
**Schema (MySQL v5.7)**

    CREATE TABLE student(
      id_reader INT PRIMARY KEY,
      CC INT ,
      Name VARCHAR(100) NOT NULL,
      career VARCHAR(100) NOT NULL
    );
    
    INSERT INTO student (id_reader,CC,Name,career)
    VALUES
    (1,13245665,"Camilo Torres","Psychology"),(2,13249665,"Karen Muñoz","Right"),(3,13249698,"Cristian Moreno","Medicine"),(4,176549665,"Catalina Gomez","Veterinary"),(5,14389665,"Katherin calderón","Medicine"),
    (6,14340965,"Luisa Rodriguez","Fotografy"),
    (7,1449665,"Carlos Mejía","Right"),
    (8,1487665,"Samantha Martinez","Medicine"),
    (9,12149665,"Viviana Calderón","Psycology"),
    (10,14344065,"Sandra Calderón","Veterinary");
    

---

**Query #1**
(esta consulta me va a traer el nombre del estudiante con 
el id_reader 4).

    SELECT Name from student where id_reader=4;

| Name           |
| -------------- |
| Catalina Gomez |

---
**Query #2**
(esta consulta me va a actualizar la carrera de la persona con 
el id_reader 2).


    UPDATE student SET career = "camera operation"
    WHERE id_reader = 2;

There are no results to be displayed.

---
**Query #3**
(esta consulta me va a traer el estudiante con el id_reader 2).


    SELECT * FROM student WHERE id_reader=2;

| id_reader | CC       | Name        | career           |
| --------- | -------- | ----------- | ---------------- |
| 2         | 13249665 | Karen Muñoz | camera operation |

---
**Query #4**
(esta consulta me va a traer todos los estudiantes que en su carrera esté medicina).

    SELECT * FROM student WHERE career="Medicine";

| id_reader | CC       | Name              | career   |
| --------- | -------- | ----------------- | -------- |
| 3         | 13249698 | Cristian Moreno   | Medicine |
| 5         | 14389665 | Katherin calderón | Medicine |
| 8         | 1487665  | Samantha Martinez | Medicine |

---
**Query #5**
(esta consulta me va a eliminar el estudiante con el id_reader 3).

    DELETE FROM student
    WHERE id_reader = 3;

There are no results to be displayed.

---
**Query #6**
(esta consulta me va a traer todos los estudiantes).

    SELECT * FROM student;

| id_reader | CC        | Name              | career           |
| --------- | --------- | ----------------- | ---------------- |
| 1         | 13245665  | Camilo Torres     | Psychology       |
| 2         | 13249665  | Karen Muñoz       | camera operation |
| 4         | 176549665 | Catalina Gomez    | Veterinary       |
| 5         | 14389665  | Katherin calderón | Medicine         |
| 6         | 14340965  | Luisa Rodriguez   | Fotografy        |
| 7         | 1449665   | Carlos Mejía      | Right            |
| 8         | 1487665   | Samantha Martinez | Medicine         |
| 9         | 12149665  | Viviana Calderón  | Psycology        |
| 10        | 14344065  | Sandra Calderón   | Veterinary       |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/fKtUp5fisPuwgvBkgG2rod/9)
Copy as Markdown
Query #1 Execution time: 0ms
Name
Catalina Gomez
Query #2 Execution time: 0ms
There are no results to be displayed.
Query #3 Execution time: 1ms
id_reader	CC	Name	career
2	13249665	Karen Muñoz	camera operation
Query #4 Execution time: 0ms
id_reader	CC	Name	career
3	13249698	Cristian Moreno	Medicine
5	14389665	Katherin calderón	Medicine
8	1487665	Samantha Martinez	Medicine
Query #5 Execution time: 0ms
There are no results to be displayed.
Query #6 Execution time: 0ms
id_reader	CC	Name	career
1	13245665	Camilo Torres	Psychology
2	13249665	Karen Muñoz	camera operation
4	176549665	Catalina Gomez	Veterinary
5	14389665	Katherin calderón	Medicine
6	14340965	Luisa Rodriguez	Fotografy
7	1449665	Carlos Mejía	Right
8	1487665	Samantha Martinez	Medicine
9	12149665	Viviana Calderón	Psycology
10	14344065	Sandra Calderón	Veterinary

    