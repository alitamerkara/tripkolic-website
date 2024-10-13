import Layout from "@/components/Layout";
import React, { useState } from "react";

const Personal: React.FC = () => {
  const [name, setName] = useState<string>("John");
  const [surname, setSurname] = useState<string>("Doe");
  const [country, setCountry] = useState<string>("America");
  const [birthday, setBirthday] = useState<string>("12 June 1989");
  const [passport, setPassport] = useState<string>("u123456789");
  const [phone, setPhone] = useState<string>("+1 09342342233");
  const [passangerName, setPassangerName] = useState<string>("Jane");
  const [passangerSurname, setPassangerSurname] = useState<string>("Doe");
  const [passangerBirthday, setPassangerBirthday] =
    useState<string>("12 June 1989");
  const [passangerPassport, setPassangerPassport] =
    useState<string>("u123456789");
  const [passangerPhone, setPassangerPhone] =
    useState<string>("+1 09342342233");
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <div className="mx-[70px] gap-[48px] h-[596px] w-[1140px] flex">
          {/* main field */}
          {isEdit ? (
            <div className="w-[763px] h-[532px] py-[32px] flex flex-col gap-11 justify-between">
              {/* information field */}
              <div className="w-[763px] h-[212px] gap-3">
                <p className="font-medium text-xl">Informations</p>
                <div className="w-[763px] h-[168px] flex flex-col gap-3">
                  <div className="w-[763px] h-[24px] flex justify-between">
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name"
                    />
                    <input
                      value={surname}
                      onChange={(e) => {
                        setSurname(e.target.value);
                      }}
                      className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="surname"
                    />
                  </div>
                  <input
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="country"
                  />
                  <input
                    value={birthday}
                    onChange={(e) => {
                      setBirthday(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="birthday"
                  />
                  <input
                    value={passport}
                    onChange={(e) => {
                      setPassport(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="passport"
                  />
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="phone"
                  />
                </div>
              </div>
              {/* passanger field */}
              <div className="w-[763px] h-[168px] flex flex-col gap-3">
                <p className="font-medium text-xl">Passangers</p>
                {/* name-surname */}
                <div className="w-[763px] h-[24px] flex justify-between">
                  <input
                    value={passangerName}
                    onChange={(e) => {
                      setPassangerName(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="passanger name"
                  />
                  <input
                    value={passangerSurname}
                    onChange={(e) => {
                      setPassangerSurname(e.target.value);
                    }}
                    className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="passanger surname"
                  />
                </div>
                <input
                  value={passangerBirthday}
                  onChange={(e) => {
                    setPassangerBirthday(e.target.value);
                  }}
                  className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="passanger birthday"
                />
                <input
                  value={passangerPassport}
                  onChange={(e) => {
                    setPassangerPassport(e.target.value);
                  }}
                  className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="passanger passport"
                />
                <input
                  value={passangerPhone}
                  onChange={(e) => {
                    setPassangerPhone(e.target.value);
                  }}
                  className="w-[200px] h-8 px-3 py-2 border bg-amber-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="passanger phone"
                />
              </div>
            </div>
          ) : (
            <div className="w-[763px] h-[532px] py-[32px] flex flex-col gap-11 justify-between">
              {/* information field */}
              <div className="w-[763px] h-[212px] gap-3">
                <p className="font-medium text-xl">Informations</p>
                <div className="w-[763px] h-[168px] flex flex-col gap-3">
                  <div className="md:w-[763px] h-[24px] flex w-[400px] gap-6 flex-row md:justify-between">
                    <p className="font-semibold text-medium flex">
                      Name: <p className="pl-2 font-normal">{name}</p>
                    </p>
                    <p className="font-semibold text-medium flex">
                      Surname: <p className="pl-2 font-normal">{surname}</p>
                    </p>
                  </div>
                  <p className="font-semibold text-medium flex">
                    Country: <p className="pl-2 font-normal">{country}</p>
                  </p>
                  <p className="font-semibold text-medium flex">
                    Birthday: <p className="pl-2 font-normal">{birthday}</p>
                  </p>
                  <p className="font-semibold text-medium flex">
                    Passaport Number:{" "}
                    <p className="pl-2 font-normal">{passport}</p>
                  </p>
                  <p className="font-semibold text-medium flex">
                    Phone number: <p className="pl-2 font-normal">{phone}</p>
                  </p>
                </div>
              </div>
              {/* passanger field */}
              <div className="w-[763px] h-[168px] flex flex-col gap-3">
                <p className="font-medium text-xl">Passangers</p>
                {/* name-surname */}
                <div className="md:w-[763px] h-[24px] flex w-[400px] gap-6 flex-row md:justify-between">
                  <p className="font-semibold text-medium flex">
                    Name: <p className="pl-2 font-normal">{passangerName}</p>
                  </p>
                  <p className="font-semibold text-medium flex">
                    Surname:{" "}
                    <p className="pl-2 font-normal">{passangerSurname}</p>
                  </p>
                </div>
                <p className="font-semibold text-medium flex">
                  Birthday:{" "}
                  <p className="pl-2 font-normal">{passangerBirthday}</p>
                </p>
                <p className="font-semibold text-medium flex">
                  Passaport Number:{" "}
                  <p className="pl-2 font-normal">{passangerPassport}</p>
                </p>
                <p className="font-semibold text-medium flex">
                  Phone number:{" "}
                  <p className="pl-2 font-normal">{passangerPhone}</p>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full justify-center md:justify-start">
          <button
            className="bg-amber-300 hover:bg-amber-400 w-[200px] text-white font-bold py-2 px-4 rounded"
            onClick={handleEdit}
          >
            {isEdit ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Personal;
