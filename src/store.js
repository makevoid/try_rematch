import { init } from '@rematch/core'
import count from './models/count'

const store = init({
  models: {
    count
  }
})

export default store
