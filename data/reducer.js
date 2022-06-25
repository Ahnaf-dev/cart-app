const reducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.cart.length > 0) {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    return { ...state, cart: [action.payload] };
  }
  if (action.type === "CLEAR") {
    return { ...state, cart: [], total: 0 };
  }
  if (action.type === "REMOVE") {
    const arrOfNums = state.cart.map((item) => {
      if (item.id === action.payload) {
        return 0;
      }
      return +item.price * +item.amount;
    });

    const totalSum = arrOfNums.reduce((prev, current) => {
      return prev + current;
    }, 0);
    return {
      ...state,
      cart: [...state.cart.filter((item) => item.id !== action.payload)],
      total: totalSum,
    };
  }

  if (action.type === "INCREASE") {
    const amountIncrease = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: amountIncrease };
  }

  if (action.type === "DECREASE") {
    const amountDecrease = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 };
      }
      return item;
    });
    return { ...state, cart: amountDecrease };
  }

  if (action.type === "TOTALS") {
    const arrOfNums = state.cart.map((item) => {
      return +item.price * +item.amount;
    });

    const totalSum = arrOfNums.reduce((prev, current) => {
      return prev + current;
    }, 0);

    return { ...state, total: totalSum };
  }
};

export default reducer;
