import React from "react";
import Check from "../../../assets/icons/check.png";
import { sidebarData } from "../../../mock/AddProducts/sidebar";
import { crudData } from "../../../mock/AddProducts/crudBody";
import {
  AddNew,
  Line,
  NavBody,
  PreTitle,
  SidebarFlex,
  Title,
  Wrapper,
  TitleTH,
  TitleTHGray,
  InputType,
} from "./style";
import Logo from "../../../assets/icons/logout2.svg";

const AddProducts = () => {
  const [data, setData] = React.useState(crudData);
  const [change, setChange] = React.useState(null);
  // const [edit, setEdit] = React.useState("");
  const [title, setTitle] = React.useState("");

  // /////////////////////////////////////////////////// Delete
  const getDelete = (ids) => {
    const newData = data.filter((value) => value.id !== ids);
    setData(newData);
  };

  // ////////////////////////////////////////////////// Edit
  const getChange = (value) => {
    setChange(value.id);
    setTitle(value);
  };
  // console.log(change);

  const saveEditing = (value) => {
    const newDataEdit = data.map((value) =>
      change === value.id
        ? {
            ...value,
            title: title,
            preTitle: title,
            status: title,
            dataPublished: title,
          }
        : console.log("yemadi")
    );
    setChange(value.id);
    setData(newDataEdit);
    setChange(null);
  };

  return (
    <Wrapper>
      <Wrapper.Sidebar>
        <Title>My Account</Title>
        {sidebarData.map((value) => {
          return (
            <SidebarFlex>
              <img className="img" width={20} src={value.icon} alt="" />
              <PreTitle className="pre-title">{value.title}</PreTitle>
            </SidebarFlex>
          );
        })}
        <Line />
        <SidebarFlex>
          <img src={Logo} width={20} alt="" />
          <PreTitle bold>Logout</PreTitle>
        </SidebarFlex>
      </Wrapper.Sidebar>
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
            {/* <th></th> */}
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
                      onChange={(e) => setTitle(e.target.value)}
                      value={title.title}
                    />
                  ) : (
                    <TitleTH margin>{value.title}</TitleTH>
                  )}
                  {change === value.id ? (
                    <InputType
                      onChange={(e) => setTitle(e.target.value)}
                      value={title.preTitle}
                      type="text"
                    />
                  ) : (
                    <TitleTHGray>{value.preTitle}</TitleTHGray>
                  )}
                </td>
                <td>
                  {change === value.id ? (
                    <InputType
                      onChange={(e) => setTitle(e.target.value)}
                      value={title.dataPublished}
                      type="text"
                    />
                  ) : (
                    <TitleTHGray>{value.dataPublished}</TitleTHGray>
                  )}
                </td>
                <td>
                  {change === value.id ? (
                    <InputType
                      onChange={(e) => setTitle(e.target.value)}
                      value={title.status}
                      type="text"
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
