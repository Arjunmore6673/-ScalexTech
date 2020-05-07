export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DELETE_SINGLE = 'DELETE_SINGLE';

export const addData = (data) => ({
    type: DATA_AVAILABLE,
    data: data
});


export const deleteSingle = (id) => ({
    type: DELETE_SINGLE,
    data: id
});