<template>
  <div
    :style="styleProps"
    @click.prevent="handleClick"
    class="l-shape-component"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
import {
  shapeDefaultProps,
  shapeStylePropsName,
  transformToComponentProps
} from '@/defaultProps'
const defaultProps = transformToComponentProps(shapeDefaultProps)
export default defineComponent({
  name: 'l-shape',
  props: {
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      shapeStylePropsName
    )
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  /* position: relative !important; */
}
</style>
