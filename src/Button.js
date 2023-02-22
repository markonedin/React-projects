function clickMe() {}
function Button() {
  return (
    <a href="https://www.facebook.com/marko.nedin.5/">
      <button className="button" onClick={clickMe}>
        Click Here!
      </button>
    </a>
  );
}

export default Button;
