# jotai-ripple

Flexible state management for Ripple based on Jotai.

## Installation

```bash
npm install jotai jotai-ripple
```

## Usage

```ts
import { track } from 'ripple'
import { useAtom } from 'jotai-ripple'

const countAtom = atom(0)

export component App() {
  <BearCounter />
  <Controls />
}

component BearCounter() {
  const [count] = useAtom(countAtom)

  <h1>{`${@count} bears around here...`}</h1>
}

component Controls() {
  const [_, setCount] = useAtom(countAtom)

  <button onClick={() => setCount(c => c + 1)}>{"One up"}</button>
}
```

## License

MIT