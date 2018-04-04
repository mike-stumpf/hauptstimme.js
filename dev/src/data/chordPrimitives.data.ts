import { ChordOrScalePrimitiveInterface } from '../../interfaces/chordOrScalePrimitiveInterface';
import { ChordOrScaleTypeConstant } from '../../constants/chordOrScaleType.constant';
import { ChordInterface } from '../../interfaces/chord.interface';
import { UtilService } from '../services/util.service';
import { NoteConstant } from '../..';
import * as _ from 'lodash';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ScalesData } from './scales.data';

export class ChordPrimitivesData {

    private static moduloNoteIndex(noteIndex: number, step: number) {
        return (noteIndex + step) % UtilService.getLengthOfEnum(NoteConstant);
    }

    public static compileChordPrimitivesIntoChords(): ChordInterface[] {
        const chordPrimitives: ChordOrScalePrimitiveInterface[] = this.getAvailableChordPrimitives();
        const noteLength: number = UtilService.getLengthOfEnum(NoteConstant);
        const scales: ScaleInterface[] = ScalesData.getAvailableScales();
        let chords: ChordInterface[] = [];
        let chordNotes: NoteConstant[];
        let assembledChords: ChordInterface[] = [];
        let rootNote: NoteConstant;
        let noteIndex: number;
        let rootScale: ScaleInterface | undefined;
        // loop through each possible root note
        for(let i: number = 0; i < noteLength; i++) {
            rootNote = UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[i]);
            // compile each scale for the given root note
            assembledChords = _.map(chordPrimitives, (chordPrimitive: ChordOrScalePrimitiveInterface): ChordInterface => {
                noteIndex = i;
                chordNotes = [rootNote];
                if (chordPrimitive.type === ChordOrScaleTypeConstant.MINOR) {
                    // use minor scale as basis for selecting notes
                    rootScale = _.find(scales, (scale: ScaleInterface) => {
                        return scale.name.toLowerCase().indexOf('aeolian') !== -1 && scale.notes[0] === rootNote;
                    })
                } else {
                    // use major scale as basis for selecting notes
                    rootScale = _.find(scales, (scale: ScaleInterface) => {
                        return scale.name.toLowerCase().indexOf('ionian') !== -1 && scale.notes[0] === rootNote;
                    })
                }
                console.log('root scale', rootScale);
                // use the steps to determine the correct note sequence
                _.each(chordPrimitive.steps, (step: string) => {
                    if (step.indexOf('b') !== -1) {
                        if (step.indexOf('bb') !== -1) {
                            noteIndex = this.moduloNoteIndex(noteIndex, parseInt(step.substr(2, step.length), 10)) - 2;
                            chordNotes.push(rootScale.notes[noteIndex]);
                        } else {
                            noteIndex = this.moduloNoteIndex(noteIndex, parseInt(step.substr(1, step.length), 10)) - 1;
                            chordNotes.push(rootScale.notes[noteIndex]);
                        }
                    } else if (step.indexOf('#') !== -1) {
                        noteIndex = this.moduloNoteIndex(noteIndex, parseInt(step.substr(1, step.length), 10)) + 1;
                        chordNotes.push(rootScale.notes[noteIndex]);
                    } else if (step.indexOf('(') !== -1) {
                        noteIndex = this.moduloNoteIndex(noteIndex, parseInt(step.substr(1, step.length - 1), 10));
                        chordNotes.push(rootScale.notes[noteIndex]);
                    } else {
                        noteIndex = this.moduloNoteIndex(noteIndex, parseInt(step, 10));
                        chordNotes.push(rootScale.notes[noteIndex]);
                    }
                });
                // remove last element in array as it is the same as the first (root) note
                chordNotes.splice(-1,1);
                return {
                    name: [UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                    notes: chordNotes,
                    type: chordPrimitive.type
                };
            });
            chords = chords.concat(assembledChords);
        }
        return chords;
    }

    private static getAvailableChordPrimitives(): ChordOrScalePrimitiveInterface[] {
        return [
            {
                name: 'Major',
                steps:  ['1', '3', '5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Sixth',
                steps:  ['1', '3', '5', '6'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Six Nine',
                steps:  ['1', '3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Added Ninth',
                steps:  ['1', '3', '5', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh',
                steps:  ['1', '3', '5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Flat Five',
                steps:  ['1', '3', 'b5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Sharp Five',
                steps:  ['1', '3', '#5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Ninth',
                steps:  ['1', '3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Eleventh',
                steps:  ['1', '3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Thirteenth',
                steps:  ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps:  ['1', '3', '5', '7', '#11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Flat Five',
                steps:  ['1', '3', 'b5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Minor',
                steps:  ['1', 'b3', '5'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Sixth',
                steps:  ['1', 'b3', '5', '6'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seventh',
                steps:  ['1', 'b3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Added Ninth',
                steps:  ['1', 'b3', '5', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Six Add Nine',
                steps:  ['1', 'b3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Ninth',
                steps:  ['1', 'b3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Eleventh',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Thirteenth',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Seventh',
                steps:  ['1', 'b3', '5', '7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Ninth',
                steps:  ['1', 'b3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Eleventh',
                steps:  ['1', 'b3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Thirteenth',
                steps:  ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Seventh',
                steps:  ['1', '3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Ninth',
                steps:  ['1', '3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Eleventh',
                steps:  ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Thirteenth',
                steps:  ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five',
                steps:  ['1', '3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Ninth',
                steps:  ['1', '3', '5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Ninth',
                steps:  ['1', '3', '5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Sharp Five',
                steps:  ['1', '3', '#5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Flat Five',
                steps:  ['1', '3', 'b5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps:  ['1', '3', '#5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps:  ['1', '3', '#5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps:  ['1', '3', 'b5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps:  ['1', '3', 'b5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Eleven',
                steps:  ['1', '3', '5', 'b7', '#11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Diminished',
                steps:  ['1', 'b3', 'b5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Diminished Seventh',
                steps:  ['1', 'b3', 'b5', 'bb7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Half Diminished',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented',
                steps:  ['1', '3', '#5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented Seventh',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Fifth',
                steps:  ['1', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Flat Fifth',
                steps:  ['1', 'b5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Fourth',
                steps:  ['1', '4', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Second',
                steps:  ['1', '2', '5', '(9)'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Seventh',
                steps:  ['1', '4', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Sharp Eleven',
                steps:  ['1', '5', '#11'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    }
}