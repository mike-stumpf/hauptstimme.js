"use strict";
exports.__esModule = true;
var note_constant_1 = require("../../constants/note.constant");
var UtilServices = /** @class */ (function () {
    function UtilServices() {
    }
    UtilServices.getLengthOfEnum = function (enumConstant) {
        return Object.keys(enumConstant).filter(function (key) { return typeof enumConstant[key] === 'number'; }).length;
    };
    UtilServices.getFormattedNoteString = function (note) {
        var sharpEntity = '&#9839;';
        var flatEntity = '&#9837;';
        var formattedNote = note_constant_1.NoteConstant[note];
        switch (note) {
            case note_constant_1.NoteConstant.AB:
                // b flat
                formattedNote = ['B', flatEntity].join('');
                break;
            case note_constant_1.NoteConstant.CD:
                // c sharp
                formattedNote = ['C', sharpEntity].join('');
                break;
            case note_constant_1.NoteConstant.DE:
                // e flat
                formattedNote = ['E', flatEntity].join('');
                break;
            case note_constant_1.NoteConstant.FG:
                // f sharp
                formattedNote = ['F', sharpEntity].join('');
                break;
            case note_constant_1.NoteConstant.GA:
                // a flat
                formattedNote = ['A', flatEntity].join('');
                break;
        }
        return formattedNote;
    };
    UtilServices.getEnumFromStringKey = function (enumConstant, key) {
        return parseInt(enumConstant[key]);
    };
    return UtilServices;
}());
exports.UtilServices = UtilServices;
