import React from "react";

import { Response as ResponseType } from "../types";

type State = {
  response: Map<string, ResponseType>;
};

type Action =
  | { type: "set"; data: ResponseType }
  | { type: "edit"; data: ResponseType };

type Dispatch = (action: Action) => void;

type ResponseProviderProps = { children: React.ReactNode };

const ResponseContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function responseReducer(state: State, action: Action) {
  switch (action.type) {
    case "set": {
      const { reviewId } = action.data;
      const response = state.response;
      response.set(reviewId, action.data);
      return {
        response: new Map(response),
      };
    }
    case "edit": {
      const { reviewId } = action.data;
      const response = state.response;
      response.set(reviewId, action.data);
      return {
        response: new Map(response),
      };
    }
    // default: {
    //   throw new Error(`Unhandled action type: ${action.type}`);
    // }
  }
}

function ResponseProvider({ children }: ResponseProviderProps) {
  // const [state, dispatch] = React.useReducer(responseReducer, { response: {} });
  const initialValue = new Map<string, ResponseType>();
  const [state, dispatch] = React.useReducer(responseReducer, {
    response: initialValue,
  });

  const value = { state, dispatch };

  return (
    <ResponseContext.Provider value={value}>
      {children}
    </ResponseContext.Provider>
  );
}

function useResponse() {
  const context = React.useContext(ResponseContext);
  if (context === undefined) {
    throw new Error("useResponse must be used within a ResponseProvider");
  }

  return context;
}

export { ResponseProvider, useResponse };
