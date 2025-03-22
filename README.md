# Küchen-Timer

Ein dynamischer Timer für Küchen oder andere Anwendungen, bei dem du mehrere Timer gleichzeitig verwalten kannst. Mit Funktionen wie dem Starten, Pausieren, Zurücksetzen und Löschen von Timern, einer Sprachausgabe beim Ablauf der Zeit und der Möglichkeit, Alarmtöne zu aktivieren, bietet dieses Projekt eine flexible Lösung zur Zeitmessung.

Hier ist der öffentliche Link dazu:
https://dave2048it.github.io/Kuechen-Timer/

## Funktionsweise

- **Mehrere Timer**: Du kannst beliebig viele Timer gleichzeitig hinzufügen und verwalten.
- **Einstellbare Zeit**: Jeder Timer lässt sich in Minuten und Sekunden einstellen.
- **Start, Pause und Reset**: Du kannst jeden Timer starten, pausieren oder zurücksetzen.
- **Alarm**: Beim Ablauf eines Timers wird ein Alarmton abgespielt (sofern aktiviert).
- **Sprachausgabe**: Der Timer gibt eine Sprachausgabe über den Browser aus, wenn der Timer abgelaufen ist.
- **Verlauf**: Alle abgelaufenen Timer werden in einer History-Liste gespeichert.
- **Blink-Effekt**: Timer, deren Zeit abgelaufen ist, werden visuell hervorgehoben.

## Technologien

- **HTML**: Struktur der Webseite
- **CSS**: Gestaltung und Layout der Seite
- **JavaScript**: Funktionalität der Timer und Interaktionen
- **Speech Synthesis API**: Für die Sprachausgabe, wenn ein Timer abgelaufen ist
- **Audio API**: Für das Abspielen eines Alarmsounds

## Installation

1. Lade die Dateien herunter oder klone das Repository:
    ```bash
    git clone https://github.com/Dave2048IT/Kuechen-Timer.git
    ```

2. Öffne die `index.html`-Datei in einem Webbrowser deiner Wahl.

Keine weiteren Installationen oder Konfigurationen sind erforderlich, um das Projekt lokal auszuführen.

## Verwendung

1. **Timer Hinzufügen**: Klicke auf den Button `+ Neuer Timer`, um einen neuen Timer zu erstellen.
2. **Timer Einstellen**: Du kannst Minuten und Sekunden für den Timer festlegen.
3. **Timer Starten**: Klicke auf `Start`, um den Timer zu starten.
4. **Timer Pausieren**: Klicke auf `Pause`, um den Timer zu stoppen.
5. **Timer Zurücksetzen**: Klicke auf `Reset`, um den Timer zurückzusetzen.
6. **Timer Löschen**: Klicke auf `Löschen`, um den Timer zu entfernen.

Wenn der Timer abgelaufen ist:
- Ein Alarmton wird abgespielt (sofern der Ton aktiviert ist).
- Eine Sprachausgabe informiert dich darüber, dass der Timer abgelaufen ist.
- Der Timer wird visuell hervorgehoben und bleibt für 5 Sekunden blinkend.

## Optionen

- **Ton aktivieren / deaktivieren**: Du kannst die Option aktivieren oder deaktivieren, um einen Alarmton bei Ablauf eines Timers abzuspielen.
- **Verlauf anzeigen**: Alle abgelaufenen Timer werden in einer Liste angezeigt, mit dem Zeitpunkt, zu dem sie abgelaufen sind.

## Beispiel

Hier ein Beispiel, wie der Ablauf aussehen könnte:

1. Du klickst auf `+ Neuer Timer`, um einen neuen Timer hinzuzufügen.
2. Du stellst den Timer auf `0 Minuten` und `30 Sekunden`.
3. Du klickst auf `Start`, um den Timer zu starten.
4. Nach Ablauf der 30 Sekunden wirst du einen Ton hören (sofern aktiviert), und die Sprachausgabe wird dir mitteilen, dass der Timer abgelaufen ist.

## Code-Erklärung

Der Code besteht aus drei Hauptteilen:

### 1. **HTML**: 
Die Struktur der Seite ist einfach und ermöglicht es, mehrere Timer hinzuzufügen und zu verwalten. Jeder Timer hat Felder zur Eingabe der Zeit (Minuten und Sekunden) und Buttons zum Starten, Pausieren, Zurücksetzen und Löschen.

### 2. **CSS**:
Das Styling ist einfach gehalten, mit ansprechenden visuellen Effekten wie dem Blink-Effekt für abgelaufene Timer. Es gibt auch Schaltflächen, die verschiedene Aktionen auslösen können.

### 3. **JavaScript**:
- **Timer-Objekt**: Jeder Timer wird als Objekt mit Eigenschaften wie `remainingSeconds`, `running` und `name` verwaltet.
- **Update-Intervall**: Ein globales Intervall aktualisiert alle Timer jede Sekunde.
- **Alarm- und Sprachausgabe**: Beim Ablauf eines Timers wird entweder ein Ton abgespielt und/oder eine Sprachausgabe ausgelöst.

## Anpassungen

Du kannst das Projekt leicht erweitern oder anpassen:

1. **Alarmton**: Du kannst die `ringtone-193209.mp3` Datei durch eine andere MP3-Datei ersetzen.
2. **Sprachausgabe**: Der Text der Sprachausgabe kann an die eigenen Bedürfnisse angepasst werden, indem du den Inhalt der `SpeechSynthesisUtterance` änderst.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.
