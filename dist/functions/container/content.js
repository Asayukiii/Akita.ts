"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const builder_1=require("../../classes/builder");exports.data={data:(new builder_1.FunctionBuilder).setName("setContent").setValue("description","sets the content of this instance").setValue("use","$setContent[text]").setValue("fields",[{name:"text",description:"the content of the instance",type:"string"}]).setValue("example","$setContent[stop crying mid!!]").setValue("returns","Void"),code:async e=>(await e.func.resolve_fields(e),e.metadata.ctn.data.content=e.interpreter.fields(e).join(";"),{code:e.code.replace(e.func.id,"")})};