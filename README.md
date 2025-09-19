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

### Atom

An atom represents a piece of state. All you need is to specify an initial value, which can be primitive values like strings and numbers, objects and arrays. You can create as many primitive atoms as you want.

```ts
import { atom } from 'solid-jotai'

const countAtom = atom(0)
const countryAtom = atom('Japan')
const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, 'Naruto': 1999 })

// Derived atoms
const doubledCountAtom = atom(get => get(countAtom) * 2)
const sum = atom(get => get(countAtom) + get(doubledCountAtom))
```

## License

MIT