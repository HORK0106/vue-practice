<template>
  <div>
    <counter/>
    <Typing/>
  </div>
</template>

<script>
import Counter from "./Counter";
import Typing from "./Typing"

export default {
  components: {Counter, Typing},
  data() {
    return {
      message: "これはテストです"
    }
  }
}
</script>

<style  scoped>
  #message {
    font-size: 48px;
    color: blue;
  }
</style>