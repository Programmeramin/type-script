"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = "amin islam";
var age = 43;
var skill = "ios devs";
var isMarried = true;
username = null;
// array type
var developer = ["ashraful", 32, true, true];
var devs = {
    name: "Amin islam",
    age: 44,
    skill: "ios devs",
    isMarried: true,
};
var student = function (name, age, skill) {
    return name;
};
var boroHat = function (txt) {
    if (typeof txt === "string") {
        return txt.toUpperCase();
    }
    return txt;
};
console.log(boroHat("amin islam"));
