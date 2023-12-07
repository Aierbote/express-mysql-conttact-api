# Simulazione API custom

## Esercitazione6

Costruire una applicazione RESTful API con Express.js.

1. Scrivere una applicazione Node.js Express che utilizza la funzione `Router()` per definire le seguenti rotte:
   - `GET /contatti`
   - `GET /contatti/:id`
   - `POST /contatti`
   - `PUT /contatti/:id`
   - `DELETE /contatti/:id`
2. Per ciascuna rotta restituire come risposta una stringa di testo.
3. Testare l'API: utilizzare uno strumento come Postman per testare l'API, inviando richieste a ogni route e verificando che venga restituita la risposta corretta.

## Esercitazione7

1. Crea degli script Node.js per
   - creare un database MySQL chiamato `NodeDB`
   - creare una tabella `Contatti (nome, telefono, email)`
2. Utilizzando lo scheletro dell’esercitazione precedente (Express RESTful API), per ogni endpoint definito creare la corrispondente API per inserire, aggiornare ed elencare i dati della tabella `Contatti`.
