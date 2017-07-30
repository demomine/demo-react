/**
 * Created by immerer on 2017/7/30.
 */
import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {DECREMENT, INCREMENT} from "../ActionTypes";
const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
};

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues: function () {
        return counterValues;
    },
    emmitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);

    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emmitChange();
    } else if (action.type === DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emmitChange();
    }
});



export default CounterStore;