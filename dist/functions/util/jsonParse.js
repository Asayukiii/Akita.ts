"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const builder_1=require("../../classes/builder"),utils_1=require("../../classes/utils");exports.data={data:(new builder_1.FunctionBuilder).setName("jsonParse").setValue("description","...").setValue("use","$jsonParse[value]").setValue("fields",[{name:"value",type:"object<JSONEncodable | HJSONEncodable>"}]).setValue("example","None").setValue("returns","Any"),code:async e=>{await e.func.resolve_fields(e);var[s]=e.interpreter.fields(e);return{code:e.code?.replace(e.func.id,JSON.stringify(utils_1.Utils.Object(s)))}}};