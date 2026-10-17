import Button from "./Button";

export default function SecondaryButton({ light = false, ...props }) {
  return <Button variant={light ? "secondaryLight" : "secondary"} {...props} />;
}
