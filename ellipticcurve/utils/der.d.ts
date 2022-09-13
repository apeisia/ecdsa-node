export function encodeSequence(...args: any[]): string;
export function encodeInteger(x: any): string;
export function encodeOid(pieces: any): string;
export function encodeBitstring(t: any): string;
export function encodeOctetString(t: any): string;
export function encodeConstructed(tag: any, value: any): string;
export function removeSequence(string: any): any[];
export function removeInteger(string: any): any[];
export function removeObject(string: any): any[];
export function removeBitString(string: any): any[];
export function removeOctetString(string: any): any[];
export function removeConstructed(string: any): any[];
export function fromPem(pem: any): any;
export function toPem(der: any, name: any): string;