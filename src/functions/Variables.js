import { tag_array } from "../data/tag_array";

function Variables(key, indexVariables, setIndexVariables, tag) {
  const matchedObject = tag_array.find((obj) => obj.hasOwnProperty(tag));

  if (matchedObject && matchedObject[tag] && matchedObject[tag].length > 0) {
    const valuesArray = matchedObject[tag];
    const indexToUpdate = indexVariables.findIndex((v) => v.key === key);

    setIndexVariables((prevIndexVariables) => {
      const updatedVariables = [...prevIndexVariables];

      if (indexToUpdate !== -1) {
        updatedVariables[indexToUpdate] = {
          ...updatedVariables[indexToUpdate],
          globalTag: matchedObject[tag],
          active: indexVariables[key - 1].active,
          max_length: valuesArray.length,
          booleanModal: true,
        };
      } else {
        updatedVariables.push({
          globalTag: [],
          active: 0,
          max_length: 0,
          booleanModal: false,
        });
      }

      return updatedVariables;
    });

    return valuesArray[indexVariables[key - 1]?.active];
  }
}

export default Variables;
