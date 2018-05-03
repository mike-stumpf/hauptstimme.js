import { InstrumentsData } from './data/instruments.data';
import { SearchService } from './services/search.service';
import { ScalesData } from './data/scales.data';
import { ChordsData } from './data/chords.data';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';
import { SearchRequestInterface } from '../interfaces/searchRequest.interface';
import { NoteConstant } from '../constants/note.constant';
import { UtilService } from './services/util.service';

/**
 * Entry point for exposed public API methods
 */
export class HauptstimmeJs {
    /**
     * @returns list of available instruments
     */
    public static getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(InstrumentsData.getAvailableInstruments());
        });
    }

    /**
     * @returns list of available scales
     */
    public static getAvailableScales(): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ScalesData.getAvailableScales());
        });
    }

    /**
     * @returns list of available chords
     */
    public static getAvailableChords(): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ChordsData.getAvailableChords());
        });
    }

    /**
     * @param searchRequest selected notes and optional root note to search for
     * @returns list of scales and chords that match the search request parameters
     */
    public static search(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(searchRequest);
    }

    /**
     * @param note the note to stringify
     * @param noteArray optional param to help determine whether to sharpen or flatten intermediate notes
     * @returns string representation of note constant
     */
    public static getFormattedNoteString(note: NoteConstant, noteArray: NoteConstant[] = []): string {
        return UtilService.getFormattedNoteString(note, noteArray);
    }

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to add to note
     * @returns noteConstant after adding half steps
     */
    public static addHalfStepsToNote(note: NoteConstant, halfSteps: number): NoteConstant {
        return UtilService.addHalfStepsToNote(note, halfSteps);
    }

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to add to note
     * @returns noteConstant after adding half steps
     */
    public static subtractHalfStepsFromNote(note: NoteConstant, halfSteps: number): NoteConstant {
        return UtilService.subtractHalfStepsFromNote(note, halfSteps);
    }

}