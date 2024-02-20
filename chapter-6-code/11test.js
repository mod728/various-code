// App.jsx
export const example = (a, b) => {
    return a + b
}

const App = () => {
    return (
        <h1>こんにちは</h1>
    )
}

export default App


// App.test.jsx
import { it, expect } from "vitest"
import { example } from "./App"

it("First function test", () => {
    expect().toBe()
})