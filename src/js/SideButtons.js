import "./styles/SideButtons.css";

export default function SideButtons(props) {
  // const name = props.name || "No Name Found";
  // const id = props.id || "No ID Found";
  const children = props.children;
  const title = props.title || "No Title Found";
  const icon = props.icon || "No Icon Found";

  const repeatNo = 13;
  const buttons = [];

  const reuseInformation = () => {
    for (let i = 0; i < repeatNo; i++) {
      buttons.push(
        <button key={i} className="Btn">
          button
        </button>
      );
    }
    return (
      <div>
        {/* {buttons} */}

        <button className="Btn">
          <h1>
            {title} {icon} {children}
          </h1>
        </button>
      </div>
    );
  };
}
