import './styles/PostCompponent.css';


export default function PostCompponent(props) {
    const name = props.name || "No Name Found";
    const id = props.id || "No ID Found";
    const children = props.children;
    return (
        <div className={'compnent-style'}>
            {/* <h1>{id}</h1> */}
            <h1> {name}</h1>
            <hr /> {/* This adds a horizontal line */}
            {/* <p>This is the post "name": {name}</p> */}
            {children}
             
        </div>
    );
};