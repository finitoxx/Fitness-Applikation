# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

## Xtreme Xercising - Mobile Anwendung zur Erstellung, Ausführung und Auswertung von Trainingsplänen
#### Autoren: Pascal Squarra, Jacqueline Menke, 


**Inhaltsverzeichnis**
======================

* 1\. [Einführung](#einführung)
    * 1.1\. [Beschreibung](#beschreibung)
    * 1.2\. [Ziele](#ziele)
* 2\. [Anforderungen](#anforderungen)
    * 2.1\. [Funktionale Anforderungen](#funktionaleAnforderungen)
    * 2.2\. [Nicht-funktionale Anforderungen](#nichtFunktionaleAnforderungen)
        * 2.2.1\. [Rahmenbedingungen](#rahmenbedingungen)
        * 2.2.2\. [Betriebsbedingungen](#betriebsbedingungen)
        * 2.2.3\. [Qualitätsmerkmale](#qualitaetsmerkmale)
    * 2.3\. [Graphische Benutzerschnittstelle](#graphischeBenutzerschnittstelle)
    * 2.4\. [Anforderungen im Detail](#anforderungenImDetail)
* 3\. [Technische Beschreibung](#technischeBeschreibung)
    * 3.1\. [Systemübersicht](#systemuebersicht)
    * 3.2\. [Softwarearchitektur](#softwarearchitektur)
    * 3.3\. [Datenmodell](#datenmodell)
    * 3.4\. [Abläufe](#ablaeufe)
    * 3.5\. [Entwurf](#entwurf)
* 4\. [Projektorganisation](#projektorganisation)
    * 4.1\. [Annahmen](#annahmen)
    * 4.2\. [Verantwortlichkeiten](#verantwortlichkeiten)
    * 4.3\. [Grober Projektplan](#groberProjektplan)
* 5\. [Anhänge](#anhaenge)
    * 5.1\. [Glossar](#glossar)
    * 5.2\. [Referenzen](#referenzen)
    


# 1 Einführung <a name="einführung"></a>

## 1.1 Beschreibung <a name="beschreibung"></a>
Die App "Xtreme Xercising" soll sowohl vorgefertigte Trainingspläne enthalten, wie auch dem Benutzer die Möglichkeit bieten, eigene Trainingspläne zu erstellen. Dabei kann man aus einer Vielzahl an Übungen auswählen oder eigene hinzufügen. Die Übungen können zur besseren Übersicht nach Name, Muskelgruppe oder Kategorie sortiert werden. Fügt man Übungen zu einem Trainingsplan hinzu, legt man zuvor noch die Anzahl an Wiederholungen und Sätzen oder die Dauer der Ausführung fest. Im Trainingsmodus können die Übungen dann in beliebiger Reihenfolge ausgeübt werden und das geschaffte Gewicht bzw. die zurückgelegte Strecke eingetragen werden. Im Statistikmodus kann der Trainingserfolg mithilfe eines Graphen angezeigt werden, wobei die jeweilige Übung und der Zeitraum eingestellt werden können. Auch die Verteilung der trainierten Muskelgruppen und weitere Statistiken sollen hier einsehbar sein. Darüber hinaus kann der Benutzer einen Alarm einstellen, der ihn in Form einer Push-Benachrichtigung ans Training erinnert.

## 1.2 Ziele <a name="ziele"></a>
    
#### Anwendungsbereiche
Zu den größten wachsenden Trends der letzten Jahre kann man sowohl die Digitalisierung wie auch das Thema Gesundheit und alle damit verbundenen Unterthemen wie Fitness, gesundem Lifestyle und Ernährung zählen[[1]](#zitat1). Diese Trends sind oﬀensichtliche Begleiterscheinungen der allgemeinen weltweiten Entwicklung: Der technologische Fortschritt erschließt immer neue Märkte, das alltägliche Leben wird zunehmend digitalisiert und das Smartphone ist der ständige Begleiter. Über das bloße Telefonieren und Schreiben von Mitteilungen ist das Handy längst hinausgewachsen. Heutzutage nutzt man es zur Informationsgewinnung, zum Einkaufen, zum Planen und Strukturieren des Tagesablaufes, zu Unterhaltungszwecken und vielem mehr. Gleichzeitig wächst der Gesundheitsbegriff immer weiter. Hierbei geht es nicht mehr nur um die bloße körperliche Gesundheit, sondern vielmehr um die “aktive Selbstoptimierung“[[1]](#zitat1) mit dem “neue[n, Anm. d. Verf.] Ziel einer Gesamtgesundheit“[[1]](#zitat1). Gesunde Ernährung und regelmäßiger Sport gewinnen immer stärker an Bedeutung. Dahingehend wird auch die Kombination dieser beiden Trends in Form von Fitness- und Health-Apps immer bedeutsamer[[1]](#zitat1).
Bereits 15.000 mobile Anwendungen dieser Art werden in Deutschland angeboten, weltweit sind es bereits 40.000. Zwischen 2011 und 2012 ist die Anzahl der Downloads beinahe auf das Doppelte angewachsen: von 124 Millionen auf 247 Millionen. Die Idee hinter diesen Applikationen ist einfach: das Handy als handlichen und immer greifbaren Begleiter soll die Menschen bei ihren Zielen, zum Beispiel Abnehmen, Muskelaufbau oder Fitnesssteigerung, auf motivierende, einfache und spielerische Weise unterstützen[[1]](#zitat1). Auf diese Anwendung ist auch Xtreme Xercising ausgelegt.

#### Motivation
Da der Markt im Bereich mobiler Anwendungen zum Thema Fitness, Gesundheit und Lifestyle immer stärker wächst, fällt es auch dementsprechend schwer, die für einen persönlich am besten geeignete Anwendung zu ﬁnden. Aus diesem Grund haben wir uns das Ziel der Entwicklung einer FitnessApp gesetzt. Ein ansprechendes und einprägsames Design in Kombination mit intuitiver und einfacher Bedienung verbindet die - unserer Meinung nach - wichtigsten Grundfunktionen für die Trainingsplangestaltung, -verwaltung, -ausführung und Fortschrittüberwachung. Xtreme Xercising soll somit der digitale Freund und Begleiter beim Sport werden. Durch das einfache Prüfen des Trainingserfolgs in Form von anschaulichen Graphen sowie das Erinnern durch Benachrichtigungen ans Trainieren soll die Motivation gefördert werden. Die Bedienung ist simpel und selbsterklärend, sodass das Eintragen der Trainingsdaten das Training erleichtern und verbessern soll. 

#### Umfang
Mit der Anwendung soll der Nutzer eigene Trainingspläne erstellen und vorhandene ändern oder löschen können. Bei der Erstellung wird ein Name angegeben, eine Kategorie (Muskelaufbau, Cardio, Definition) ausgewählt und bei Bedarf eine Erinnerung festgelegt. Dabei können Wochentag und Uhrzeit festgelegt werden, sodass sich der Benutzer zum festgelegten Zeitpunkt an sein Training erinnert lassen kann. 
Zu einem Trainingsplan können dann Übungen hinzugefügt und wieder entfernt oder Änderungen an diesen vorgenommen werden. Dabei legt man die Sätze und Wiederholungen beziehungsweise die Trainingszeit fest. Außerdem gibt es die Möglichkeit, neben den bereits vorhandenen Übungen eigene zu erstellen, diese zu löschen oder zu verändern. Zum Erstellen vergibt man wie bei den Trainingsplänen einen Namen, wählt aus einer Kategorie (Ausdauer, Freie Übung, Maschine) aus und gibt die beanspruchten Muskelgruppen (Bauch, Bizeps, Brust, Oberschenkel, Po, Rücken, Schultern, Trizeps, Waden) an.

Im Trainingsmodus können die Übungen eines Trainingssplans in beliebiger Reihenfolge abgearbeitet werden, wobei ein Progress-Bar den Nutzer über den Fortschritt des Trainings informiert. Nach der Ausführung der Training können immer jeweils pro Satz das geschaffte Gewicht oder die zurückgelegte Strecke notiert werden. Das Beenden eines Trainings wird dem Nutzer in Form eines Erfolgsbildschirms mitgeteilt.

In der Statistik kann der Nutzer aus vielen unterschiedlichen grafischen Darstellungen und Tabellen einen Überblick über seine sportlichen Leistungen gewinnen. Der erste Graph stellt die Maximalleistung einer Übung in einem festlegbaren Zeitraum dar. Ein weiterer Graph basiert auf einem kummulierten Wert aus Sätzen, Wiederholungen und Gewicht bzw. aus Zeit und Strecke. Auch hier wählt der Nutzer den zu berücksichtigten Zeitpunkt aus. Darüberhinaus gibt eine Pie Chart mit der Verteilung der trainierten Muskelgruppen und weitere allgemeine Statistiken (z.B. die Gesamtanzahl der absolvierten Trainings, der ausgeführten Übungen, der besten Ergebnisse, u.ä.). Außerdem soll es die Möglichkeit geben, die Körperdaten des Users zu erfassen und aktualisieren zu können, um eine Übersicht über die Veränderungen von Gewicht, Body Mass Index und der Körpermaßen bereit zu stellen.

#### Marktanforderungen
Aufgrund der - wie bereits erwähnten - riesigen und zudem weiterhin stark wachsenden Anzahl an Fitness-Apps, ist es generell kein einfaches Unterfangen, mit einer solchen Anwendung aus der Masse herauszustechen. Aus diesem Grund wird bei der Entwicklung der App auf folgende Aspekte besonderen Wert gelegt: Design, Usability und Funktionalität.


Der Aspekt, den der Nutzer als ersten vor allen anderen wahrnimmt und als primäres Kriterium für den Download gilt, ist das Design. Bevor die App ausprobiert und getestet wird, entscheidet allein der äußerliche Eindruck, ob die Anwendung gefällt oder nicht. Dementsprechend haben wir uns für ein Design entschieden, das mit kräftigen Farben und klaren Formen überzeugt, welches optisch ansprechend und interessant ist, ohne vom Inhalt abzulenken und gleichzeitig einen hohen Wiedererkennungswert hat. 


Der zweite wichtige Aspekt ist die Usability, also die Bedienungsfreundlichkeit der Anwendung. Hat der Nutzer sich dafür entschieden, eine Anwendung herunterzuladen, wird er sie zunächst oberflächlich ausprobieren. Dabei entscheidend ist, dass der Nutzer die Bedienung intuitiv erfassen kann, weil sie ihm vertraut vorkommt. Zu diesem Zweck sind alle Buttons selbsterklärend oder durch anschauliche Icons dargestellt, die ihre FUnktionalität eindeutig ausweisen. Wichtig ist hierbei auch der Aspekt der Kontinuität, also dass Buttons mit gleicher Funktion in unterschiedlichen Kontexten gleich aussehen, was die Bedienung ebenfalls erleichtert. Darüberhinaus verzichtig die App weitgehend auf Textlabels und benutzt diese nur, wenn es nicht anders geht. Das liegt zum einen an der begrenzten Bildschirmfläche mobiler Geräte und der Tatsache, dass viel Text eine Anwendung unnötig komplziert wirken lässt. Desweiteren muss die logische Verknüpfung der einzelnen Bildschirme, also die GUI-Navigation, logisch nachvollziehbar und einfach sein, damit der Nutzer immer weiß, wo er sich gerade befindet und wie er zu seinen gewünschten Aktionen kommt.

Der letzte Aspekt ist die Funktionalität, die der Nutzer erst dann im vollen Umfang testen wird, nachdem er die Bedienung als einfach und selbsterklärend eingestuft hat. Zu diesem Zweck bietet die App die Möglichkeit, nicht nur Trainingspläne individuell zu erstellen, sondern neben der Vielzahl an bereits vorhandenen Übungen eigene erstellen zu können. Gleichzeitig kann der Nutzer seinen Trainingserfolg durch unterschiedliche Graphen und Statistiken prüfen. 

#### Alleinstellungsmerkmale
Was die Applikation Xtreme Xercising so besonders macht, ist das einzigartige und unverkennbare Design, der hohe Grad an Funktionalität und die einfache und intuitive Bedienung der Anwendung. Oftmals leiden mobile Applikation, die sehr viele und komplexe Funktionen anbieten, unter einem nüchternen Design und einer mangelnden Usability. Genau aus dem Grund ist das Hauptmerkmal von Xtreme Xercising, bei vollem Funktionsumfang und vielfältigen Nutzungsmöglichkeiten den User nicht zu überfordern, sondern ihn durch übersichtliches Design, leichte Bedien- und Verständlichkeit und ohne viele Erklärungen zum Ziel zu führen. Somit sind der designtechnische und der Usability-Aspekt ein wichtiger Leitfaden, der sich durch den gesamten Entwicklungsprozess fortführt und immer wieder erneut getestet und verbessert wird. Um dies zu gewährleisten, sind auch Nutzertests vorgesehen, die die Nutzerfreundlichkeit überprüfen und neue Eindrücke liefern sollen.

#### Zielbenutzergruppe
Zur Zielgruppe zählen alle Sport-, Fitness-, und Gesundheits-Interessenten jeglicher Altersgruppen (mit besonderem Augenmerk auf die unter 20-Jährigen bis 40-Jährigen). Die App richtet sich sowohl an Menschen, die ihr Training zu Hause, als auch im Fitness Studio absolvieren möchten. Egal ob Gewichtsverlust, Muskelaufbau oder Cardio-Training: die Applikation ist für jegliche sportliche Zielrichtung ausgelegt. Anfänger können mit der Anwendung ihren Einstieg ins regelmäßige und erfolgreiche Trainin gunterstützen und erste Fitnesserfahrungen sammeln. Fortgeschrittene haben die Möglichkeit, ihre Trainingserfolge besser prüfen und einschätzen zu können. Da die Anwendung leicht zu bedienen ist und wenig technisches Verständnis erfordert, ist sie für eine breite Nutzergruppe geeignet. Das Design ist modern und schlicht gehalten und eignet sich sowohl für weibliche als auch männliche Nutzer.

#### Abgrenzung

Die Fitness Applikation dient nicht dem Zweck der Erläuterung und richtigen Ausführung von sportlichen Übungen. Das bedeutet, dass es keine entsprechenden Anleitungen oder Bilder zur korrekten Ausführung geben wird. Auch eine Community- oder eine Share-Funktion, mit Hilfe derer sich Nutzer austauschen oder gegenseitig untersützen können, ist zu diesem Zeitpunkt nicht eingeplant. Des weiteren werden auch jegliche medizinischen, gesundheitlichen und ernährungsspezifischen Aspekte nicht in der Fitness-App berücksichtigt.

# 2 Anforderungen <a name="anforderungen"></a>

## 2.1 Funktionale Anforderungen <br /> <a name="funktionaleAnforderungen"></a>
#### Use-Case-Diagramm "Trainingsplan"
   ![alt text](Diagramme/Traininsplan.png) <br />
   <br />
Use-Case-Diagramm zu den Funktionen des Trainingsplans. Dieser kann durch den Nutzer erstellt, editiert oder gelöscht werden. Bei der Erstellung eines neuen Trainingsplans muss generell nur ein Name eingegeben werden, optional kann eine Benachrichtigung erstellt werden, die den Nutzer an die Ausübung des Plans erinnert. Soll der Trainingsplan verändert werden, können Name und Benachrichtigung nach Belieben angepasst werden.

#### Use-Case-Diagramm "Trainingsplan bearbeiten" <br />
   ![alt text](Diagramme/Trainingsplan_bearbeiten.png) <br />
   <br />
Hat man einen Trainingsplan erstellt, so können diesem neue Übungen als Übungseinheit hinzugefügt, verändert oder wieder entfernt werden. Um nach einer bestimmten Übung zu suchen, lassen sich diese nach verschiedenen Kriteriern sortieren. Hat man sich für eine Übung entschieden, muss der Nutzer die Anzahl an Sätzen und Wiederholungen angeben oder die Dauer die Ausführung. Selbiges kann beim Editieren einer Übung verändert werden.
   
#### Use-Case-Diagramm "Eigene Übungen erstellen" <br />
   ![alt text](Diagramme/Eigene_Übungen_erstellen.png) <br />
   <br />
Bei der Erstellung einer eigenen Übung vergibt der Nutzer zunächst einen eindeutigen Namen, anschließend wählt er die Kategorie für die Übung aus. Danach markiert der Nutzer sämtliche Muskelgruppen, die durch die Übung trainiert werden und gibt an, ob bei der Übung in Sätzen und Wiederholungen oder auf Zeit trainiert werden soll.
   
#### Use-Case-Diagramm "Trainieren" <br />
   ![alt text](Diagramme/Trainieren.png) <br />
   <br />
Möchte der Nutzer ein Trainings ausführen, wählt er zunächst den gewünschten Trainingsplan aus. Danach ist es ihm überlassen, die Reihenfolge der Ausführung der Übungen nach Belieben zu bestimmen. Hat er sich dann für eine Übung entschieden, trägt er nach der Ausführung die vollbrachte Leistung - entweder das geschaffte Gewicht oder die zurückgelegte Strecke - ein.
   
#### Use-Case-Diagramm "Statistik auswerten" <br />
   ![alt text](Diagramme/Statistik_auswerten.png) <br />
   <br />
Um die Statistik auszuwerten, muss der Nutzer zunächst eine Übung auswählen, die er sich als Graph anzeigen lassen möchte. Danach hat er die Möglichkeit, den Zeitraum einzugrenzen, um sich den Verlauf seiner erbrachten Leistung entweder in einem kurz-, mittel- oder langfristigen Zeitintervall anzeigen zu lassen.

## 2.2 Nicht-funktionale Anforderungen <a name="nichtFunktionaleAnforderungen"></a>

### 2.2.1 Rahmenbedingungen <a name="rahmenbedingungen"></a>

#### Die Bedeutung von Sport und Fitness
Laut der Langzeitstudie "Gesundheit zum Mitmachen" in Bad Schönborn, durchgeführt vom KIT, dem Karlsruher Institut für Technologie, sind sportliche Erwachsene physikalisch gesehen im Schnitt 10 Jahre jünger[[2]](#zitat2).
Obwohl diese Studie beweist, dass die getesteten Probanden im Schnitt immer sportlicher werden (besonders die älteren im Bereich von 51 - 60 Jahren), schaffen es mehr als die Hälfte dieser Personen nicht, die von der WHO, der World Health Organization, empfohlenen zweieinhalb Stunden Sport pro Woche zu absolvieren[[3]](#zitat3).

Die Unterschiede in Fitness und Mobilität zwischen sportlich aktiven Menschen und weniger Aktiveren werden dabei mit fortschreitendem Alter immer gravierender[[2]](#zitat2). Aus diesem Grund ist es entscheidend, bereits in jüngeren Jahren regelmäßig Sport zu treiben, um davon im Alter zu profitieren. 
Auch leiden sportlich Aktive deutlich weniger an gesundheitlichen Beeinträchtigungen: besonders im Hinblick auf Herz-Kreislauf-Erkrankungen, orthopädischen und neurologischen Einschränkungen oder Typ 2 Diabetes schneiden aktivere Menschen bis zu viermal besser ab als inaktivere[[4]](#zitat4). 
Schließlich beugt Sport auch der Volkskrankheit Adipositas (Übergewicht) vor. Trotz des wachsenden Gesundheits- und Fitnessbewusstseins, ist immer noch mehr als die Häflte der erwachsenen Bewohner von Bad Schönborn übergewichtig und 14,4% als adipös[[5]](#zitat5).

Weitere positive Nebeneffekte von Sport sind ein besseres Selbstbewusstsein, eine allgemein positivere Stimmung, eine erhöhte Lebensqualität, ein besseres Gesundheitsverständnis und sozialer Integration bei Gruppensport. Darüberhinaus erholen sich sportlich Aktive schneller von Verletzungen und können negative Gesundheitsaspekte (Rauchen, Bluthochdruck, ein hoher Colesterinspiegel) besser ausgleichen[[6]](#zitat6).

#### Fortschrittsüberwachung und ihre Auswirkung auf Motivation und Leistungssteigerung
Aufgrund der ernormen Signifikanz im vorangegangen Abschnitt, ergibt sich nur die Fragestellung, wie man die Bereitschaft und das Durchhaltevermögen für den Sport verbessern kann. Die Anwendung Xtreme Xercising soll hier den Nutzer untersützen, begleiten und motivieren. Insbesondere soll dies durch die ausführliche und kontinuierliche Fortschrittsüberwachung geschehen. Eine diesbezügliche Meta-Studie aus dem Jahr 2016 kam zu zwei wichtigen Erkenntnissen: Erstens unterstützt und fördert Fortschrittsüberwachung das Erreichen der eigenen Ziele und zweitens steht die Schnelligkeit des Erreichen der eigenen Ziele in proportionalem Zusammenhang mit der Häufigkeit der Fortschrittsmessungen[[7]](#zitat7).
Dabei ist es wichtig, dass die Fortschrittsüberwachung in direktem Zusammenhang mit dem eigentlichen Ziel stehen[[7]](#zitat7). So kann es sein, dass Menschen, die ihr Essverhalten überwachden, ihre Ernährung umstellen aber keinen großartigen Gewichtsverlust feststellen. Umgekehrt können Menschen, die sich regelmäßig wiegen, womöglich ihr Gewicht verringern, sich aber trotzdem nicht gesunder ernähren als zuvor[[8]](#zitat8).
Auch hilft es, seine eigenen Ziel publik zu machen, beispielsweise in Foren, in der Familie oder im Bekanntenkreis[[7]](#zitat7). Dadurch muss man sich nun nicht nur vor sich selbst, sondern auch vor anderen verantworten, was das Verfolgen und Umsetzen der eigenen Ziele angeht, was wiederum den öffentlichen Druck auf die eigene Person und somit die Motivation erhöht.
Schließlich hilft auch das Notieren der einzelnen Erfolgseinheiten[[7]](#zitat7). Die Möglichkeit, die einzelnen Leistungen und besonders Leistungssteigerungen oder -verbesserungen schwarz auf weiß und über einen längeren Zeitraum verfolgen zu können, hilft, seine Motivation aufrecht zu erhalten und auf sein Ziel hinarbeiten zu können.

Aus diesen Gründen soll der Nutzer mithilfe von Xtreme Xercising seine Fitnessziele schneller, besser, effizienter und einfacher erreichen. Weitere Motivations- und Communityfunktionen sind ergänzend für eine spätere Version der Anwendung geplant, um den Nutzer noch optimaler und vorallem ganzheitlich in allen Bereichen von Fitness, Sport und Gesundheit zu unterstützen.

### 2.2.2 Betriebsbedingungen <a name="betriebsbedingungen"></a>

| **Kategorie**| **Bedingung**|
|:-----|:----------|
| Endgerät | Smartphone |
| Programmiersprache | Javascript + React Native |
| Betriebssystem | Google Android und Apple iOS |
| Versionen | Anteil der mögl. Nutzer auf Basis der Versionsverteilung mind. 80% |

### 2.2.3 Qualitätsmerkmale <a name="qualitaetsmerkmale"></a>
    
| **Kategorie**| **Merkmal**|
|:-----|:----------|
| Performance | Schnelles Starten der Anwendung, schnelles Speichern und Abrufen der Daten (Datenbankanbindung), geringer Speicherbedarf (wichtig bei Datenverbrauch bei mobilem Internet) |
| Sicherheit | Keine Kontoerstellung und deshalb auch keine Speicherung von kritischen persönlichen Daten ( wie z.B. Email-Adresse, Passwort, Name, Adresse, Telefonnummer, etc.) |
| Zuverlässigkeit | Speicherung der Daten bei jeder Datenmanipulation, Nutzung der Anwendung und Speicherung von Daten sowohl online als auch offline |
| Benutzerfreundlichkeit | Hinweise bei falschen oder fehlerhaften Nutzereingaben, kurze Popup-Nachricht bei Nutzeraktionen (Erstellen eines Trainingsplans / einer Übung / Hinzufügen einer Übung zu einem Trainingsplan etc.), Akzentfarbe zur Hervorhebung wichtiger Aktionen, gleiche Icons für gleiche oder ähnliche Funktionen, wenig Text, selbsterklärende Funktionen (Orientierung an den iOS und Android Design Guidelines) |

## 2.3 Graphische Benutzerschnittstelle <a name="graphischeBenutzerschnittstelle"></a>

#### Ladebildschirm<br /><br />
   ![alt text](Mockups/XtremeXercising_Ladebildschirm.png) <br />
   <br />
   Im Ladebildschirm sieht man sowohl den Schriftzug als auch einen Loading-Spinner, der den Warteprozess verbildlicht, während im Hintergrund die Datenbank arbeitet und Daten daraus extrahiert werden. Darunter sieht man den Slogan der Applikation: Be the best version of yourself. Dieser soll dazu motiveren, jeden Tag sein bestes zu geben und sich zu verbessern, um seine Ziele zu erreichen, ohne sich mit anderen vergleichen zu müssen. Zugleich erkennt man die hauptsächliche Farbgestaltung, die primär aus einem dunklen Graubraun und zusätzlich aus einem feurigen Rot-Orange als Akzentfarbe besteht. Diese wird stringent durch das gesamte Design fortgeführt und eingehalten.
   
#### Trainingspläne<br /><br />
   ![alt text](Mockups/XtremeXercising_Trainingsplaene.png) <br />
   <br />
   Das folgende Mockup zeigt den Hauptbildschirm der Anwendung. Oben links sieht man den Toggle-Button für den Navigation Drawer, mit dem sich dieser öﬀnen lässt. Die Statistik ﬁndet sich im Navigation Drawer, den man problemlos aus vielen verschiedenen Bildschirmen heraus erreichen kann. Darunter sieht der Nutzer alle selbst erstellten Trainingspläne in einer Liste. Unter dem Namen des Plans ﬁndet sich zudem die jeweilige Kategorie und rechts erscheinen, falls vom Nutzer so eingestellt, zwei Images: eine Glocke, falls für den Trainingsplan eine Benachrichtigung eingestellt wurde, und ein Stern, falls der Plan zu den Favoriten hinzugefügt wurde. Damit lassen sich beim Scrollen die bevorzugten Trainingspläne rasch wiedererkennen. Der FloatingActionButton mit dem Plus ermöglicht es, wie das Image bereits vermuten lässt, neue Trainingspläne zu erstellen.
   
#### Trainingsplan erstellen<br /><br />
   ![alt text](Mockups/XtremeXercising_TrainingsplanErstellen.png) <br />
   <br />
   Hier sieht man ein kleines Dialogfenster, in dem schnell und unkompliziert ein neuer Trainingsplan angelegt werden kann. Theoretisch ist es ausreichend einen Namen anzugeben, eine Kategorie auszuwählen und mit 'Ok' zu bestätigen. Außerdem kann über das bereits bekannte Glockensymbol ein weiterer Dialog geöﬀnet werden, mit dem eine Benachrichtigung erstellt werden kann. Dieser enthält einen TimePicker für die Uhrzeit und eine Drop-DownListe für den Wochentag, an welchem man trainieren möchte.
   
#### Menü<br /><br />
   ![alt text](Mockups/XtremeXercising_Einstellungen.png) <br />
   <br />
   In diesem Bildschirm sieht man den Navigation-Drawer, der aus vielen verschiedenen Bildschirmen (siehe Zustandsdiagramm für die GUI-Navigation) heraus erreichbar ist. In diesem Menü kann man alle wichtigen Seiten der Applikation erreichen und persönliche Einstellungen vornehmen.
   
#### Trainingsplan<br /><br />
   ![alt text](Mockups/XtremeXercising_TrainingsplanAuswahl.png) <br />
   <br />
   Dieser Bildschirm ist als eine Art Navigation-Screen zu verstehen: von hier aus hat man die Möglichkeit, ein Training zu starten, den Trainingsplan zu bearbeiten (mit Hilfe des Stift-Buttons) oder den Trainingsplan zu löschen (mittels des Mülleimer-Buttons). Hierbei wurde darauf geachtet, Texte möglichst wenig und wenn präzise einzusetzen, um den kleinen Bildschirm nicht zu überfrachten. Zudem ist es möglich, eine Benachrichtigung (Glocken-Symbol) einzurichten und den Trainingsplan als Favorit zu markieren (Stern-Symbol). Ist eines dieser Attribute gesetzt, ist das Image in der Akzentfarbe eingefärbt.
   
#### Trainingsplan editieren<br /><br />
   ![alt text](Mockups/XtremeXercising_Editieren.png) <br />
   <br />
   In diesem Bildschirm sieht man eine weitere Liste, die alle zum Trainingsplan gehörenden Übungseinheiten enthält. Wie im Hauptbildschirm auch existiert an der selben Stelle wie zuvor ein FloatingActionButton, mit dem neue Übungen hinzugefügt werden können. Entsprechend der Designrichtlinien ist dieser Button immer in der Akzentfarbe gehalten, damit diese wichtige Funktion visuell in den Vordergrund tritt und auf den ersten Blick erkennbar ist. Die Listeneinträge bestehen aus dem Namen der Übung, der Kategorie sowie den beanspruchten Muskelgruppen. Durch das Berühren einer Übung kann diese Bearbeitet werden.
   
#### Übungen<br /><br />
   ![alt text](Mockups/XtremeXercising_UebungHinzufuegen.png) <br />
   <br />
   Über den FloatingActionButton im Bildschirm "Trainingsplan editieren" landet der User in einer Übersicht über alle verfügbaren Übungen. Diese Liste besteht aus Überschriften und Einträgen. Drückt man hier auf eine Übung, kann man diese zum Trainingsplan hinzufügen. Abhängig davon welche Sortierung in der Drop-Down-Liste ausgewählt ist, passt sich die Liste dynamisch an. Bei einer alphabetischen Sortierung werden die Übungen nach dem Namen sortiert angezeigt und die Überschriften zeigen den jeweiligen Buchstaben an. Ist Kategorie ausgewählt, sieht die Sortierung wie auf dem Mockup aus. Bei einer Sortierung nach Muskelgruppen dienen diese als Überschriften und Übungen, die mehrere Muskelgruppen haben, tauchen in jeder davon auf. Auf diese Weise kann der Nutzer ganz einfach und speziﬁsch nach bestimmten Übungen suchen. Wenn er bereits weiß, wie die Übung heißt, benutzt er die alphabetische Sortierung. Möchte er beispielsweise ein Ausdauertraining erstellen, wählt er die entsprechende Kategorie und sucht dann Cardioübungen. Wenn der User sein Training nach Muskelgruppen aufteilt und zum Beispiel einen Unterkörper-Trainingsplan erstellt, sortiert er die Liste nach Muskelgruppen, um Übungen für Beine, Po und Waden zu ﬁnden.
   
#### Übung hinzufügen<br /><br />
   ![alt text](Mockups/XtremeXercising_UebungEinstellungen.png) <br />
   <br />
   Dieses Dialogfenster dient zur Erstellung von Übungseinheiten, also Übungen mit Sätzen und Wiederholungen, die zum ausgewählten Trainingsplan hinzugefügt werden. Zunächst gibt man ein, wie viele Sätze man durchführen möchte. Dies kann man entweder über das Textfeld und die Tastatur oder mit Hilfe der Plus- und Minus-Buttons machen. Erstere Variante ist zwar präziser, allerdings nicht immer praktischer, da man die Buttons schneller und einfacher bedienen kann. Darunter gibt man die Wiederholungen einer Übung pro Satz ein. Hierfür gibt es zwei Modi, zwischen denen man mit dem Pfeil-Button wechseln kann. Im Standard-Modus gibt es ein Feld für die Wiederholungen. Die Anzahl, die man dann eingibt, gilt für alle Sätze. Möchte man dies individualisieren, wechselt man mit dem Pfeil-Button in den erweiterten Modus. Hierbei wird (wie im Mockup gezeigt) pro eingegebenen Satz ein Textfeld für eine Wiederholung erstellt. Mit "OK" fügt man die Übungseinheit zum Trainingsplan hinzu und kehrt zurück zum vorherigen Bildschirm.
   
#### Trainieren<br /><br />
   ![alt text](Mockups/XtremeXercising_Trainieren.png) <br />
   <br />
   In diesem Bildschirm ist man im Trainingsmodus. Aus diesem Grund ist es hier nicht möglich, den Navigation-Drawer zu benutzen. Auch hier ﬁndet man wieder eine Liste mit allen Übungen des Trainingsplans. Das Design ist dabei aber etwas anders: statt einer Liste mit Listeneinträgen sind die Übungen hier mehr wie einzelne Einheiten angeordnet. Die Icons links neben dem Namen werden in der Akzentfarbe eingefärbt, sobald eine Übung vollständig ausgeführt wurde. Unterhalb der Liste ist ein Progress-Bar, der sich entsprechend der abgearbeiteten Übungen füllt und den Fortschritt visualisiert.
   
#### Übung ausführen<br /><br />
   ![alt text](Mockups/XtremeXercising_UebungAusfuehren.png) <br />
   <br />
   Dieser Bildschirm ist aktiv, wenn der Benutzer gerade eine bestimmte Übungseinheit ausführt. Pro Satz wird ein Bildschirm dieser Art generiert, in welchem die angestrebte Wiederholungsanzahl und ein Feld für das absolvierte Gewicht angezeigt wird. Wieder hat man die Möglichkeit, die Anzahl per Tastatur oder mit den Buttons einzustellen. Zum nächsten Satz gelangt man mit dem Pfeil am unteren rechten Bildschirm. Hat man den letzten Satz absolviert, verwandelt dieser sich in ein Häkchen und man kehrt in den vorherigen Bildschirm zurück.
   
#### Statistik<br /><br />
   ![alt text](Mockups/XtremeXercising_Statistik.png) <br />
   <br />
   Die Statistik besteht aus einem einzelnen Bildschirm, der die unterschiedlichen statistischen Darstellungen enthält. Der erste Graph zeigt den Verlauf des jeweils maximal gestemmten Gewichts, welches man bei einem Training geschaﬀt hat. Darunter kann man die Übung sowie einen Zeitraum aus der Drop-Down-Liste auswählen, die man sich mit dem Graph anzeigen lassen möchte. Darunter ist eine Pie-Chart, welche die Verteilung der einzelnen Muskelgruppen in Prozent anzeigt. Damit kann der Nutzer sehen, wie spezialisiert oder ausgewogen er seinen Körper trainiert. Darüber hinaus gibt es einen weiteren Graphen. Dieser benutzt als Wert die Summe aus den Wiederholungen multipliziert mit dem Gewicht. Dieser Graph berücksichtigt somit nicht nur das Gewicht sondern auch die Sätze und Wiederholungen und zeigt den Fortschritt in Hinblick auf alle drei Variablen an. 
   Somit bekommt der Nutzer einen umfassenden Überblick über sein Training und seine Leistungssteigerung. Dabei kann er die Übungen einzeln und individuell prüfen und sowohl einen kurzfristigen wie auch langfristigen Einblick gewinnen, indem er den Zeitraum entsprechend anpasst.
   
#### GUI-Navigation<br /><br />
   ![alt text](Diagramme/GUINavigation.png) <br />
   <br />
   
   
## 2.4 Anforderungen im Detail <a name="anforderungenImDetail"></a>

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| **Trainingsplan** |
| Trainingsplan editieren | User | meine Trainingspläne verändern können | ich meine Trainingspläne aktualisieren kann | Trainingsplan kann editiert werden | Must |
| Trainingsplan erstellen | User | einen Trainingsplan erstellen können | ich mit ihm trainieren kann | Trainingspläne können angelegt werden | Must |
| Trainingsplan löschen | User | Trainingspläne löschen können | ich ungewollte Trainingspläne entfernen kann  | Löschbutton wird hinzugefügt | Must |
| Trainingsplan generieren | User | möchte ich Trainingspläne erstellt kriegen | ich mir keine Gedanken darüber machen muss | Trainingspläne werden generiert | Won't |  
| Favorit | User | meine Lieblingstrainingspläne markieren | ich sie schneller wiederfinde | Trainingsplan kann markiert werden | Must |
| Timer stellen | User | mir Erinnerungen stellen | ich mein Training nicht vergesse | Push-up Benachrichtigungen können eingestellt werden | Could |
| Übung hinzufügen | User | Übungen zu meinen Trainingsplänen hinzufügen | ich meine Trainingspläne gestalten kann | Trainingseinheiten können erstellt werden | Must |  
| **Übung** |
| Übung erstellen | User | eine Übung anlegen können | ich die die Übung zu Trainingsplänen hinzufügen kann | Übung können angelegt werden | Should |
| Übung editieren | User | eine Übung ändern können | ich meine Übungen aktualisieren kann | Übung können editiert werden | Should |
| Übung löschen | User | eine Übung löschen können | ich ungewollte Übung entfernen kann | Übung kann entfernt werden | Should |
| **Übungseinheit** |
| Übungseinheit erstellen | User | Übungseinheiten mit Wiederholungen und Sätze erstellen | ich festlegen kann, wie oft oder wie lang ich eine Übung ausführen will | Übungseinheit kann erstellt werden | Must | 
| Übungseinheit löschen | User | Trainingseinheiten wieder entfernen können | ich meinen Trainingsplan verändern kann | Löschbutton für Trainingseinheit wird hinzugefügt | Must |
| Übungseinheit editieren | User | Trainingseinheiten ändern können | die Einheiten an meinen Trainingsfortschritt anpassen kann | Editier-Button wird hinzugefügt | Could |
| **Trainieren** |
| Trainieren | User | meine Trainingspläne ausführen | ich meine Leistungen dokumentieren und festhalten kann | Trainingsplan kann ausgeführt werden | Must |
| Reihenfolge ändern | User | die Reihenfolge meiner Übungseinheiten ändern | ich frei und spontan entscheiden kann, wann ich welche Übung ausführen möchte | Einheiten lassen sich in beliebiger Reihenfolge ausführen | Must |
| Leistung eintragen | User | meine Leistung eintragen können | diese statistisch ausgewertet werden können | Leistung eingetragen werden können und gespeichert werden | Must | 
| **Funktionen** |
| Statistik prüfen | User | meine Trainingseinheiten auswerten | ich meine Fitnesserfolge einfach und anschaulich nachvollziehen kann | Trainingseinheiten werden erfasst und angezeigt | Must |
| Zeitraum einstellen | User | den Zeitraum der Statistik eingrenzen | ich meine Erfolge kurz- und langfristig beurteilen kann | Zeitraum für Statistik kann eingestellt werden | Could |
| Körperdaten erfassen | User | meine Körperdaten angeben | ich die Veränderungen meines Körpers nachverfolgen kann | Körperdaten können eingetragen und aktualisiert werden | Could |
| Speicherung | User | meine Daten speichern | meine Daten nicht verloren gehen | Trainingspläne und Einheiten werden gespeichert | Should |
| Motivation | User | möchte ich motiviert werden | ich angespornt werde, mehr Sport zu machen | Motivationssprüche werden angezeigt | Should |


# 3 Technische Beschreibung <a name="technischeBeschreibung"></a>

## 3.1 Systemübersicht <a name="systemuebersicht"></a>
   ![alt text](Diagramme/Systemarchitekturdiagramm.png) <br />
    <br />
#### Schnittstellenbeschreibung
   Die Schnitstelle beläuft sich auf eine ad-hoc Verbindung, wie es bei mobilen Applikationen so üblich ist. Dies ermöglicht uns eine einache Verbindung mit dem Server zum interagieren und austauschen der Datenbank-Daten.
#### Datenformate
   Vorläufig werden wir das Datenformat JSON verwenden, um Daten abzuspeichern. Da JSON sehr flexibel und gut zu lesen ist können wir die Speicherung der Daten einfach vornehmen. Am Ende sollen die Daten dann mithilfe von Couchdb abgespeichert werden.
#### Kommunikationsprotokolle
   HTML wird genutzt um mit der Couchdb zu interagieren

## 3.2 Softwarearchitektur <a name="softwarearchitektur"></a>
   ![alt text](Diagramme/Komponentendiagramm.png) <br />
   <br />

## 3.3 Datenmodell <a name="datenmodell"></a>
   ![alt text](Diagramme/Analyseklassendiagramm.png) <br />
   <br />

## 3.4 Abläufe <a name="ablaeufe"></a>

#### Aktivitätsdiagramm "Trainingsplan erstellen"
![alt text](Diagramme/AD_Trainingsplan_erstellen.png) <br />
<br />

#### Aktivitätsdiagramm "Trainingsplan löschen"
![alt text](Diagramme/AD_Trainingsplan_loeschen.png) <br />
<br />

#### Aktivitätsdiagramm "Übung zum Trainingsplan hinzufügen"
![alt text](Diagramme/AD_Uebung_hinzufügen.png) <br />
<br />

#### Aktivitätsdiagramm "Eigene Übungen erstellen"
![alt text](Diagramme/AD_Eigene_Uebungen_erstellen.png) <br />
<br />

#### Aktivitätsdiagramm "Trainieren"
![alt text](Diagramme/AD_Trainieren.png) <br />
<br />

#### Aktivitätsdiagramm "Statistik auswerten"
![alt text](Diagramme/AD_Statistik_auswerten.png) <br />
<br />

#### Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
![alt text](Diagramme/AD_Ablauf_alle_Use_Cases.png) <br />
<br />

## 3.5 Entwurf <a name="entwurf"></a>
   ![alt text](Diagramme/TrainingsplanKlassendiagramm.png) <br />
   <br />
     ![alt text](Diagramme/ÜbungsauswahlKlassendiagramm.png) <br />
   <br />
     ![alt text](Diagramme/TrainierenKlassendiagramm.png) <br />
   <br />

# 4 Projektorganisation <a name="projektorganisation"></a>

## 4.1 Annahmen <a name="annahmen"></a>

#### Verwendete Technologien

| **Kategorie**| **Technologie**|
|:-----|:----------|
| Programmiersprache | Javascript (React Native) |
| Framework | React Native |
| Hardware | Endgeräte: Google Nexus 5X Version Oreo 8.1, API Level 27 und Samsung Galaxy S7 Version Nougat 7.0, API Level 24 |
| Datenbank | Dokumentenbasierte Datenbank Couch.db |
| Dokumentation | Markdown |
| Versionsverwaltungssoftare | Git mithilfe von GitHub und GitHub Desktop |
| UML-Werkzeug | UMLet Version 14.2 |
| Mockup Tool | Balsamiq Mockups 3 Version 3.5.15 |
| Projektplanerstellung | Microsoft Office 365 ProPlus Excel, Version 1804 |

#### Betriebsbedingungen

| **Kategorie**| **Bedingung**|
|:-----|:----------|
| Entwicklungsumgebung | Visual Studio Code |
| Betriebssystem (Android) | Google Android ab Version 5.0 Lollipop, API Level 21 [[9]](#zitat9) |
| Betriebssystem (iOS) | Apple iOS ab 10.3.3 [[10]](#zitat10) |

#### Interne Qualitätsanforderungen

Langfristig gibt es Pläne zur Erweiterbarkeit der Anwendung, wie zum Beispiel eine Webanwendung für die bessere Verwaltung von Trainingsplänen auf dem Rechner sowie einer Art Forum, um sich mit anderen Nutzern austauschen zu können. Darüberhinaus könnte es auch ergänzende Ernährungs-, Motivations-, Lifestyle- oder Health-Apps geben, die Daten mit der Fitnessapp austauschen sollen. Denkbar wäre auch die Monetarisierung der Fitness-Anwendung, wobei für Standardnutzer der Umfang und die Funktionalität eingeschränkt und für Premiumnutzer in vollem Umfang freigschaltet werden soll. All diese Erweiterungen sind aber im Rahmen dieser Entwicklung aus zeitlichen Gründen nicht umsetzbar und müssen zu diesem Zeitpunkt leider unberücksichtigt bleiben, sollten hier aber der Vollständigkeit halber in Kürze Erwähnung finden.

## 4.2 Verantwortlichkeiten <a name="verantwortlichkeiten"></a>
Generell soll die Anwendung parallel programmiert werden, wobei sich Pascal Squarra zunächst um die Modellierung der Daten und anschließend um die Implementierung der Logik kümmert, und Jacqueline Menke zeitgleich die Programmierung der GUI übernimmt. Wird einer der Entwickler frühzeitig mit seinem Aufgabenbereich fertig, unterstützt derjenige den anderen bei seiner Arbeit. Die letzte Phase, das Testen, soll gemeinsam am Schluss der Entwicklung erfolgen, um möglichst effizient und gründlich testen zu können.

## 4.3 Grober Projektplan <a name="groberProjektplan"></a>
![alt text](Projektplan/Projektplan2.png) <br />

# 5 Anhänge <a name="anhaenge"></a>

## 5.1 Glossar <a name="glossar"></a>
| **Begriff**| **Beschreibung**|
|:-----:|:----------|
| Ausdauer | Übungskategorie; Übungen, die den Herz-Kreislauf stärken und den Fettabbau fördern, z.B. "Joggen", "Fahrrad fahren" |
| Ausführungsdauer | Auch (Ausführungs-)Zeit, Zeitspanne der Ausführung einer Übungseinheit, bei Übungen der Kategorien "Ausdauer"  |
| Cardio | Trainingsplankategorie; Pläne für Ausdauertraining, die zur Körperfettreduktion und allgemeinen Fitness beitragen |
| Definition | Trainingsplankategorie; Pläne für die spezielle Körperfettreduzieren, z.B. hochintensives Intervalltraining oder Muskelaufbautraining mit weniger Gewicht aber mehr Wiederholungen pro Satz |
| Freie Übung | Übungskategorie; Übungen, bei denen nur mit dem Körper oder mit Hanteln trainiert wird und die nicht zu den Ausdauerübungen zählen, z.B. "Sit-up", "Bizeps-Curls" |
| Gewicht | Leistung bei Übungseinheiten der Kategorie "Freie Übung" und "Maschine" mit Sätzen und Wiederholungen, gemessen in Kilogramm, wird beim Training des Nutzers erfasst  |
| Kategorie (Trainingsplan) | Bezeichnet das generelle Fitnessziel des Trainingsplans: Cardio, Definition, Muskelaufbau |
| Kategorie (Übung) | Bezeichnet die Art der Ausführung einer Übung: Ausdauer, Freie Übung, Maschine  |
| Leistung | Trainingsergebnis des Users bei der Ausführung eines Satzes einer Übungseinheit oder einer Ausführungsdauer: gemessen in Gewicht oder Strecke  |
| Maschine| Übungskategorie; Übungen, für die spezielle Geräte benötigt werden, die meist nur im Fitnessstudio vorhanden sind, z.B. "Bauchpresse", "Rückenstrecker" |
| Muskelaufbau | Trainingsplankategorie; Pläne für intensives Training mit hohem Gewicht und eher wenigen Wiederholungen pro Satz für erhöhtes Muskelwachstum  |
| Muskelgruppe | Gibt an, welche Muskelgruppen bei der AUsführung einer Übung aktiv sind: Bauch, Bizeps, Brust, Oberschenkel, Po, Rücken, Schultern, Trizeps, Waden  |
| Sätze | Bildet die Ausführung einer Übungseinheit mit vorgegebener Wiederholungsanzahl, bei Übungen der Kategorien "Freie Übung" und "Maschine"  |
| Strecke | Leistung bei Übungeinheiten der Kategorie "Ausdauer" mit Ausführungsdauer, gemessen in Kilometern pro Stunde, wird beim Training des Nutzers erfasst  |
| Training | Ausführung aller Übungseinheiten eines Trainingsplanes mit Notierung der erbrachten Leistung: Gewicht oder Strecke  |
| Trainingsplan | Liste mit vom User zu geordneten Übungen |
| User | (Be-)Nutzer von Xtreme Xercising |
| Übung | Eine sportliche Aktion, z.B. "Liegestütz" oder "Latzug" |
| Übungseinheit | Eine Übung, die zu einem Trainingsplan gehört, hat Sätze und Wiederholungen oder eine Ausführungsdauer |
| Wiederholungen | Anzahl der Ausführungen einer Übungeinheit pro Satz, bei Übungen der Kategorien "Freie Übung" und "Maschine" |


## 5.2 Referenzen <a name="referenzen"></a>
[1] <a name="zitat1"> Zukunftsinstitut GmbH, Frankfurt am Main, Healthness: Gesundheit wird ganzheitlich https://www.zukunftsinstitut.de/artikel/healthness-gesundheitwird-ganzheitlich/, 09.05.2018

[2] <a name="zitat2"> Bös, Klaus und Woll, Alexander, Karlsruher Institut für Technik: Körperlich Aktive deutlich fitter, http://www.gesundheit-zum-mitmachen.de/downloads/GzM_Factsheet_Fitness.pdf, 29.05.2018

[3] <a name="zitat3"> Bös, Klaus und Woll, Alexander, Karlsruher Institut für Technik: Zunahme der körperlichen Aktivität, http://www.gesundheit-zum-mitmachen.de/downloads/GzM_Factsheet_Aktivitaet.pdf, 29.05.2018

[4] <a name="zitat4"> Bös, Klaus und Woll, Alexander, Karlsruher Institut für Technik: Sportler seltener gesundheitlich beeinträchtigt, http://www.gesundheit-zum-mitmachen.de/downloads/GzM_Factsheet_Gesundheit.pdf, 29.05.2018

[5] <a name="zitat5"> Bös, Klaus und Woll, Alexander, Karlsruher Institut für Technik: Übergewicht bleibt Volkskrankheit , http://www.gesundheit-zum-mitmachen.de/downloads/GzM_Factsheet_BMI.pdf, 29.05.2018

[6] <a name="zitat6"> Karlsruher Institut für Technik: Nutzen von Sport, http://www.gesundheit-zum-mitmachen.de/196.php, 29.05.2018

[7] <a name="zitat7"> Reichl, Dominic, Erreiche deine Ziele, indem du deinen Fortschritt überwachst, http://www.kraftmachtfrei.de/denkkraft/ziele-erreichen-fortschritt/, 29.05.2018

[8] <a name="zitat8"> American Psychological Association: Frequently monitoring progress toward goals increases chance of success, ScienceDaily, https://www.sciencedaily.com/releases/2015/10/151029101349.htm

[9] <a name="zitat9"> Statista das Statistik-Portal, Anteile der verschiedenen Android-Versionen an allen Geräten mit Android OS weltweit im Zeitraum 01. bis 07. Mai 2018, https://de.statista.com/statistik/daten/studie/180113/umfrage/anteil-der-verschiedenen-android-versionen-auf-geraeten-mit-android-os/, 28.05.2018
     
[10] <a name="zitat10"> Apple Developer, App Store, https://developer.apple.com/support/app-store/, 28.05.2018 



