import * as cli from "./cli"
// @ponicode
describe("cli.execute", () => {
    test("0", () => {
        let callFunction: any = () => {
            cli.execute(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            cli.execute(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            cli.execute(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            cli.execute("Chief Product Officer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            cli.execute(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            cli.execute(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
