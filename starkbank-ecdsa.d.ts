declare module "starkbank-ecdsa" {
  export var Signature: typeof import("./@types/ellipticcurve/signature").Signature;
  export var PublicKey: typeof import("./@types/ellipticcurve/publicKey").PublicKey;
  export var PrivateKey: typeof import("./@types/ellipticcurve/privateKey").PrivateKey;
  export var Ecdsa: typeof import("./@types/ellipticcurve/ecdsa");
  export var utils: typeof import("./@types/ellipticcurve/utils/utils");
}
