import { FormEvent, useState } from "react";
import { UsersType } from "./App";

type PropType = {
  onUserAdd: (user: UsersType) => void;
};

function UserForm({ onUserAdd }: PropType) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.email);

    onUserAdd({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          id=""
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
