import React from "react"
import { shallow } from "enzyme"
import StorePage from "./StorePage"

test("should render StorePage correctly", () => {
  const wrapper = shallow(<StorePage />);
  expect(wrapper).toMatchSnapshot();
});

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "George", "George"], ["Anas", "Michael", "Anas"], ["Michael", "Michael", "Anas"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Jean-Philippe", "George"], ["Anas", "Pierre Edouard", "Edmond"], ["George", "Edmond", "Pierre Edouard"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hydrateStateWithLocalStorage", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "George"], ["Anas", "Jean-Philippe", "George"], ["Edmond", "Anas", "Edmond"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.hydrateStateWithLocalStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveStateToLocalStorage", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "Pierre Edouard"], ["Michael", "Pierre Edouard", "Michael"], ["Jean-Philippe", "George", "Michael"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.saveStateToLocalStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clearLocalStorage", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Edmond", "Edmond"], ["Michael", "Pierre Edouard", "Michael"], ["Michael", "George", "Edmond"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.clearLocalStorage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("openCartSlider", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "George"], ["Edmond", "Pierre Edouard", "Anas"], ["Edmond", "Pierre Edouard", "Michael"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.openCartSlider()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addToCart", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "Pierre Edouard"], ["Pierre Edouard", "Anas", "Jean-Philippe"], ["Anas", "Anas", "George"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.addToCart(["1.0.0", "4.0.0-beta1\t", "1.0.0", "4.0.0-beta1\t", "4.0.0-beta1\t", "^5.0.0", "4.0.0-beta1\t", "1.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addToCart(["^5.0.0", "v4.0.0-rc.4", "v1.2.4", "v1.2.4", "1.0.0", "1.0.0", "4.0.0-beta1\t", "^5.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addToCart(["^5.0.0", "1.0.0", "4.0.0-beta1\t", "4.0.0-beta1\t", "v4.0.0-rc.4", "1.0.0", "v4.0.0-rc.4", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addToCart(["v1.2.4", "^5.0.0", "v4.0.0-rc.4", "v1.2.4", "1.0.0", "^5.0.0", "v4.0.0-rc.4", "1.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addToCart(["^5.0.0", "4.0.0-beta1\t", "1.0.0", "v1.2.4", "4.0.0-beta1\t", "v1.2.4", "v4.0.0-rc.4", "^5.0.0"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addToCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addItem", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Pierre Edouard", "Edmond"], ["Anas", "Michael", "George"], ["Anas", "Anas", "Edmond"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.addItem("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addItem("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addItem("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addItem("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addItem("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeItem", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "Anas"], ["Edmond", "George", "Jean-Philippe"], ["George", "Michael", "Anas"]]
        inst = new StorePage.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeItem("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removeItem("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removeItem("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removeItem("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removeItem("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.removeItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
