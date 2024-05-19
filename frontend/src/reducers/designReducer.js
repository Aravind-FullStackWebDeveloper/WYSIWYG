const initialState = {
  designs: [],
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DESIGN':
      return {
        ...state,
        designs: [...state.designs, action.payload.design],
      };
    case 'DELETE_DESIGN':
      return {
        ...state,
        designs: state.designs.filter((design) => design.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default designReducer;
