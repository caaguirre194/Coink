import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "number",
})
export class NumberPipe implements PipeTransform {
  public forNum = {
    maximumFractionDigits: 1,
  };

  public forLang = "es-CO";

  /**
   * Format a number
   * @param  {number} value  A number
   * @param  {object} opts   Options in toLocaleString
   * @param  {string} locate Is a ES-es
   * @return {string}
   */
  static format(
    value: number,
    opts: object = {
      maximumFractionDigits: 1,
    },
    locate: string = "es-CO"
  ): string {
    const val = parseFloat(value + "");
    if (val.toLocaleString) {
      return val.toLocaleString(locate, opts).replace(/\s/gim, "");
    } else {
      return value + "";
    }
  }

  /**
   * Transform a number
   * @param  {number} value  A number
   * @param  {object} opts   Options in toLocaleString
   * @param  {string} locate Is a ES-es
   * @return {string}
   */
  transform(
    value: number,
    opts: object = this.forNum,
    round: boolean = false,
    locate: string = this.forLang
  ): string {
    return NumberPipe.format(round ? Math.round(value) : value, opts, locate);
  }
}
