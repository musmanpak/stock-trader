import stocks from '../../data/stocks';

const state = {
    stock: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stock = stocks;
    },
    'RND_STOCKS' (state){
        state.stock.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};


const actions = {
    // Buy stock actions in defined in portfolio.js module
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};


const getters = {
    stocks: state => {
        return state.stock;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}