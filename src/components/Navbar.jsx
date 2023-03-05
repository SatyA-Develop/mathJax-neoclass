import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Navbar = ({ nextQuestion, previousQ, count, valLen }) => {
  return (
    <div className="header">
   <div className="h-nav">
   <button
        className="header_btn"
        disabled={count === 0 ? true : false}
        onClick={previousQ}
      >
        <GrFormPrevious className="n-icon"  />
        <span>Prev</span>{" "}
      </button>
      <div className="q_header">Question</div>
      <button
        className="header_btn"
        disabled={count === valLen ? true : false}
        onClick={nextQuestion}
      >
        {" "}
        <span>Next</span>
        <GrFormNext className="n-icon" />
      </button>
   </div>
   <div className="h-ans">Click on question section to get answer</div>
    </div>
  );
};

export default Navbar;
