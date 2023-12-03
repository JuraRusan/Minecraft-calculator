import {tag_array} from "../data/tag_array";

function Variables(key, indexVariables, setIndexVariables, tag) {
  const matchedObject = tag_array.find((obj) => obj.hasOwnProperty(tag));

  if (matchedObject) {
    const valuesArray = matchedObject[tag];
    if (valuesArray && valuesArray.length > 0) {
      setIndexVariables((prevIndexVariables) => {
        const indexToUpdate = prevIndexVariables.findIndex((v) => v.key === key);

        if (indexToUpdate !== -1) {
          const updatedVariables = [...prevIndexVariables];
          updatedVariables[indexToUpdate] = {
            key: key,
            globalTag: matchedObject[tag],
            active: indexVariables[key - 1].active,
            max_length: valuesArray.length,
            booleanModal: true,
          };
          return updatedVariables;
        } else {
          const updatedVariables = [...prevIndexVariables];
          updatedVariables[indexToUpdate] = {
            key: key,
            globalTag: [],
            active: 0,
            max_length: 0,
            booleanModal: false,
          };
          return updatedVariables;
        }
      });

      return valuesArray[indexVariables[key - 1].active];
    }
  }
}

export default Variables;
