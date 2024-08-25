<template>
  <h1 class="text-3xl font-bold my-6">About Page</h1>

  <p>This is the about page.</p>

  <bk-label :model="address" field="street" no-required/>
</template>

<script>
import {Class} from "meteor/akyma:astronomy"
import Address from "../classes/Address"

export default {
  // props: {
  //   model: {
  //     type: Class
  //   },
  // },
  // components: {BkUI.BkTranslate},
  data() {
    return {
      address: new Address({street: "test street name"})
    }
  },
}
</script>