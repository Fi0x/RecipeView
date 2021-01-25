# **Recipefinder**

## About

Recipefinder ist eine Vue-basierte Singlepage-Application gestaltet von Felix Pechtl und Sophia Ochs.
In Recipefinder werden Rezepte dynamisch dargestellt und durch vorgeschlagene Rezepte oder Suchanfragen verschiedener Typen aufgelistet.

Unsere Anwendung ist unter folgendem Link online verfügbar: **https://recipe-view.netlify.app/home**

Zur Umsetzung wurde die API der _TheMealDB_ Database genutzt: https://www.themealdb.com/api.php

---

## Lokaler Start der Applikation
Um die Applikation lokal zu starten, muss lediglich `npm install` im CLI des Projektverzeichnisses eingegeben werden.
Zugehörige Dependecies sollten damit automatisch installiert werden.

Danach kann mit dem Befehl `npm run serve` die Applikation gestartet werden und ist dann auf Port 8080 unter der lokalen Rechner-IP erreichbar.

---

### Zu _[TheMealDB](https://www.themealdb.com/)_
_TheMealDB_ ist eine offene, crowd-sourced Datenbank gefüllt mit Rezepten aus aller Welt.
Es wird eine json-api für die kostenlose Nutzung angeboten.
Aktuell bietet die Datenbank 258 Rezepte mit Bildern, Zutaten und Anleitungen.

### Unser Ziel:
Wir wollen mit Recipefinder einen übersichtlichen und einfachen Zugang auf die Datenbank bereitstellen.
Es soll Nutzern möglich sein, Rezepte mit Freunden zu teilen und sich inspirieren zu lassen.

---

## Architektur
### `/public/index.html`
Unsere index.html Datei enthält nur ein `div`-Element, welches auf die App.vue Komponente verweist,
und ein paar `meta`-Tags für SEO.

### `/src/main.js`
Die verwendeten Libraries werden in dieser Datei importiert und `App.vue` wird gemountet und gerendert.

### `/src/router/index.js`
In dieser Datei werden unsere vue-router Routen definiert.

### `/src/App.vue`
Unsere Hauptkomponente App.vue beinhaltet die Grundstruktur der Seite.
Hier wird beim ersten Besuch unserer Seite darauf hingewiesen dass wir Cookies verwenden.
Header, Footer und Sidebar (shoppinglist.vue und lastviewedrec.vue) werden bei jeder Routing-Ansicht stets angezeigt.
Es war uns wichtig, diese Komponente möglichst übersichtlich zu halten und viel Code auszulagern.

### `/src/components/carousel.vue`
In unserer Carousel-Componente werden zufällige Rezepte aus der API geladen um einem etwaigen Nutzer zur Inspiration zu dienen.
Sie bildet damit auch einen wichtigen Bestandteil unserer Landing Page.
Die Rezepze werden in einem Array gespeichert und können somit bei einem Click auf die Zurück-Taste (**<**) erneut angesehen werden.
Sollte eines der Rezepte in der Carousel-Componente angeklickt werden, wird der Nutzer zur Recipeview-Ansicht weitergeleitet.

### `/src/components/errorpage.vue`
Zu dieser Komponente wird der User geleitet wenn ein eingegebener Link nicht vorhanden ist.
Sie gibt kurze Information darüber, dass die Seite nicht existiert und bietet einen Link zur Home-Ansicht.

### `/src/components/footer.vue`
In unserem Footer sind lediglich das Logo und die Verlinkung zur Datenbank aufzufinden.
Wir wollten auch dieses Element als Komponente darstellen um eine bessere Übersicht zu gewährleisten.

### `/src/components/lastviewedrec.vue`
In dieser Komponente wird das zuletzt in Recipeview.vue angesehene Rezept als Cookie gespeichert und dem Nutzer unter der Shoppinglist angezeigt.
Der Cookie gilt für 3 Tage und soll dem Nutzer ermöglichen, auch bei versehentlichem Verlassen der Seite wieder zu seinem Rezept zurückzufinden. 

### `/src/components/recipeview.vue`
Die Recipeview-Komponente bietet eine Übersicht über das gewählte Rezept:

