export const getPosition = (queue, useID) => {
  let position;
  if (
    queue === undefined ||
    queue === null ||
    useID === undefined ||
    useID === null
  ) {
    position = 0;
  } else {
    position = queue.findIndex(student => student._id === useID);
  }
  return position + 1;
};
