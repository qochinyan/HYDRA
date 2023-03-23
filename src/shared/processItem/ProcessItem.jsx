import darkElipse from "../../media/bg/darkElipse.png";
import gradElipse from "../../media/bg/gradElipse.png";
import processarrow from "../../media/icons/processarrow.png";

import "./ProcessItem.scss";
function ProcessItem({ item, mode }) {
  return (
    <div
      className="process-item"
      style={{ height: mode === "mobile" && "290px" }}
    >
      <div className="proc-top">
        <img src={darkElipse} alt="" className="process-item-dark" />
        <img src={gradElipse} alt="" className="process-item-grad" />
        <p className="process-No">{item.No}</p>
      </div>
      <div style={{ width: item.widths.block ,gap:mode==="mobile"&&"0px",justifyContent:mode==="mobile"&&"center"}} className="process-bottom">
        {mode === "desktop" && <img src={processarrow} alt="" />}
        <p
          style={{
            width: item.widths.text,
            textAlign: mode === "mobile" && "center",
          }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default ProcessItem;
