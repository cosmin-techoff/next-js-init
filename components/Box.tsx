import { CSSProperties, FunctionComponent } from "react";

interface IBoxProps {
  id: string;
  active: boolean;
  onClick: (id: string) => void;
  name: string;
  img: string;
}
const Box: FunctionComponent<IBoxProps> = ({
  id,
  active,
  onClick,
  name,
  img
}) => {
  const style: CSSProperties = {
    width: 100,
    height: 100,
    background: active ? "#efefef" : "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  };

  console.log("rendered");

  return (
    <div onClick={() => onClick(id)} style={style}>
      {name}
      <img src={img} alt={img} />
    </div>
  );
};

export default Box;
