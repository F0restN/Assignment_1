# Assignment 1 from Drake

NOTE:
1. To explore this website, please open it in a seperate window since glitch overview panel is trash.
2. When open it in a new window, the initial page is statically intialized and not navigate to the index page, which is different from any website that deployed on a server, which is WEIRD! So please click any link to correctly load them.

Generally, this is website for my favorite superhero Batman. (I wont tell you that I have a tag wroten "Batcave" on the door of my studio.) So this website have 6pages(include indexpage) talk about 
- **Story**: 5 classic moments of Batman in Nolan series.
- **Series**: Talks about the character biography of Batman, since its a famous hero who has wealthy history. To be a real fan of Bat. It is important to know the pas.
- **Equipment**: As a moral superhero whose superpower is only "Rich" to have certain equipments is extremetly critical. Otherwise he could die hundred times.
- **About**: **So, dont click this page.**

## HTML
Element Set: `table`,`tr`,`th`, `ul`, `img`, `article`, `section`, `header`, `footer`, `nav`, `div`, `span`, `p` etc.

#### Validation
**index.html**
- (https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fassignment-1-drake.glitch.me%2Findex.html)

**story.html**
- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fstory.html)

**series.html**
- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fseries.html)

**equipment.html**
- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fequipment.html)

**about.html**
- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fabout.html)

## CSS

1. File `global.css` is the file for global css storage, public components, like `header` and `footer` retrieve style setting from there
2. Most of pages and components use display `grid` to better arrange elements. Besides I also use padding, margin and postion to arrange them.
3. `script.js` is public JS function file.

#### Validation
**index.html**
(https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassignment-1-drake.glitch.me%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**story.html**
(https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fstory.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**series.html**
(https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fseries.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**equipment.html**
(https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fequipment.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**about.html**
(https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassignment-1-drake.glitch.me%2Fabout.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Javascript

#### 2 Unique JS functions that create interactive
 - function in about page(check aboutJS.js), pop up a notification and print words in console.
 - function in header component(check script.js), indicate the current page

#### 2 function that attached with addEventListener and modify style
check series.html button group and seriesJS.js
