import { App } from 'vue'
import LText from './components/LText'
import LImage from './components/LImage'

const components = [LText, LImage]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { install, LText, LImage }

export default { install }
