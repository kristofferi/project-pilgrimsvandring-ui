
# Projekt: Pilgrimsvandring - St Olavsleden

__Kurs__: IK032A - Innovativa Digitala Lösningar (Informatics MA, Innovation through Software), - Sommar 2024, MIUN
***
__**Team: Pilgrimsled**__

- Per Anebert
- Fredrik Håkansson
- Kristoffer Ivarsson
- Fredrik Johansson
- Lars Johan Oltegen

***
***
## Introduktion

Detta är en UI applikation till projektet pilmgrimsvandring. Det som är implementerat i frontend-applikationen är en navigationsbar för lägena ej inloggad och inloggad samt möjlighet att registrera sig som användare av portalen. Detta är gjort för att kunna inleda  användartester som skall leda till ett önskat gränssnitt. Frontendapplikation skall även användas för att göra tester kring förändringar i API:et. Projektet utvecklas löpande och senaste branch förändringar har gjorts i branch Test2.

## Navigationsbar
Vi har använt react och bootstrap för navigationsbaren. För att byta läge mellan inloggad och icke inloggad så används log-in knappen. Då nu detta är för att vidareutveckla och testa gränssnitt kommer man vidare genom att bara trycka på bekräfta inloggningen. Eftersom detta även gäller för registrering, trycker man där endast på "spar" för att simulera en registrering. Vid registrering bör fälten fyllas i, annars kommer ett felmeddelande. 

I navigationsbaren visas att man vid inloggat läge har utökad funktionalitet. Exempel på funktionaliteten som ska finnas i utökat läge är att hantera sina team samt göra reseplaneringen.

## API
I projektets backend finns ett API med endpoints.  I vår frontend testar vi av dessa endpoints. Vi kan även göra användartester för att se hur vi kan behöva förändra vårt API utifrån vår frontend-applikation. Informationen som visas är mock-data, där endpointen för sevärdigheter har utvecklats mest.

## Vad ska vidareutvecklas
Vi behöver lösa inloggning för samtliga intressenter av portalen i frontend-applikationen. Just nu finns det en skiss över det grafiska utseendet för inloggningen. Samma sak gäller möjligheten att registrera sig som intressent i portalen.

Denna begränsning beror idag på att backend inte har någon databas. Denna behövs för att kunna genomföra registrering och inloggning.

## Hur man installerar:
Man behöver en IDE för att arbeta mot projektet. Vi rekommenderar Visual Studio. Starta Visual Studio (eller annan IDE som du finner lämplig) och klona ner projektet till lämplig katalog.
Se till att node.js är installerat på datorn och att sökvägar är korrekt uppsatta. Installera node.js i biblioteket där du vill köra projektet genom att i prompten i denna aktuella katalog skriva npm install. Detta bör skapa upp de dependencies du behöver. Vid vidareutveckling kan flera dependencies komma att behöva läggas till.

## Hur man kör frontend-applikationen
För att köra frontend-applikationen börjar man med att starta upp backend-projektet som finns på https://github.com/systemvetenskap/projekt-pilgrimsvandring/tree/per4ai-features-v2.8 Detta ska vara klonat till din lokala dator. Det enklaste alternativet att starta backend är att köra debug-läget i visual studio. Efter detta är uppstartat kör man även igång frontend-projektet i debug-läget. Därefter startas frontend-applikationen genom att man i kommando-promp i aktuell katalog för denna skriver npm start.