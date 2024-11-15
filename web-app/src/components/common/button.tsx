import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  image?: string;
  buttonIcon?: IconProp;
  roundness?: string;
  width?: string;
  height?: string;
  onClickFunction: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  textColor,
  backgroundColor,
  image,
  buttonIcon,
  roundness,
  width,
  height,
  onClickFunction,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className="hover:scale-95 duration-300 p-4 flex items-center justify-center cursor-pointer"
      style={{
        color: textColor || "white",
        backgroundColor: backgroundColor || "black",
        borderRadius: roundness || "5px",
        width: width || "2rem",
        height: height || "2rem",
      }}
    >
      {image && <img src={image} alt="button-icon" className="w-16" />}
      {buttonIcon && <FontAwesomeIcon icon={buttonIcon} />}
      {title}
    </button>
  );
};

export default CustomButton;
