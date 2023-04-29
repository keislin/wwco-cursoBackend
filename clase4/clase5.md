------------------------------------
|MI PRIMER EJERCICIO CON PostgreSQL|
------------------------------------ 

SELECT nombre from estudiante where id_lector=4;

UPDATE estudiante SET carrera = "operacion de camaras"
WHERE id_lector = 2;

SELECT * FROM estudiante WHERE id_lector=2;

SELECT * FROM estudiante WHERE carrera="medicina";

DELETE FROM estudiante
WHERE id_lector = 3;

SELECT * FROM estudiante;





**Schema (MySQL v5.7)**

    create TABLE estudiante(
      id_lector INT PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      carrera VARCHAR(100) NOT NULL
    );
    
    INSERT INTO estudiante(id_lector,nombre,carrera)
    VALUES(1,"camilo torres","sicologia"),(2,"karen muñoz","derecho"),(3,"cristian moreno","medicina"),(4,"catalina Gomez","veterinaria"),(5,"melissa calderón","medicina");

---

**Query #1**

    SELECT nombre from estudiante where id_lector=4;

| nombre         |
| -------------- |
| catalina Gomez |

---
**Query #2**

    UPDATE estudiante SET carrera = "operacion de camaras"
    WHERE id_lector = 2;

There are no results to be displayed.

---
**Query #3**

    SELECT * FROM estudiante WHERE id_lector=2;

| id_lector | nombre      | carrera              |
| --------- | ----------- | -------------------- |
| 2         | karen muñoz | operacion de camaras |

---
**Query #4**

    SELECT * FROM estudiante WHERE carrera="medicina";

| id_lector | nombre           | carrera  |
| --------- | ---------------- | -------- |
| 3         | cristian moreno  | medicina |
| 5         | melissa calderón | medicina |

---
**Query #5**

    DELETE FROM estudiante
    WHERE id_lector = 3;

There are no results to be displayed.

---
**Query #6**

    SELECT * FROM estudiante;

| id_lector | nombre           | carrera              |
| --------- | ---------------- | -------------------- |
| 1         | camilo torres    | sicologia            |
| 2         | karen muñoz      | operacion de camaras |
| 4         | catalina Gomez   | veterinaria          |
| 5         | melissa calderón | medicina             |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/fKtUp5fisPuwgvBkgG2rod/2)