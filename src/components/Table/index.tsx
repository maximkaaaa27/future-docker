import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "hooks/redux.hook";
import { useDataFill } from "hooks/getdb.hook";
import styles from "./table.module.scss";

import { SortingByDirection } from "utils/SortingByDirection";
import { LoadingDots } from "components/common/LoadingDots";
import { BodyTable } from "./BodyTable";
import { HeadTable } from "./HeadTable";
import { InfoBlock } from "./InfoBlock";

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
  const { size } = useParams();
  const { directionsSort, sortField } = SortingByDirection();
  const { getData } = useDataFill();

  const [unsortDb, setUnsortDb] = useState(database);
  const [selectPerson, setSelectPerson] = useState<IPerson | null>(null);

  useEffect(() => {
    getData({ size });
  }, [size, getData]);

  useEffect(() => {
    setUnsortDb(database);
  }, [database]);

  return (
    <>
      {loading && <LoadingDots />}
      <div className={styles.table}>
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
      </div>
    </>
  );
};
