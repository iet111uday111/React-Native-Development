/**
 * Action Creator
 * @param libraryId 
 */
export const selectLibrary = (libraryId) => {
    return {
      type: 'select_library',
      payload: libraryId
    };
  }