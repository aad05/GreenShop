import React from "react";
import Check from "../../../assets/icons/check.png";
import { crudData } from "../../../mock/AddProducts/crudBody";
import {
  AddNew,
  NavBody,
  Title,
  Wrapper,
  TitleTH,
  TitleTHGray,
  InputType,
} from "./style";

const AddProducts = () => {
  const [data, setData] = React.useState(crudData);
  const [dataInput, setDataInput] = React.useState({
    title: "",
    preTitle: "",
    dataPublished: "",
    status: "",
    views: "",
  });
  const [change, setChange] = React.useState(null);
  // const [edit, setEdit] = React.useState("");
  // const [title, setTitle] = React.useState("");

  // /////////////////////////////////////////////////// Delete
  const getDelete = (ids) => {
    const newData = data.filter((value) => value.id !== ids);
    setData(newData);
  };

  // ////////////////////////////////////////////////// Edit
  const getChange = (value) => {
    setChange(value.id);
    setDataInput({
      ...dataInput,
      title: value.title,
      preTitle: value.preTitle,
      dataPublished: value.dataPublished,
      status: value.status,
    });
  };
  const inputChange = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };
  const saveEditing = () => {
    var newData = data.map((value) =>
      change === value.id
        ? {
            ...value,
            title: dataInput.title,
            preTitle: dataInput.preTitle,
            dataPublished: dataInput.dataPublished,
            status: dataInput.status,
          }
        : value
    );
    setChange(null);
    setData(newData);
  };

  console.log(dataInput.title);
  return (
    <Wrapper>
      <Wrapper.Body>
        <NavBody>
          <Title italic>My Products</Title>
          <AddNew>Add New</AddNew>
        </NavBody>
        <table style={{ width: "100%" }}>
          <tr className="not">
            <td colSpan={2}>
              {" "}
              <TitleTH>Products</TitleTH>
            </td>
            <td>
              {" "}
              <TitleTH>Data</TitleTH>
            </td>
            <td>
              {" "}
              <TitleTH>Status</TitleTH>{" "}
            </td>
            <td>
              {" "}
              <TitleTH colSpan={2}>Views</TitleTH>
            </td>
          </tr>
          {data.map((value) => {
            return (
              <tr style={{ width: "300px" }}>
                <td style={{ width: "85px" }}>
                  <img src={value.icon} width={70} alt="" />
                </td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "80px",
                  }}
                >
                  {change === value.id ? (
                    <InputType
                      type="text"
                      onChange={inputChange}
                      value={dataInput.title}
                      name="title"
                    />
                  ) : (
                    <TitleTH margin>{value.title}</TitleTH>
                  )}
                  {change === value.id ? (
                    <InputType
                      onChange={inputChange}
                      value={dataInput.preTitle}
                      type="text"
                      name="preTitle"
                    />
                  ) : (
                    <TitleTHGray>{value.preTitle}</TitleTHGray>
                  )}
                </td>
                <td>
                  {change === value.id ? (
                    <InputType
                      onChange={inputChange}
                      value={dataInput.dataPublished}
                      type="text"
                      name="dataPublished"
                    />
                  ) : (
                    <TitleTHGray>{value.dataPublished}</TitleTHGray>
                  )}
                </td>
                <td>
                  {change === value.id ? (
                    <InputType
                      onChange={inputChange}
                      value={dataInput.status}
                      type="text"
                      name="status"
                    />
                  ) : (
                    <TitleTHGray>{value.status}</TitleTHGray>
                  )}
                </td>
                <td>
                  <TitleTHGray>{value.wiev}</TitleTHGray>
                </td>
                <td>
                  {change === value.id ? (
                    <img
                      onClick={() => saveEditing(value)}
                      width={19}
                      src={Check}
                      alt=""
                    />
                  ) : (
                    <img
                      onClick={() => getChange(value)}
                      src={value.edit}
                      width={18}
                      alt=""
                    />
                  )}
                  <img
                    onClick={() => getDelete(value.id)}
                    style={{ marginLeft: "25px" }}
                    src={value.delete}
                    width={18}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </Wrapper.Body>
    </Wrapper>
  );
};

export default AddProducts;
