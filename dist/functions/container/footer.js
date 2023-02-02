"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const builder_1=require("../../classes/builder");exports.data={data:(new builder_1.FunctionBuilder).setName("setFooter").setValue("description","sets the footer of this embed").setValue("use","$setFooter[index;text;iconURL?]").setValue("fields",[{name:"index",description:"the index of the embed",type:"number[0,4]"},{name:"text",description:"the text of the embed footer",type:"string"},{name:"iconURL",description:"the icon of the embed footer",type:"string<URL>",optional:!1}]).setValue("example","$setFooter[0;$author[tag];$author[displayAvatarURL]]").setValue("returns","Void"),code:async e=>{await e.func.resolve_fields(e);var[t=0,a,o]=e.interpreter.fields(e),t=Number(t);return e.metadata.ctn.data.embeds[t]||e.metadata.ctn.addEmbed(),e.metadata.ctn.data.embeds[t].setFooter({text:a,iconURL:o}),{code:e.code?.replace(e.func.id,"")}}};