"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const tslib_1=require("tslib"),builder_1=require("../../classes/builder"),lodash_1=tslib_1.__importDefault(require("lodash"));exports.data={data:(new builder_1.FunctionBuilder).setName("metadata").setValue("description","get metadata info").setValue("use","$metadata[key?]").setValue("returns","Unknown"),code:async e=>{e.func=await e.func.resolve_fields(e);var t=e.func.inside?lodash_1.default.get(e.metadata,e.interpreter.fields(e).join(".")):e.metadata;return{code:e.code?.replace(e.func.id,"string"==typeof t?t:JSON.stringify(t))}}};