"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = exports.getDate = void 0;
const hooks_1 = require("@midwayjs/hooks");
exports.getDate = hooks_1.Api(hooks_1.Get('/api/getDate'), async () => {
    return new Date().toString();
});
exports.home = hooks_1.Api(hooks_1.Get('/home'), async () => {
    return 'hello world';
});
//# sourceMappingURL=date.js.map