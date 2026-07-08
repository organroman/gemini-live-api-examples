module.exports = [
"[project]/node_modules/camelcase-keys/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_0o08a6l._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/camelcase-keys/index.js [app-route] (ecmascript)");
    });
});
}),
"[externals]/node:crypto [external] (node:crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_node_crypto_0xdk2m3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:crypto [external] (node:crypto, cjs)");
    });
});
}),
];