import Switch from "react-switch";

import "./style.css";

type SwitchFormProps = {
  item: SwitchItemProps;
  state: SwitchItemProps[];
  setState: React.Dispatch<React.SetStateAction<SwitchItemProps[]>>;
};

type SwitchItemProps = {
  title: string;
  state: boolean;
};
export function SwitchForm(props: SwitchFormProps): JSX.Element {
  const { item, state, setState } = props;

  const onChange = (item: SwitchItemProps) => {
    let newArr = state.map((data: SwitchItemProps) => {
      if (data.title === item.title) {
        data.state = !data.state;
      }
      return data;
    });
    setState(newArr);
  };
  return (
    <div className="switch-item flex">
      <label>{item.title}</label>
      <Switch
        onChange={() => onChange(item)}
        onColor="#009DDC"
        className="switch-form"
        checkedIcon={<p>Si</p>}
        uncheckedIcon={<p>No</p>}
        checked={item.state}
      />
    </div>
  );
}
