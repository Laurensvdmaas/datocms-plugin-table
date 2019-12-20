<template>
  <div class="actions flex">
    <button class="mr-2" @click="min()">-</button>
    <button @click="plus()">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class App extends Vue {
  @Emit("plus") plus() {
    console.log("plus");
  }

  @Emit("min") min() {
    console.log("close");
  }
}
</script>

<style lang="scss">
.actions {
  button {
    @apply outline-none rounded-full w-8 h-8;
    background: var(--accent-color);
    color: var(--light-color);
  }
}
</style>
