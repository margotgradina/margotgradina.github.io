import {css} from "@emotion/css";
import {useSBlocks} from "./hooks/useSBlocks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import {SBlockLayer} from "./sBlockTypes";
import {getRandomNumber} from "../../helpers/GetRandomNumber";

const SBlockLayers = () => {
  const {layers, setLayers, currentLayer, setCurrentLayer} = useSBlocks();

  useEnhancedEffect(() => {
    setCurrentLayer(layers[0]);
  }, []);

  const handleAddLayer = () => {
    if (currentLayer) {
      // Calculate the newLayer values based on the currentLayer
      const newLayer: SBlockLayer = {
        id: getRandomNumber(1, 10000000000), // Generate a new id TODO REPLACE WITH UNIQUE
        name: `Layer ${currentLayer.index + 2}`, // Generate a new name
        index: currentLayer.index + 1, // Increment the index
        visible: true, // You can set this to true or false as needed
        deletable: true, // You can set this to true or false as needed
      };

      // Clone the current layers array
      const newLayers = [...layers];

      // Find the index of the currentLayer
      const currentIndex = newLayers.findIndex((layer) => layer.id === currentLayer.id);

      // Insert the newLayer after the currentLayer
      newLayers.splice(currentIndex + 1, 0, newLayer);

      // Update the index property of layers that come after the newLayer
      for (let i = currentIndex + 2; i < newLayers.length; i++) {
        newLayers[i].index++;
      }

      // Update the state with the new layers array
      setLayers(newLayers);
      console.log(newLayers);

      // Set the currentLayer to the newly added layer
      setCurrentLayer(newLayer);
    }
  };

  const handleDeleteLayer = () => {
    if (currentLayer.deletable) {
      // Find the index of the currentLayer in the layers array
      const currentIndex = layers.findIndex((layer) => layer.id === currentLayer.id);

      if (currentIndex !== -1) {
        // Create a new layers array
        const newLayers = layers
          .filter((layer) => layer.id !== currentLayer.id)
          .map((layer) => {
            if (layer.index > currentIndex) {
              // Decrement the index of layers above the currentLayer
              return {...layer, index: layer.index - 1};
            } else {
              return layer;
            }
          });

        // Set the currentLayer to the layer below
        const newCurrentLayer = newLayers[currentIndex - 1] || null;

        // Update the state with the new layers array and currentLayer
        console.log(newLayers);
        setLayers(newLayers);
        setCurrentLayer(newCurrentLayer);
      }
    }
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        border: 1px solid grey;
        border-radius: 15px;
        width: 90%;
        height: 90%;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <div
        key={"layers_block"}
        className={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        `}
      >
        <label
          className={css`
            border-radius: 15px 15px 0px 0px;
            font-weight: 600;
            text-align: center;
            padding: 0.1rem 0px 0.1rem 0px;
            background-color: grey;
            color: #fff;
            font-size: 14px;
          `}
        >
          Layers
        </label>
        <div
          className={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow-y: auto;

            ::-webkit-scrollbar {
              width: 5px;
              height: 5px;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #7cc0a0;
              border-radius: 20px;
              border: 0px solid orange;
            }
          `}
        >
          {
            layers?.map((layer, index) => {
              return (
                <>
                  <label
                    className={css`
                      font-size: 14px;
                      background-color: ${currentLayer == layer ? "#7cc0a0" : ""};
                    `}
                    onClick={() => setCurrentLayer(layer)}
                  >
                    {layer.name}
                  </label>
                </>
              );
            })
            //TODO MAP LAYERS
          }
        </div>
      </div>
      <div
        key={"layers_menu"}
        className={css`
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 25px;
          padding: 0.1rem 0px 0.1rem 0px;
          border-top: 1px dashed grey;
          border-radius: 0px 0px 15px 15px;
          gap: 1vw;
          align-items: center;
          justify-content: center;
        `}
      >
        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddLayer()} />
        <FontAwesomeIcon icon={faMinus} onClick={() => handleDeleteLayer()} />
      </div>
    </div>
  );
};

export default SBlockLayers;
