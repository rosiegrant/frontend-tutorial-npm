// import ANSWERS from "@yext/answers";
// import TemplateBundle from "@yext/answers/dist/answerstemplates.compiled.min.js";
const ANSWERS = require('@yext/answers');
const TemplateBundle = require('@yext/answers/dist/answerstemplates.compiled.min.js');

console.log('Hello webpack Project.');

var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());

ANSWERS.init({
  apiKey: "3517add824e992916861b76e456724d9",
  experienceKey: "answers-js-docs",
  businessId: "3215760",
  templateBundle: TemplateBundle.default,
  experienceVersion: "PRODUCTION",
  verticalPages: [
    {
      label: "All",
      url: "/index.html",
      isFirst: true,
      isActive: true
    },
    {
      verticalKey: "locations",
      label: "Locations",
      url: "/locations.html"
    },
    {
      verticalKey: "jobs",
      label: "Jobs",
      url: "/jobs.html"
    },
    {
      verticalKey: "faqs",
      label: "FAQs",
      url: "/faqs.html"
    }
  ],

  onReady: function () {
    // init components
    this.addComponent("SearchBar", {
      container: ".searchbar-container",
      allowEmptySearch: true
    });
    this.addComponent("Navigation", {
      container: ".navigation-container"
    });
    this.addComponent("SpellCheck", {
      container: ".spellcheck-container"
    });
    this.addComponent("DirectAnswer", {
      container: ".directanswer-container"
    });
    this.addComponent("UniversalResults", {
      container: ".universal-container",
      config: {
        locations: {
          icon: "pin",
          card: {
            cardType: "Standard",
            dataMappings: {
              title: (item) => item.name,
              subtitle: (item) => item.address.line1,
              details: (item) => item.description,
              image: (item) =>
                item.photoGallery ? item.photoGallery[0].image.url : null,
              url: "#"
            },
            callsToAction: [
              {
                label: "Get Directions",
                icon: "directions",
                url: "#",
                analyticsEventType: "GET_DIRECTIONS",
                target: "_self"
              },
              {
                label: "Call",
                icon: "phone",
                url: (item) => `tel:${item.mainPhone}`,
                analyticsEventType: "TAP_TO_CALL"
              }
            ]
          },
          appliedFilters: {
            show: true,
            showFieldNames: true,
            hiddenFields: ["builtin.entityType"],
            delimiter: "|",
            labelText: "Filters applied to this search:",
            removableLabelText: "Remove this filter"
          }
        },
        faqs: {
          icon: "support",
          title: "FAQs",
          card: {
            cardType: "Accordion",
            dataMappings: {
              title: (item) => item.name,
              details: (item) => item.answer,
              url: "#"
            },
            callsToAction: [
              {
                label: "Learn More",
                icon: "",
                url: "#",
                analyticsEventType: "CTA_CLICK",
                target: "_self"
              }
            ]
          }
        },
        jobs: {
          icon: "briefcase",
          card: {
            cardType: "Standard",
            dataMappings: {
              title: (item) => item.name,
              subtitle: (item) => `Date Posted: ${item.datePosted}`,
              details: (item) => item.description,
              url: "#"
            },
            callsToAction: [
              {
                label: "Learn More",
                icon: "info",
                url: "#",
                analyticsEventType: "CTA_CLICK",
                target: "_self"
              }
            ]
          }
        }
      }
    });
    this.addComponent("LocationBias", {
      container: ".locationbias-container"
    });
  }
});