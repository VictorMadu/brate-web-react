import reduce from "lodash/reduce";
import map from "lodash/map";
import some from "lodash/some";
import every from "lodash/every";
import forEach from "lodash/forEach";

export function generateIdHref(id: string) {
  return "#" + id;
}

export function arrayize<T extends Exclude<any, any[]>>(
  item?: T,
  defaultValue?: T
): Exclude<T, null | undefined>[] {
  return (item != null
    ? [item]
    : defaultValue != null
    ? [defaultValue]
    : []) as Exclude<T, null | undefined>[];
}

export function classNames(...strs: (string | null)[]) {
  let all: string = "";
  forEach(strs, (str) => {
    if (str != null) all = all + " " + str.trim();
  });
  return all.trim();
}

export class ConditionGroup {
  private ands: (string | symbol)[] = [];
  private ors: (string | symbol)[] = [];
  private nots: (string | symbol)[] = [];

  constructor() {}

  and(...keys: (string | symbol)[]) {
    this.ands.push(...keys);
    return this;
  }

  or(...keys: (string | symbol)[]) {
    this.ors.push(...keys);
    return this;
  }

  not(...keys: (string | symbol)[]) {
    this.nots.push(...keys);
    return this;
  }

  validate(obj: Record<string | symbol, any>) {
    if (this.ands.length && some(this.ands, (and) => obj[and] === undefined))
      return false;
    if (this.ors.length && every(this.ors, (or) => obj[or] === undefined))
      return false;
    if (this.nots.length && some(this.nots, (not) => obj[not] !== undefined))
      return false;
    return true;
  }
}

export class ClassNameGenerator {
  private generalValues: (string | null)[] = [];
  private conditionsAndValues: [ConditionGroup, (string | null)[]][] = [];

  constructor() {}

  public and(...keys: (string | symbol)[]) {
    return this.addCond(keys, "and");
  }

  public or(...keys: (string | symbol)[]) {
    return this.addCond(keys, "or");
  }

  public not(...keys: (string | symbol)[]) {
    return this.addCond(keys, "not");
  }

  public values(...vals: (string | null)[]) {
    const [conditionGroup, values] = this.getLastConditionAndValue();
    if (conditionGroup === undefined) {
      this.generalValues.push(...vals);
    } else {
      values.push(...vals);
    }
    return this;
  }

  public generate(props: string[]) {
    // For speed (performance) reasons, I am converting keys array to object because  conditionGroup will run multiple loops
    const objKeys = reduce(
      props,
      (obj, key, index) => {
        obj[key] = null; // We might use '' or null. We will use undefined to check if key exists
        return obj;
      },
      {} as Record<string, any>
    );

    return classNames(
      ...this.generalValues,
      ...map(this.conditionsAndValues, ([condGroup, values]) =>
        classNames(...(condGroup.validate(objKeys) ? values : [null]))
      )
    );
  }

  public static join(...cnGens: ClassNameGenerator[]) {
    return {
      generate: (...propsArr: string[][]) =>
        classNames(
          ...map(cnGens, (cnGen, index) => cnGen.generate(propsArr[index]))
        ),
    };
  }

  private addCond(keys: (string | symbol)[], methodName: "and" | "or" | "not") {
    const [conditionGroup, values] = this.getLastConditionAndValue();
    if (!values || values.length) {
      this.conditionsAndValues.push([
        new ConditionGroup()[methodName](...keys),
        [],
      ]);
    } else {
      conditionGroup[methodName](...keys);
    }
    return this;
  }

  private getLastConditionAndValue() {
    return (
      this.conditionsAndValues[this.conditionsAndValues.length - 1] ?? [
        undefined,
        undefined,
      ]
    );
  }
}
