//namespace declaration
var _chorus = window.chorus = _chorus || window.chorus || {};

//default search result holder
_chorus.searchResult = {
    scales:{},
    scaleContainers:[],
    chords:{},
    chordContainers:[]
};

//default config object
_chorus.defaultConfig = {
    //logic
    scaleSearchCallback: '',
    scaleSearchMode: 'all',
    //layout
    layoutInstrument:'main',
    layoutInstrumentTitles: false,
    layoutInstrumentTitleElement:'h2',
    layoutInstrumentStringOrder:'desc',
    layoutContainerId: '',
    layoutContainerClass: '',
    scaleSearchButton: true,
    scaleSearchText: 'Search Scales',
    //developer
    chorusDebug:'none'
};

//any user set config options will be saved here with defaults for any unset options
_chorus.config = {};

/**
 * sets config values and creates instrument grid
 * @type {Function|*}
 */
_chorus.init = _chorus.init || function(element, config){
        var events = _chorus.events,
            layout = _chorus.layout;
        events.listeners.init();
        _chorus.config = _chorus.logic.helpers.cloneObject(_chorus.defaultConfig);
        if (config !== undefined) {
            for (var key in config) {
                if (config.hasOwnProperty(key) && _chorus.config.hasOwnProperty(key)) {
                    _chorus.config[key] = config[key];
                }
            }
        }
        if (element !== undefined) {
            if (document.getElementById(element) !== null) {
                layout.init(document.getElementById(element));
                events.dispatchEvent('chorusInitComplete','chorusJS has finished initialization');
            }
            else if (document.getElementsByClassName(element).length > 0) {
                [].forEach.call(document.getElementsByClassName(element), function (ele) {
                    layout.init(ele);
                });
                events.dispatchEvent('chorusInitComplete','chorusJS has finished initialization');
            }
            else {
                events.sendMessage(_chorus.data.dictionary.error_notFound+'no elements found using init value');
                return false;
            }
        }
        else {
            events.sendMessage(_chorus.data.dictionary.error_undefined+'no element defined in init');
            return false;
        }
    };