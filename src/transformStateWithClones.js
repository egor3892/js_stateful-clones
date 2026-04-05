'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let currentState = { ...state };

  actions.forEach((action) => {
    let newState = { ...currentState };

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach((key) => {
        delete newState[key];
      });
    }

    if (action.type === 'clear') {
      newState = {};
    }

    result.push(newState);
    currentState = newState;
  });

  return result;
}

module.exports = transformStateWithClones;
