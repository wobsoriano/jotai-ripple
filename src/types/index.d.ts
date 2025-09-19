import type { Atom, ExtractAtomArgs, ExtractAtomResult, ExtractAtomValue, WritableAtom } from 'jotai/vanilla';
import type { Component, Tracked } from 'ripple';
import type { getDefaultStore } from 'jotai/vanilla';

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result
type Store = ReturnType<typeof getDefaultStore>;
interface Options {
    store?: Store;
}

declare function useSetAtom<Value, Args extends unknown[], Result>(
    atom: WritableAtom<Value, Args, Result>,
    options?: Options
): SetAtom<Args, Result>
  
  declare function useSetAtom<
    AtomType extends WritableAtom<unknown, unknown[], unknown>,
  >(
    atom: AtomType,
    options?: Options
  ): SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>

declare function useAtom<Value, Args extends unknown[], Result>(atom: WritableAtom<Value, Args, Result>, options?: Options): [Tracked<Value>, SetAtom<Args, Result>];
declare function useAtom<Value>(atom: Atom<Value>, options?: Options): [Tracked<Value>, never];
declare function useAtom<AtomType extends WritableAtom<unknown, unknown[], unknown>>(atom: AtomType, options?: Options): [
    Tracked<ExtractAtomValue<AtomType>>,
    SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>
];
declare function useAtom<AtomType extends Atom<unknown>>(atom: AtomType, options?: Options): [Tracked<ExtractAtomValue<AtomType>>, never];

declare function useAtomValue<Value>(atom: Atom<Value>, options?: Options): Tracked<Value>;
declare function useAtomValue<AtomType extends Atom<unknown>>(atom: AtomType, options?: Options): Tracked<ExtractAtomValue<AtomType>>;

declare function useStore(options?: Options): Store;

declare function Provider(props: { store?: Store, children: Component }): Component;

export {
    useAtom,
    useAtomValue,
    useSetAtom,
    useStore,
    Provider,
}

export { atom, createStore } from 'jotai/vanilla';