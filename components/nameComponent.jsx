export default function Namer(props) {
  props;
  return (
    <div style={{color: props.textColor}}>
      <p>{props.nameInfo.first}</p>
      <p>{props.nameInfo.last}</p>
    </div>
  );
}