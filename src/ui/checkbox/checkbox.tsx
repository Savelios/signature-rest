import "./checkbox.css";
export const CheckBox: React.FC = () => {
  return (
    <div>
      <input type="checkbox" id="toggle-btn" className="checkbox" />
      <label htmlFor="toggle-btn" className="toggle-btn"></label>
    </div>
  );
};
