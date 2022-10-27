import { Button as ReactButton } from "antd";
export default function Button({ title, onClick, disabled = false }) {
  return (
    <ReactButton disabled={disabled} color="primary" onClick={onClick}>
      {title}
    </ReactButton>
  );
}