1. Name des Rezepts
2. Zugehöriges Bild
3. Zutaten und Mengenangaben
4. Zubereitung, unterteilt in abhakbare Schritte
5. Social Sharing eines Rezepts via Facebook, Twitter und E-Mail mit vorgefertigten Texten.

### `/src/components/search.vue`
Wenn eine Suchanfrage in der Top-Komponente eingegeben wird oder ein Element des Country- oder des Category-Dropdowns ausgewählt wird, werden die Ergebnisse in dieser Komponente dargestellt.
Ebenfalls ist möglich mit dem Suchbalken direkt in der Search-Komponente in Echtzeit nach Gerichten zu suchen. 

### `/src/components/shoppinglist.vue`
Diese Komponente bietet dem Nutzer die Möglichkeit Zutaten einzutragen und ggf. bei erfolgtem Einkauf wieder von der Liste zu löschen.
Dies wurde mit einem Array umgesetzt.
Das Array wird in einen String umgewandelt und als Cookie gespeichert, damit die Liste auch nach dem Verlassen der Applikation noch verfügbar ist.
Der Cookie ist für 3 Tage gültig.

### `/src/components/top.vue`
Im Top, dem Kopfteil, werden über Vue-Router-Links Wege zu verschiedenen Seitenzuständen geboten.
Zudem gibt es zwei Dropdowns, um Rezepte nach Kategorien oder Ländern zu suchen.

---

## Routing
Durch den Einsatz von `vue-router` konnten wir eine einheitliche Linkstruktur für alle Rezepte und Ansichten erstellen: 
 - **/home**: Anzeige der Carousel-Komponente
 - **/search/s=**_\<Suchanfrage>_: Anzeige der Search-Komponente mit der jeweiligen Suchanfrage des Nutzers
 - **/filter/c=**_\<Kategorie>_: Anzeige aller in der DB verfügbaren Rezepte einer Kategorie
 - **/filter/a=**_\<Land>_: Anzeige aller in der DB verfügbaren Rezepte eines Landes
 - **/recipe/**_\<id>_: Anzeige eines Rezeptes mit einer bestimmten ID. Dieser Link ermöglicht das Teilen eines bestimmten Rezeptes. 
 - **/**_<\*>_: Bei nicht aufgefundenen Links wird der User auf eine Error-Seite geleitet.

---

## Libraries 
Um den Code übersichtlicher zu gestalten und einige technische Dinge zu ermöglichen, haben wir folgende Bibliotheken genutzt:
 - **Vue-JS**
 - **Axios / Axios-vue**: Um die Datenbank abzufragen haben wir Axios genutzt. https://www.npmjs.com/package/vue-axios
 - **Bootstrap-vue**: für eine Erleichterung des Stylings der SPA. https://bootstrap-vue.org/
 - **vue-cookies**: siehe lastviewedrec. https://www.npmjs.com/package/vue-cookies
 - **vue-router**: Um die Komponenten dynamisch ein- und ausblenden zu können und Nutzern das Teilen von Rezepten zu ermöglichen haben wir vue-router verwendet: https://router.vuejs.org/. Mehr Informationen: siehe _Routing_

---

## Quellen fremder Codebestandteile

1. Beide Chevrons in der Carousel-Komponente sind SVGs von https://kruxor.com/view/code/1pheD/chevron-left/  und https://kruxor.com/view/code/1pheD/chevron-right/
2. Die Navbar in der Top-Komponente stammt in leicht veränderter Form von https://bootstrap-vue.org/docs/components/navbar
3. Die Cards in den Suchergebnissen stammen von https://bootstrap-vue.org/docs/components/card
4. Die Social-Icons in der Recipeview-Komponente stammen von https://pixabay.com/de/vectors/
5. Die Logos wurden mit Canva erstellt: https://www.canva.com/

## Weitere Informationsquellen
Diese Quellen wurden zur Vertiefung der Grundverständnisse eingesetzt:
- https://www.youtube.com/watch?v=4deVCNJq3qc
- https://www.youtube.com/watch?v=dhNVLZsRwAg
- https://bootstrap-vue.org/docs/components