const dateReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATE':
            return action.payload;
        case 'JUMP_DATE':
            return action.payload;

        default:
            return state;
    }
};


export default dateReducer;