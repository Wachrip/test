const initialState = {
  technics: [
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "TV",
      company: "Samsung",
      model: "G2105",
      price: "1999.99",
      date: "2022-01-11",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Refrigerator",
      company: "LG",
      model: "Superduper",
      price: "999.99",
      date: "2022-01-10",
      description: "Good stuff",
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      category: "Cutter",
      company: "Samsung",
      model: "Insaneone",
      price: "99.99",
      date: "2022-01-12",
      description: "Good stuff",
    },
  ],
};

const ADD_TECH = "ADD_TECH";
const EDIT_TECH = "EDIT_TECH";
const DELETE_TECH = "DELETE_TECH";
const SORT_BY_DATE = "SORT_BY_DATE";

let test = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH: {
      return {
        ...state,
        technics: [...state.technics, action.tech],
      };
    }
    case EDIT_TECH: {
      return {
        ...state,
        technics: state.technics.map((it) => {
          if (it.id === action.payload.id) {
            return {
              ...it,
              ...action.payload,
            };
          }
          return it;
        }),
      };
    }
    case DELETE_TECH: {
      console.log(action.id);
      return {
        ...state,
        technics: state.technics.filter((it) => it.id !== action.id),
      };
    }
    case SORT_BY_DATE: {
      console.log(action.sortType);

      return {
        ...state,
        technics: Array.from(
          state.technics.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
        ),
      };
    }

    default:
      return {
        ...state,
        technics: Array.from(
          state.technics.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
        ),
      };
  }
};

export function addTech(tech) {
  return { type: ADD_TECH, tech };
}

export function editTech(payload) {
  return { type: EDIT_TECH, payload };
}

export function deleteTech(id) {
  return { type: DELETE_TECH, id };
}

export function sortByDate(sortType) {
  return { type: SORT_BY_DATE, sortType };
}

export default test;
