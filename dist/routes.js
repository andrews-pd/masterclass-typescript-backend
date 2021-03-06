"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = (0, express_1.Router)();
routes.post('/users', UserController_1.default.create);
routes.get('/users', UserController_1.default.index);
exports.default = routes;
