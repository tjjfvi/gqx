(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "graphql", "."], function (require, exports) {
    var graphql_1 = require("graphql");
    var _1 = require(".");
    exports["default"] = function (_a) {
        var schema = _a.schema, template = _a.template;
        var ast = graphql_1.parse(schema);
        var config = JSON.parse(template.match(/\/\/ @gqx (.+)/)[1]);
        // @ts-ignore
        var schemaDef = ast.definitions.find(function (d) { return d.kind === "SchemaDefinition"; });
        var operations = schemaDef.operationTypes.map(function (o) { return [o.operation, o.type.name.value]; });
        var ctx = {
            operations: operations,
            baseTypes: operations.map(function (o) { return o[1]; }),
            enumTypes: {},
            inputTypes: {},
            objectTypes: {},
            exports: []
        };
        ast.definitions.map(function (def) {
            if (def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
                ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat(def.fields);
            else if (def.kind === "EnumTypeDefinition")
                ctx.enumTypes[def.name.value] = def;
            else if (def.kind === "ObjectTypeDefinition" || def.kind === "ObjectTypeExtension")
                ctx.objectTypes[def.name.value] = (ctx.objectTypes[def.name.value] || []).concat(def.fields);
        });
        var code = [
            _1.stringifyEnumTypes(ctx),
            _1.stringifyInputTypes(ctx),
            _1.stringifyObjectTypes(ctx),
            _1.stringifyExports(ctx),
        ].join("\n\n");
        return code;
    };
});
