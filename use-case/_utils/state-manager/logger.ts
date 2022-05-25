export class Logger {
  private shouldLog = process.env.NODE_ENV !== "production";
  constructor(private stateName: string) {}

  log(type: string | number | symbol, prevData: any, nextData: any) {
    if (this.shouldLog) return this._log(type, prevData, nextData);
  }

  private _log(type: string | number | symbol, prevData: any, nextData: any) {
    console.log(
      "%c{%s",
      "",
      "%cSTATE_NAME: %s",
      "color:yellow;font-size:16px;",
      `%c${this.stateName}, %s`,
      "color:white;font-size:14px;",
      "%cTYPE: %s",
      "color:cyan;font-size:16px;",
      `%c${type.toString()}, %s`,
      "color:white;font-size:14px;",
      "%cPREV_DATA: %s",
      "color:red;font-size:16px;",
      `%c${JSON.stringify(prevData)}, %s`,
      "color:white;font-size:14px;",
      "%cNEXT_DATA: %s",
      "color:green;font-size:16px;",
      `%c${JSON.stringify(nextData)} %s`,
      "color:white;font-size:14px;",
      "%c}",
      ""
    );
  }
}
