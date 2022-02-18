import React from "react";
import { IPerson } from "../MainTable";

export const InfoBlock = ({selectPerson}: {selectPerson: IPerson | null}) => {

  return (
    <>
    {selectPerson &&
    <div className="info-person">
      <div>
        Выбран пользователь: <b>{selectPerson.firstName} {selectPerson.lastName}</b>
      </div>

      <div>
        Описание: {selectPerson.description}
      </div>

      <div>
        Адрес проживания: <b>{selectPerson.address.streetAddress}</b>
      </div>

      <div>
        Город: <b>{selectPerson.address.city}</b>
      </div>

      <div>
        Провинция/штат: <b>{selectPerson.address.state}</b>
      </div>

      <div>
        Индекс: <b>{selectPerson.address.zip}</b>
      </div>


    </div>
    }

    </>
)

}