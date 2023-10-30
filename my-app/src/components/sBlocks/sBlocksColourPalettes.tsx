import {css} from "@emotion/css";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Colour} from "./hooks/useSBlocks";

interface Props {
  handleClick: Function;
  handleClose: Function;
}

export const SBlocksColourPalettes = ({handleClick, handleClose}: Props) => {
  const paletteArray: {name: string; colours: Colour[]}[] = [
    {
      name: "Neutrals",
      colours: [
        {
          hsl: {
            h: 21.038961038961038,
            s: 0.4254143646408838,
            l: 0.6450980392156862,
            a: 1,
          },
          hex: "#cb997e",
          rgb: {
            r: 203,
            g: 153,
            b: 126,
            a: 1,
          },
          hsv: {
            h: 21.038961038961038,
            s: 0.37931034482758613,
            v: 0.796078431372549,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
        {
          hsl: {
            h: 24.23076923076924,
            s: 0.43333333333333346,
            l: 0.7647058823529411,
            a: 1,
          },
          hex: "#ddbea9",
          rgb: {
            r: 221,
            g: 190,
            b: 169,
            a: 1,
          },
          hsv: {
            h: 24.23076923076924,
            s: 0.23529411764705888,
            v: 0.8666666666666667,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
        {
          hsl: {
            h: 26.34146341463414,
            s: 1,
            l: 0.919607843137255,
            a: 1,
          },
          hex: "#ffe8d6",
          rgb: {
            r: 255,
            g: 232,
            b: 214,
            a: 1,
          },
          hsv: {
            h: 26.34146341463414,
            s: 0.16078431372549018,
            v: 1,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
        {
          hsl: {
            h: 60,
            s: 0.11656441717791408,
            l: 0.6803921568627451,
            a: 1,
          },
          hex: "#b7b7a4",
          rgb: {
            r: 183,
            g: 183,
            b: 164,
            a: 1,
          },
          hsv: {
            h: 60,
            s: 0.10382513661202179,
            v: 0.7176470588235294,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
        {
          hsl: {
            h: 60,
            s: 0.11764705882352941,
            l: 0.6000000000000001,
            a: 1,
          },
          hex: "#a5a58d",
          rgb: {
            r: 165,
            g: 165,
            b: 141,
            a: 1,
          },
          hsv: {
            h: 60,
            s: 0.14545454545454545,
            v: 0.6470588235294118,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
        {
          hsl: {
            h: 74.99999999999999,
            s: 0.09803921568627451,
            l: 0.4,
            a: 1,
          },
          hex: "#6b705c",
          rgb: {
            r: 107,
            g: 112,
            b: 92,
            a: 1,
          },
          hsv: {
            h: 74.99999999999999,
            s: 0.17857142857142858,
            v: 0.4392156862745098,
            a: 1,
          },
          oldHue: 21.038961038961038,
          source: "hex",
        },
      ],
    },
    {name: "Autumn", colours: []},
    {name: "Yellows", colours: []},
    {name: "Greens", colours: []},
    {name: "Rainbow", colours: []},
    {name: "Neutrals", colours: []},
  ];

  return (
    <>
      <div
        className={css`
          position: absolute;
          z-index: 1000;
          height: max-content;
          width: max-content;
          padding: 10px;

          background-color: white;
          border: 1px solid grey;
          border-radius: 15px;
        `}
      >
        <FontAwesomeIcon icon={faCircleXmark} color={"#7cc0a0"} onClick={() => handleClose()} />
        <div
          className={css`
            height: 200px;
            width: 200px;
            overflow-y: auto;
            padding: 10px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            ::-webkit-scrollbar {
              width: 5px; /* width of the entire scrollbar */
            }

            ::-webkit-scrollbar-thumb {
              background-color: #7cc0a0; /*color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 0px solid orange; /* creates padding around scroll thumb */
            }
          `}
        >
          {paletteArray?.map((palette) => {
            return (
              <div
                onClick={() => {
                  handleClick(palette.colours);
                }}
                className={css`
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                  border-radius: 15px;
                  padding: 0.5rem 0px 0.5rem 0.5rem;
                  border: 1px dashed grey;
                `}
              >
                <label>{palette.name}</label>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    align-items: center;
                    justify-content: space-evenly;
                  `}
                >
                  {palette.colours?.map((colour, index) => {
                    return (
                      <div
                        className={css`
                          width: 1vw;
                          height: 1vw;
                          max-width: 20px;
                          max-height: 20px;
                          border: 0.5px solid grey;
                          border-radius: 5px;
                          background-color: ${colour?.hex};
                        `}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SBlocksColourPalettes;
