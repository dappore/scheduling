import scheduleApi from '../../api/schedule.js';

const state = {
    formLoading: false,
    title: null,
    typeIndex: null,
    costIndex: null
}

const getters = {}

const actions = {
    // getSchedule({ state, commit, rootState }) {
    //     commit('scheduleLoadingUpdated', true);
    //     scheduleApi.getSchedule(response => {
    //         commit('scheduleModelsUpdated', response['data']);
    //         commit('scheduleLoadingUpdated', false);
    //     }, error => {

    //     })
    // }
}

const mutations = {
    updateFormLoading(state, boolean) {
        state.formLoading = boolean;
    },
    updateTitle(state, string) {
        state.title = string;
    },
    updateTypeIndex(state, int) {
        state.typeIndex = int;
    },
    updateCostIndex(state, int) {
        state.costIndex = int;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}