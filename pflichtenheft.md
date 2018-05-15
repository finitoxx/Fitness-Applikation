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
   
#### Menü
   ![alt text](Mockups/XtremeXercising_Einstellungen.png)
   In diesem Bildschirm sieht man den Navigation-Drawer, der aus vielen verschiedenen Bildschirmen (siehe Zustandsdiagramm für die GUI-Navigation) heraus erreichbar ist. In diesem Menü kann man alle wichtigen Seiten der Applikation erreichen und persönliche Einstellungen vornehmen.
   
#### Trainingsplan
   ![alt text](Mockups/XtremeXercising_TrainingsplanAuswahl.png)
   Dieser Bildschirm ist als eine Art Navigation-Screen zu verstehen: von hier aus hat man die Möglichkeit, ein Training zu starten, den Trainingsplan zu bearbeiten (mit Hilfe des Stift-Buttons) oder den Trainingsplan zu löschen (mittels des Mülleimer-Buttons). Hierbei wurde darauf geachtet, Texte möglichst wenig und wenn präzise einzusetzen, um den kleinen Bildschirm nicht zu überfrachten. Zudem ist es möglich, eine Benachrichtigung (Glocken-Symbol) einzurichten und den Trainingsplan als Favorit zu markieren (Stern-Symbol). Ist eines dieser Attribute gesetzt, ist das Image in der Akzentfarbe eingefärbt.
   
#### Trainingsplan editieren
   ![alt text](Mockups/XtremeXercising_Editieren.png)
   In diesem Bildschirm sieht man eine weitere Liste, die alle zum Trainingsplan gehörenden Übungseinheiten enthält. Wie im Hauptbildschirm auch existiert an der selben Stelle wie zuvor ein FloatingActionButton, mit dem neue Übungen hinzugefügt werden können. Entsprechend der Designrichtlinien ist dieser Button immer in der Akzentfarbe gehalten, damit diese wichtige Funktion visuell in den Vordergrund tritt und auf den ersten Blick erkennbar ist. Die Listeneinträge bestehen aus dem Namen der Übung, der Kategorie sowie den beanspruchten Muskelgruppen. Durch das Berühren einer Übung kann diese Bearbeitet werden.
   
#### Übungen
   ![alt text](Mockups/XtremeXercising_UebungHinzufuegen.png)
   Über den FloatingActionButton im Bildschirm "Trainingsplan editieren" landet der User in einer Übersicht über alle verfügbaren Übungen. Diese Liste besteht aus Überschriften und Einträgen. Drückt man hier auf eine Übung, kann man diese zum Trainingsplan hinzufügen. Abhängig davon welche Sortierung in der Drop-Down-Liste ausgewählt ist, passt sich die Liste dynamisch an. Bei einer alphabetischen Sortierung werden die Übungen nach dem Namen sortiert angezeigt und die Überschriften zeigen den jeweiligen Buchstaben an. Ist Kategorie ausgewählt, sieht die Sortierung wie auf dem Mockup aus. Bei einer Sortierung nach Muskelgruppen dienen diese als Überschriften und Übungen, die mehrere Muskelgruppen haben, tauchen in jeder davon auf. Auf diese Weise kann der Nutzer ganz einfach und speziﬁsch nach bestimmten Übungen suchen. Wenn er bereits weiß, wie die Übung heißt, benutzt er die alphabetische Sortierung. Möchte er beispielsweise ein Ausdauertraining erstellen, wählt er die entsprechende Kategorie und sucht dann Cardioübungen. Wenn der User sein Training nach Muskelgruppen aufteilt und zum Beispiel einen Unterkörper-Trainingsplan erstellt, sortiert er die Liste nach Muskelgruppen, um Übungen für Beine, Po und Waden zu ﬁnden.
   
#### Übung hinzufügen
   ![alt text](Mockups/XtremeXercising_UebungEinstellungen.png)
   Dieses Dialogfenster dient zur Erstellung von Übungseinheiten, also Übungen mit Sätzen und Wiederholungen, die zum ausgewählten Trainingsplan hinzugefügt werden. Zunächst gibt man ein, wie viele Sätze man durchführen möchte. Dies kann man entweder über das Textfeld und die Tastatur oder mit Hilfe der Plus- und Minus-Buttons machen. Erstere Variante ist zwar präziser, allerdings nicht immer praktischer, da man die Buttons schneller und einfacher bedienen kann. Darunter gibt man die Wiederholungen einer Übung pro Satz ein. Hierfür gibt es zwei Modi, zwischen denen man mit dem Pfeil-Button wechseln kann. Im Standard-Modus gibt es ein Feld für die Wiederholungen. Die Anzahl, die man dann eingibt, gilt für alle Sätze. Möchte man dies individualisieren, wechselt man mit dem Pfeil-Button in den erweiterten Modus. Hierbei wird (wie im Mockup gezeigt) pro eingegebenen Satz ein Textfeld für eine Wiederholung erstellt. Mit "OK" fügt man die Übungseinheit zum Trainingsplan hinzu und kehrt zurück zum vorherigen Bildschirm.
   
#### Trainieren
   ![alt text](Mockups/XtremeXercising_Trainieren.png)
   In diesem Bildschirm ist man im Trainingsmodus. Aus diesem Grund ist es hier nicht möglich, den Navigation-Drawer zu benutzen. Auch hier ﬁndet man wieder eine Liste mit allen Übungen des Trainingsplans. Das Design ist dabei aber etwas anders: statt einer Liste mit Listeneinträgen sind die Übungen hier mehr wie einzelne Einheiten angeordnet. Die Icons links neben dem Namen werden in der Akzentfarbe eingefärbt, sobald eine Übung vollständig ausgeführt wurde. Unterhalb der Liste ist ein Progress-Bar, der sich entsprechend der abgearbeiteten Übungen füllt und den Fortschritt visualisiert.
   
### Übung ausführen
   ![alt text](Mockups/XtremeXercising_UebungAusfuehren.png)
   Dieser Bildschirm ist aktiv, wenn der Benutzer gerade eine bestimmte Übungseinheit ausführt. Pro Satz wird ein Bildschirm dieser Art generiert, in welchem die angestrebte Wiederholungsanzahl und ein Feld für das absolvierte Gewicht angezeigt wird. Wieder hat man die Möglichkeit, die Anzahl per Tastatur oder mit den Buttons einzustellen. Zum nächsten Satz gelangt man mit dem Pfeil am unteren rechten Bildschirm. Hat man den letzten Satz absolviert, verwandelt dieser sich in ein Häkchen und man kehrt in den vorherigen Bildschirm zurück.
   
   
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



