# IT-Konzept
## Projektidee
Enwickeln einer Anwendung, mit der Anamnesebögen erstellt und verwaltet werden können. Man soll die Möglichkeit haben diese anschließend als QR-Code darzustellen. Der Code soll von der Arztpraxis gescannt werden, um die Daten in die Datenbank zu übertragen.
Ärztepraxen sollten auch die Möglichkeit haben einen Account zu erstellen, um ihre eigenen Anamnesebögen bereit zu stellen.  
Alternativ sollte eine Auswahl an verschiedenen Bögen bereitstehen

Eine Anbindung zu Doctolib wäre auch praktisch, somit könnte der QR-Code direkt als Dokument zum Termin hinterlegt werden.

## Systemkomponenten
- Webapp
    - JS, Typescript, Python
- Mobile app 
    - iOS -> Swift
    - Android
- Sprachen
    - Deutsch
    - Englisch
- Hosting
    - Self-hosted
    - AWS
    - Wordpress
- Schnittstelle zu Ärztedatenbank
- Datenbank zur Nutzerverwaltung
- Datenschutz -> 2F
- CI/CD
    - Jenkins/Gitlab
    - Testen neuer branches vor dem Merge
    - Deploy neuer Version nach dem Merge

## Betriebskonzept
### Erstellen
- Fomular zum Eintragen der Daten
- Erstelle JSON
- Generiere QR-Code aus JSON

### Einlesen
- Scanne JSON aus QR-Code
- Stelle JSON in Formular dar

## Zukunftvision
- Verschlüsselung ([Diffie-Hellman?](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange))
    - Erstelle QR-Code aus verschlüsseltem JSON-String
    - Entschlüssele JSON-String nach dem scannen
- Support für Notfallkontakte im Smartphone
    - Rettungsdienste können Code scannen
    - Wrls. schwer umsetzbar in QR-Form
- Support für weitere Gesundheitsdaten aus diversen Apps/Smartwatch
    - Puls
    - Schlafqualität
    - ...

## Einnahme-Möglichkeiten
- Werbung
- App kostet einen Betrag
- Extra features kosten
- Premiummodell mit mehr Features
- Abomodell

## Kosten
- Hosting der Webapp
- Betreiben der Datenbank
- Entwickeln der Anwendung
- Übersetzungen

