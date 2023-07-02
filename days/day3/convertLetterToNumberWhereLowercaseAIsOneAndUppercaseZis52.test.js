"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52_1 = __importDefault(require("./convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52"));
test('test src.convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52', function () {
    expect((0, convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52_1.default)('a')).toEqual(1);
    expect((0, convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52_1.default)('z')).toEqual(26);
    expect((0, convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52_1.default)('A')).toEqual(27);
    expect((0, convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52_1.default)('Z')).toEqual(52);
});
