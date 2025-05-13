import { Confirm as ConfirmSU } from "semantic-ui-react";

export function Confirm(props) {
  // ...rest contiene todos los props que no han sido extraidos
  const { ...rest } = props;
  return <ConfirmSU className="confirm" sizi="mini" {...rest} />;
}
