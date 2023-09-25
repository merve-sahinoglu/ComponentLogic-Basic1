import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //   console.log(formState.errors);

  const onSubmit = (data: FieldValues) => console.table(data);

  //#region old(useState example)
  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: 0,
  //   });
  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.table(person);
  //   };
  //#endregion

  //#region old(useRef example)
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current) {
  //       person.name = nameRef.current.value;
  //     }
  //     if (ageRef.current) {
  //       person.age = parseInt(ageRef.current.value);
  //     }

  //     console.table(person);
  //   };
  //#endregion

  return (
    //#region  old(useRef example)
    // <form onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-label">
    //       Name
    //     </label>
    //     <input id="name" ref={nameRef} type="text" className="form-control" />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="age" className="form-label">
    //       Age
    //     </label>
    //     <input id="age" ref={ageRef} type="number" className="form-control" />
    //   </div>
    //   <button className="btn btn-primary" type="submit">
    //     Submit
    //   </button>
    // </form>
    //#endregion

    //#region old(useState example)
    // <form onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="name" className="form-label">
    //       Name
    //     </label>
    //     <input
    //       onChange={(event) =>
    //         setPerson({ ...person, name: event.target.value })
    //       }
    //       value={person.name}
    //       id="name"
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="age" className="form-label">
    //       Age
    //     </label>
    //     <input
    //       onChange={(event) =>
    //         setPerson({ ...person, age: parseInt(event.target.value) })
    //       }
    //       value={person.age}
    //       id="age"
    //       type="number"
    //       className="form-control"
    //     />
    //   </div>
    //   <button className="btn btn-primary" type="submit">
    //     Submit
    //   </button>
    // </form>
    //#endregion

    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {errors.name?.type === "required" && (
        <p className="text-danger"> The name is required </p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="text-danger"> The name is 3 cracter </p>
      )}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form1;
