export class Point {
    constructor(x?: BigInt.BigInteger, y?: BigInt.BigInteger, z?: BigInt.BigInteger);
    x: BigInt.BigInteger;
    y: BigInt.BigInteger;
    z: BigInt.BigInteger;
    isAtInfinity(): boolean;
}
import BigInt = require("big-integer");
