import { InstrumentInterface, NotesConstant } from '../..';
import { InstrumentTypeConstant } from '../../constants/instrumentType.constant';
import * as _ from 'lodash';

export class InstrumentsData {
    public static getAvailableInstruments(): InstrumentInterface[] {
        const instruments: InstrumentInterface[] = [
            {
                name:'Guitar',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bass Guitar',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bass Guitar - 5 String',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Violin',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Violin - Tenor',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Mandolin',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Ukulele - Baritone',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Ukulele - Concert',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Ukulele - Soprano',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.FG,
                    NotesConstant.B
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Ukulele - Tenor',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Cello',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Viola',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Banjo - Plectrum',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Banjo - Tenor (Jazz)',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Banjo - Tenor (Irish)',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Lyre',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.DE,
                    NotesConstant.FG,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bajo Sexto',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.F
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Balalaika - Alto',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Balalaika - Soprano',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Cuatro',
                rootNotes:[
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Cuatro - Cubano',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Dulcimer',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.C,
                    NotesConstant.C
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Dulcimer (Alternative)',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Mandola',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Sitar',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.F
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Solo Bass',
                rootNotes:[
                    NotesConstant.FG,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Dobro',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Guitarron',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bouzouki',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bouzouki (Alternative)',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bouzouki - Irish',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Bouzouki - Irish (Alternative)',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Fiddle',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Vihuela',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Banduria',
                rootNotes:[
                    NotesConstant.GA,
                    NotesConstant.CD,
                    NotesConstant.FG,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Charango',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Oud',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.A,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Oud (Alternative)',
                rootNotes:[
                    NotesConstant.B,
                    NotesConstant.FG,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Requinto',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Lute',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Zither',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.C
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Guitar - Russian',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Pedal Steel Guitar',
                rootNotes:[
                    NotesConstant.B,
                    NotesConstant.D,
                    NotesConstant.E,
                    NotesConstant.FG,
                    NotesConstant.GA,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.GA,
                    NotesConstant.DE,
                    NotesConstant.FG
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            },
            {
                name:'Pedal Steel Guitar (Alternative)',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.G,
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.INSTRUMENT
            }
        ];
        const tunings:InstrumentInterface[

            ]=[
            {
                name:'Major Seconds',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.D,
                    NotesConstant.E,
                    NotesConstant.FG,
                    NotesConstant.G,
                    NotesConstant.AB
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Minor Thirds',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.DE,
                    NotesConstant.FG,
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.DE
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Major Thirds',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.GA,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.GA,
                    NotesConstant.C
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'All Fourths',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.F
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Augmented Fourths',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.FG,
                    NotesConstant.C,
                    NotesConstant.FG,
                    NotesConstant.C,
                    NotesConstant.FG
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'All Fifths',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E,
                    NotesConstant.B
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Baritone',
                rootNotes:[
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.FG,
                    NotesConstant.B
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Baritone (Alternative)',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Hawaiian',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.CD,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'New Standard',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Resophonic',
                rootNotes:[
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Tenor',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open A',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.CD,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open B',
                rootNotes:[
                    NotesConstant.B,
                    NotesConstant.FG,
                    NotesConstant.B,
                    NotesConstant.FG,
                    NotesConstant.B,
                    NotesConstant.DE
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open C',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open D',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.FG,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Modal D',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open D Minor',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open E',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.GA,
                    NotesConstant.B,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open F',
                rootNotes:[
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.C
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open G',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Modal G',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Open G Minor',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.CD,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Admiral',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.B,
                    NotesConstant.C
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Buzzard',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.AB,
                    NotesConstant.F
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Face',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Four and Twenty',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Hot Type',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.B,
                    NotesConstant.E,
                    NotesConstant.FG,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Layover',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Magic Farmer',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Pelican',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Processional',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.AB
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Slow Motion',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.F,
                    NotesConstant.C,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Spirit',
                rootNotes:[
                    NotesConstant.CD,
                    NotesConstant.A,
                    NotesConstant.CD,
                    NotesConstant.GA,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Tarboulton',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.AB,
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.AB,
                    NotesConstant.F
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Toulouse',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.C,
                    NotesConstant.D,
                    NotesConstant.F,
                    NotesConstant.A,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Triqueen',
                rootNotes:[
                    NotesConstant.D,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.FG,
                    NotesConstant.A,
                    NotesConstant.B
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Minor Sixths',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.GA,
                    NotesConstant.E,
                    NotesConstant.C,
                    NotesConstant.GA,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Major Sixths',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.A,
                    NotesConstant.FG,
                    NotesConstant.DE,
                    NotesConstant.C,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Mandoguitar',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E,
                    NotesConstant.B
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Pentatonic',
                rootNotes:[
                    NotesConstant.A,
                    NotesConstant.C,
                    NotesConstant.D,
                    NotesConstant.E,
                    NotesConstant.G,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Overtone',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.E,
                    NotesConstant.G,
                    NotesConstant.AB,
                    NotesConstant.C,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Lefty',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.B,
                    NotesConstant.G,
                    NotesConstant.D,
                    NotesConstant.A,
                    NotesConstant.E
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Cittern',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.F,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.D
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Cittern (Alternative)',
                rootNotes:[
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.G,
                    NotesConstant.C,
                    NotesConstant.G
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name:'Balalaika',
                rootNotes:[
                    NotesConstant.E,
                    NotesConstant.A,
                    NotesConstant.D,
                    NotesConstant.E,
                    NotesConstant.E,
                    NotesConstant.A
                ],
                type:InstrumentTypeConstant.ALTERNATE_TUNING
            }
        ];
        // sort the list alphabetically
        return  _.sortBy(
            // use auto-incremented ids to prevent developer error
            _.map(
                // join the lists together
                _.union(instruments, tunings),
                (instrument: InstrumentInterface, index: number) => {
                    return {
                        ...instrument, id: (index + 1) // start from NotesConstant.AB instead of NotesConstant.A
                    }
                }
            ),
            'name');
    }
}