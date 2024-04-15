import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number } }) {
  return (
    <div className={css.contactCard}>
      <p>
        <HiUser />
        {name}
      </p>
      <a href="tel:">
        <HiPhone />
        {number}
      </a>
      <button type="button">Delete</button>
    </div>
  );
}
