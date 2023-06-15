import { App } from 'vue'
import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'
import FinalPage from './components/FinalPage'
export {
  TextComponentProps,
  ImageComponentProps,
  ShapeComponentProps,
  AllComponentProps,
  ComponentData,
  textDefaultProps,
  imageDefaultProps,
  shapeDefaultProps,
  textStylePropName,
  imageStylePropsName,
  shapeStylePropsName,
  isEditingProps
} from './defaultProps'

const components = [LText, LImage, LShape, FinalPage]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { install, LText, LImage, LShape, FinalPage }

export default { install }
