function ParseUnit(unit: string): UnitParsed {

    let unitMatch: string;
    let _reg: RegExp = /(km|cm|mm|m)/g;
    let unitMatchArray: RegExpMatchArray = unit.match(_reg);

    if (unitMatchArray === null) throw new Error(`Array returned ${unitMatchArray}`)

    unitMatch = unitMatchArray.length === 1 && unitMatchArray[0] || (function (): string {
        for (let i = 0; i < unitMatchArray.length; i++) {
            console.log(`why oh why: ${i}`);
        }
        return unitMatchArray[0];
    }());

    let nFloat: number = parseFloat(unit.substring(unit.indexOf(unitMatch), -1));

    let nScoped: number = scopeUnit(unitMatch as ModelledStringLengthUnit, nFloat)

    return {
        unit: unitMatch as ModelledStringLengthUnit,
        n: nFloat,
        scopedN: nScoped,
        actual: unit
    }

}

function ParseUnits(unitArray: string[]): UnitParsed[] {
    let unitParsedArray = [];
    for (let i = 0; i < unitArray.length; i++) unitParsedArray.push(ParseUnit(unitArray[i]))
    return unitParsedArray;
}

/*
 * all units will have a useable 'scopedN' value which is the found string lenth translated to centimetres
 */

function scopeUnit(unit: ModelledStringLengthUnit, value: number): number {

    var scopedN: number;

    switch (unit) {
        case "km":
            scopedN = value * 100000;
            break;
        case "m":
            scopedN = value * 100;
            break;
        case "mm":
            scopedN = value / 10;
            break;
        case "cm":
        default:
            break;
    }

    return scopedN;

}

export { ParseUnit, ParseUnits }