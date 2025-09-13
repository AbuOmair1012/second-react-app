import "./styles/SideButtons.css";

export default function SideButtons(props) {
  // const name = props.name || "No Name Found";
  // const id = props.id || "No ID Found";
  const children = props.children;
  const title = props.title;
  const icon = props.icon || "No Icon Found";
  const id = props.id || "No ID Found";

  // const repeatNo = 13;
  // const buttons = [];

  // const reuseInformation = () => {
  //   for (let i = 0; i < repeatNo; i++) {
  //     buttons.push(
  //       <button key={i} className="Btn">
  //         button
  //       </button>
  //     );
  //   }

  // if (title == "" || title == null) {
  //   return;
  // } else {
  return (
    <div>
      {title === null || title === "" ? (
        <div></div>
      ) : (
        <button className="Btn">
          <span style={{ fontSize: "20px", color: "white" }}>ID: {id}</span>
          <hr />
          <h1>
            {title} {icon} {children}
          </h1>
        </button>
      )}
    </div>
  );
}
// }
