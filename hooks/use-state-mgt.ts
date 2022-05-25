import { useEffect, useState } from "react";
import { StrKeys } from "ts-util-types";
import { BaseStateManager } from "../use-case/_utils/state-manager/base-manager";
import { State } from "../use-case/_utils/state-manager/interfaces/states";

type R<
  NewValue extends any,
  Transformer extends unknown
> = Transformer extends (newValue: NewValue) => any
  ? ReturnType<Transformer>
  : Transformer extends undefined
  ? NewValue
  : never;

const useSubscribeForChange = <S extends State, K extends StrKeys<S>>(
  stateMgr: BaseStateManager<S>,
  type: K,
  cb: (newValue: S[K]) => any
) => {
  useEffect(() => {
    const value = stateMgr.getData(type);
    cb(value);
    const unsubscribe = stateMgr.subscribe(type, (newValue) => {
      cb(newValue);
    });
    return unsubscribe;
  }, [type, stateMgr, cb]);
};

export const useSubscribe = <S extends State, K extends StrKeys<S>>(
  stateMgr: BaseStateManager<S>,
  type: K
) => {
  const [value, setValue] = useState<S[K]>(stateMgr.getData(type));
  useSubscribeForChange(stateMgr, type, setValue);
  return value;
};

export const useSubscribeWithTransform = <
  S extends State,
  K extends StrKeys<S>,
  T extends (newValue: S[K]) => any
>(
  stateMgr: BaseStateManager<S>,
  type: K,
  transformer: T
) => {
  const [value, setValue] = useState<ReturnType<T>>(
    transformer(stateMgr.getData(type))
  );

  useSubscribeForChange(stateMgr, type, (newValue) => {
    setValue(transformer(newValue));
  });
  return value;
};

// function dispatch<S extends State, K extends StrKeys<S>>(
//   stateMgr: BaseStateManager<S>,
//   type: K
// )  {
//    return (data: S[K]) => stateMgr.setData(type, data);
// }

// export const useDispatch = <S extends State, K extends StrKeys<S>>(
//   stateMgr: BaseStateManager<S>,
//   type: K
// ) => {
//   return (data: S[K]) => stateMgr.setData(type, data);
// };

// type StateAndKey<S extends State> = [BaseStateManager<S>, StrKeys<S>];

// export type StatesValue<
//   T extends [unknown, unknown][],
//   R extends any[] = []
// > = T extends [infer SAK, ...(infer P)]
//   ? P extends [any, any][]
//     ? SAK extends StateAndKey<infer S>
//       ? StatesValue<P, [...R, S[SAK[1]]]>
//       : never
//     : never
//   : R;

// type StateAndKeyWithCb<S extends State, K extends StrKeys<S> = StrKeys<S>> =
//   | [BaseStateManager<S>, K, ((newValue: S[K]) => any) | undefined]
//   | [BaseStateManager<S>, K];

// type StatesValueWithCb<
//   E extends State,
//   T extends ([BaseStateManager<E>, keyof E, unknown] | [BaseStateManager<E>, keyof E])[],
//   R extends any[] = []
// > = T extends [infer SAK, ...(infer P)]
//   ? P extends ([any, any, any] | [any, any])[]
//     ? SAK extends [BaseStateManager<infer S>, infer K, infer F]
//     ? K
//     : P
//     : T
//     : never;

//   type CC<E extends BaseStateManager<State>, K extends string> = K
//   //   ? K extends string
//   //     ? StatesValueWithCb<
//   //         P,
//   //         [...R, SAK[2] extends (newValue: any) => infer O ? O : S[K]]
//   //       >
//   //       : SAK
//   //     : never
//   //   : SAK
//   // : R;

// type C = StatesValueWithCb<[[rateStateMgr, 'filter']]>

// export const useSubscribesNoStateUpdate = <
//   T extends StateAndKeyWithCb<State>[]
// >(
//   ...args: T
// ) => {
//   useEffect(() => {
//     const unsubscribes = map(args, ([state, key, cb], index) => {
//       return state.subscribe(key, (newValue) => {
//         cb?.(newValue);
//       });
//     });

//     return () => {
//       forEach(unsubscribes, (unsubscribe) => unsubscribe());
//     };
//   }, [args]);
// };

// const d = <T extends [Base][]>(...args: T): CC<BaseStateManager<State>, T> => 4 as any
//  d([rateStateMgr, 'filter', undefined])
// export const useSubscribes = <T extends StateAndKeyWithCb<State>[]>(
//   ...args: T
// ) => {
//   const [argValues, setArgValues] = useState<StatesValueWithCb<T>>(
//     map(args, ([state, key, transformer]) => {
//       return applyFnOrReturnValue(state.getData(key), transformer);
//     }) as any
//   );

//   useEffect(() => {
//     const unsubscribes = map(args, ([state, key, transformer], index) => {
//       return state.subscribe(key, (newValue) => {
//         setArgValues((argValues) => {
//           const newArgValue = applyFnOrReturnValue(newValue, transformer);

//           if (argValues[index] === newArgValue) return argValues;

//           const newArgValues = [...argValues];
//           newArgValues[index] = newValue;
//           return newArgValues as any;
//         });
//       });
//     });

//     return () => {
//       forEach(unsubscribes, (unsubscribe) => unsubscribe());
//     };
//   }, [args]);
//   return argValues;
// };
