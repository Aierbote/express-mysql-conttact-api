# Simulazione API custom

## Esercitazione 6

Costruire una applicazione RESTful API con Express.js.

1. Scrivere una applicazione Node.js Express che utilizza la funzione `Router()` per definire le seguenti rotte:
   - `GET /contatti`
   - `GET /contatti/:id`
   - `POST /contatti`
   - `PUT /contatti/:id`
   - `DELETE /contatti/:id`
2. Per ciascuna rotta restituire come risposta una stringa di testo.
3. Testare l'API: utilizzare uno strumento come Postman per testare l'API, inviando richieste a ogni route e verificando che venga restituita la risposta corretta.

## Esercitazione 7

1. Crea degli script Node.js per
   - creare un database MySQL chiamato `NodeDB`
   - creare una tabella `Contatti (nome, telefono, email)`
2. Utilizzando lo scheletro dell’esercitazione precedente (Express RESTful API), per ogni endpoint definito creare la corrispondente API per inserire, aggiornare ed elencare i dati della tabella `Contatti`.

## Esercitazione 8

1. Crea degli script Node.js per
   - creare un database MongoDB chiamato `NodeDB`
   - creare una collection `Contatti (nome, telefono, email)`
1. Utilizzando lo scheletro dell’esercitazione su Express RESTful API, per ogni endpoint definito creare la corrispondente API per inserire, aggiornare ed elencare i dati della collection `Contatti` di MongoDB.
1. In particolare le rotte da da gestire sono:
   - `GET /contatti`
   - `GET /contatti/:id`
   - `POST /contatti`
   - `PUT /contatti/:id`
   - `DELETE /contatti/:id`
