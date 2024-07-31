export default function Variables(key, item, setIndexVariables, indexVariables) {
  setIndexVariables((prevIndexVariables) => {
    const newIndexVariables = [...prevIndexVariables];

    newIndexVariables[key] = {
      ...newIndexVariables[key],
      globalTag: item,
      max_length: item.length,
      active: indexVariables[key].active,
      booleanModal: item.length > 1,
    };

    return newIndexVariables;
  });

  return item[indexVariables[key].active];
}
