import { utcToZonedTime } from 'date-fns-tz'
const createTree = require('functional-red-black-tree')

export default class Background {
  /**
   * Construct a Background object.
   * @param {*} timeObj - Object from parser.getTime
   * @param {Array} imagesObjArr - Array of objects containing key of time in 24 hr format,
   * value of URL to the specific background image.
   */
  constructor (timeObj, imagesObjArr) {
    this.timeObj = timeObj
    this.tree = createTree()
    imagesObjArr.forEach(obj => {
      this.tree = this.tree.insert(
        parseInt(Object.keys(obj)[0]), Object.values(obj)[0])
    })
    console.log(this.tree)
  }

  getBackground () {
    const currentHour = utcToZonedTime(
      Date.now() + this.timeObj.timezone * 1000, 'UTC').getHours() * 100
    console.log(currentHour)
    return this.tree.le(currentHour).value
  }
}
