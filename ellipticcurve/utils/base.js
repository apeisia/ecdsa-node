
const _Buffer = typeof Buffer !== 'undefined' ? Buffer  : require("buffer/").Buffer;

exports.decode = function (string) {
    return _Buffer.from(string, "base64").toString("binary");
};


exports.encode = function (string) {
    return _Buffer.from(string, "binary").toString("base64");
};
