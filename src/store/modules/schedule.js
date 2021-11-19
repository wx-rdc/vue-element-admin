import { addDays } from 'date-fns'
import * as Mutation from './mutation-types'

const getEventIndexById = (state, eventId) => state.events.findIndex(event => event.id.toString() === eventId.toString())

const schedule = {
    state: {
        events: [
            { id: 10, title: 'All day event', date: new Date(), allDay: true },
            { id: 20, title: 'Timed event', start: addDays(new Date(), 1) },
            { id: 30, title: 'Timed event', start: addDays(new Date(), 2) }
        ],
        weekendsVisible: true
    },
    mutations: {
        [Mutation.CREATE_EVENT](state, event) {
            return state.events.push(event)
        },
        [Mutation.UPDATE_EVENT](state, updatedEvent) {
            const index = getEventIndexById(state, updatedEvent.id)

            if (index === -1) {
                return console.warn(`Unable to update event (id ${updatedEvent.id})`)
            }

            return state.events.splice(index, 1, {
                ...state.events[index],
                title: updatedEvent.title,
                start: updatedEvent.start,
                end: updatedEvent.end,
                date: updatedEvent.date
            })
        },
        [Mutation.DELETE_EVENT](state, eventId) {
            const index = getEventIndexById(state, eventId)

            if (index === -1) {
                return console.warn(`Unable to delete event (id ${eventId})`)
            }

            return state.events.splice(index, 1)
        },
        [Mutation.SET_WEEKENDS_ENABLED](state, enabled) {
            state.weekendsVisible = enabled
        }
    },
    actions: {
        createEvent({ commit }, event) {
            return commit(Mutation.CREATE_EVENT, event)
        },
        updateEvent({ commit }, updatedEvent) {
            return commit(Mutation.UPDATE_EVENT, updatedEvent)
        },
        deleteEvent({ commit }, eventId) {
            return commit(Mutation.DELETE_EVENT, eventId)
        },
        setweekendsVisible({ commit }, enabled) {
            return commit(Mutation.SET_WEEKENDS_ENABLED, enabled)
        }
    }
}

export default schedule;