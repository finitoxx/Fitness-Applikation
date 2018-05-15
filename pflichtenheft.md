# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

## Xtreme Xercising - Mobile Anwendung zur Erstellung, Ausführung und Auswertung von Trainingsplänen
#### Autoren: Pascal Squarra, Jacqueline Menke, 

(Inhaltsverzeichnis)

# 1 Einführung

## 1.1 Beschreibung
Die App "Xtreme Xercising" soll sowohl vorgefertigte Trainingspläne enthalten, wie auch dem Benutzer die Möglichkeit bieten, eigene Trainingspläne zu erstellen. Dabei kann man aus einer Vielzahl an Übungen auswählen oder eigene hinzufügen. Die Übungen können zur besseren Übersicht nach Name, Muskelgruppe oder Kategorie sortiert werden. Fügt man Übungen zu einem Trainingsplan hinzu, legt man zuvor noch die Anzahl an Wiederholungen und Sätzen oder die Dauer der Ausführung fest. Im Trainingsmodus können die Übungen dann in beliebiger Reihenfolge ausgeübt werden und das geschaffte Gewicht bzw. die zurückgelegte Strecke eingetragen werden. Im Statistikmodus kann der Trainingserfolg mithilfe eines Graphen angezeigt werden, wobei die jeweilige Übung und der Zeitraum eingestellt werden können. Auch die Verteilung der trainierten Muskelgruppen und weitere Statistiken sollen hier einsehbar sein. Darüber hinaus kann der Benutzer einen Alarm einstellen, der ihn in Form einer Push-Benachrichtigung ans Training erinnert.

## 1.2 Ziele
    - Anwendungsbereiche, Motivation, Umfang, Marktanforderungen, Alleinstellungsmerkmale
    - Informationen zu Zielbenutzergruppen und deren Merkmale (Bildung, Erfahrung, Sachkenntnis)
    - Abgrenzung (Was ist das Softwaresystem _nicht_)

# 2 Anforderungen

## 2.1 Funktionale Anforderungen
    - Use-Case Diagramme
    - Strukturierung der Diagramme in funktionale Gruppen

## 2.2 Nicht-funktionale Anforderungen 

### 2.2.1 Rahmenbedingungen
    - Normen, Standards, Protokolle, Hardware, externe Vorgaben

### 2.2.2 Betriebsbedingungen
    - Vorgaben des Kunden (z.B. Web Browser / Betriebssystem Versionen, Programmiersprache)

### 2.2.3 Qualitätsmerkmale
    - Externe Qualitätsanforderungen (z.B. Performance, Sicherheit, Zuverlässigkeit, Benutzerfreundlichkeit)

## 2.3 Graphische Benutzerschnittstelle
#### Ladebildschirm
   ![alt text](Mockups/XtremeXercising_Ladebildschirm.png)
   Im Ladebildschirm sieht man sowohl den Schriftzug als auch einen Loading-Spinner, der den Warteprozess verbildlicht, während im Hintergrund die Datenbank arbeitet und Daten daraus extrahiert werden. Darunter sieht man den Slogan der Applikation: Be the best version of yourself. Dieser soll dazu motiveren, jeden Tag sein bestes zu geben und sich zu verbessern, um seine Ziele zu erreichen, ohne sich mit anderen vergleichen zu müssen. Zugleich erkennt man die hauptsächliche Farbgestaltung, die primär aus einem dunklen Graubraun und zusätzlich aus einem feurigen Rot-Orange als Akzentfarbe besteht. Diese wird stringent durch das gesamte Design fortgeführt und eingehalten.
   
#### Trainingspläne
   ![alt text](Mockups/XtremeXercising_Trainingsplaene.png)
   Das folgende Mockup zeigt den Hauptbildschirm der Anwendung. Oben links sieht man den Toggle-Button für den Navigation Drawer, mit dem sich dieser öﬀnen lässt. Die Statistik ﬁndet sich im Navigation Drawer, den man problemlos aus vielen verschiedenen Bildschirmen heraus erreichen kann. Darunter sieht der Nutzer alle selbst erstellten Trainingspläne in einer Liste. Unter dem Namen des Plans ﬁndet sich zudem die jeweilige Kategorie und rechts erscheinen, falls vom Nutzer so eingestellt, zwei Images: eine Glocke, falls für den Trainingsplan eine Benachrichtigung eingestellt wurde, und ein Stern, falls der Plan zu den Favoriten hinzugefügt wurde. Damit lassen sich beim Scrollen die bevorzugten Trainingspläne rasch wiedererkennen. Der FloatingActionButton mit dem Plus ermöglicht es, wie das Image bereits vermuten lässt, neue Trainingspläne zu erstellen.
   
#### Trainingsplan erstellen
   ![alt text](Mockups/XtremeXercising_TrainingsplanErstellen.png)
   Hier sieht man ein kleines Dialogfenster, in dem schnell und unkompliziert ein neuer Trainingsplan angelegt werden kann. Theoretisch ist es ausreichend einen Namen anzugeben, eine Kategorie auszuwählen und mit 'Ok' zu bestätigen. Außerdem kann über das bereits bekannte Glockensymbol ein weiterer Dialog geöﬀnet werden, mit dem eine Benachrichtigung erstellt werden kann. Dieser enthält einen TimePicker für die Uhrzeit und eine Drop-DownListe für den Wochentag, an welchem man trainieren möchte.
   
   
   
## 2.4 Anforderungen im Detail
    - User Stories mit Akzeptanzkritierien 
    - Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
    - Strukturierung der User Stories in funktionale Gruppen

### Schablone für User Stories

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Wer | Was | Warum | Wann akzeptiert |

### Beispiel 1

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Benutzer | bei Fehleingabe die Lösung angezeigt bekommen | ich lernen kann | Lösung wird angezeigt |

### Beispiel 2

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Lernen  |Benutzer| bei Fehleingabe die Lösung angezeigt bekommen|ich lernen kann| Lösung wird angezeigt | Muss |


# 3 Technische Beschreibung

## 3.1 Systemübersicht
    - Systemarchitekturdiagramm ("Box-And-Arrow" Diagramm)
    - Schnittstellenbeschreibung
    - Kommunikationsprotokolle, Datenformate

## 3.2 Softwarearchitektur
    - Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

## 3.3 Datenmodell 
    - Konzeptionelles Analyseklassendiagramm

## 3.4 Abläufe
    - Aktivitätsdiagramme für relevante Use Cases
    - Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases

## 3.5 Entwurf
    - Detaillierte UML-Diagramme für relevante Softwarebausteine

# 4 Projektorganisation

## 4.1 Annahmen
    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)

## 4.2 Verantwortlichkeiten
    - Zuordnung von Personen zu Softwarebausteinen aus Kapitel 3.1 und 3.2
    - Rollendefinition und Zuordnung

## 4.3 Grober Projektplan
    - Meilensteine

# 5 Anhänge

## 5.1 Glossar 
    - Definitionen, Abkürzungen, Begriffe

## 5.2 Referenzen
    - Handbücher, Gesetze

## 5.3 Index



