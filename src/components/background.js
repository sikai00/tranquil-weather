/**
 * This module returns time-based background based on the provided arguments.
 */
import { utcToZonedTime } from 'date-fns-tz'
const createTree = require('functional-red-black-tree')

/**
 * Return an URL to the current background based on the imagesObjArr provided.
 * @param {Object} timeObj - Object from parser.getTime
 * @param {Array} imagesObjArr - Array of objects containing key of time in
 * 24 hr format, value of URL to the specific background image.
 */
export default function getBackground (timeObj, imagesObjArr) {
  let tree = createTree()
  imagesObjArr.forEach(obj => {
    tree = tree.insert(
      parseInt(Object.keys(obj)[0]), Object.values(obj)[0])
  })

  const currentHour = utcToZonedTime(
    Date.now() + timeObj.timezone * 1000, 'UTC').getHours() * 100
  return tree.le(currentHour).value
}
