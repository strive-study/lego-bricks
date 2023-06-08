<template>
  <div v-for="item in components" :key="item.id">
    <component :is="item.name" v-bind="item.props"></component>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import LImage from '../LImage'
import LText from '../LText'
import LShape from '../LShape'
import { ComponentData } from '@/defaultProps'
export default defineComponent({
  name: 'final-page',
  props: {
    components: {
      type: Array as PropType<ComponentData[]>,
      required: true
    }
  },
  components: {
    'l-text': LText,
    'l-image': LImage,
    'l-shape': LShape
  }
})
</script>

<style scoped></style>
