import {Class} from 'meteor/akyma:astronomy';

const Address = Class.create({
  name: "Address",
  fields: {
    street: { type: String, ui: { class: "w-75"}, },
    number: { type: String, ui: { class: "w-25"}, },
    box: { type: String, optional: true, ui: { class: "w-25"}, },
    postalCode: { type: String, ui: { class: "w-50"},
      eq({doc}) {
        if (doc.country === "France") return 5
        return 4
      }
    },
    city: { type: String, ui: { class: "w-50"}, },
    country: { type: String, ui: { class: "w-75", template: "BkBelongsToMany"}, default: "Belgium" }
  },
  defaultName() {
    if (this.street === undefined) return ""
    let street = this.street + " "
    let number = (this.number !== undefined) ? " " + this.number : ""
    let box = (this.box !== undefined) ? "/" + this.box : ""
    let city = (this.city !== undefined) ? ", " + this.city : ""

    return street + number + box + city

  },
  events: {
    afterValidate(e) {
      if (Meteor.isServer) return
      const doc = e.target
      if (Array.isArray(e.fields) && e.fields.includes("country")) {
        doc.isValid("postalCode")
      }
    }
  }
})

export default Address