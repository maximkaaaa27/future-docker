import React, { useEffect, useState } from "react";
import { SortingByDirection } from "../utils/SortingByDirection";
import { InfoBlock } from "./table/InfoBlock";
import { BodyTable } from "./table/BodyTable";
import { HeadTable } from "./table/HeadTable";
import { useAppSelector } from "../hooks/redux.hook";
import { LoadingDots } from "./LoadingDots";

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
}

export const MainTable = () => {
  const { database, loading } = useAppSelector((state) => state.database);
  const { directionsSort, sortField } = SortingByDirection();

  const [unsortDb, setUnsortDb] = useState(database);
  const [selectPerson, setSelectPerson] = useState<IPerson | null>(null);

  useEffect(() => {
    setUnsortDb(database);
  }, [database]);

  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          <table>
            <thead>
              <HeadTable
                setDb={setUnsortDb}
                directionsSort={directionsSort}
                sortField={sortField}
              />
            </thead>

            <tbody>
              <BodyTable db={unsortDb} setSelectPerson={setSelectPerson} />
            </tbody>
          </table>
          <div>
            <InfoBlock selectPerson={selectPerson} />
          </div>
        </>
      )}
    </>
  );
};
