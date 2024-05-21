export default function DropdownOption({ text, onClick, isActive }) {
  return (
    <button onClick={onClick} isActive={isActive}>
      {text}
    </button>
  );
}
