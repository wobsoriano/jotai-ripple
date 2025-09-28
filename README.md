# jotai-ripple

Flexible state management for Ripple based on Jotai.

## Installation

```bash
npm install jotai jotai-ripple
```

## Atoms

An atom represents a piece of state. All you need is to specify an initial value, which can be primitive values like strings and numbers, objects and arrays. You can create as many primitive atoms as you want.

```ts
import { atom } from 'jotai-ripple'

const countAtom = atom(0)
const countryAtom = atom('Japan')
const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1995,
    watched: true
  },
  {
    title: 'Serial Experiments Lain',
    year: 1998,
    watched: false
  }
])

// Derived atoms
const progressAtom = atom((get) => {
  const anime = get(animeAtom)
  return anime.filter((item) => item.watched).length / anime.length
})
```

## Usage

### Read and write from same component

```tsx
import { useAtom } from 'jotai-ripple'
import { animeAtom } from './atoms'

export component AnimeApp() {
  const [anime, setAnime] = useAtom(animeAtom)

  <ul>
    for (const item of @anime) {
      <li>{item.title}</li>
    }
  </ul>

  <button onClick={() => {
    setAnime((anime) => [
      ...anime,
      {
        title: 'Cowboy Bebop',
        year: 1998,
        watched: false
      }
    ])
  }}>
    Add Cowboy Bebop
  </button>
}
```

### Read and write from separate components

```tsx
import { useAtomValue, useSetAtom } from 'jotai-ripple'
import { animeAtom } from './atoms'

component AnimeList() {
  const anime = useAtomValue(animeAtom)

  <ul>
    for (const item of @anime) {
      <li>{item.title}</li>
    }
  </ul>
}

component AddAnime() {
  const setAnime = useSetAtom(animeAtom)

  <button onClick={() => {
    setAnime((anime) => [
      ...anime,
      {
        title: 'Cowboy Bebop',
        year: 1998,
        watched: false
      }
    ])
  }}>
    {'Add Cowboy Bebop'}
  </button>
}

component ProgressTracker() {
  const progress = useAtomValue(progressAtom)

  <div>{`${Math.trunc(@progress * 100)}% watched`}</div>
}

export component App(){
  <AnimeList />
  <AddAnime />
  <ProgressTracker />
}
```

## License

MIT
