<template>
  <div class="m-3">
    <div
      class="custom-table grid mr-6 mb-6"
      :style="{
        'grid-template-columns': `repeat( ${columns}, auto )`
      }"
    >
      <!--<div class="th group relative" v-for="(th, thKey) in value.head" :key="thKey">-->
      <!--<input type="text" v-model="th.model">-->
      <!--<div class="tools group-hover:block">-->
      <!--<actions class="row center-x" @plus="addRow(0)"></actions>-->
      <!--<actions class="col center-y" @plus="addCol(thKey)"-->
      <!--@min="removeCol(thKey)"></actions>-->
      <!--</div>-->
      <!--</div>-->
      <template v-for="(row, rowKey) in value.body">
        <div
          class="td group relative"
          v-for="(td, tdKey) in row"
          :key="`${rowKey}-${tdKey}`"
        >
          <textarea class="resize-none" v-model="td.model"></textarea>
          <div class="tools group-hover:block">
            <actions
              class="row center-x"
              @plus="addRow(rowKey)"
              @min="removeRow(rowKey)"
            ></actions>
            <actions
              class="col center-y"
              @plus="addCol(tdKey)"
              @min="removeCol(tdKey)"
            ></actions>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Actions from "@/components/actions.vue";

const DatoCmsPlugin = require("datocms-plugins-sdk");

@Component({
  components: { Actions }
})
export default class App extends Vue {
  value: any = {
    // head: [
    //   {model: ""}
    // ],
    body: [
      [
        {
          model: ""
        }
      ]
    ]
  };
  input: any = null;
  plugin = null;

  mounted() {
    this.input = this.$refs.input;

    DatoCmsPlugin.init((plugin: any) => {
      this.plugin = plugin;

      const value = plugin.getFieldValue(plugin.fieldPath);

      console.log("Value", value);

      if (value) {
        this.value = this.denormalizeValue(JSON.parse(value));
      }
      plugin.startAutoResizer();
    });
  }

  addCol(i) {
    if (this.value.head) this.value.head.splice(i + 1, 0, { model: "" });
    this.value.body.forEach((arr, key) => {
      this.value.body[key].splice(i + 1, 0, { model: "" });
    });
  }

  removeCol(i) {
    if (this.value.head) this.value.head.splice(i, 1);
    this.value.body.forEach((arr, key) => {
      this.value.body[key].splice(i, 1);
    });
  }

  addRow(i) {
    this.value.body.splice(
      i + 1,
      0,
      new Array(this.columns).fill({ model: "" })
    );
  }

  removeRow(i) {
    if (!i) return;

    this.value.body.splice(i, 1);
  }

  get columns() {
    return this.value.body[0].length;
  }

  denormalizeValue(value) {
    const body = value.body.map(row =>
      row.map(value => new Object({ model: value }))
    );

    return { body: body };
  }

  get normalizedValue() {
    let body = this.value.body.map(arr => arr.map(arr => arr.model));
    //head = this.value.head.map(arr => arr.map(arr => arr.model));

    return { body: body };
  }

  @Watch("normalizedValue") valueToPlugin() {
    console.log("Sending to plugin");

    if (!this.plugin) return;

    console.log("Sending", this.normalizedValue);
    this.plugin.setFieldValue(
      this.plugin.fieldPath,
      JSON.stringify(this.normalizedValue)
    );
  }
}
</script>

<style lang="scss">
.custom-table {
  --primary-color: rgb(27, 33, 39);
  --accent-color: rgb(52, 133, 247);
  --semi-transparent-accent-color: rgb(52, 133, 247, 0.1);
  --light-color: rgb(236, 238, 243);
  --dark-color: rgb(21, 25, 31);

  font-family: colfax-web, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: grid;
  border-left: 1px solid var(--semi-transparent-accent-color);
  border-bottom: 1px solid var(--semi-transparent-accent-color);

  .th,
  .td {
    @apply flex items-center;
    border-right: 1px solid var(--semi-transparent-accent-color);
    border-top: 1px solid var(--semi-transparent-accent-color);
  }

  textarea {
    @apply w-full outline-none h-full py-4 px-2 bg-transparent;
  }

  .tools {
    @apply pointer-events-none hidden absolute inset-0;

    .actions {
      @apply pointer-events-auto absolute;
      transform: translate(-50%, -50%);

      &.col {
        @apply flex-col left-full;
      }

      &.row {
        @apply top-full;
      }
    }
  }
}
</style>
