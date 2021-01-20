# **Recipefinder**

## About

Recipefinder ist eine Vue-basierte Singlepage-Application gestaltet von Felix Pechtl und Sophia Ochs. In Recipefinder werden Rezepte dynamisch dargestellt und durch vorgeschlagene Rezepte oder Suchanfragen verschiedener Typen aufgelistet.

Unsere Anwendung ist unter folgendem Link online verfügbar: LINK EINFÜGEN

Zur Umsetzung wurde die API der themealdb Database genutzt:
https://www.themealdb.com/api.php

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

#### Search.vue

Wenn eine Suchanfrage im Header eingegeben wird oder ein Element des Country- oder des Category-Dropdowns ausgewählt wird, werden die Ergebnisse in dieser Komponente dargestellt. Ebenfalls ist möglich mit dem Suchbalken direkt in der Search-Komponente in Echtzeit nach Gerichten zu suchen. 

#### Shoppinglist.vue

Diese Komponente bietet dem Nutzer die Möglichkeit, Zutaten einzutragen und ggf. bei erfolgtem Einkauf abzuhaken. Dies wurde mit einem einfach Array umgesetzt.

#### Lastviewedrec.vue

In dieser Komponente wird das zuletzt in Recipeview.vue angesehene Rezept als Cookie gespeichert und dem Nutzer unter der Shoppinglist angezeigt. Der Cookie gilt für 3 Tage und soll dem Nutzer ermöglichen, auch bei versehentlichem Verlassen der Seite wieder zu seinem Rezept zurückzufinden. 

#### Header.vue

Im Header, dem Kopfteil werden über Vue-Router-Links Wege zu verschiedenen Seitenzuständen geboten. Zudem gibt es zwei Dropdowns, um Rezepte nach Kategorien oder Ländern zu suchen.

#### Footer.vue

In unserem Footer sind lediglich das Logo und die Verlinkung zur Datenbank aufzufinden. Wir wollten auch dieses Element der Übersichtlichkeit halber als Komponente darstellen.

#### Errorpage.vue

Zu dieser Komponente wird der User geleitet, wenn ein eingegebener Link nicht vorhanden ist. Sie gibt kurze Information darüber, dass die Seite nicht existiert und bietet einen Link zur Home-Ansicht.

---
## Routing

Durch den Einsatz von vue-router konnten wir eine einheitliche Linkstruktur für alle Rezepte und Ansichten erstellen: 
 - /home: Anzeige der Carousel-Komponente
 - /search/s=\<Suchanfrage>: Anzeige der Search-Komponente mit der jeweiligen Suchanfrage des Nutzers
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

- Beide Chevrons in der Carousel-Komponente sind SVGs von https://kruxor.com/view/code/1pheD/chevron-left/  und https://kruxor.com/view/code/1pheD/chevron-right/
- Die Navbar in der Header-Komponente stammt in leicht veränderter Form von https://bootstrap-vue.org/docs/components/navbar


