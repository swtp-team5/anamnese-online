# IT-Konzept
## Projektidee
Enwickeln einer Anwendung, mit der Anamnesebögen erstellt und verwaltet werden können. Man soll die Möglichkeit haben diese anschließend als QR-Code darzustellen. Der Code soll von der Arztpraxis gescannt werden, um die Daten in die Datenbank zu übertragen.
Ärztepraxen sollten auch die Möglichkeit haben einen Account zu erstellen, um ihre eigenen Anamnesebögen bereit zu stellen.  
Alternativ sollte eine Auswahl an verschiedenen Bögen bereitstehen

Eine Anbindung zu Doctolib wäre auch praktisch, somit könnte der QR-Code direkt als Dokument zum Termin hinterlegt werden.

## Personas

### **Michael Müller** (Allgemeinmediziner)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|46 Jahre|Golf spielen|Papierverbrauch sehr hoch|Einfaches System
|Berlin|Porsche fahren|Dokumente müssen lange aufbewahrt werden|darf nicht zu teuer sein
|männlich|Angeln|Die meisten Anamnesebögen sind unauffällig -> Auffälligkeiten werden aus Routine übersehen|System muss für Patienten ohne Einführungen durch Praxispersonal zu bedienen sein
|eigene Praxis seit 2006||Ältere oder behinderte Patienten benötigen Hilfe beim Ausfüllen der Bögen|Soll Zeitersparnis für behandelnden Arzt bringen
||||App soll Auffälligkeiten anzeigen|
||||

### **Rufus Karlsen** (Zahnarzt)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|30 Jahre|Radfahren|Praxis hat oft Verzögerungen wenn neue Patienten Termine haben|Möchte Praxis modernisieren
|Berlin|Sqash|Chef ist altmodisch|Verwaltung digitalisieren
|In einer Praxis angestellt|Technikbegeistert|Alte Computersysteme|Soll Wartezeiten mindern
||||

### **Frau Dr. med. Petra Joost** (Augenärztin)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|Frau Dr. med. Petra Joost|Analoger Mensch der Technik misstraut aber sich auch der Notwendigkeit von digitalen Lösungen im medizinischen Bereich bewusst ist|Papierlastigkeit in der Patientenverwaltung/ Aufnahme erschwert die Praxisübergabe|Möchte Ihre Praxis an einen jüngeren Kollegen übergeben und dafür digitale Lösungen etablieren
|62 Jahre|Segeln|Ältere Patienten und Patienten mit Sehschwäche benötigen besonders viel Unterstützung bei dem Ausfüllen des Anamnesebogens|Kosten und Zeit sparen bei der Anamnese
|Berlin|Kochen|Übertragung von Anamnesebögen in digitale Lösungen benötigt viel Zeit|Einfache und schnelle Anamnesebogen Lösung die keine lange Einarbeitung benötigt
|Seit 1996 eigene Praxis|Klassische Musik hören|Die Aktualisierung von Anamnesebögen ist zeitaufwendig|Aufwand bei Gesundheitsamt Prüfungen reduzieren
||||

### **Sophia Schmidt** (Patientin)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|20 Jahre|Kinobesuche|Ist aus Köln nach Berlin gezogen -> musste alle Ärzte wechseln|möchte eine kostenlose App nutzen können
|Berlin|Studentenpartys|möchte nicht bei jedem Arzt fast gleiche Fragen neu ausfüllen|generelle Fragen sollen nur ein mal beantwortet werden
|weiblich|Beachvolleyball|finanziell enger Spielraum|Zeitersparnis im Warteraum
|technische Kenntnisse|Essen gehen||App sollte intuitiv sein
||||

### **Werner Schmidt** (Patient)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|69 Jahre alt|mag Kartenspiele insbesondere online|chronisch erkrankt|will  Anamnesebögen nicht jedes Mal neu ausfüllen
|lebt in Berlin|verbringt gerne Zeit mit seinem Hund|Pflege durch Ehefrau|will auf diese jederzeit zugreifen
|hat zwei Kinder||ist sehr vergesslich|wünscht sich, dass die Verwaltung der Daten unkompliziert ist
|GdB 60 %||benötigt Unterstützung bei bürokratischen Angelegenheiten|möchte vor dem Arztbesuch den Anamnesebogen ausfüllen bzw. ergänzen
|Pflegegrad 3|||will auf Termine etc. erinnert werden
||||

### **Sebastian Reinert** (Patient)
|Demographics|Behaviors & Habits|Pain Points & Frustrations|Needs & Goals|
|------------|------------|------------|------------|
|35 Jahre alt|bleibt gerne bei seinen Gewohnheiten|Kaum Zeit, um sich mit Papierkram zu beschäftigen|benötigt eine App, in der er:
|Männlich|benötigt Struktur, um den Tag zu bewältigen|Kaum Zeit, um sich mit Papierkram zu beschäftigen|alle Anamnesebögen im Überblick hat
|Verheiratet||Hasst es, sich Passwörter merken zu müssen|möchte auch für seine Kinder Profile anlegen können
|Vater von 3 Kindern||Zahlt ungerne extra für kleine Apps, spart gerne|jederzeit auf die Daten zugreifen kann
|Erfahrener Smartphone Nutzer||Möchte Überblick über seine Ausgaben behalten|jederzeit die Daten verwalten und anpassen kann
|||Wünscht sich unkomplizierte schnelle, leicht verständliche Lösungen|wünscht sich eine schnelle, einfache Lösung

## User Story Map

|Anmelden/ Registrierung|Log in|Abo verwalten/ Bezahlmethode|Anamnesebogen ausfüllen/ Anamnesebogen auswählen|Profil verwalten|
|------------|------------|------------|------------|------------|
|Profil erstellen|Passwort eingeben|Kreditkartendaten anpassen|Anamnesebogen ausgefüllte Werte anzeigen|Anamnesebögen löschen
|Email verifizieren|Passwort speichern|Abo kündigen|Anamnesebogen automatisch mit bekannten Werten ausfüllen|Profil (Allgemeinen Bogen) ändern
|2FA|Benutzername oder Mailadresse eingeben|Zahlung via Paypal einrichten|Leere Felder markieren und ausfüllen|Bogen Historie einsehen
||Log in Button klicken|Bezahlmethode speichern|Export des Bogens|Unterprofil erstellen
||Passwort vergessen / reset||Profil mit neuen Feldern updaten|API - Daten importieren
|||Anamnesebögen hinzufügen|Passwort vergessen / reset
|||Anamnesebögen speichern|Email ändern
||||Benutzer deaktivieren

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

