/**
 * @file:   文件描述
 */

const requireAll = ctx => ctx.keys().map(ctx);

const req = require.context('./svg', false, /\.svg$/);

export default requireAll(req);
