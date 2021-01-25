# **Recipefinder**

## About

Recipefinder ist eine Vue-basierte Singlepage-Application gestaltet von Felix Pechtl und Sophia Ochs. In Recipefinder werden Rezepte dynamisch dargestellt und durch vorgeschlagene Rezepte oder Suchanfragen verschiedener Typen aufgelistet.

Unsere Anwendung ist unter folgendem Link online verfügbar: https://recipe-view.netlify.app/home

Zur Umsetzung wurde die API der themealdb Database genutzt:
https://www.themealdb.com/api.php

---

## Lokaler Start der Applikation
Um die Applikation lokal zu starten, muss lediglich `npm install` im CLI des Projektverzeichnisses eingegeben werden. Zugehörige Dependecies sollten dann automatisch installiert werden.

---

### Zu _themealdb_
Themealdb ist eine offene, crowd-sourced Datenbank gefüllt mit Rezepten aus aller Welt. Es wird eine json-api für die kostenlose Nutzung angeboten. Aktuell bietet die Datenbank 258 Rezepte mit Bildern, Zutaten und Anleitungen. 

### Unser Ziel:
Wir wollen mit Recipefinder einen übersichtlichen und einfachen Zugang auf die Datenbank bereitstellen. Es soll Nutzern möglich sein, Rezepte mit Freunden zu teilen und sich inspirieren zu lassen.

---
## Architektur
#### App.vue

Unsere Hauptkomponente App.vue beinhaltet die Grundstruktur der Seite. Header, Footer und Sidebar (shoppinglist.vue und lastviewedrec.vue) werden bei jeder Routing-Ansicht stets angezeigt. Es war uns wichtig, diese Komponente möglichst übersichtlich zu halten und viel Code auszulagern.

#### Carousel.vue

In unserer Carousel-Componente werden zufällige Rezepte aus der API geladen um einem etwaigen Nutzer zur Inspiration zu dienen. Sie bildet damit auch einen wichtigen Bestandteil unserer Landing Page.
Die Rezepze werden in einem Array gespeichert und können somit bei einem Click auf die Zurück-Taste (**<**) erneut angesehen werden.
Sollte eines der Rezepte in der Carousel-Componente angeklickt werden, wird der Nutzer zur Recipeview-Ansicht weitergeleitet.

#### Recipeview.vue

Die Recipeview-Komponente bietet eine Übersicht über das gewählte Rezept:

1. Name des Rezepts
2. Zugehöriges Bild
3. Zutaten und Mengenangaben
4. Zubereitung, unterteilt in abhakbare Schritte
5. Social Sharing eines Rezepts via Facebook, Twitter und E-Mail mit vorgefertigten Texten.

#### Search.vue

Wenn eine Suchanfrage in der Top-Komponente eingegeben wird oder ein Element des Country- oder des Category-Dropdowns ausgewählt wird, werden die Ergebnisse in dieser Komponente dargestellt. Ebenfalls ist möglich mit dem Suchbalken direkt in der Search-Komponente in Echtzeit nach Gerichten zu suchen. 

#### Shoppinglist.vue

Diese Komponente bietet dem Nutzer die Möglichkeit, Zutaten einzutragen und ggf. bei erfolgtem Einkauf wieder von der Liste zu löschen. Dies wurde mit einem Array umgesetzt. Der Array wird in einen String umgewandelt und als Cookie gespeichert, damit die Liste auch nach etwaigem Verlassen der Applikation noch verfügbar ist. Der Cookie ist für 3 Tage gültig.

#### Lastviewedrec.vue

In dieser Komponente wird das zuletzt in Recipeview.vue angesehene Rezept als Cookie gespeichert und dem Nutzer unter der Shoppinglist angezeigt. Der Cookie gilt für 3 Tage und soll dem Nutzer ermöglichen, auch bei versehentlichem Verlassen der Seite wieder zu seinem Rezept zurückzufinden. 

#### Top.vue

Im Top, dem Kopfteil werden über Vue-Router-Links Wege zu verschiedenen Seitenzuständen geboten. Zudem gibt es zwei Dropdowns, um Rezepte nach Kategorien oder Ländern zu suchen.

#### Footer.vue

In unserem Footer sind lediglich das Logo und die Verlinkung zur Datenbank aufzufinden. Wir wollten auch dieses Element der Übersichtlichkeit halber als Komponente darstellen.

#### Errorpage.vue

Zu dieser Komponente wird der User geleitet, wenn ein eingegebener Link nicht vorhanden ist. Sie gibt kurze Information darüber, dass die Seite nicht existiert und bietet einen Link zur Home-Ansicht.

---
## Routing

Durch den Einsatz von vue-router konnten wir eine einheitliche Linkstruktur für alle Rezepte und Ansichten erstellen: 
 - /home: Anzeige der Carousel-Komponente
 - /search/s=\<Suchanfrage>: Anzeige der Search-Komponente mit der jeweiligen Suchanfrage des Nutzers
 - /filter/c=\<Kategorie>: Anzeige aller in der DB verfügbaren Rezepte einer Kategorie
 - /filter/a=\<Area>: Anzeige aller in der DB verfügbaren Rezepte eines Landes
 - /recipe/\<id>: Anzeige eines Rezeptes mit einer bestimmten ID. Dieser Link ermöglicht das Teilen eines bestimmten Rezeptes. 
 - /<*>: Bei nicht aufgefundenen Links wird der User auf eine Error-Seite geleitet.

---

## Libraries 

Um den Code übersichtlicher zu machen und einige technische Dinge zu ermöglichen haben wir verschiedene Bibliotheken genutzt:
 - **Vue-JS** 
 - **Axios / Axios-vue**: Um die Datenbank abzufragen haben wir Axios genutzt. 
    https://www.npmjs.com/package/vue-axios
 - **Bootstrap-vue**: für eine Erleichterung des Stylings der SPA. 
    https://bootstrap-vue.org/
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
Diese Quellen wurden zur Vertiefung des Grundverständnisses eingesetzt: 

- https://www.youtube.com/watch?v=4deVCNJq3qc
- https://www.youtube.com/watch?v=dhNVLZsRwAg



