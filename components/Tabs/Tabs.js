
class TabItem {
  constructor(element) {
    this.element = element;  // attach dom element to object. Example in Tabs class
  }

  select() {
    this.element.classList.add("Tabs__item-selected");  // should use classList
  }

  deselect() {
    this.element.classList.remove("Tabs__item-selected");  // should use classList
  }
}

class TabLink {
  constructor(element, parent) {
    this.element;  // attach dom element to object
    this.tabs = parent;  // attach parent to object
    this.tabItem = this.tabs.getTab();  // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link-selected"); // select this link
    this.tabItem.select(); // select the associated tab
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected"); // deselect this link
    this.tabItem.deselect(); // deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element; // attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon initialization
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
  }

}

let tabs = document.querySelectorAll(".Tabs");
console.log("tabs after querySelectorAll", tabs);  // Debug tip: make a note and look at it in the DOM
console.log(tabs)  //
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
