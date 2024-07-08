
# Projekt: Pilgrimsvandring - St Olavsleden

__Course__: IK032A - Innovativa Digitala Lösningar (Informatics MA, Innovation through Software), - Summer 2024, MIUN
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
Vi har använt react och bootstrap för navigationsbaren. 

## API
I projektets backend finns ett API med endpoints.  I vår frontend testar vi av dessa endpoints. Vi kan även göra användartester för att se hur vi kan behöva förändra vårt API utifrån vår frontend-applikation. 

## Vad ska vidareutvecklas
Vi behöver lösa inloggning för samtliga intressenter av portalen i frontend-applikationen. Just nu finns det en skiss över det grafiska utseendet för inloggningen. Samma sak gäller möjligheten att registrera sig som intressent i portalen.

Denna begränsning beror idag på att backend inte har någon databas.

## Using the Command Line with .NET CLI:

1. **Install the .NET 8 SDK:** Download and install the .NET 8 SDK from the official Microsoft website [download .NET SDK]. This provides the necessary tools for running .NET applications.
2. **Navigate to your project directory:** Open a command prompt or terminal and navigate to the directory containing your C# project files.
3. **Restore dependencies:** Use the `dotnet restore` command to download any required libraries your project depends on.
4. **Build the project:** Use the `dotnet build` command to compile your C# code into an executable file.
5. **Run the application:**  You can use the `dotnet run` command followed by the project file name (e.g., `dotnet run Pilgrimsvandring.csproj`).
6. **Access to application:**   `http://localhost:5023/swagger/index.html`