// import logo from './logo.svg';
import "./App.css";
import PostComponenet from "./js/PostComponenet.js";
import SideButtons from "./js/SideButtons.js";
import "./js/styles/SideButtons.css";

function App() {
  // const Componenets = []
  // const names = ["Abdo", "Hamid", "Mosa", "Ali", "Muhammed"]
  const objectName = [
    { id: 1, name: "Abdo" },
    { id: 2, name: "Hamid" },
    { id: 3, name: "Mosa" },
    { id: 4, name: "Ali" },
    { id: 5, name: "Muhammed" },
    { id: 6, name: "Qasim" },
    { id: 7, name: "Omair" },
    { id: 8, name: "Danish" },
  ];

  // for (let i = 0; i<objectName.lenght; i++) {
  //   console.log(objectName.name[i])
  //   // Componenets.push(<PostComponenet name={i} />)
  // }

  // console.log(objectName)
  const NamesReuseable = objectName.map((name) => (
    <PostComponenet id={name.id} name={name.name} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the first component lesson for Abu Omair</h1>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        {/* This is the bodey start */}
        <div
          className="main-content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* This is the components start */}
          <div className="left-side">
            {NamesReuseable}

            {/* <PostComponenet name="Abdo">
              <div>
                <h1>Hello Abdo</h1>
              </div>
            </PostComponenet> */}
            {/* <PostComponenet name="Hamid">
              <div>
                <h1>Hello Hamid</h1>
              </div>
            </PostComponenet> */}
            {/* <PostComponenet name='Mosa'/> */}
            {/* <PostComponenet name="Ali">
              <h1
                style={{
                  background: "orange",
                  color: "teal",
                  border: "5px",
                  borderColor: "black",
                  borderStyle: "solid",
                }}
              >
                Hello Ali, This is children props example
              </h1>

              <p>Hi Hello World!</p>
            </PostComponenet> */}
          </div>
          {/* == This is the components end == */}

          {/* This is the Side Buttons start */}
          <div
            className="right-side"
            style={{
              border: "5px teal solid",
              padding: "20px",
              margin: "30px",
            }}
          >
            <SideButtons title="This is the side button area!"></SideButtons>

            <SideButtons title="Hamid!" icon="😂😂😊">
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnc3YW9pNjJ6Z2xsamR1cW01bzB2Ym51azF1ejFwa2twa3I0Z25zMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4KibWpBGWchSqCRy/giphy.gif"
              />
            </SideButtons>

            <SideButtons title="Abu Omair!" icon="🤷‍♂️🤷‍♂️🤞✌">
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWozenJrZHI0cW5jeTFveno0OXZrMDRmbDI2ZW5xeXB6N3c2MjRqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0IyeGIOSga8svUVa/giphy.gif"
              />
            </SideButtons>
          </div>

          {/* == This is the Side Buttons end == */}
        </div>
        {/* == This is the bodey end == */}
      </div>
    </div>
  );
}

export default App;
