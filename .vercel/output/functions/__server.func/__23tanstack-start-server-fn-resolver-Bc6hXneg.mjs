//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Bc6hXneg.js
var manifest = {
	"65824b6e75349c6d152a94ddcd1865f77e5f864dfd019a9cac487542d5c91ad6": {
		functionName: "submitInquiry_createServerFn_handler",
		importer: () => import("./_ssr/example.functions-uDTyBJ2w.mjs")
	},
	"a8ea96f55c98d9dfe39eba1f21271c6c33bfa924611fe9d828fca0774e41b939": {
		functionName: "getGreeting_createServerFn_handler",
		importer: () => import("./_ssr/example.functions-uDTyBJ2w.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
