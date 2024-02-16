import logo from "../assets/logo.png";
import logoLight from "../assets/logo_light.png";

export default function Logo({ light }) {
  return <img src={light ? logoLight : logo} alt='Lws' />;
}
