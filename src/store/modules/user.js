const state={
    isfoot:true
}
// const getters={

// }
const actions={
    changfoot({commit},data){
        commit('CHANGE_FOOT',data);
    }
}
const mutations={
    CHANGE_FOOT(state,data){
        state.isfoot=data;
    }
}
export default{
    state,
    // getters,
    actions,
    mutations
}