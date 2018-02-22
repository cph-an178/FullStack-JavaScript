"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var URL = "http://jsonplaceholder.typicode.com/users/1";
node_fetch_1.default(URL)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data.name); });
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/class_demo_typescript/build/external_demo.js.map