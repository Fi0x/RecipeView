# **Recipefinder**

## About

Recipefinder ist eine Vue-basierte Singlepage-Application gestaltet von Felix Pechtl und Sophia Ochs. In Recipefinder werden Rezepte dynamisch dargestellt und durch vorgeschlagene Rezepte oder Suchanfragen verschiedener Typen aufgelistet.

Unsere Anwendung ist unter folgendem Link online verfügbar: LINK EINFÜGEN

Zur Umsetzung wurde die API der themealdb Database genutzt:
https://www.themealdb.com/api.php

---

## Architektur

### App.vue

Unsere Hauptkomponente App.vue beinhaltet die Grundstruktur der Seite. Header, Footer und Sidebar werden bei jeder Routing-Ansicht stets angezeigt.

### Carousel.vue

In unserer Carousel-Componente werden zufällige Rezepte aus der API geladen um einem etwaigen Nutzer zur Inspiration zu dienen. Sie bildet damit auch einen wichtigen Bestandteil unserer Landing Page.
Die Rezepze werden in einem Array gespeichert und können somit bei einem Click auf die Zurück-Taste (**<**) erneut angesehen werden.
Sollte eines der Rezepte in der Carousel-Componente angeklickt werden, wird der Nutzer zur Recipeview-Ansicht weitergeleitet.

### Recipeview.vue

Die Recipeview-Komponente bietet eine Übersicht über das gewählte Rezept:

1. Name des Rezepts
2. Zugehöriges Bild
3. Zutaten und Mengenangaben
4. Zubereitung, unterteilt in abhakbare Schritte

### Search.vue

### Shoppinglist.vue

Diese Komponente bietet dem Nutzer die Möglichkeit, Zutaten einzutragen und ggf. bei erfolgtem Einkauf abzuhaken. Dies wurde mit einem einfach Array umgesetzt.

### Header.vue

Im Header, dem Kopfteil werden über Vue-Router-Links Wege zu verschiedenen Seitenzuständen geboten. Zudem gibt es zwei Dropdowns, um Rezepte nach Kategorien oder Ländern zu suchen.

### Footer.vue

## Sonstige Besonderheiten

##
