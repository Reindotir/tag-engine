import { Element } from "./element.js"

class Engine {
    createElement(tagName) {
        return new Element(tagName)
    }
}

const engine = new Engine()
module.exports = { Engine, engine, Element }