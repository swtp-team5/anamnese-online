# SWT_Project_22-23

## QRMed

## Description

Dieses Projekt wurde im Zuge des Moduls "Softwaretechnik-Projekt" im Wintersemester 22/23 erstellt.  
Wir wollen eine Anwendung entwickeln, mit der Anamnesebögen ausgefüllt und in QR-Codes umgewandelt werden. Diese sollen
dann von der Ärztedatenbank eingescannt werden können.

[IT-Konzept](Documentation/IT-Konzept.md)

## Setup

### Vorbereitung

- Installiere Node.js (z.B. mit https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Lokales starten der App

Öffne einfach `index.html` im Projektordner.

### Lokales starten des Express.js servers

#### Starten via cmd

- Navigiere in deiner Konsole zum Projektordner
- Führe `node index.js` aus

#### Starten aus Webstorm

- Erstelle eine run-configuration
- Run > Edit Configurations > new npm
- Einstellungen:
    - package.json = \<Pfad zur package.json\>
    - Command = `run`
    - Scripts = `start`

### Ausführen der Tests

#### Starten der Tests via cmd

- Navigiere in deiner Konsole in den Ordner `tests`
- `npm test` um alle Tests zu starten
- `npm test -- -t "<Name>"` um spezifische Tests zu starten

#### Starten der Tests aus Webstorm

- Erstelle eine run-configuration
- Run > Edit Configurations > new Jest
- Einstellungen:
    - Option: `All tests`, `Test file`, `Suit`, `Test`
    - Test file: `<Pfad zur Testdatei>`
    - (Suit|Test) name: `<Name>`

Oder

- Öffne die Testdatei
    - Klicke auf einen der grünen Playbuttons um einen spezifischen Test oder eine ganze Suit zu starten
- Öffne `package.json`
    - Klicke auf den grünen Playbutton neben dem Script `test` um alle Tests zu starten

### Konfigurieren der CI-Pipeline

Das CI-Script befindet sich [hier](.github/workflows/deploy.yml).

Zuerst werden die Tests gestartet. Wenn kein Test fehlschlägt, wird ein Artefakt gebaut.

#### Deploy jobs

- GitHub Pages:
    - Deployed `index.html` nach https://swtp-team5.github.io/anamnese-online/
    - Die URL wird in `url: ${{ steps.deployment.outputs.page_url }}` gesetzt
    - Unter `Settings > Code and automation > Pages` lässt sich eine eigene Domain einstellen
- Heroku:
    - Deployed das Projekt nach https://qrmed.herokuapp.com/ und startet `index.js`
    - Benötigt wird:
        - `heroku_api_key: ${{ secrets.HEROKU_API_KEY }}`
            - Zu finden in Heroku unter: Account settings > API Key
        - `heroku_app_name: 'qrmed'`
            - Der Name der App in Heroku zu der deployed werden soll
        - `heroku_email: ${{ secrets.HEROKU_DEPLOY_EMAIL }}`
            - Die Mail des Nutzers der deployen soll und dem der API-Key gehört
    - Lege für den API Key und die Mail ein Secret in GitHub an: <br>Repository Settings > Security > Secrets and
      Variables > Actions > New repository secret

### Monitoring mit Sentry.io

Auftretende Fehler in `index.js` werden nach Sentry.io reported.

Sentry wird in `index.js` initialisiert:<br>

    Sentry.init({
      dsn: "https://298a9aa973e2431dba7b2c77cb47f5bb@o4504543523110912.ingest.sentry.io/4504543526518784",
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });

Wichtig ist der `dsn` Parameter. Sonst weiß der Express-Server nicht wohin er die Monitoringdaten senden soll.<br>
Den `DSN`-Key findet man in Sentry.io unter:<br>
Settings > Organization Settings > Projects: node-express > ClientKeys > DSN

## Authors and acknowledgment

- Jann-Niklas Zimmermann
- Paul Drux
- Peter Förster
- Onur Atesavci
- Tobias Wagner

### Used code from other projects:

- [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI)
- QRCode Generator: [QRCode.js](https://github.com/davidshimjs/qrcodejs)
- QRCode Reader: [jsqrcode](https://github.com/LazarSoft/jsqrcode)
