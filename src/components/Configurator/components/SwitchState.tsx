export const SwitchState: React.FC<{ setState: (val: string) => void }> = ({
  setState,
}) => {
  return (
    <select
      onChange={(e) => setState(e.target.value)}
      style={{ width: "100%", marginBottom: 16 }}
    >
      <option value="default">Default state</option>
      <option value="hover">Hover</option>
    </select>
  );
};
